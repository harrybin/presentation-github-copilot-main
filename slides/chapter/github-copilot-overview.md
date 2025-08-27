---
layout: cover-dark
background: /pilot-large.jpg
backgroundPosition: right
---

# GitHub Copilot Overview

---
layout: image-right
background: /code-right.png
backgroundPosition: right
title: GitHub Copilot
level: 2
---

<ImageTitle title="GitHub Copilot" image-url="/bot-head.png" />

## AI Pair Programmer

<div class="grid grid-cols-5 justify-top items-start">
  <ImageText image-height="md" image-url="/logo-vsc.png">
    <p>Visual Studio Code</p>
  </ImageText>

  <ImageText image-height="md" image-url="/logo-vs.png">
    <p>Visual Studio</p>
  </ImageText>

  <ImageText image-height="md" image-url="/logo-jb.png">
    <p>JetBrains</p>
  </ImageText>

  <ImageText image-height="md" image-url="/logo-eclipse.png">
    <p>Eclipse</p>
  </ImageText>

  <ImageText image-height="md" image-url="/logo-xcode.png">
    <p>Xcode</p>
  </ImageText>
</div>

<br/>

## Features

- Copilot Code Completion
- Copilot Chat
  - Modes
    - Ask
    - Edit
    - Agent

---
src: /slides/chapter/includes/ide-features.md
---

---
level: 2
---

# GitHub Copilot Licensing

|                      | Free                                            |  Pro                                       | Pro+                                       | Business           | Enterprise          |
| -------------------- | ----------------------------------------------- | -----------------------------------------  | -----------------------------------------  | ------------------ | ------------------- |
| **Costs**            | $0                                              | **$10**/user/month<br />**$100**/user/year | **$39**/user/month<br />**$390**/user/year | **$19**/seat/month | **$39**/seat/month  |
| **Limit**            | **20k** completions &<br />**50** chat messages | ♾️ base model                              | ♾️ base model                              | ♾️ base model     | ♾️ base model       |
| **Premium requests** | **50** per month                                | **300** per month                          | **1500** per month                         | **300** per month  | **1000** per month  |

<!--


⚠️ New billing model since 07.04.2025

🔵 Mention the rate limits

💡 Paste links in chat:

- [Rate limits](https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits)  
- [Subscription plans for GitHub Copilot](https://docs.github.com/en/copilot/about-github-copilot/subscription-plans-for-github-copilot#comparing-copilot-plans)
-->

---
layout: image-right
background: /cp-premium-consumption.png
backgroundSize: 60%
level: 2
---

# GitHub Copilot Premium Requests

- **All requests** using **premium features** with a **non base model**
  - Premium features:
    - Copilot Chat
    - Copilot Agent Mode
    - Copilot Code Review
    - Copilot Extensions
- If free premium requests exceeded additional requests charged with **$0.04 USD * model multiplier**

<br />

## Review premium request usage

- [GitHub WebSite](https://github.com/settings/copilot/features): `Profile` > `Settings` > `Copilot` > `Features`

<!--

⚠️ Billing for premium requests will start on **June 4, 2025** for all plans.

💡 Paste links in chat:

- [About premium requests](https://docs.github.com/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests)
  - [Model multipliers](https://docs.github.com/en/copilot/managing-copilot/monitoring-usage-and-entitlements/about-premium-requests#model-multipliers)
- [Viewing premium request usage](https://github.com/settings/copilot/features)
-->

---
level: 2
---

# GitHub Copilot Base Models

|                   | GPT-4o                     | GPT-4.1                      |
| ----------------- | -------------------------- | ---------------------------- |
|                   | ⚠️ Deprecated             |                               |
| **Used for**      | Completions, Chat | GitHub Copilot Chat                   |
| **Speed**         | faster, less powerful      | Slower, more powerful        |
| **Max Tokens**    | 128k                       | 128k                         |
| **Training Date** | March 2025                 | June 2024                    |

<!--
ℹ️ Previous model for Completions was **GPT-3.5**
- **Speed:** Fast
- **Max Tokens:** up to 16k
- **Training Date:** September 2021

💡 Paste links in chat:

- [OpenAI GPT-4.1 is now generally available in GitHub Copilot as the new default model](https://github.blog/changelog/2025-05-08-openai-gpt-4-1-is-now-generally-available-in-github-copilot-as-the-new-default-model/)
- [Training data for GPT-4o](https://github.blog/changelog/2025-05-27-gpt-4o-copilot-may-update)
-->

---
layout: two-column
level: 2
---

# GitHub Copilot Additional Models

::left::

<!-- Iframe scrolling to 50% of the page -->
<PartialWebContent url="https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot" regex="(?<=#models[\s\S]*?)(<table[\s\S]*?>[\s\S]*?<\/table>)" scale="75" height="370px"/>

::right::

## Note

- Some models are in public preview and subject to change
- The model selection depends on enabled models by the organization

<br/>

**Source:** [https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot#models](https://docs.github.com/en/copilot/about-github-copilot/plans-for-github-copilot#models)

<!--
💡 Paste links in chat:

- [Choosing the right AI model for your task](https://docs.github.com/en/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task)
-->
