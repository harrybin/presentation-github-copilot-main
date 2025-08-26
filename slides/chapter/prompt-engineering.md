---
layout: cover-dark
background: /brothers-1-large.jpg
backgroundPosition: 20% 100%
---

# Prompt Engineering

---
layout: image-left
background: /brothers-1-left.jpg
title: Prompt Engineering Definition
level: 2
---

<div class="text-center mt-8">

  <span class="text-3xl">
    <i>"Prompt engineering is the process of <strong>structuring</strong> or <strong>crafting</strong> an instruction in order to produce the <strong>best</strong> possible output from a <strong>generative AI model</strong>."</i>
  </span>

<br />
<br />

[Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering)
</div>

---
level: 2
---

# Prompt Engineering Techniques

<v-click>

- ## Zero-Shot prompting
  No prior examples, expecting Copilot to understand and generate relevant code purely from the given task description.

<br />

</v-click>

<v-click>

- ## One-Shot and n-Shot prompting
  Provide a single example or multiple set the context, assisting Copilot in generating a similar outcome.

<br />

</v-click>

<v-click>

- ## Chain-of-Thought reasoning
  Enables complex reasoning capabilities through intermediate reasoning steps to get better results on complex tasks

</v-click>

<!--
[click]
Zero-Shot prompting

[click]
One-Shot and n-Shot prompting

[click]
Chain-of-Thought reasoning
-->

---
level: 2
---

# Zero-Shot Prompting

Execute tasks **without** any **specific context** and **examples** given beforehand

<br />

```txt
Create a C# program for a simple calculator
that performs basic arithmetic operations based on user input
```

<br />

```txt
Create a C# method that reads content from a file,
appends additional text, and writes it to a new file
```

<br />

```txt
Create a C# console application that starts a basic web server
responding with 'Hello, World!' to GET requests
```

---
level: 2
---

# One-Shot Prompting

Provide a **single example** for an **improved outcome**

<br />

```txt {1-2|1-4|all}
Create a C# model for a FlightLogSignature property

Example: 17121903-DEP-ARR-WB001

17th of December 1903 Departure from Kitty Hawk,
NC Arrival at Manteo, NC Flight number WB001
```

<!--
[click]
Your task for copilot may look like this..
But to you think Copilot know what you out of this?

[click]
Add an example of the data you imagine the model should hold
-->

---
level: 2
---

# n-Shot Prompting

**@workspace** provides additional **context** for the **user prompt** out-of-the-box

<br />

<v-click>

```bash
@workspace create a pipeline to build and deploy the application to Azure

```

</v-click>

<br />

<v-click>

```bash
@workspace using the Airfield class, create an API controller with all CRUD operations,
add test data for the first 3 airfields used by the Wright Brothers
```

</v-click>

<!--
[click]
Build pipeline

[click]
Build API controller
-->

---
level: 2
---

# Chain-Of-Thought Prompting

<div class="text-center mt-8 max-w-xl mx-auto">

<span class="text-3xl">Enable **complex reasoning** capabilities through **intermediate** reasoning **steps**</span>

</div>

---
level: 2
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto!">Chain-of-Thought Prompting</h1>

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/11 -->
<h2>Create Aerobatics Sequence Signature Parsing</h2>

<br />

```md {1|3-7|9-14|all}
Parse an aerobatic sequence signature into a C# model.

## Aerobatic Sequence Examples

- L4B-H2C-R3A-S1D-T2E
- L1A-H1B-R1C-T1E
- L2A-H2B-R2C

## Maneuver

- Maneuvers: L = Loop, H = Hammerhead, R = Roll, S = Spin, T = Tailslide
- Number represents repeat count
- Letter represents difficulty (A-E)
- Difficulty multipliers: A = 1.0, B = 1.2, C = 1.4, D = 1.6, E = 1.8
```

<!--
**Idea:**  
Create an endpoint parsing a **aerobatic sequence signature** and returning the difficulty of the sequence.

**The approach:**  
Specify everthing Copilot may need to generate the code all at once.

[click]
Provide examples of **aerobatic sequence signatures**

[click]
Provide examples of maneuvers
-->

---
level: 2
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto!">Chain-of-Thought Prompting</h1>

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/11 -->
<h2>Create Aerobatics Sequence Signature Parsing</h2>

<br />

```md  {0|1-5|7-17|9|11-15|17|all}
## Aerobatic Sequence Difficulty Method

Add a difficulty calculation method with the following rules:
- A roll after a loop is scored double
- A spin after a tailslide is scored triple

## Chain-of-Thought Reasoning

Example: L4B-R3A-H2C-T2E-S1D

- Loop: 4 * 1.2 = 4.8
- Roll: 3 * 1 * 2 (roll after a loop) = 6.0
- Hammerhead: 2 * 1.4 = 2.8
- Tailslide: 2 * 1.8 = 3.6
- Spin: 1 * 1.6 * 3 (spin after a tailslide) = 4.8

Total: 22
```

<!--
Add detailed description how to create a **difficulty calculation** method

[click]
Describe the rules how the difficulty is calculated

[click]
Provide an example/reasoning for the difficulty calculation

[click]
Provide an example how the difficulty signature looks like

[click]
Provide examples how each aerobatic sequence is calculated

[click]
Provide the expected result
-->

