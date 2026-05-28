window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "6. Files & Directories",
  emoji: "📁",
  hint: "They'll say: 'Find old files, clean up, rotate logs'",
  memorize: "Path('/dir').glob('*.log') → f.stat().st_size → f.unlink()",
  python: `import os
from pathlib import Path
import time

# List files with pathlib
log_dir = Path("/var/log")
for f in log_dir.glob("*.log"):
    print(f.name, f.stat().st_size)

# Find files older than 7 days
now = time.time()
for f in Path("/tmp").glob("*"):
    if f.is_file():
        age_days = (now - f.stat().st_mtime) / 86400
        if age_days > 7:
            print(f"Old file: {f.name} ({age_days:.0f} days)")
            f.unlink()   # delete it

# Create directory safely
Path("/app/logs").mkdir(parents=True, exist_ok=True)`,
  bash: `# Find and delete files older than 7 days
find /tmp -type f -mtime +7 -delete

# Find large files
find / -type f -size +500M 2>/dev/null

# Disk usage of directories
du -sh /var/log/*

# Safe mkdir
mkdir -p /app/logs/archive

# Copy with timestamp backup
cp config.yaml "config.yaml.bak.$(date +%Y%m%d)"`
});
