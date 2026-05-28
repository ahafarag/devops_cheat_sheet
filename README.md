# Engineering Interview & Reference Guides

A small, dependency-free **static web app** of interactive cheat sheets and interview-prep
guides for Java engineers, DevOps practitioners, and cloud/IaC (Azure DevOps, AWS + Terraform)
interviews. No build step, no framework — just HTML, CSS, and vanilla JavaScript served as
static files.

🔗 **Live site:** https://ahafarag.github.io/devops_cheat_sheet/

## Guides

| Guide | Page | Contents |
|-------|------|----------|
| ☕ **Java Developer — Complete Guide** | `java_developer_guide.html` | 10 tabs / 67 topics: core language, OOP & design, collections, modern Java (8→21), concurrency, JVM & memory, Spring Boot, persistence, testing, and interview Q&A. Topics tagged **Basic / Intermediate / Advanced**. |
| 🎯 **DevOps Interview Prep** | `devops_full_interview_prep.html` | 8 tabs / 53 topics: tech-stack depth, coding, CS fundamentals, tooling, problem solving, containers, Kubernetes, and security — each with likely questions and ready-to-say answers. |
| 🔷 **Azure DevOps — Complete Guide** | `azure_devops_guide.html` | 7 tabs / 31 topics: Boards, Repos & branch policies, YAML Pipelines, environments & approvals, Artifacts & variables, agents & secretless service connections, plus a dedicated Azure DevOps interview Q&A tab. |
| ☁️ **AWS + Terraform — Complete Guide** | `aws_terraform_guide.html` | 7 tabs / 29 topics: AWS global infra & IAM, compute & containers, VPC networking, storage & databases, plus Terraform core and advanced (state, modules, remote backends), and an AWS & Terraform interview Q&A tab. |
| ⌨️ **DevOps Commands Reference** | `devops_commands.html` | 313 commands across Linux, Git, Docker, Kubernetes, Helm, and Terraform. Two views: **flip cards** as a quiz (front = the task/question, flip to reveal the command) and a searchable **3-column table** (# · command · description), with tool filters and click-to-copy. |
| 🚀 **Python & Bash Cheat Sheet** | `devops_code_cheatsheet.html` | The 7 coding patterns that cover ~90% of DevOps screen-share questions, with side-by-side Python and Bash. |

## Project structure

```
.
├── index.html                       # Landing page (cards linking to each guide)
├── java_developer_guide.html        # Thin shell: loads CSS + data + renderer
├── devops_full_interview_prep.html  # Thin shell
├── azure_devops_guide.html          # Thin shell
├── aws_terraform_guide.html         # Thin shell
├── devops_commands.html             # Thin shell (card + table views)
├── devops_code_cheatsheet.html      # Thin shell
├── assets/
│   ├── css/
│   │   ├── guide.css                # Styles for the tabbed "AREAS" guides
│   │   ├── cheatsheet.css           # Styles for the Python/Bash accordion
│   │   ├── commands.css             # Styles for the flip-card + table reference
│   │   └── landing.css              # Styles for the landing page
│   └── js/
│       ├── guide-renderer.js        # Builds tabbed guides from window.AREAS
│       ├── cheatsheet-renderer.js   # Builds the accordion from window.SECTIONS
│       ├── commands-renderer.js     # Builds card/table views from window.COMMANDS
│       └── data/                    # Content, split into one file per tab/section
│           ├── java/                #   01-core.js … 10-interview-qa.js
│           ├── devops-interview/    #   01-tech-stack.js … 08-security-quality.js
│           ├── azure-devops/        #   01-overview-boards.js … 07-interview-qa.js
│           ├── aws-terraform/       #   01-core-iam.js … 07-interview-qa.js
│           ├── devops-commands/     #   01-linux.js … 06-terraform.js (one per tool)
│           └── devops-cheatsheet/   #   01-file-io.js … 07-dict-list-tricks.js
├── README.md
└── LICENSE                          # MIT
```

### How it works

Each HTML page is a **thin shell**: it links a stylesheet, loads the content data files in
order, then loads the matching renderer last. Data files are plain scripts that push onto a
global array — no modules or `fetch`, so everything works both from `file://` and over HTTP.

**Tabbed guides** (`guide-renderer.js`) read `window.AREAS`. Each data file looks like:

```js
window.AREAS = window.AREAS || [];
window.AREAS.push({
  nav: 'Core',                       // short tab label
  number: 'TAB 1',
  title: 'Java Core / Language Fundamentals',
  color: 'var(--accent1)',
  what: 'Short framing text…',
  topics: [
    { name: 'Strings — Immutability', tag: 'basic', body: '<div class="explanation">…</div>' }
  ]
});
```

Topic `tag` values map to colored badges: `basic` / `inter` / `adv` (Java guide) and
`must` / `likely` / `possible` (DevOps prep).

**Cheat sheet** (`cheatsheet-renderer.js`) reads `window.SECTIONS`. Each data file looks like:

```js
window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: '1. File I/O — Read, Write, Parse Logs',
  emoji: '📄',
  hint: 'They\'ll say: "Parse this log file and count errors"',
  memorize: 'with open(...) as f: → for line in f:',
  python: `# python code…`,
  bash:   `# bash code…`
});
```

**Commands reference** (`commands-renderer.js`) reads `window.COMMANDS` and offers a flip-card
view and a searchable 3-column table. The renderer assigns the sequential `#` itself, so data
files just list commands grouped by tool and sub-category:

```js
window.COMMANDS = window.COMMANDS || [];
window.COMMANDS.push({
  group: 'Linux',                          // tool — drives the filter chips
  category: 'Basic Linux Commands',        // sub-section heading
  items: [
    { command: 'pwd', description: 'Print the current working directory.' }
  ]
});
```

## Running locally

It's a static site, so just open `index.html` in a browser. For clean relative-path behavior,
serve it from any static server:

```bash
# Python
python -m http.server 8000
# or Node
npx serve .
```

Then visit http://localhost:8000.

## Adding content

- **Add a topic to an existing tab:** edit the relevant file under `assets/js/data/<guide>/`
  and add an object to its `topics` (or `SECTIONS`) array.
- **Add a new tab:** create a new numbered data file in the guide's data folder, then add a
  matching `<script src="…">` tag to that guide's HTML shell **before** the renderer script.
  The tab order follows the script include order.
- **Add a new guide:** create a CSS file (or reuse `guide.css`), a data folder, a thin HTML
  shell, and a card on `index.html`.

In HTML `body` strings, escape angle brackets as `&lt;`/`&gt;` (e.g. for Java generics like
`List&lt;String&gt;`) so they render as text rather than being parsed as tags.

## License

[MIT](LICENSE) © 2026 ahafarag. You're free to use, modify, and distribute this with attribution.
