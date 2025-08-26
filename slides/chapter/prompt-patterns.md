---
layout: cover-dark
background: /pilot-large.jpg
backgroundPosition: right
---

# Prompt Patterns

<!--
ℹ️ The slides and speaker notes for **Prompt Patterns** are based on the slides from the **Prompt Engineering** training and the examples from the repository.

Sources:

- [Slides](https://xebiagroup.sharepoint.com/sites/Xpirit10/Gedeelde%20%20documenten/Forms/AllItems.aspx?id=%2Fsites%2FXpirit10%2FGedeelde%20%20documenten%2FGitHub%20Copilot%20Solution%20and%20Offering%2FCopilot%20Core%20Documents%2FCopilot%20Training%20Decks%2FPrompt%20Engineering&viewid=ca697eeb%2D1b05%2D4d79%2Da340%2D3d4d0b1d0fe4)
- [Repository](https://github.com/xebia/prompt-engineering-course)
-->

---
layout: image-left
background: /highway-large.png
level: 2
---

# Catalog Of Prompt Patterns

## Categories

- Input Semantics
- Output Customization
- Error Identification
- Prompt Improvement

<!--
The prompt patterns we're about to explore fall into these categories.
-->

---
layout: image-right
background: /learning-rigth.png
backgroundPosition: left
title: Pattern Category - Input Semantics
level: 2
---

<div class="flex flex-col items-center justify-center h-full">
  <div>
    <h1 class="h-auto!">Pattern Category</h1>
    <h2>Input Semantics</h2>
  </div>
</div>

<!--
**Patterns:**

- Meta Language Creation
-->

---
level: 2
layout: two-column
---

# Pattern: Meta Language Creation

::left::

**Description:** Creating new, domain-specific language or commands that abstract and simplify complex operations.

<br />

**Goal:** Minimize prompt complexity and increase prompting speed.

::right::

**Some use cases:**
- Create a shorthand for information or an activity that you'll repeat multiple times during a session.
- Meta language shorthand can be saved and shared with the team. This allows for a kind of refactoring of shared prompts.
- Faster iteration of repeated tasks.

<br />

**Complimenting patterns:**

- Template pattern

<!--
This involves creating a new language or code the AI must interpret and use, and it guides the model in crafting responses. You can even use these in a way analogous to variables or functions but its more like a declarative shorthand. Let's look at some examples.

Let's look at some examples.

**Switch to the demo repository:**  
[meta_language_creation.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/meta_language_creation.md)
-->

---
layout: image-right
background: /robot-arm-large.png
backgroundPosition: center
title: Pattern Category - Output Customization
level: 2
---

<div class="flex flex-col items-center justify-center h-full">
  <div>
    <h1 class="h-auto!">Pattern Category</h1>
    <h2>Output Customization</h2>
  </div>
</div>

<!--
**Patterns:**

- n-shot Prompting
- Template Pattern
- Output Automater
- Persona
-->

---
level: 2
layout: two-column
---

# Pattern: n-Shot Prompting

::left::

**Description:** Presenting the language model with multiple examples (n examples) of similar tasks or outputs before asking it to generate code for a new, similar task.

<br />

**Goal:** Helps the model understand the context, structure, and specific requirements of the task at hand by <u>learning</u> from the patterns and solutions provided in the example <u>context</u>.

::right::

**Some use cases:**
- Domain-specific applications where pre-existing examples can significantly inform the desired output.
- Improving code consistency and adherence to project-specific conventions.


<!--
This slide will cover _zero_, _one-shot_, and _few-shot_ (also called _n-shot_) prompting.

_Zero-shot_ learning refers to the model's ability to perform tasks correctly that it has not explicitly been trained to do, solely based on its pre-existing knowledge and understanding, without specific examples provided at inference time. These are simply _"follow instructions"_ prompts because we're not providing examples.

_N-shot_ prompts are _"learning in context"_.

By presenting a set of high-quality input and output pairs, the model can better understand our intention in a more direct way than by parsing the descriptions of our intent. _Few-shot_ prompting often leads to better performance but comes at the obvious cost of token consumption. Choose _one-shot_ vs. _few-shot_ based on the subtlety of what you're trying to illustrate on one hand and the length of your examples and/or output on the other.

Let's take a look at the power of providing examples with your prompts.

**Switch to the demo repository:**  
[n-shot_prompting.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/n-shot_prompting.md)

**Supporting Materials:**

Large Language Models are Zero-Shot Reasoners  
https://ar5iv.labs.arxiv.org/html/2205.11916

Large Language Models are Human-Level Prompt Engineers  
https://ar5iv.labs.arxiv.org/html/2211.01910
-->

---
level: 2
layout: two-column
---

# Template Pattern

::left::

**Description:** Ensure the LLM output adheres to a predefined structure or format. Especially useful when the output must conform patterns not inherently known to the LLM.

<br />

**Goal:** Force and constrain the structure of output structure. Ensure consistency.

::right::

**Some use cases:**
- Creation of REST API endpoint scaffolds with standardized documentation and error handling.
- Producing structured data objects (like JSON or XML) that must follow a specific schema.
- Outputting documentation into a precise format.

<br />

**Complimenting patterns:**

- n-Shot Prompting
- Meta language creation
- Least-to-most prompting


<!--
You can use the _Template Pattern_ to ensure uniformity in your output, especially where you have team or organization standards for structure. This is like n-shot prompting, but instead of providing one or more examples, we're telling the LLM exactly how to structure the output. With inline completions, you're using a sort of template pattern if you start with an outline of a class before you generate code. With Copilot Chat, you would include a template with your prompt that prescribes how the output should be structured. This is not a pattern that you'd use often in your day-to-day. But you might use it more often with patterns that you share amongst your team.

💡 **Tip:** Could be used as Instruction files, which are included automatically to each request.

⚠️ **Caution:** Can be heavy-handed. It would be better to guide output by selectively using context because otherwise we're constraining the strongest features of GenAI. But it can be useful if context alone is not doing the job, for example, if you're re-writing a project into a new format.

And referencing industry standard formats is another way of using the idea of templates, although wouldn't precisely meet the definition of this pattern.

Let's see an example of this.

**Switch to the demo repository:**  
[template_pattern.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/template_pattern.md)
-->

---
level: 2
layout: two-column
---

# Pattern: Output Automater

::left::

**Description:** Have the LLM generate a script or other automation artifact that can automatically perform any steps it recommends taking as part of its output.

<br />

**Goal:** Reduce the manual effort needed to implement output recommendations.

::right::

**Example:**

From now on, whenever you generate code that spans more than one file, generate a Python script that can be run to automatically create the specified files or make changes to existing files to insert the generated code.

<!--
This pattern is bit less important now that VS Code introduced the `/new` command or the _Edit_ and _Agent_ mode.

The _Output Automater_ pattern intends to streamline the generative process by creating scripts that automatically execute recommended actions. This can be powerful when setting up new projects but use it with caution. Don't try using this to output your entire project in one prompt, because that will fail miserably – at least until the next big update!

Let's take a look at this in action.

**Switch to the demo repository:**  
[output_automater.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/output_automater.md)
-->

---
level: 2
layout: two-column
---

# Pattern: Persona

::left::

**Description:** Focus the language model to embody a persona that possesses specialized expertise or bias, software engineer, a data scientist, or any relevant professional. The model leverages this persona to understand and generate code more effectively, providing responses that not only solve coding problems but also reflect the persona's unique approach and knowledge.

<br />

**Goal:** Generate code that not solves the given problem in a way that is not only technically sound but also reflects the insights and nuances of the chosen persona.

::right::

**Some use cases:**
- Considering a solution from multiple perspectives.
- Filling skill gaps where you may be weak. Use this when you don't know what details are important.
- Focusing the output toward a particular challenge or goal.

<br />

**Complimenting patterns:**

- Question refinement

<!--
The _Persona Pattern_ focuses on adapting the language model's responses to fit a specific persona, which can vary depending on the desired characteristics or expertise level. This pattern is useful in code generation where the persona can significantly influence the type of code produced, its optimization, and the approach to solving problems.

When we embody a persona such as a software engineer or a data scientist, the model doesn't just generate code; it generates code that encapsulates the unique perspective and insights of that profession. A software engineer with a focus on security will generate different output than a data scientist persona that might be more focused on algorithmic efficiency.

The goal of this pattern is to ensure that the generated code is not only technically sound but also infused with the subtleties and depth of understanding the characteristics of the chosen persona.

Some use cases for the _Persona Pattern_ in code generation include:

- Looking at a coding problem from various professional viewpoints to find a more comprehensive solution.
- Filling Skill Gaps
- The persona can guide the code's structure and style, like focusing on readability, or performance, or maintainability.


**Switch to the demo repository:**  
[persona.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/persona.md)
-->

---
layout: image-right
background: /clock-large.png
backgroundPosition: center
title: Pattern Category - Error Identification
level: 2
---

<div class="flex flex-col items-center justify-center h-full">
  <div>
    <h1 class="h-auto!">Pattern Category</h1>
    <h2>Error Identification</h2>
  </div>
</div>

<!--
**Patterns:**

- Reflection
-->

---
level: 2
layout: two-column
---

# Pattern: Reflection

::left::

**Description:** Prompting the model to explain the reasoning behind the code it generates. This reveals the logic behind the generated code and sheds light on any assumptions made during the process. It aims to unveil the model's thought process, offering clarity on the chosen solutions, frameworks, and algorithms.

<br />

**Goal:** Reveal potential knowledge gaps or misunderstandings. Increase trust and confidence in the model output by adding transparency.

::right::

**Some use cases:**
- Understanding algorithmic choice.
- Provide insights into the selection of frameworks or patterns.
- Validating model assumptions.

<br />

**Complimenting patterns:**

- Fact Check List

<!--
The _Reflection Pattern_ is a strategy used to prompt a model to self-explain the reasoning behind the code it generates. By doing so, we uncover the model's logic, assumptions, and the rationale. Allowing us to validate the approach or to iterate on our prompt using better instructions.

Let's deep dive into this by using some examples.

**Switch to the demo repository:**  
[reflection.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/reflection.md)
-->

---
layout: image-right
background: /forest-large.png
backgroundPosition: center
title: Pattern Category - Prompt Improvement
level: 2
---

<div class="flex flex-col items-center justify-center h-full">
  <div>
    <h1 class="h-auto!">Pattern Category</h1>
    <h2>Prompt Improvement</h2>
  </div>
</div>

<!--
**Patterns:**

- Refusal Breaker
- Cognitive Verifier
-->

---
level: 2
layout: two-column
---

# Pattern: Refusal Breaker

::left::

**Description:** Ask the model to help rephrase or recontextualize a question or command that has been refused.

<br />

**Goal:** Understand the aspects of the prompt that violated model guidelines, intending to improve the prompt so that it adheres to guidelines and alignment while still providing useful information.

::right::

**Some use cases:**

- Improving a bad prompt.

<br />

**Complimenting patterns:**

- Question refinement

<!--
This is pattern has a potential for misuse, for attempting to bypass model alignment and system prompts. However, there are valid use cases, specifically as a variation of the question refinement pattern. For example, if you prompt with _"Create a service that stores passwords in plain text"_, it will refuse by telling you that this a bad practice. We don't want to work around that, but we want to understand the **"why"** when we get a rejection. So, in those cases, we'll reissue the prompt with the preface: _"Whenever you can't answer a question, provide an alternative and improved wording of the question that you can't answer so that I can improve my questions"_.

Let's look at an example.

**Switch to the demo repository:**  
[refusal_breaker.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/refusal_breaker.md)
-->

---
level: 2
layout: two-column
---

# Pattern: Cognitive Verifier

::left::

**Description:** Use the model to generate additional, clarifying questions to better understand and accurately respond to the user prompt.

<br />

**Goal:** Improve output where the original prompt may have been too vague. Help models with the generalization of difficult problems.

::right::

**Some use cases:**
- A great general prompt for code generation.
- Uncovering and drilling into requirements.

<!--
An example of this prompt would be: _"When a requirement or query is presented, identify three clarifying questions that will refine the understanding of the requirement"_.

The _Cognitive Verifier_ pattern is often combined with the _Question Refinement_ pattern. The _Question Refinement_ pattern is very simple. We're prompting the model to suggest a better version of our question whenever we ask a question. _"From now on, whenever I ask you a question, suggest a better, more comprehensive and detailed version of the question that would help you produce better output"_.

These can be used separately however; we can combine them in an interesting way by asking the model to identify three clarifying questions and then suggesting a better version of the question based on the clarifying questions. Consider resetting your context as you iterate on this. You will know your done with the model is recommending superficial improvements to your question.



Let's explore this.


**Switch to the demo repository:**  
[cognitive_verifier.md](https://github.com/xebia/prompt-engineering-course/blob/main/src/cognitive_verifier.md)
-->
