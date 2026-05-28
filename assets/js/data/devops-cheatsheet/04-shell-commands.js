window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "4. Run Shell Commands from Python",
  emoji: "🖥️",
  hint: "They'll say: 'Automate this with Python calling system commands'",
  memorize: "subprocess.run(['cmd','arg'], capture_output=True, text=True) → result.stdout",
  python: `import subprocess

# Run a command, capture output
result = subprocess.run(
    ["df", "-h"],
    capture_output=True,
    text=True
)
print(result.stdout)

# Check return code
result = subprocess.run(
    ["systemctl", "is-active", "nginx"],
    capture_output=True, text=True
)
if result.returncode == 0:
    print("nginx is running")
else:
    print("nginx is NOT running")

# Run with shell=True (for pipes)
result = subprocess.run(
    "ps aux | grep python | wc -l",
    shell=True, capture_output=True, text=True
)
print(f"Python processes: {result.stdout.strip()}")

# Run and raise error if it fails
subprocess.run(["docker", "build", "-t", "myapp", "."], check=True)`,
  bash: `# Check if service is running
if systemctl is-active --quiet nginx; then
    echo "nginx is running"
else
    echo "nginx is DOWN"
    systemctl restart nginx
fi

# Disk usage alert
USAGE=$(df / | tail -1 | awk '{print $5}' | tr -d '%')
if [ "$USAGE" -gt 80 ]; then
    echo "WARNING: Disk usage is \${USAGE}%"
fi

# Check if port is open
if nc -z localhost 8080 2>/dev/null; then
    echo "Port 8080 is open"
else
    echo "Port 8080 is closed"
fi`
});
