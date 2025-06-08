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

interface Action {
  name: string;
  skills: string[];
  training: string;
  phase: string;
  requiresOrganicConstructionFeat: boolean;
  item: ItemData;
}

function parseActions(data: ParsedElement[]) {
  const phaseData = (data[0] as HeadingData).content;
  const actions: Action[] = [];
  phaseData.forEach((item: ItemData) => {
    const phase = item.heading.replace(" Phase", "").toLowerCase();
    const actionData = item.content.filter((item: ParsedElement) => item.type === "item");
    actionData.forEach((item: ItemData) => {
      const nameLine = item.heading;
      let name = nameLine;
      const skills: string[] = [];
      let training = "";
      if (nameLine.includes("(")) {
        name = nameLine.split("(")[0].trim();
        const skillsLine = nameLine.split("(")[1].split(")")[0].trim().split(",");
        if (skillsLine.length === 1) {
          skills.push(skillsLine[0].trim());
        } else {
          skills.push(skillsLine[0].trim());
          training = skillsLine[1].trim();
        }
      }

      actions.push({
        name,
        skills,
        training,
        phase,
        requiresOrganicConstructionFeat: false,
        item
      });
    });
  });
  return actions;
}

const dataFile = JSON.parse(
  fs.readFileSync(`json/Kingdom Actions.json`, "utf-8"),
) as ParsedElement[];
const actions = parseActions(dataFile);
fs.writeFileSync(`json/actions.json`, JSON.stringify(actions, null, 2));