---
level: 2
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto!">Demo: Chain-of-Thought Prompting</h1>

```md {*}{maxHeight:'420px'}
Parse an aerobatic sequence signature into a C# model.

## Aerobatic Sequence Examples

- L4B-H2C-R3A-S1D-T2E
- L1A-H1B-R1C-T1E
- L2A-H2B-R2C

## Maneuver

- Maneuvers: L = Loop, H = Hammerhead, R = Roll, S = Spin, T = Tailslide
- Number represents repeat count
- Letter represents difficulty (A-E)
- Difficulty multipliers: A = 1.0, B = 1.2, C = 1.4, D = 1.6, E = 1.8

## Aerobatic Sequence Difficulty Method

Add a difficulty calculation method with the following rules:
- A roll after a loop is scored double
- A spin after a tailslide is scored triple

## Chain-of-Thought Reasoning

Example: L4B-R3A-H2C-T2E-S1D

- Loop: 4 * 1.2 = 4.8
- Roll: 3 * 1 * 2 (roll after a loop) = 6.0
- Hammerhead: 2 * 1.4 = 2.8
- Tailslide: 2 * 1.8 = 3.6
- Spin: 1 * 1.6 * 3 (spin after a tailslide) = 4.8

Total: 22
```

<!--
Use the [Copilot bootcamp repo ](https://github.com/xebia/Copilot-Bootcamp-ForEndUsers) for these demos

⚠️ Execute this demo in the **Ask mode**. The **Edit** and **Agent** mode will be shown later.

⚠️ Ensure the `FlightsController.cs` file is used as prompt context.  
That ensures that also a new endpoint will / may be suggested.

- Copy the prompt and paste it in the Copilot Chat
- Copilot should generate two suggestions
  - A new `AerobaticSequence` class
  - A new API endpoint
- Above of the suggestions click the **Apply** icon (or copy the code to the respective class)
  - Each suggestion should be applied in the respective class
-->

---
title: Chain-Of-Thought Prompting Result Example
level: 2
---

<!-- issue in theme. See: https://github.com/xebia/presentation-templates/issues/12 -->
<h1 class="h-auto!">Chain-of-Thought Prompting Result Example</h1>

```csharp {*}{maxHeight:'420px'}
  public static AerobaticSequence Parse(string signature)
  {
    var sequence = new AerobaticSequence();
    var maneuvers = Regex.Matches(signature, @"([A-Z]\d[A-E])");

    foreach (Match maneuver in maneuvers)
    {
      var type = maneuver.Value[0].ToString();
      var repeatCount = int.Parse(maneuver.Value.Substring(1, maneuver.Value.Length - 2));
      var difficulty = maneuver.Value[^1];

      sequence.Maneuvers.Add(new Maneuver
      {
        Type = type,
        RepeatCount = repeatCount,
        Difficulty = difficulty
      });
    }

    sequence.CalculateDifficulty();
    return sequence;
  }

  private void CalculateDifficulty()
  {
    double difficulty = 0;

    for (int i = 0; i < Maneuvers.Count; i++)
    {
      var multiplier = GetMultiplier(Maneuvers[i].Difficulty);
      var repeatCount = Maneuvers[i].RepeatCount;

      if (i > 0 && (Maneuvers[i - 1].Type == "L" && Maneuvers[i].Type == "R" ||
                    Maneuvers[i - 1].Type == "T" && Maneuvers[i].Type == "S"))
      {
        multiplier *= Maneuvers[i].Type == "R" ? 2 : 3;
      }

      difficulty += repeatCount * multiplier;
    }

    Difficulty = Math.Round(difficulty, 2);
  }

  private double GetMultiplier(char difficulty)
  {
    return difficulty switch
    {
      'A' => 1.0,
      'B' => 1.2,
      'C' => 1.4,
      'D' => 1.6,
      'E' => 1.8,
      _ => throw new ArgumentException("Invalid difficulty")
    };
  }
```

<!--
⚠️ Don't delete the generated code, as the `Parse()` method will be used in the demo for **Generating Test Data** prompt.

Compare the results
-->

---
level: 2
---

# Chain-Of-Thought Prompting Test

Ask Copilot to create a command to call the endpoint

<br />

<v-click>

## Start the API

```bash
@terminal create a command to start the WrightBrothersApi project
```

<br />

</v-click>

<v-click>

## Call the API endpoint

```bash
@terminal call the new endpoint running on localhost:1903 for getting aerobaticDifficulty for flight number 3
```

<br />

</v-click>

<v-click>

The result should be a difficulty of: **7.2**

</v-click>

<!--
[click]
⚠️ Ensure the API is running

Ensure that the command is as follows, as the **Ask** mode don't resolve to project file correctly:

_dotnet run --project .\WrightBrothersApi\WrightBrothersApi\WrightBrothersApi.csproj_

[click]
⚠️ Open a new terminal session to execute the command

[click]
⚠️ If the result is other then **7.2** than `sequence.Split('-');` in the `AerobaticSequence` class may use an **en dash** (–) instead of an **dash** (-)

ℹ️ We will use the **Chain-of-Thought Prompting example** later again, while discussing the **Edit** and **Agent** mode.

Now lets discuss some **Advanced Prompt Engineering Techniques**.
-->
