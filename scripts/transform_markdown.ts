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

type StackElement = { level?: number, content: ParsedElement[] };

function parseMarkdown(markdown: string): ParsedElement[] {
    const lines = markdown.split('\n');
    const stack: StackElement[] = [{ content: [] }];
    let currentItem: ItemData | null = null;
    let currentTable: TableData | null = null;
    let contentBuffer: string[] = [];
    let currentList: ListData | null = null;
    let currentParagraphId: string | undefined = undefined;

    function flushContent(): void {
        if (contentBuffer.length > 0) {
            const paragraph: ParagraphData = { type: 'paragraph', content: contentBuffer.join('\n'), id: currentParagraphId };
            if (currentItem) {
                console.log(`Adding ${paragraph.content} to item ${currentItem.heading}`);
                currentItem.content.push(paragraph);
            } else {
                stack[stack.length - 1].content.push(paragraph);
            }
            contentBuffer = [];
        }
    }

    for (let line of lines) {
        line = line.trim();
        
        if (!line.length) {
            flushContent();
            if (currentTable) {
              currentTable = null;
            }
            if (currentList) {
              currentList = null;
            }
            continue;
        }

        if (line.startsWith('#') && !currentItem) {
            flushContent();
            const level = line.match(/^#+/)![0].length;
            let text = line.substring(level).trim();
            let id: string | undefined = undefined;
            if (text.endsWith(']]') && text.includes('[[')) {
              id = text.substring(text.indexOf('[[') + 2, text.indexOf(']]'));
              text = text.substring(0, text.indexOf('[['));
            }
            const heading: HeadingData = { type: 'heading', heading: text, level, content: [], id };
            
            while (stack.length > 1 && (stack[stack.length - 1].level || 0) >= level) {
                stack.pop();
            }
            
            stack[stack.length - 1].content.push(heading);
            stack.push({ level, content: heading.content });
        } else if (line.startsWith('item(')) {
            flushContent();
            currentItem = { type: 'item', heading: '', subheading: '', content: [] };
        } else if (line === ')') {
            flushContent();
            if (currentItem) {
                stack[stack.length - 1].content.push(currentItem);
                currentItem = null;
            }
        } else if (line.startsWith('#') && currentItem) {
            flushContent();
            if (!currentItem.heading) {
                let text = line.substring(1).trim();
                let id: string | undefined = undefined;
                if (text.endsWith(']]') && text.includes('[[')) {
                  id = text.substring(text.indexOf('[[') + 2, text.indexOf(']]'));
                  text = text.substring(0, text.indexOf('[['));
                }
                currentItem.heading = text;
                currentItem.id = id;
            } else {
                currentItem.subheading = line.substring(2).trim();
            }
        } else if (line.startsWith(';') && currentItem) {
            flushContent();
            currentItem.content.push({ type: 'traits', content: line.substring(1).split(',').map(t => t.trim()) });
        } else if (line.includes('|')) {
            flushContent();
            const parts = line.split('|').map(part => part.trim());
            let id: string | undefined = undefined;
            if (parts[parts.length - 1].endsWith(']]') && parts[parts.length - 1].includes('[[')) {
              id = parts[parts.length - 1].substring(parts[parts.length - 1].indexOf('[[') + 2, parts[parts.length - 1].indexOf(']]'));
              parts[parts.length - 1] = parts[parts.length - 1].substring(0, parts[parts.length - 1].indexOf('[['));
            }
            if (!currentTable) {
                currentTable = { type: 'table', columns: [], data: [], id };
                if (currentItem) {
                    currentItem.content.push(currentTable);
                } else {
                    stack[stack.length - 1].content.push(currentTable);
                }
            } else if (id) {
                currentTable.id = id;
            }
            
            if (currentTable.columns.length === 0) {
                currentTable.columns = parts.map((col, index) => ({ content: col, align: index === 0 ? 'left' : 'center' }));
            } else {
                if (line.includes('---')) {
                  for (let i = 0; i < parts.length; i++) {
                    if (parts[i] === ':---:') {
                      currentTable.columns[i].align = 'center';
                    } else if (parts[i] === ':---') {
                      currentTable.columns[i].align = 'left';
                    } else if (parts[i] === '---:') {
                      currentTable.columns[i].align = 'right';
                    } else {
                      currentTable.columns[i].align = 'left';
                    }
                  }
                } else {
                  currentTable.data.push(parts);
                }
            }
        } else if (line === '-') {
            flushContent();
            const hr: HorizontalRule = { type: 'hr' };
            if (currentItem) {
                currentItem.content.push(hr);
            } else {
                stack[stack.length - 1].content.push(hr);
            }
        } else if (line.startsWith('- ')) {
            if (!currentList) {
                flushContent();
                currentList = { type: 'list', content: [] };
                if (currentItem) {
                    currentItem.content.push(currentList);
                } else {
                    stack[stack.length - 1].content.push(currentList);
                }
            }
            currentList.content.push(line.substring(2).trim());
        } else {
            if (line.endsWith(']]') && line.includes('[[')) {
                currentParagraphId = line.substring(line.indexOf('[[') + 2, line.indexOf(']]'));
                line = line.substring(0, line.indexOf('[['));
            }
            contentBuffer.push(line);
        }
    }
    flushContent();
    return stack[0].content;
}

for (const markdownFile of fs.readdirSync(".")) {
  if (markdownFile.endsWith(".md")) {
    const markdownContent = fs.readFileSync(markdownFile, 'utf8');
    const parsedData = parseMarkdown(markdownContent);
    fs.writeFileSync("json/" + markdownFile.replace(".md", ".json"), JSON.stringify(parsedData, null, 2));
  }
}