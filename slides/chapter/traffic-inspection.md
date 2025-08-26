layout: cover-dark
background: /plane_large.jpg
---

```json {*}{maxHeight:'400px'}
{
    // date: 2025-08-15 (filtered: chat-capable unique models; legacy GPT-3.5 omitted intentionally)
    "data": [
        {
            "id": "gpt-4.1",
            "name": "GPT-4.1",
            "vendor": "Azure OpenAI",
            "version": "gpt-4.1-2025-04-14",
            "capabilities": {
                "family": "gpt-4.1",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 16384, "max_prompt_tokens": 128000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "structured_outputs": true, "tool_calls": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "gpt-5",
            "name": "GPT-5 (Preview)",
            "vendor": "Azure OpenAI",
            "version": "gpt-5",
            "capabilities": {
                "family": "gpt-5",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 64000, "max_prompt_tokens": 128000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "structured_outputs": true, "tool_calls": true, "vision": true},
                "type": "chat"
            },
            "preview": true
        },
        {
            "id": "gpt-4o-mini",
            "name": "GPT-4o mini",
            "vendor": "Azure OpenAI",
            "version": "gpt-4o-mini-2024-07-18",
            "capabilities": {
                "family": "gpt-4o-mini",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 4096, "max_prompt_tokens": 12288},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true},
                "type": "chat"
            }
        },
        {
            "id": "gpt-4",
            "name": "GPT 4",
            "vendor": "Azure OpenAI",
            "version": "gpt-4-0613",
            "capabilities": {
                "family": "gpt-4",
                "limits": {"max_context_window_tokens": 32768, "max_output_tokens": 4096, "max_prompt_tokens": 32768},
                "supports": {"streaming": true, "tool_calls": true},
                "type": "chat"
            }
        },
        {
            "id": "gpt-4-0125-preview",
            "name": "GPT 4 Turbo",
            "vendor": "Azure OpenAI",
            "version": "gpt-4-0125-preview",
            "capabilities": {
                "family": "gpt-4-turbo",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 4096, "max_prompt_tokens": 64000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true},
                "type": "chat"
            }
        },
        {
            "id": "gpt-4o",
            "name": "GPT-4o",
            "vendor": "Azure OpenAI",
            "version": "gpt-4o-2024-11-20",
            "capabilities": {
                "family": "gpt-4o",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 4096, "max_prompt_tokens": 64000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "o3-mini",
            "name": "o3-mini",
            "vendor": "Azure OpenAI",
            "version": "o3-mini-2025-01-31",
            "capabilities": {
                "family": "o3-mini",
                "limits": {"max_context_window_tokens": 200000, "max_output_tokens": 100000, "max_prompt_tokens": 64000},
                "supports": {"streaming": true, "structured_outputs": true, "tool_calls": true},
                "type": "chat"
            }
        },
        {
            "id": "o3",
            "name": "o3 (Preview)",
            "vendor": "Azure OpenAI",
            "version": "o3-2025-04-16",
            "capabilities": {
                "family": "o3",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 16384, "max_prompt_tokens": 128000},
                "supports": {"streaming": true, "structured_outputs": true, "vision": true},
                "type": "chat"
            },
            "preview": true
        },
        {
            "id": "o4-mini",
            "name": "o4-mini (Preview)",
            "vendor": "Azure OpenAI",
            "version": "o4-mini-2025-04-16",
            "capabilities": {
                "family": "o4-mini",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 16384, "max_prompt_tokens": 128000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "structured_outputs": true, "tool_calls": true, "vision": true},
                "type": "chat"
            },
            "preview": true
        },
        {
            "id": "claude-3.5-sonnet",
            "name": "Claude Sonnet 3.5",
            "vendor": "Anthropic",
            "version": "claude-3.5-sonnet",
            "capabilities": {
                "family": "claude-3.5-sonnet",
                "limits": {"max_context_window_tokens": 90000, "max_output_tokens": 8192, "max_prompt_tokens": 90000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "claude-3.7-sonnet",
            "name": "Claude Sonnet 3.7",
            "vendor": "Anthropic",
            "version": "claude-3.7-sonnet",
            "capabilities": {
                "family": "claude-3.7-sonnet",
                "limits": {"max_context_window_tokens": 200000, "max_output_tokens": 16384, "max_prompt_tokens": 90000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "claude-3.7-sonnet-thought",
            "name": "Claude Sonnet 3.7 Thinking",
            "vendor": "Anthropic",
            "version": "claude-3.7-sonnet-thought",
            "capabilities": {
                "family": "claude-3.7-sonnet-thought",
                "limits": {"max_context_window_tokens": 200000, "max_output_tokens": 16384, "max_prompt_tokens": 90000},
                "supports": {"streaming": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "claude-sonnet-4",
            "name": "Claude Sonnet 4",
            "vendor": "Anthropic",
            "version": "claude-sonnet-4",
            "capabilities": {
                "family": "claude-sonnet-4",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 16000, "max_prompt_tokens": 128000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "claude-opus-4",
            "name": "Claude Opus 4",
            "vendor": "Anthropic",
            "version": "claude-opus-4",
            "capabilities": {
                "family": "claude-opus-4",
                "limits": {"max_context_window_tokens": 80000, "max_output_tokens": 16000, "max_prompt_tokens": 80000},
                "supports": {"streaming": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "claude-opus-41",
            "name": "Claude Opus 4.1 (Preview)",
            "vendor": "Anthropic",
            "version": "claude-opus-41",
            "capabilities": {
                "family": "claude-opus-4.1",
                "limits": {"max_context_window_tokens": 80000, "max_output_tokens": 16000, "max_prompt_tokens": 80000},
                "supports": {"streaming": true, "vision": true},
                "type": "chat"
            },
            "preview": true
        },
        {
            "id": "gemini-2.0-flash-001",
            "name": "Gemini 2.0 Flash",
            "vendor": "Google",
            "version": "gemini-2.0-flash-001",
            "capabilities": {
                "family": "gemini-2.0-flash",
                "limits": {"max_context_window_tokens": 1000000, "max_output_tokens": 8192, "max_prompt_tokens": 128000},
                "supports": {"streaming": true, "vision": true},
                "type": "chat"
            }
        },
        {
            "id": "gemini-2.5-pro",
            "name": "Gemini 2.5 Pro (Preview)",
            "vendor": "Google",
            "version": "gemini-2.5-pro",
            "capabilities": {
                "family": "gemini-2.5-pro",
                "limits": {"max_context_window_tokens": 128000, "max_output_tokens": 64000, "max_prompt_tokens": 128000},
                "supports": {"parallel_tool_calls": true, "streaming": true, "tool_calls": true, "vision": true},
                "type": "chat"
            },
            "preview": true
        }
    ],
    "object": "list"
}
```

