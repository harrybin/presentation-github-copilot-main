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

# GitHub Copilot Deep Dive



---
src: speaker/%SLIDEV_SPEAKER%/speaker.md
---


---
src: /slides/agenda.md
---

---
src: /slides/chapter/instruction-files.md
---

---
src: /slides/chapter/chatmode-files.md
---

---
src: /slides/chapter/mcp-server.md
---

