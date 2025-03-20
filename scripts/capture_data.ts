import * as fs from 'fs';

interface TableColumn {
    content: string;
    align: 'left' | 'center' | 'right';
}

interface TableData {
    id?: string;
    type: 'table';
    columns: TableColumn[];
    data: string[][];
}

interface HeadingData {
    id?: string;
    type: 'heading';
    heading: string;
    level: number;
    content: any[];
}

interface ItemData {
    id?: string;
    type: 'item';
    heading: string;
    subheading: string;
    content: any[];
}

interface ParagraphData {
    id?: string;
    type: 'paragraph';
    content: string;
}

interface ListData {
    id?: string;
    type: 'list';
    content: string[];
}

interface HorizontalRule {
    type: 'hr';
}

interface TraitsData {
    type: 'traits';
    content: string[];
}

type ParsedElement = HeadingData | ItemData | TableData | ParagraphData | ListData | HorizontalRule | TraitsData;

type Datum = {
  [key: string]: string | number | boolean;
}

const parseFile = (file: string) => {
  const content = fs.readFileSync("json/" + file, 'utf8');
  const data = JSON.parse(content) as ParsedElement[];
  return data;
}

const toTable = (data: Datum[]) => {
  if (data.length === 0) {
    return "";
  }
  const headers = Object.keys(data[0]);
  const table = data.map((datum) => {
    return headers.map((header) => datum[header]).join("\t");
  });
  return [headers.join("\t"), ...table].join("\n");
}

const saveData = (data: string, file: string) => {
  fs.writeFileSync("data/" + file, data);
}

const findFeats = (data: ParsedElement[]) => {
  const feats: ParsedElement[] = [];
  
  const findFeatsRecursive = (elements: ParsedElement[] | any[]) => {
    for (const element of elements) {
      if (element.type === 'item' && element.subheading?.startsWith('Feat ')) {
        feats.push(element);
        continue;
      }
      
      if (element.content && Array.isArray(element.content)) {
        findFeatsRecursive(element.content);
      }
    }
  };

  findFeatsRecursive(data);
  return feats as ItemData[];
}

const parseFeats = (file: string) => {
  const data = parseFile(file);
  const featData = findFeats(data);
  const feats: Datum[] = [];

  for (const feat of featData) {
    const f = {
      name: feat.heading,
      level: feat.subheading.split(' ')[1],
      description: feat.content.filter((c) => c.type === 'paragraph' && !c.content.startsWith('**Prerequisite')).map((c) => c.content).join(";;"),
      prerequisites: feat.content.filter((c) => c.type === 'paragraph' && c.content.startsWith('**Prerequisite')).map((c) => {
        const parts = c.content.split(/\*\*: |\*\* /);
        return parts[1]?.trim() || '';
      }).join(";;"),
    }
    feats.push(f);
  }

  const table = toTable(feats);
  saveData(table, "feats.txt");
}

const findActivities = (data: ParsedElement[]) => {
  const activities: ParsedElement[] = [];

  const findActivitiesRecursive = (elements: ParsedElement[] | any[]) => {
    for (const element of elements) {
      if (element.type === 'item') {
        activities.push(element);
        continue;
      }

      if (element.content && Array.isArray(element.content)) {
        findActivitiesRecursive(element.content);
      }
    }
  };

  findActivitiesRecursive(data);
  return activities as ItemData[];
}

const parseActivities = (file: string) => {
  const data = parseFile(file);
  const activityData = findActivities(data);
  const activities: Datum[] = [];

  for (const activity of activityData) {
    const skillPattern = /^.* \((.*), .*\)?$/;
    const skill = activity.heading.match(skillPattern)?.[1]?.trim() || '';
    const replacePattern = /^(.*) \((.*), .*\)?$/;
    const name = activity.heading.replace(replacePattern, '$1').trim();
    if (name === '') console.log(activity);
    const a = {
      name,
      skill,
    }
    activities.push(a);
  }

  const table = toTable(activities);
  saveData(table, "activities.txt");
}

const findStructures = (data: ParsedElement[]) => {
  const structures: ParsedElement[] = [];

  const findStructuresRecursive = (elements: ParsedElement[] | any[]) => {
    for (const element of elements) {
      if (element.type === 'item' && element.subheading?.startsWith('Structure ')) {
        structures.push(element);
        continue;
      }

      if (element.content && Array.isArray(element.content)) {
        findStructuresRecursive(element.content);
      }
    }
  };

  findStructuresRecursive(data);
  return structures as ItemData[];
}

