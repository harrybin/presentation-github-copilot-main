---
layout: cover-dark
background: /pilot-large.jpg
backgroundPosition: right
_note: speaker/%SLIDEV_SPEAKER%/notes/chapter/advanced-prompt-engineering-techniques.md
---

# Advanced Prompt Engineering Techniques

<!--
The following examples are taken from a Powerpoint presentation by the NL colleagues.

⚠️ **Tip:** Based on how much time you have left, decide if to demo or just explain the examples.
-->

---
level: 2
---

# Go Step By Step

Ask Copilot to describe an implementation plan, before providing the actual code, so we can tweak first

<br />

```
I want to implement the game of Tic-Tac-Toe as a console application in C#. Help me implement this.
Don't generate code. Describe the solution, and breaking the solution down as task list based on
the guidance mentioned above.
```

<!--
💡 Show the demo in VSCode

💡 Paste links in chat:

- [Martin Fowler: An example of LLM prompting for programming](https://martinfowler.com/articles/2023-chatgpt-xu-hao.html)

With this prompt technique, also called **Chain of Thought** prompting, we asks Copilot for an implementation strategy rather then code, which would be called **General Knowledge** prompting.

Then the implementation strategy can be refined.
-->

---
level: 2
---

# Directional Stimulus Prompting

Ask Copilot for an explanation, then give a hint on the parts that you think are relevant

<br />

```
Explain this code for me. Hint: Public methods: [..], Calls to other classes: [..]
```

<!--
💡 Show the demo in VSCode

💡 Use one of the `Controller` classes for the demo
-->

---
level: 2
---

# Visualizing Code Flows

Ask Copilot to visualize code flows as MermaidJS flowchart

<br />

```
Generate a flowchart for this code in MermaidJS
```

<!--
💡 Show the demo in VSCode

For the preview of the generated **MermaidJS** use the [Mermaid Chart](https://marketplace.visualstudio.com/items?itemName=MermaidChart.vscode-mermaid-chart) extension

💡 Show generation of code from Mermaid flow diagram
-->

---
level: 2
---

# Generating Test Data

Ask Copilot to generate test data within a specific context, and provide the example format

<br />

```
Generate test data for the parse method.
Each sample should have min 3 and max 6 sequences seperated by the - character.
Give 10 samples. Format: [InlineData("<sample>")]
```

```csharp {*}{maxHeight:'220px'}
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
💡 Show the demo in VSCode

💡 Use the generated `Parse()` method for aerobatic sequences from the **Chain-of-Thought Prompting** demo.
This is the code we generated in the chain-of-thought example during the Getting Started session.

Copy the code into the FlightsController.cs file, and then ask Copilot to generate test data for the `Parse()` method.

Select only the method to minimize the context.
-->

---
level: 2
---

# Generating Test Data For A Database

Ask Copilot to generate test data for a database by providing a table schema

<br />

```
Given the database schema below generate valid insert statements include 4 rows for each table

CREATE TABLE departments (
  DepartmentId INT PRIMARY KEY,
  DepartmentName VARCHAR(50)
);

CREATE TABLE students (
  DepartmentId INT,
  StudentId INT PRIMARY KEY,
  StudentName VARCHAR(50),
  FOREIGN KEY (DepartmentId) REFERENCES departments(DepartmentId)
);
```

<!--
💡 Show the demo in VSCode
-->

---
level: 2
---

# Convert Data

Ask Copilot to convert data to another format

<br />

```
Convert the CSV below to a Markdown table

Firstname,Lastname,Email
John,Smith,john.smith@mail.com
Jane,Smith,jane.smith@mail.com
```

<!--
💡 Show the demo in VSCode
-->

---
level: 2
---

# Convert Code

Ask Copilot to convert code to another language

<br />

```powershell {*}{maxHeight:'300px'}
Convert the below PowerShell function to a C# function

function Convert-CsvToJson {
    param (
        [Parameter(Mandatory = $true)]
        [string]$CsvFilePath
    )

    try {
        # Check if the file exists
        if (-not (Test-Path $CsvFilePath)) {
            throw "The file '$CsvFilePath' does not exist."
        }

        # Read the CSV file
        $csvData = Import-Csv -Path $CsvFilePath

        # Convert the data to JSON
        $jsonData = $csvData | ConvertTo-Json -Depth 10

        # Generate the JSON file path
        $jsonFilePath = [System.IO.Path]::ChangeExtension($CsvFilePath, 'json')

        # Save the JSON data to the new file
        $jsonData | Set-Content -Path $jsonFilePath -Encoding UTF8

        Write-Host "Successfully converted '$CsvFilePath' to '$jsonFilePath'."
    } catch {
        Write-Error "An error occurred: $_"
    }
}
```

<!--
💡 Scroll the markdown in the **public slide mode**.  
Scrolling in the **presenter mode** don't mirror the scrolling.

💡 Show the demo in VSCode

💡 Optional show also the conversion to Python or other langauge
-->

---
level: 2
---

# Prompt Engineering Recap

## Strategies for better prompts

<v-clicks>

  * Be specific and detailed
  * Provide context
  * Use natural language
  * Break down complex tasks
  * Specify input and output
  * Include examples
  * Iterate and refine
  * Consider comments as prompts

</v-clicks>

<!--
Let take a look at 8 strategies for better prompts.

[click]
**Be specific and detailed**

Don't just say _"write a function"_. Instead, say _"write a python function that does xyz"_.

[click]
**Provide context**

Include comments, code snippets or examples that explain the desired functionality.

Explain **what** you want **before** you ask Copilot to generate the **how**.

[click]
**Use natural language**

Copilot is designed to understand natural language, so you don't need to be overly formal.

No need for _please_, _thank you_, _could you_.  
Do rather commands, e.g. _create_, _convert_, _explian_.

[click]
**Break down complex tasks**

Divide complex problems into smaller, more manageable prompts.  
This helps Copilot focus on one aspect at a time.

[click]
**Specify input and output**

Clearly define the expected input parameters and the desired output format.

E.g. _"Input: array of integers, Output: sorted array of integers"_.

[click]
**Include examples**

Providing examples of how the code should behave can greatly improve the accuracy of the generated code.

[click]
**Iterate and refine**

If the initial suggestion isn't quite right, modify your prompt and try again.

Experiment with different wordings and levels of detail.

[click]
**Consider comments as prompts**

Write detailed comments outlining what a function or code block should do. Copilot often uses these comments to generate the code.
-->

---
level: 2
---

# Prompt Engineering Recap

## Best practices

- Start simple and progressively add detail
- Assume Copilot has **some** understanding, but doesn't know **your** specific requirements unless you tell it
- Think of Copilot as a junior developer who needs clear instructions

<v-click>

<br/>

## Overall takeaway

- Learning to write effective prompts is a crucial skill for maximizing the value of GitHub Copilot
- Clear prompts lead to more accurate, relevant, and useful code suggestions

</v-click>

<!--
Best practices

[click]
Overall takeaway

_"Make hours in the Cockpit"_
-->
