import * as fs from "fs";

const find_missing = (file: string, content: string, anchors: Record<string, string[]>) => {
  const replacedName = file.replace(".md", "").replace(/ /g, "-");
  const missing: string[] = [];
  const pattern = /<<([^<>]+?)>>/g;
  // Find all matches within the content
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(content))) {
    let [_, anchor] = match[1].split("|");
    let anchor_file = replacedName;
    if (!anchor.includes("#")) {
      anchor_file = anchor;
      anchor = "";
    } else if (anchor.split("#")[0].length > 1) {
      anchor_file = anchor.split("#")[0];
      anchor = anchor.split("#")[1];
    } else {
      anchor = anchor.split("#")[1];
    }
    if (
      !anchor_file.startsWith("https://") && 
      (!anchors[anchor_file] || (anchor !== "" && !anchors[anchor_file].includes(anchor)))
    ) {
      missing.push(match[0]);
    }
  }
  return missing;
};

const determine_anchors = (file: string) => {
  const content = fs.readFileSync(file, "utf8");
  const pattern = /\[\[([^\[\]]+?)\]\]/g;
  let match: RegExpExecArray | null;
  const anchors: string[] = [];
  while ((match = pattern.exec(content))) {
    anchors.push(match[1]);
  }
  return anchors;
};
// Map of file name to anchor name
let anchors: Record<string, string[]> = {};
let missing: string[] = [];

fs.readdirSync("./").forEach((file) => {
  if (file.endsWith(".md")) {
    const base = file.replace(".md", "");
    const replacedName = base.replace(/ /g, "-");
    anchors[replacedName] = determine_anchors(file);
  }
});

fs.readdirSync("./").forEach((file) => {
  if (file.endsWith(".md")) {
    const content = fs.readFileSync(file, "utf8");
    missing = missing.concat(find_missing(file, content, anchors));
  }
});

// Get the unique missing values
const missing_set = [...new Set(missing)];

// Save the missing values to a file
fs.writeFileSync("missing.txt", missing_set.join("\n"));
