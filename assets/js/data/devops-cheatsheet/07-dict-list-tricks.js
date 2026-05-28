window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "7. Dict & List Tricks",
  emoji: "⚡",
  hint: "These come up inside almost every coding task",
  memorize: "[x for x in list if cond]  |  sorted(list, key=lambda)  |  defaultdict(list)",
  python: `# List comprehension (filter)
logs = ["INFO ok", "ERROR fail", "INFO ok", "ERROR crash"]
errors = [l for l in logs if "ERROR" in l]

# Dict comprehension
servers = ["web01", "web02", "db01"]
status = {s: "unknown" for s in servers}

# Sort list of dicts
deploys = [
    {"app": "api", "time": 1200},
    {"app": "web", "time": 800},
]
by_time = sorted(deploys, key=lambda d: d["time"], reverse=True)

# Group with defaultdict
from collections import defaultdict
groups = defaultdict(list)
for entry in logs:
    level = entry.split()[0]
    groups[level].append(entry)

# Zip two lists into dict
names = ["web01", "web02"]
ips = ["10.0.0.1", "10.0.0.2"]
mapping = dict(zip(names, ips))

# Enumerate
for i, server in enumerate(servers):
    print(f"{i+1}. {server}")`,
  bash: `# Arrays in bash
servers=("web01" "web02" "db01")
for s in "\${servers[@]}"; do
    echo "Checking $s"
done

# Associative array (bash 4+)
declare -A status
status[web01]="running"
status[db01]="stopped"
echo "\${status[web01]}"`
});
