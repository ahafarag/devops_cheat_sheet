window.SECTIONS = window.SECTIONS || [];
window.SECTIONS.push({
  title: "2. JSON & YAML — Config Manipulation",
  emoji: "⚙️",
  hint: "They'll say: 'Read this config, change the region, save it'",
  memorize: "json.load(f) → modify dict → json.dump(data, f, indent=2)",
  python: `import json

# Read JSON
with open("config.json", "r") as f:
    config = json.load(f)

# Modify
config["region"] = "eu-west-1"
config["settings"]["timeout"] = 30

# Write back (pretty-printed)
with open("config.json", "w") as f:
    json.dump(config, f, indent=2)

# ------- YAML -------
import yaml

with open("values.yaml", "r") as f:
    data = yaml.safe_load(f)

data["replicas"] = 3

with open("values.yaml", "w") as f:
    yaml.dump(data, f, default_flow_style=False)`,
  bash: `# Read a JSON value with jq
cat config.json | jq '.region'

# Modify JSON in place
jq '.region = "eu-west-1"' config.json > tmp.json && mv tmp.json config.json

# Extract nested value
jq '.settings.timeout' config.json

# Loop over JSON array
jq -r '.servers[]' config.json | while read server; do
    echo "Pinging $server..."
    ping -c 1 "$server"
done`
});
