---
layout: cover-dark
background: /pilot-large.jpg
backgroundPosition: right
---

# GitHub Copilot Edit Mode

---
layout: image-right
background: /code-right.png
backgroundPosition: right
level: 2
---

# GitHub Copilot Edit Mode

<v-clicks>

- Make edits across multiple files in your project
- Edits are applied directly in the editor
- Review them in-place
- Guide **Edit mode** to make targeted code changes and improvements by providing specific context

</v-clicks>

<br />

<v-click>

## Enable in `settings.json`

- `github.copilot.chat.codesearch.enabled` (_preview_)

  Find the right files automatically by adding `#codebase` to the prompt

</v-click>

<!--
💡 Paste links in chat:

[Use edit mode in VS Code](https://code.visualstudio.com/docs/copilot/chat/copilot-edits)

[click:5]
Settings
-->

---
layout: image-right
background: /code-right.png
backgroundPosition: right
title: GitHub Copilot Edit Mode Demo
level: 2
---

<div class="flex flex-col h-full text-center justify-center">
  <h1>GitHub Copilot<br />Edit Mode Demo</h1>
</div>

<!-- The empty clicks are only for the presenter mode to switch between the demos -->
<v-click>
  <span/>
</v-click>

<!--
For the **Edit mode** demo we will use the **Chain-of-Thought Prompting** example.

- ⚠️ Revert all changes made by the previous demo
- Change the Chat mode to **Edit**

[click]
ℹ️ Explain to audience:

- If no classes are open in the editor or provided as context, Copilot might create the code in new classes outside the project.
  - 💡 Show example with all tabs closed and with unaltered **Chain-of-Thought** prompt

- Open a class or provide context to get better results
  - Open the `FlightsController.cs` class
  - Use the **Chain-of-Thought** prompt
  - Addjust the prompt at the beginning:  
    _Parse an aerobatic sequence signature into a C# model._  
    _Add the logic to a new AerobaticSequence class._  
    _Add new enpoint for calculating the aerobatic sequence._

💡 Make additional changes/adjustments if the code is not created correctly
-->