const parseStructures = (file: string) => {
  const data = parseFile(file);
  const structureData = findStructures(data);
  const structures: Datum[] = [];
  console.log(structureData.length)

  for (const structure of structureData) {
    if (structure.content.some((c: any) => c.type === 'traits' && c.content.includes('Infrastructure'))) {
      continue;
    }
    const name = structure.heading;
    const level = structure.subheading.split(' ')[1];
    let edifice = false;
    let fame = false;
    let building = false;
    let yard = false;
    let infrastructure = false;
    let residential = false;
    let description = '';
    let lots = '';
    let lumber_cost = '';
    let stone_cost = '';
    let ore_cost = '';
    let luxuries_cost = '';
    let rp_cost = '';
    let months = '';
    let xp = '';
    let population = '';
    let size = '';
    let construction_1 = '';
    let rank_1 = '';
    let construction_2 = '';
    let rank_2 = '';
    let construction_3 = '';
    let rank_3 = '';
    let construction_4 = '';
    let rank_4 = '';
    let dc = '';
    let itemBonus = '';
    let ruin = '';
    let upgradeFrom = '';
    let upgradeTo = '';
    let marketBonus = '';
    let effect = '';
    let special = '';
    for (const content of structure.content) {
      if (content.type === 'traits') {
        for (const trait of content.content) {
          if (trait === 'Edifice') edifice = true;
          if (trait === 'Fame') fame = true;
          if (trait === 'Building') building = true;
          if (trait === 'Yard') yard = true;
          if (trait === 'Infrastructure') infrastructure = true;
          if (trait === 'Residential') residential = true;
        }
      }
      if (content.type === 'paragraph') {
        if (!content.content.startsWith('**')) {
          description = content.content;
        } else if (content.content.startsWith('**Lots**')) {
          lots = content.content.split('**')[2].split(';')[0].trim()
          const cost = content.content.split('**')[4].trim()
          for (const c of cost.split(', ')) {
            const [amount, type] = c.trim().split(' ');
            if (type === 'Lumber') lumber_cost = amount;
            if (type === 'Stone') stone_cost = amount;
            if (type === 'Ore') ore_cost = amount;
            if (type === 'Luxuries') luxuries_cost = amount;
          }
        } else if (content.content.startsWith('**Monthly Cost**')) {
          const cost = content.content.split('**')[2].trim();
          rp_cost = cost.split(' ')[0];
          months = cost.split('/')[1].trim().split(' ')[0].trim();
        } else if (content.content.startsWith('**XP**')) {
          xp = content.content.split('**')[2].split(';')[0].trim()
          population = content.content.split('**')[4].split(';')[0].trim()
          size = content.content.split('**')[6].trim()
        } else if (content.content.startsWith('**Construction**')) {
          // dc = content.content.split('DC')[1].trim();
          // const constructions = content.content.split('DC')[1].replace(' or ', '').split(', ');
          // constructions.forEach((c: string, i: number) => {
          //   const pattern = / *([A-z]+)(\((trained|expert|master|legendary)\))?/;
          //   const match = c.match(pattern);
          //   if (match) {
          //     const [, skill, rank] = match;
          //     if (i === 0) {
          //       construction_1 = skill;
          //       rank_1 = rank;
          //     } else if (i === 1) {
          //       construction_2 = skill;
          //       rank_2 = rank;
          //     } else if (i === 2) {
          //       construction_3 = skill;
          //       rank_3 = rank;
          //     } else if (i === 3) {
          //       construction_4 = skill;
          //       rank_4 = rank;
          //     }
          //   }
          // });
        }
      }
    }
    structures.push({
      name,
      level,
      lots,
      // lumber_cost,
      // stone_cost,
      // ore_cost,
      // luxuries_cost,
      edifice,
      // fame,
      // building,
      // yard,
      // infrastructure,
      residential,
      // description,
      // rp_cost,
      months,
      // xp,
      population,
      size,
      // construction_1,
      // rank_1,
      // construction_2,
      // rank_2,
      // construction_3,
      // rank_3,
      // construction_4,
      // rank_4,
      // dc,
      // itemBonus,
      // ruin,
      // upgradeFrom,
      // upgradeTo,
      // marketBonus,
      // effect,
      // special,
    })
  }


  const table = toTable(structures);
  saveData(table, "structures.txt");
}

parseFeats("Kingdom Feats.json");
parseActivities("Kingdom Actions.json");
parseStructures("Settlement Structures.json");