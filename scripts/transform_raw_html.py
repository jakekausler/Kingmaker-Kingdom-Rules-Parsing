import os
from bs4 import BeautifulSoup

ROOT_DIR = f"{os.path.dirname(__file__)}/.."
HTML_DIR = f"{ROOT_DIR}/html"
CSS_DIR = f"{ROOT_DIR}/css"

for file in os.listdir(ROOT_DIR):
    if file.endswith(".htm"):
        print(f"Processing {file}")
        with open(f"{ROOT_DIR}/{file}", "r", encoding="utf-8") as f:
            soup = BeautifulSoup(f, "html.parser")
            style = soup.find("head").find("style").string
            css_file = file.replace(".htm", ".css")
            with open(f"{CSS_DIR}/{css_file}", "w", encoding="utf-8") as css:
                css.write(style)

            # Replace style tag with link to CSS
            style_tag = soup.find("style")
            link_tag = soup.new_tag("link")
            link_tag["rel"] = "stylesheet"
            link_tag["href"] = f"../css/{css_file}"
            style_tag.replace_with(link_tag)

            # Save the modified HTML
            with open(f"{HTML_DIR}/{file}", "w", encoding="utf-8") as f:
                f.write(soup.prettify())
