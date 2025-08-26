---
layout: cover-dark
background: /brothers-2-large.jpg
---

# Prompt Files

---
layout: image-left
background: /brothers-2-left.jpg
level: 2
---

# Prompt Files

Build and share reusable prompt instructions with additional context (experimental)

<v-click>

<br />

## Common use cases

- **Code generation**  
  Create reusable prompts for components, tests, or migrations

</v-click>

<v-click>

- **Domain expertise**  
  Share specialized knowledge through prompts

</v-click>

<v-click>

- **Team collaboration**  
  Document patterns and guidelines with references to specs and documentation

</v-click>

<v-click>

- **Onboarding**  
  Create step-by-step guides for complex processes or project-specific patterns

</v-click>

<!--
⚠️ Prompt file are currently an **experimental** feature.

Common use cases:

[click]
Code generation

[click]
Domain expertise

[click]
Team collaboration

[click]
Onboarding
-->

---
layout: image-left
background: /brothers-2-left.jpg
level: 2
---

# Prompt Files

## Benefits

- **Reduce time** spent crafting prompts
- Compose **reusable prompts**
- Enforce **consistency**

<v-click>

<br/>

## Note

Prompt files are **not** automatically applied to a chat request

</v-click>

<!--
Benefits

[click]
Note
-->

---
level: 2
---

# Use Prompt Files

## Enable in `settings.json`

- `"chat.promptFiles": true`
- `"chat.promptFilesLocations": ".github/prompts"` (default)

<br />

![](/settings-prompt-files.png)

---
level: 2
---

# Create Prompt Files

## Workspace scope

- Create a `.prompt.md` file in the `.github/prompts` directory
  - Alternatively, select the **Create Prompt** command from the Command Palette (`Ctrl+Shift+P`)
  - Enter a name for the prompt file
- Write prompt instructions by using Markdown formatting

<v-click>

<br />

## User scope

User prompt files are stored in the user profile and can be shared across multiple workspaces

<br />

- Select the **Create User Prompt** command from the Command Palette (`Ctrl+Shift+P`)
- Enter a name for the prompt file
- Write prompt instructions by using Markdown formatting

</v-click>

<!--
There are two ways how to create prompt files.

Workspace scope

[click]
User scope
-->

---
level: 2
---

# Prompt File Structure

```md
---
mode: 'edit'
tools: ['githubRepo', 'codebase']
description: 'Prompt description'
---

Prompt
```

<br />

- Header (Front Matter syntax, optional)
  - `mode` (`ask`, `edit`, `agent`)
  - `tools` (e.g. `terminalLastCommand` or `githubRepo`)
  - `description`
- Body with the prompt content
  - Reference variables using the `${variableName}` syntax

<!--
💡 Paste links in chat:

- [Prompt file structure](https://code.visualstudio.com/docs/copilot/copilot-customization#_prompt-file-structure)
-->

---
level: 2
---

# Prompt File Example

```md
---
mode: 'edit'
tools: ['codebase']
description: 'Perform a REST API security review'
---

Perform a REST API security review:
* Ensure all endpoints are protected by authentication and authorization
* Validate all user inputs and sanitize data
* Implement rate limiting and throttling
* Implement logging and monitoring for security events
```

---
level: 2
---

# Prompt File References

## Reference reuseable prompt files

- as Markdown link `[security](security-api.prompt.md)`
- as Copilot link `#file:security-api.prompt.md`

<br />

<v-click>

## Reference variables

- Workspace variables: `${workspaceFolder}`, `${workspaceFolderBasename}`
- Selection variables: `${selection}`, `${selectedText}`
- File context variables: `${file}`, `${fileBasename}`, `${fileDirname}`, `${fileBasenameNoExtension}`
- Input variables: `${input:variableName}`, `${input:variableName:placeholder}`

</v-click>

<!--
Reference reuseable prompt files

[click]
Reference variables

[click]
Use a prompt file in chat
-->

---
level: 2
---

# Use A Prompt File In Chat

- Select the **Attach Context** icon (`Ctrl+#` or `Ctrl+/`), then select **Prompt**
  - Alternatively, select the **Chat: Use Prompt** command from the Command Palette (`Ctrl+Shift+P`)
- or use the `Ctrl+Alt+#` (or `Ctrl+Alt+/`) shortcut to open the prompt file Quick Pick
- Choose a prompt file from the Quick Pick  
  - Prompt files can be used in **Copilot Chat** and **Copilot Edits**

<br />

<code>
Create a new API endpoint using the <span v-mark="{ color: 'red', type: 'circle' }">/my-prompt-file: myVar=myVarValue</span> best practices
</code>

<!--
⚠️ Shortcuts may vary based on the keyboard layout or system language settings.

💡 Show how to attach a prompt file in VSCode Copilot Chat

You can add **multiple** prompt files to a chat request.
-->
