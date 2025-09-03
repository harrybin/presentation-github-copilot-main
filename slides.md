---
theme: "@xebia/slidev-theme-xebia"
transition: "fade"
addons:
  - slidev-component-progress
  - "@xebia/slidev-addon-components-common"
# disabled pdf downloading in SPA build, can also be a custom url
download: false
browserExporter: true
# disable slide recording, can be boolean, 'dev' or 'build'
record: false
# disable editor for slides editing, can be boolean, 'dev' or 'build'
editor: false
# take snapshot for each slide in the overview
overviewSnapshots: false
# background glow animation
glowEnabled: true
###### slides start ######
# the routeAlias must be named like the entry md file
routeAlias: slides_github_copilot_deep_dive
layout: cover
background: /deep-dive-heroes-large.png
hideInToc: true
---

<img src="/gh-logo.png" style="marginTop:-250px; width: 100px; height: auto" />

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# GitHub Copilot Ambassador Program for Infineon




---
src: speaker/%SLIDEV_SPEAKER%/speaker.md
---


---
title: Hands On MCP
layout: cover
background: /gh-handson.png
---

<img src="/gh-octocat.png" style="marginTop:-150px" />

<!--
## VS CODE
### ASK
`What’s this project about?`

### [show Copilot Instructions]
MCP, tools, steering committee

### [show MCP server config]
### [start github-remote mcp server]

## AGENT
- `Are there any open issues in this repo?`
- `Is this issue assigned to me?`
- `Can you assign it to the copilot coding agent?`
-->

---
src: /slides/chapter/mcp-server.md
---

---
src: /slides/chapter/instruction-files.md
---

---
title: Hands On .com
layout: cover
background: /gh-handson.png
---

<img src="/gh-octocat.png" style="marginTop:-150px" />

<!--
## .com
### IMMERSIVE CLAUDE 3.5
- `Create issue`
- `Create a way to let users pick products as favorites. Then create a page to display the products`
- `a user has saved as a favorite.`
+ `plan.prompt.md`
- `Assign`

### CODING AGENT
No 1 contributor to github/github
- Eyes
- Session
- PR

## CODE REVIEW
No 3 contributor to github/github
### [show review comments]
### [show repository custom instructions = copilot-instructions.md]HOMEPAGE
Not all work lives in issues
### [show agents panel overlay]
Expand the docs/architecture.md and backend API docstrings. Include diagrams, endpoint
descriptions, and sample payloads.
### [show agents panel]
-->

---
src: /slides/chapter/prompt-files.md
---

---
title: Hands On PLAN
layout: cover
background: /gh-handson.png
---

<img src="/gh-octocat.png" style="marginTop:-150px" />

<!--
## VS CODE
We’re doing this for the custom chat mode.
### PLAN
`I need to implement a simple Cart Page.`
`I also want a Cart icon in the NavBar that shows the number of items in the Cart.`
+ cart.png
### $context menu
- = additional information u give copilot about the INTENT & SCOPE of your questions
- = what && how
### AGENT
Make the changes and explain them to me. I’ve been a python developer for the last 4 years.
### SPACES?
-->

---
src: /slides/chapter/chatmode-files.md
---

---
title: Hands On AUTOFIX
layout: cover
background: /gh-handson.png
---

<img src="/gh-octocat.png" style="marginTop:-150px" />

<!--
## .com
### AUTOFIX
Add vulnerability
### LINKS
- [GitHub Copilot Chat Cookbook](https://docs.github.com/en/enterprise-cloud@latest/copilot/tutorials/copilot-chat-cookbook)
- [Prompt Engineering](https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/prompt-engineering)
- [Best Practices](https://docs.github.com/en/enterprise-cloud@latest/copilot/get-started/best-practices)

-->