<!-- Filter: kept chat-capable unique models; removed embeddings, completion-only, duplicates; omitted legacy GPT-3.5 for brevity. -->

<!--
This is the API endpoint response.

Here you can also see which image formats are supported by the models.

💡 Scroll the markdown in the **public slide mode**.  
Scrolling in the **presenter mode** don't mirror the scrolling.
-->

---
layout: two-column
title: Copilot Model Insights
level: 2
---

<style scoped>
.copilot-ide-table-wrapper {
  max-height: 50vh;
  overflow-y: auto;
  overflow-x: auto;
}
</style>

<h1 class="h-auto!">Copilot Model Insights</h1>

<div class="copilot-ide-table-wrapper">

| Name                       | Version                  | Premium | Max Context Tokens | Max Output Tokens | Max Prompt Tokens | Vision Support | Media Types                                 |
|----------------------------|--------------------------|---------|-------------------|-------------------|-------------------|---------------|----------------------------------------------|
| GPT-4.1                    | gpt-4.1-2025-04-14       | false   | 128000            | 16384             | 128000            | Yes           | image/jpeg, image/png, image/webp, image/gif |
| GPT-4o                     | gpt-4o-2024-11-20        | false   | 128000            | 4096              | 64000             | Yes           | image/jpeg, image/png, image/webp, image/gif |
| GPT-5 (Preview)            | gpt-5                    | false   | 128000            | 64000             | 128000            | Yes           | image/jpeg, image/png, image/webp, image/gif |
| o3 (Preview)               | o3-2025-04-16            | true    | 128000            | 16384             | 128000            | Yes           | image/jpeg, image/png, image/webp, image/gif |
| o4-mini (Preview)          | o4-mini-2025-04-16       | true    | 128000            | 16384             | 128000            | Yes           | image/jpeg, image/png, image/webp, image/gif |
| Claude Sonnet 3.5          | claude-3.5-sonnet        | true    | 90000             | 8192              | 90000             | Yes           | image/jpeg, image/png, image/webp            |
| Claude Sonnet 3.7          | claude-3.7-sonnet        | true    | 200000            | 16384             | 90000             | Yes           | image/jpeg, image/png, image/webp            |
| Claude Sonnet 3.7 Thinking | claude-3.7-sonnet-thought| true    | 200000            | 16384             | 90000             | Yes           | image/jpeg, image/png, image/webp            |
| Claude Sonnet 4            | claude-sonnet-4          | true    | 128000            | 16000             | 128000            | Yes           | image/jpeg, image/png, image/webp            |
| Claude Opus 4              | claude-opus-4            | true    | 80000             | 16000             | 80000             | Yes           | image/jpeg, image/png, image/webp            |
| Claude Opus 4.1 (Preview)  | claude-opus-41           | true    | 80000             | 16000             | 80000             | Yes           | image/jpeg, image/png, image/webp            |
| Gemini 2.0 Flash           | gemini-2.0-flash-001     | true    | 1000000           | 8192              | 128000            | Yes           | image/jpeg, image/png, image/webp, image/heic, image/heif |
| Gemini 2.5 Pro (Preview)   | gemini-2.5-pro           | true    | 128000            | 64000             | 128000            | Yes           | image/jpeg, image/png, image/webp, image/heic, image/heif |
| ...

</div>

<!--
This is an excerpt of the available models by Copilot, and the **max tokens** for

- prompt
- context
- output

and supported media types.

⚠️ The result may vary based on the companys enabled models
-->
