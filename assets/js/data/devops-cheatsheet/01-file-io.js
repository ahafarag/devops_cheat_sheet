window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "1. File I/O — Read, Write, Parse Logs",
  emoji: "📄",
  hint: "They'll say: 'Parse this log file and count errors'",
  memorize: "with open('file','r') as f: → for line in f: → if 'X' in line → Counter()",
  python: `# Read a file line by line
with open("app.log", "r") as f:
    for line in f:
        if "ERROR" in line:
            print(line.strip())

# Count error types
from collections import Counter

errors = []
with open("app.log", "r") as f:
    for line in f:
        if "ERROR" in line:
            errors.append(line.split("ERROR")[1].strip())

top_errors = Counter(errors).most_common(5)
for msg, count in top_errors:
    print(f"{count}: {msg}")

# Write output
with open("report.txt", "w") as f:
    f.write("Error Report\\n")
    for msg, count in top_errors:
        f.write(f"{count}: {msg}\\n")`,
  bash: `# Count errors in log
grep -c "ERROR" app.log

# Top 5 error messages
grep "ERROR" app.log | awk -F'ERROR' '{print $2}' | sort | uniq -c | sort -rn | head -5

# Tail logs in real-time filtering errors
tail -f app.log | grep --line-buffered "ERROR"

# Find large log files (>100MB)
find /var/log -type f -size +100M -exec ls -lh {} \\;`
});
