import * as fs from "fs";

const find_missing = (content: string) => {
  const missing: string[] = [];
  const pattern = /<<([^\|]+?)\|>>/g;
  // Find all matches within the content
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(content))) {
    missing.push(match[1]);
  }
  return missing;
};

let missing: string[] = [];

fs.readdirSync("./").forEach((file) => {
  if (file.endsWith(".md")) {
    const content = fs.readFileSync(file, "utf8");
    missing = missing.concat(find_missing(content));
  }
});

// Get the unique missing values
const missing_set = [...new Set(missing)];

// Save the missing values to a file
fs.writeFileSync("missing.txt", missing_set.map((m) => m + "|").join("\n"));
