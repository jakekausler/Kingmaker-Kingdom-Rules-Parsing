import * as fs from "fs";
//
//const file = process.argv[2];
//const searches = [
//  /(R|r)uins?/g,
//  /(U|u)nrest/g,
//  /RP/g,
//  /(C|c)onsumption/g,
//  /(C|c)ommodit(y|ies)/g,
//  /(R|r)esource (D|d)i(e|ce)/g,
//  /(I|i)nfluence/g,
//  /(S|s)ettlement(’)?s?(’)?/g,
//  /(C|c)ontrol DC/g,
//  /(F|f)ame/g,
//  /(I|i)nfamy/g,
//  /(F|f)reehold/g,
//  /(S|s)tructure’?s?’?/g,
//  /(W|w)ork (S|s)ite’?s?’?/g,
//  /(((U|u)pkeep)|((E|e)vent)|((A|a)ctivity)|((C|c)ommerce)|((L|l)eader(ship)?)) (P|p)hase/g,
//];
//
//for (const search of searches) {
//  content = content.replace(search, (match) => {
//    return `<<${match}|>>`;
//  });
//}
//
//fs.writeFileSync(file, content, "utf8");

/*const links: [RegExp, String][] = [
  [/(R|r)uins?/, "Kingdom-Rules#Ruins"],
  [/(U|u)nrest/g, "Kingdom-Rules#Unrest"],
  [/RP/g, "Kingdom-Rules#ResourcePoints"],
  [/(C|c)onsumption/g, "Kingdom-Rules#Consumption"],
  [/(C|c)ommodit(y|ies)/g, "Kingdom-Rules#Commodities"],
  [/(R|r)esource (D|d)i(e|ce)/g, "Kingdom-Rules#ResourceDice"],
  [/(I|i)nfluence/g, "Setting-Rules#Influence"],
  [/(S|s)ettlement(’)?s?(’)?/g, "Settlement-Rules"],
  [/(C|c)ontrol DC/g, "Kingdom-Rules#ControlDC"],
  [/(F|f)ame/g, "Kingdom-Rules#FameAndInfamy"],
  [/(I|i)nfamy/g, "Kingdom-Rules#FameAndInfamy"],
  [/(F|f)reehold/g, "Kingdom-Rules#Freehold"],
  [/(S|s)tructure’?s?’?/g, "Settlement-Structures"],
  [/(W|w)ork (S|s)ite’?s?’?/g, "Kingdom-Rules#WorkSite"],
  [/(R|r)egion(al)? (A|a)ctivit(y|ies)/g, "Kingdom-Turn#RegionActivities"],
  [/(H|h)eartlands?/g, "Kingdom-Creation#ChooseAHeartland"],
  [/(C|c)harter?/g, "Kingdom-Creation#SelectACharter"],
  [/(G|g)overnment?/g, "Kingdom-Creation#ChooseAGovernment"],
  [/(S|s)ettlement (C|c)reation/g, "Settlement-Creation"],
  [/((M|m)aximum )?(I|i)tem (B|b)onus/g, "Settlement-Rules//MaximumItemBonus"],
  [/(C|c)laim (H|h)ex/g, "Kingdom-Actions#ClaimHex"],
  [/(A|a)ctivity (P|p)hase/g, "Kingdom-Turn#ActivityPhase"],
  [/(L|l)eadership (R|r)oles?/g, "Leadership-Roles"],
];*/

//content = "  <<Ruin|>>  ";
const links = fs
  .readFileSync("missing.txt", "utf8")
  .split("\n")
  .filter((line) => line.trim().length > 0 && !line.endsWith("|"))
  .map((line) => {
    const [search, link] = line.split("|");
    return [search.replaceAll("*", "\\*"), link];
  });

const replace_file = (file: string) => {
  let content = fs.readFileSync(file, "utf8");
  for (const [search, link] of links) {
    const regex = new RegExp(/<</.source + search + /\|>>/.source, "g");
    content = content.replaceAll(regex, (match) => {
      return `${match.substring(0, match.length - 2)}${link}>>`;
    });
  }

  //console.log(content);
  fs.writeFileSync(file, content, "utf8");
};

fs.readdirSync(".").forEach((file) => {
  if (file.endsWith(".md")) {
    replace_file(`${file}`);
  }
});
