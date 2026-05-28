window.COMMANDS = window.COMMANDS || [];

window.COMMANDS.push({ group: 'Helm', category: 'Basic Helm Commands', items: [
  { command: 'helm help', description: 'Displays help for the Helm CLI or a specific command.' },
  { command: 'helm version', description: 'Shows the Helm client and server version.' },
  { command: 'helm repo add', description: 'Adds a new chart repository.' },
  { command: 'helm repo update', description: 'Updates all Helm chart repositories to the latest version.' },
  { command: 'helm repo list', description: 'Lists all the repositories added to Helm.' },
  { command: 'helm search hub', description: 'Searches for charts on Helm Hub.' },
  { command: 'helm search repo', description: 'Searches for charts in the repositories.' },
  { command: 'helm show chart', description: 'Displays information about a chart, including metadata and dependencies.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Installing and Upgrading Charts', items: [
  { command: 'helm install', description: 'Installs a chart into a Kubernetes cluster.' },
  { command: 'helm upgrade', description: 'Upgrades an existing release with a new version of the chart.' },
  { command: 'helm upgrade --install', description: "Installs a chart if it isn't installed or upgrades it if it exists." },
  { command: 'helm uninstall', description: 'Uninstalls a release.' },
  { command: 'helm list', description: 'Lists all the releases installed on the Kubernetes cluster.' },
  { command: 'helm status', description: 'Displays the status of a release.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Working with Helm Charts', items: [
  { command: 'helm create', description: 'Creates a new Helm chart in a specified directory.' },
  { command: 'helm lint', description: 'Lints a chart to check for common errors.' },
  { command: 'helm package', description: 'Packages a chart into a .tgz file.' },
  { command: 'helm template', description: 'Renders the Kubernetes YAML files from a chart without installing it.' },
  { command: 'helm dependency update', description: 'Updates the dependencies in the Chart.yaml file.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Advanced Helm Commands', items: [
  { command: 'helm rollback', description: 'Rolls back a release to a previous version.' },
  { command: 'helm history', description: 'Displays the history of a release.' },
  { command: 'helm get all', description: 'Gets all information (including values and templates) for a release.' },
  { command: 'helm get values', description: 'Displays the values used in a release.' },
  { command: 'helm test', description: 'Runs tests defined in a chart.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm Chart Repositories', items: [
  { command: 'helm repo remove', description: 'Removes a chart repository.' },
  { command: 'helm repo update', description: 'Updates the local cache of chart repositories.' },
  { command: 'helm repo index', description: 'Creates or updates the index file for a chart repository.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm Values and Customization', items: [
  { command: 'helm install --values', description: 'Installs a chart with custom values.' },
  { command: 'helm upgrade --values', description: 'Upgrades a release with custom values.' },
  { command: 'helm install --set', description: 'Installs a chart with a custom value set directly in the command.' },
  { command: 'helm upgrade --set', description: 'Upgrades a release with a custom value set.' },
  { command: 'helm uninstall --purge', description: 'Removes a release and deletes associated resources, including the release history.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm Template and Debugging', items: [
  { command: 'helm template --debug', description: 'Renders Kubernetes manifests and includes debug output.' },
  { command: 'helm install --dry-run', description: 'Simulates the installation process to show what will happen without actually installing.' },
  { command: 'helm upgrade --dry-run', description: 'Simulates an upgrade process without actually applying it.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm and Kubernetes Integration', items: [
  { command: 'helm list --namespace', description: 'Lists releases in a specific Kubernetes namespace.' },
  { command: 'helm uninstall --namespace', description: 'Uninstalls a release from a specific namespace.' },
  { command: 'helm install --namespace', description: 'Installs a chart into a specific namespace.' },
  { command: 'helm upgrade --namespace', description: 'Upgrades a release in a specific namespace.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm Chart Development', items: [
  { command: 'helm package --sign', description: 'Packages a chart and signs it using a GPG key.' },
  { command: 'helm create --starter', description: 'Creates a new Helm chart based on a starter template.' },
  { command: 'helm push', description: 'Pushes a chart to a Helm chart repository.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm with Kubernetes CLI', items: [
  { command: 'helm list -n', description: 'Lists releases in a specific Kubernetes namespace.' },
  { command: 'helm install --kube-context', description: 'Installs a chart to a Kubernetes cluster defined in a specific kubeconfig context.' },
  { command: 'helm upgrade --kube-context', description: 'Upgrades a release in a specific Kubernetes context.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm Chart Dependencies', items: [
  { command: 'helm dependency build', description: 'Builds dependencies for a Helm chart.' },
  { command: 'helm dependency list', description: 'Lists all dependencies for a chart.' }
]});

window.COMMANDS.push({ group: 'Helm', category: 'Helm History and Rollbacks', items: [
  { command: 'helm rollback --recreate-pods', description: 'Rolls back to a previous version and recreates pods.' },
  { command: 'helm history --max', description: 'Limits the number of versions shown in the release history.' }
]});
