window.COMMANDS = window.COMMANDS || [];

window.COMMANDS.push({ group: 'Kubernetes', category: 'Basic Kubernetes Commands', items: [
  { command: 'kubectl version', description: 'Displays the Kubernetes client and server version. Example: kubectl version' },
  { command: 'kubectl cluster-info', description: 'Shows information about the Kubernetes cluster. Example: kubectl cluster-info' },
  { command: 'kubectl get nodes', description: 'Lists all nodes in the cluster. Example: kubectl get nodes' },
  { command: 'kubectl get pods', description: 'Lists all pods in the default namespace. Example: kubectl get pods' },
  { command: 'kubectl get services', description: 'Lists all services in the default namespace. Example: kubectl get services' },
  { command: 'kubectl get namespaces', description: 'Lists all namespaces in the cluster. Example: kubectl get namespaces' },
  { command: 'kubectl describe pod', description: 'Shows detailed information about a specific pod. Example: kubectl describe pod pod-name' },
  { command: 'kubectl logs', description: 'Displays logs for a specific pod. Example: kubectl logs pod-name' },
  { command: 'kubectl create namespace', description: 'Creates a new namespace. Example: kubectl create namespace my-namespace' },
  { command: 'kubectl delete pod', description: 'Deletes a specific pod. Example: kubectl delete pod pod-name' }
]});

window.COMMANDS.push({ group: 'Kubernetes', category: 'Intermediate Kubernetes Commands', items: [
  { command: 'kubectl apply', description: 'Applies changes defined in a YAML file. Example: kubectl apply -f deployment.yaml' },
  { command: 'kubectl delete', description: 'Deletes resources defined in a YAML file. Example: kubectl delete -f deployment.yaml' },
  { command: 'kubectl scale', description: 'Scales a deployment to the desired number of replicas. Example: kubectl scale deployment my-deployment --replicas=3' },
  { command: 'kubectl expose', description: 'Exposes a deployment as a service. Example: kubectl expose deployment my-deployment --type=LoadBalancer --port=80' },
  { command: 'kubectl exec', description: 'Executes a command in a running pod. Example: kubectl exec -it pod-name -- /bin/bash' },
  { command: 'kubectl port-forward', description: 'Forwards a local port to a port in a pod. Example: kubectl port-forward pod-name 8080:80' },
  { command: 'kubectl get configmaps', description: 'Lists all ConfigMaps in the namespace. Example: kubectl get configmaps' },
  { command: 'kubectl get secrets', description: 'Lists all Secrets in the namespace. Example: kubectl get secrets' },
  { command: 'kubectl edit', description: 'Edits a resource definition directly in the editor. Example: kubectl edit deployment my-deployment' },
  { command: 'kubectl rollout status', description: 'Displays the status of a deployment rollout. Example: kubectl rollout status deployment/my-deployment' }
]});

window.COMMANDS.push({ group: 'Kubernetes', category: 'Advanced Kubernetes Commands', items: [
  { command: 'kubectl rollout undo', description: 'Rolls back a deployment to a previous revision. Example: kubectl rollout undo deployment/my-deployment' },
  { command: 'kubectl top nodes', description: 'Shows resource usage for nodes. Example: kubectl top nodes' },
  { command: 'kubectl top pods', description: 'Displays resource usage for pods. Example: kubectl top pods' },
  { command: 'kubectl cordon', description: 'Marks a node as unschedulable. Example: kubectl cordon node-name' },
  { command: 'kubectl uncordon', description: 'Marks a node as schedulable. Example: kubectl uncordon node-name' },
  { command: 'kubectl drain', description: 'Safely evicts all pods from a node. Example: kubectl drain node-name --ignore-daemonsets' },
  { command: 'kubectl taint', description: 'Adds a taint to a node to control pod placement. Example: kubectl taint nodes node-name key=value:NoSchedule' },
  { command: 'kubectl get events', description: 'Lists all events in the cluster. Example: kubectl get events' },
  { command: 'kubectl apply -k', description: 'Applies resources from a kustomization directory. Example: kubectl apply -k ./kustomization-dir/' },
  { command: 'kubectl config view', description: 'Displays the kubeconfig file. Example: kubectl config view' },
  { command: 'kubectl config use-context', description: 'Switches the active context in kubeconfig. Example: kubectl config use-context my-cluster' },
  { command: 'kubectl debug', description: 'Creates a debugging session for a pod. Example: kubectl debug pod-name' },
  { command: 'kubectl delete namespace', description: 'Deletes a namespace and all its resources. Example: kubectl delete namespace my-namespace' },
  { command: 'kubectl patch', description: 'Updates a resource using a patch. Example: kubectl patch deployment my-deployment -p \'{"spec": {"replicas": 2}}\'' },
  { command: 'kubectl rollout history', description: 'Shows the rollout history of a deployment. Example: kubectl rollout history deployment my-deployment' },
  { command: 'kubectl autoscale', description: 'Automatically scales a deployment based on resource usage. Example: kubectl autoscale deployment my-deployment --cpu-percent=50 --min=1 --max=10' },
  { command: 'kubectl label', description: 'Adds or modifies a label on a resource. Example: kubectl label pod pod-name environment=production' },
  { command: 'kubectl annotate', description: "Adds or modifies an annotation on a resource. Example: kubectl annotate pod pod-name description='My app pod'" },
  { command: 'kubectl delete pv', description: 'Deletes a PersistentVolume (PV). Example: kubectl delete pv my-pv' },
  { command: 'kubectl get ingress', description: 'Lists all ingress resources in the namespace. Example: kubectl get ingress' },
  { command: 'kubectl create configmap', description: 'Creates a ConfigMap from files or literal values. Example: kubectl create configmap my-config --from-literal=key1=value1' },
  { command: 'kubectl create secret', description: 'Creates a Secret from files or literal values. Example: kubectl create secret generic my-secret --from-literal=password=myPassword' },
  { command: 'kubectl api-resources', description: 'Lists all available API resources in the cluster. Example: kubectl api-resources' },
  { command: 'kubectl api-versions', description: 'Lists all API versions supported by the cluster.' },
  { command: 'kubectl get crds', description: 'Lists all CustomResourceDefinitions (CRDs).' }
]});
