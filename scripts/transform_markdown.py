import os
from bs4 import BeautifulSoup


def parse_markdown(content):
    data = []
    content_stack = []
    previous_line = ""
    for line in content:
        line = line.strip()
        if line.startswith("# "):
            if "item" in content_stack:
                # This is the title of an item
                add_item_title(data, content_stack, line)
            else:
                # This is a heading
                add_heading(data, content_stack, line)
        elif line.startswith("## "):
            if "item" in content_stack:
                # This is the subtitle of an item
                add_item_subtitle(data, content_stack, line)
            else:
                # This is a heading
                add_heading(data, content_stack, line)
        elif line.startswith("#"):
            add_heading(data, content_stack, line)
        elif line.startswith("-"):
            if len(line) > 1:
                add_list_item(
                    data,
                    content_stack,
                    line,
                    new_list=not previous_line.startswith("-")
                    and len(previous_line) > 1,
                )
            else:
                add_horizontal_rule(data, content_stack)
        elif "|" in line:
            add_table(data, content_stack, line, new_table="|" not in previous_line)
        elif line.startswith("item("):
            start_item(data, content_stack)
        elif line == ")":
            end_item(content_stack)
        elif line:
            add_paragraph(data, content_stack, line, previous_line)
        previous_line = line

    return data


def set_data(data, content_stack, value):
    # Start at the root of data
    current = data

    # Traverse through all but the last item in content_stack
    for i in range(len(content_stack) - 1):
        key = content_stack[i]

        # Create empty list/dict if needed
        if isinstance(key, int):
            while len(current) <= key:
                current.append(None)
        elif key not in current:
            current[key] = []

        current = current[key]

    # Set the final value
    if content_stack:
        last_key = content_stack[-1]
        if isinstance(last_key, int):
            while len(current) <= last_key:
                current.append(None)
            current[last_key] = value
        else:
            current[last_key] = value

    return data


def get_data(data, content_stack):
    current = data
    for key in content_stack:
        current = current[key]
    return current


def start_item(data, content_stack):
    set_data(data, content_stack, {"item": []})
    content_stack.append("item")


def end_item(content_stack):
    content_stack.pop()


def add_item_title(data, content_stack, line):
    title = line.split("# ")[1].strip()
    set_data(
        data,
        content_stack,
        {
            "title": title,
        },
    )


def add_item_subtitle(data, content_stack, line):
    subtitle = line.split("# ")[1].strip()
    set_data(
        data,
        content_stack,
        {
            "subtitle": subtitle,
        },
    )


def add_heading(data, content_stack, line):
    level = line.count("#")
    title = line.split("# ")[1].strip()
    set_data(
        data,
        content_stack,
        {
            "heading": [
                {
                    "level": level,
                    "title": title,
                }
            ]
        },
    )
    content_stack.append("heading")
    content_stack.append(1)


def add_list_item(data, content_stack, line, new_list):
    pass


def add_horizontal_rule(data, content_stack):
    pass


def add_table(data, content_stack, line, new_table):
    pass


def add_paragraph(data, content_stack, line, previous_line):
    pass


ROOT_DIR = f"{os.path.dirname(__file__)}/.."

for file in os.listdir(ROOT_DIR):
    if file.endswith(".md"):
        print(f"Processing {file}")
        soup = BeautifulSoup()
        with open(f"{ROOT_DIR}/{file}", "r", encoding="utf-8") as f:
            content = f.readlines()
            markdown_data = parse_markdown(content)

        print(markdown_data)
