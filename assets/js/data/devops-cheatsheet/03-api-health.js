window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "3. API / Health Checks",
  emoji: "🌐",
  hint: "They'll say: 'Write a health check script for our services'",
  memorize: "requests.get(url, timeout=5) → r.status_code → try/except RequestException",
  python: `import requests

# Simple health check
response = requests.get("https://api.example.com/health", timeout=5)
if response.status_code == 200:
    print("Service is UP")
else:
    print(f"Service DOWN: {response.status_code}")

# Check multiple services
services = {
    "api": "https://api.example.com/health",
    "auth": "https://auth.example.com/ping",
    "db": "https://db.example.com/status",
}

for name, url in services.items():
    try:
        r = requests.get(url, timeout=5)
        status = "UP" if r.status_code == 200 else f"DOWN ({r.status_code})"
    except requests.exceptions.RequestException as e:
        status = f"UNREACHABLE ({e})"
    print(f"{name}: {status}")

# POST with JSON body + headers
resp = requests.post(
    "https://api.example.com/deploy",
    json={"version": "1.2.3", "env": "prod"},
    headers={"Authorization": "Bearer TOKEN"}
)
print(resp.json())`,
  bash: `# Health check with curl
STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://api.example.com/health)
if [ "$STATUS" -eq 200 ]; then
    echo "Service is UP"
else
    echo "Service is DOWN: $STATUS"
fi

# Check multiple endpoints
for url in https://api.example.com https://auth.example.com; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$url/health")
    echo "$url: $STATUS"
done

# POST JSON with curl
curl -X POST https://api.example.com/deploy \\
  -H "Content-Type: application/json" \\
  -d '{"version": "1.2.3"}'`
});
