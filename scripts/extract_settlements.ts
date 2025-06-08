import * as fs from "fs";

interface TableColumn {
  content: string;
  align: "left" | "center" | "right";
}

interface TableData {
  id?: string;
  type: "table";
  columns: TableColumn[];
  data: string[][];
}

interface HeadingData {
  id?: string;
  type: "heading";
  heading: string;
  level: number;
  content: any[];
}

interface ItemData {
  id?: string;
  type: "item";
  heading: string;
  subheading: string;
  content: any[];
}

interface ParagraphData {
  id?: string;
  type: "paragraph";
  content: string;
}

interface ListData {
  id?: string;
  type: "list";
  content: string[];
}

interface HorizontalRule {
  type: "hr";
}

interface TraitsData {
  type: "traits";
  content: string[];
}

type ParsedElement =
  | HeadingData
  | ItemData
  | TableData
  | ParagraphData
  | ListData
  | HorizontalRule
  | TraitsData;

interface Structure {
  name: string;
  level: number;
  traits: string[];
  lots: number;
  cost: Cost;
  monthlyRPCost: number;
  months: number;
  settlementSize: string;
  xp: number;
  population: number;
  construction: Construction[];
  item: ItemData;
}

interface Cost {
  lumber: number;
  stone: number;
  ore: number;
  luxuries: number;
  rp: number;
}

interface Construction {
  skill: string;
  training: string;
}

function parseStructures(data: ParsedElement[]) {
  const mainData = (data[0] as HeadingData).content;
  const structureData = mainData
    .find(
      (item: ParsedElement) =>
        item.type === "heading" && item.heading === "Settlement Structures",
    )
    .content.filter((item: ParsedElement) => item.type === "item");
  const structures: Structure[] = structureData.map((item: ItemData) => {
    const name = item.heading;
    const level = parseInt(item.subheading.split(" ")[1]);
    const traits = item.content
      .filter((content: ParsedElement) => content.type === "traits")
      .flatMap((content: TraitsData) => content.content);
    const lotCostLine = item.content.find(
      (content: ParsedElement) =>
        content.type === "paragraph" && content.content.startsWith("**Lots**"),
    ).content;
    const rawLot = lotCostLine.split(";")[0].split(" ")[1].trim();
    const lots = rawLot === "—" ? 0 : parseInt(rawLot);
    const costData = lotCostLine
      .split(";")[1]
      .trim()
      .split(" ")
      .slice(1)
      .join(" ");
    const cost: Cost = {
      lumber: 0,
      stone: 0,
      ore: 0,
      luxuries: 0,
      rp: 0,
    };
    costData.split(",").forEach((rawCost: string) => {
      const [rawNumber, rawType] = rawCost.trim().split(" ");
      if (rawNumber === "—") {
        return;
      }
      const number = parseInt(rawNumber);
      const type = rawType.toLowerCase();
      if (type === "lumber") cost.lumber = number;
      else if (type === "stone") cost.stone = number;
      else if (type === "ore") cost.ore = number;
      else if (type === "luxuries" || type === "luxury") cost.luxuries = number;
      else if (type === "<<rp|kingdom-rules#resourcepoints>>") cost.rp = number;
      else {
        throw new Error(`Invalid cost type: ${rawType}`);
      }
    });
    const constructionLine = item.content
      .find(
        (content: ParsedElement) =>
          content.type === "paragraph" &&
          content.content.startsWith("**Construction**"),
      )
      .content.split(" ")
      .slice(1)
      .join(" ");
    const construction =
      constructionLine === "—"
        ? []
        : constructionLine.split(",").map((rawConstruction: string) => {
          const pattern = /(or )?([A-z]+) (\([a-z]+\))?.*/;
          const match = rawConstruction.match(pattern);
          if (!match) {
            throw new Error(
              `Invalid construction format: ${rawConstruction}`,
            );
          }
          const skill = match[2];
          const training = match[3]
            ? match[3].replace(/[()]/g, "")
            : "untrained";
          return { skill, training };
        });

    const monthlyRPCostLine = item.content
      .find(
        (content: ParsedElement) =>
          content.type === "paragraph" &&
          content.content.startsWith("**Monthly Cost**"),
      )
      .content.split(" ");
    const monthlyRPCost =
      monthlyRPCostLine[2] === "-" ? 0 : parseInt(monthlyRPCostLine[2]);
    const months =
      monthlyRPCostLine[5] === "-" ? 0 : parseInt(monthlyRPCostLine[5]);

    const settlementSizeLine = item.content
      .find(
        (content: ParsedElement) =>
          content.type === "paragraph" && content.content.startsWith("**XP**"),
      )
      .content.split(";");
    const settlementSize = settlementSizeLine[2]
      .trim()
      .split(" ")[1]
      .toLowerCase();
    const xp = parseInt(settlementSizeLine[0].trim().split(" ")[1]);
    const population = parseInt(settlementSizeLine[1].trim().split(" ")[1]);

    return {
      name,
      level,
      traits,
      lots,
      cost,
      construction,
      item,
      monthlyRPCost,
      months,
      settlementSize,
      xp,
      population,
    };
  });
  return structures;
}

const dataFile = JSON.parse(
  fs.readFileSync(`json/Settlement Structures.json`, "utf-8"),
) as ParsedElement[];
const structures = parseStructures(dataFile);
fs.writeFileSync(`json/structures.json`, JSON.stringify(structures, null, 2));
