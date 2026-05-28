window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "5. Regex & String Parsing",
  emoji: "🔍",
  hint: "They'll say: 'Extract all IPs from this log'",
  memorize: "re.findall(r'pattern', text) → list  |  re.search(r'pattern', text).group(1)",
  python: `import re

log = '2026-05-28 10:23:45 ERROR [10.0.1.55] Connection refused from 192.168.1.100'

# Extract all IPs
ips = re.findall(r'\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}', log)
print(ips)  # ['10.0.1.55', '192.168.1.100']

# Extract timestamp
ts = re.search(r'(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2})', log)
print(ts.group(1))  # '2026-05-28 10:23:45'

# String methods (no regex needed)
line = "server=web01 status=200 time=0.45s"
parts = dict(item.split("=") for item in line.split())
print(parts["server"])   # web01`,
  bash: `# Extract IPs from log
grep -oE '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}' app.log

# Unique IPs sorted by frequency
grep -oE '[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+' app.log | sort | uniq -c | sort -rn

# Extract field from structured log
awk '{print $4}' access.log

# sed: replace in file
sed -i 's/old_value/new_value/g' config.txt`
});
