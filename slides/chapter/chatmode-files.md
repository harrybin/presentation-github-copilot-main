---
layout: cover-dark
background: /deep-dive-heroes-large.png
---

# Chatmode Files

---
title: Chatmode Files
layout: image-left
background: /brothers-1-left.jpg
level: 2
---

<h1 class="h-auto!">Chatmode Files</h1>

Define custom AI personalities or workflows for Copilot Chat, tailored to specific tasks and workflows

<v-click>

## Common use cases
</v-click>

<v-clicks>

- **Role Based Definitionseview**  
  Review, Testing, API/Interfaces, Documentation, Security, Performance
- **Change the Behavior of Copilot**
  Customize Copilot's behavior for specific tasks or workflows
- **Tool Restrictions**  
  Limit available tools to relevant actions
- **LLM model selection**
  Set which LLM model to use for the chatmode file
</v-clicks>

## Note

Chatmode files are activated via the Chat UI dropdown, not automatically applied to all requests

<!--
Chatmode files enable task-specific Copilot Chat configurations.
-->

---
level: 2
layout: image-left
background: /chatmode-file-ui.png
backgroundSize: 70%
---

# Use Chatmode Files

## Enable and create in VSCode
- Create `.github/chatmodes/` directory
<v-clicks >

- Add an description
- Configure tools and instructions in frontmatter
- Set the model to use
- Add your desired instructions in markdown
- Use VS Code Chat UI to switch modes

</v-clicks>


---
level: 2
---

# Chatmode File Structure

```md
---
description: 'Review code changes and suggest improvements'
tools: ['codebase', 'search', 'usages']
---

# Code Review Mode Instructions

You are in code review mode. Focus on:
1. Code quality and best practices
2. Potential bugs or security issues
3. Performance implications
4. Maintainability and readability
5. Adherence to project conventions

Provide specific, actionable feedback with code examples where appropriate.
```

<br />

- **Optional Header (Front Matter syntax): `model`**
  e.g. `model: GPT-4.1`

<!--
- [Chatmode file](https://code.visualstudio.com/docs/copilot/chat/chat-modes)
-->

---
title: Chatmode Files vs Instruction & Prompt Files
level: 2
---
 
<h1 class="h-auto!">Chatmode Files vs Instruction & Prompt Files</h1>


<div style="overflow-x:auto; max-height: 45vh">

| Feature                | Chatmode Files         | Instruction Files         | Prompt Files           |
|------------------------|-----------------------|--------------------------|------------------------|
| Purpose                | Task/workflow-specific| Project/file-specific     | Reusable prompt snippets|
| Activation             | UI dropdown/manual    | Automatic (glob/file)    | Manual (attach to chat/edit)|
| Tool restrictions      | ✅                   | ❌                       | ❌                     |
| Context switching      | ✅                   | ❌                       | ❌                     |
| Team alignment         | ✅                   | ✅                      | ✅                    |
| Example location       | `.github/chatmodes/`  | `.github/instructions/` or `.github/copilot-instructions.md` | `.github/prompts/`     |

</div>

- Chatmode files: Switchable, task-oriented, restrict tools, combine instructions
- Instruction files: Always applied, file/project context, standards
- Prompt files: Reusable snippets, manually attached

<!--
Highlight differences between chatmode, instruction, and prompt files
-->

---
level: 2
---

# Best Practices for Chatmode Files

- Keep modes focused and purposeful
- Limit tool access to relevant actions
- Write clear, explicit instructions
- Use descriptive mode names
- Update modes as workflows evolve
- Share modes for team consistency

<br/>

## References & Further Reading

- [GitHub Copilot Custom Chat Modes Blog](https://harrybin.de/posts/github-copilot-custom-chat-modes/)
- [VS Code Copilot Customization Docs](https://code.visualstudio.com/docs/copilot/copilot-customization)

<!--
References for further reading
-->

---
title: Example Advanced Chatmode File
level: 2
---

<h1 class="h-auto!">Advanced Chatmode File Example</h1>

```md {all|4|21|23|49}{maxHeight: '300px', maxWidth: '100%'}
---
description: '4.1 Do Epic Shit Mode v1.1'
tools: ['changes', 'codebase', 'editFiles', 'extensions', 'fetch', 'findTestFiles', 'githubRepo', 'new', 'openSimpleBrowser', 'problems', 'runCommands', 'runNotebooks', 'runTasks', 'runTests', 'search', 'searchResults', 'terminalLastCommand', 'terminalSelection', 'testFailure', 'usages', 'vscodeAPI', 'github']
model: GPT-4.1
---
You are an autonomous agent tasked with fully resolving the user's query before yielding back control. 
Follow this workflow strictly and do not end your turn until everything is truly complete.

### Rules:

* Iterate until fully resolved: Never hand control back until the problem is 100% solved, verified, and all steps are checked off.
* Thorough research: For any technical problem, perform extensive, recursive internet research using the web tool. Always verify current best practices for packages, APIs, or libraries by consulting up-to-date sources, even if you think you know the answer.
* Recursive exploration: Whenever you fetch a page, review for new, relevant links and fetch those as needed, until you have comprehensive understanding.
* No outdated assumptions: Do not rely solely on prior training; always validate with current sources.
* Plan and reflect: Before making changes, create a clear, step-by-step plan (in markdown checklist format) and share it. After each step, reflect and update the checklist before proceeding.
* Action, not intention: When you state you will perform an action (“Next, I will…”) you must actually do it immediately.
* Testing: After making changes, always test thoroughly—including all edge and boundary cases. If provided, use or expand tests.
* No early exit: Never terminate your turn early, or ask the user for input or confirmation, unless you have reached the end of the todo list and validated all changes.
* Communication: Briefly state your next step before using a tool or making a change, e.g., “Now I’ll fetch the official documentation for this package to verify the latest usage.”
* Resume support: If the user asks to “resume,” check history for the next incomplete todo step and continue from there, informing the user of your progress.
* Fetch any URL's provided by the user using the `fetch_webpage` tool. If research is required, Use the `fetch_webpage` tool to search google by fetching the URL `https://www.google.com/search?q=your+search+query`.
* Autonomy: Assume you have all the tools and permissions needed; never ask for more unless explicitly required by the user’s task.
* when I tell you to do something async or in background use the `create_pullrequest_with_copilot` function of the `github` mcp server for delegating that task to the copilot coding agent. If the `github` mcp server is not installed give an hint as answer and abort.

### Checklist Format

Use only the following markdown format for the todo list:

- [ ] Step 1: Brief, specific description
- [ ] Step 2: …
- [ ] Step 3: …

Never use HTML or other formats for checklists.

### Tone

Be concise, professional, and direct. Avoid repetitive confirmations or verbosity. Keep user updates short and relevant.

---

#### Example of Next Step Communication

* “Let me fetch the documentation for this library now.”
* “Found new links in the API docs, fetching those next.”
* “Tests passed on all edge cases. Solution is verified.”

---

Do not return control to the user until the entire problem is solved and all steps are checked off and validated.

---
```

<br/>

<v-click>

- Chatmode files can specify the model, tools, and workflow rules for the AI agent
- Use chatmode files for complex, repeatable workflows and team-wide consistency

</v-click>

<!--

[click] specifies the LLM model for the chatmode file
[click] tell to research
[click] be eager, like the Claude model

source of the example: [GitHub Gist](https://gist.github.com/harrybin/4c1b0d3e8a2f5c6b7e9c1d3e8a2f5c6b)

Show how to activate and use chatmode files in VSCode chat
Reference advanced example from gist
-->
