window.COMMANDS = window.COMMANDS || [];

window.COMMANDS.push({ group: 'Docker', category: 'Basic Docker Commands', items: [
  { command: 'docker --version', description: 'Displays the installed Docker version. Example: docker --version' },
  { command: 'docker info', description: 'Shows system-wide information about Docker, such as the number of containers and images. Example: docker info' },
  { command: 'docker pull', description: 'Downloads an image from a Docker registry (default: Docker Hub). Example: docker pull ubuntu:latest' },
  { command: 'docker images', description: 'Lists all downloaded images. Example: docker images' },
  { command: 'docker run', description: 'Creates and starts a new container from an image. Example: docker run -it ubuntu bash' },
  { command: 'docker ps', description: 'Lists running containers. Example: docker ps' },
  { command: 'docker ps -a', description: 'Lists all containers, including stopped ones. Example: docker ps -a' },
  { command: 'docker stop', description: 'Stops a running container. Example: docker stop container_name' },
  { command: 'docker start', description: 'Starts a stopped container. Example: docker start container_name' },
  { command: 'docker rm', description: 'Removes a container. Example: docker rm container_name' },
  { command: 'docker rmi', description: 'Removes an image. Example: docker rmi image_name' },
  { command: 'docker exec', description: 'Runs a command inside a running container. Example: docker exec -it container_name bash' }
]});

window.COMMANDS.push({ group: 'Docker', category: 'Intermediate Docker Commands', items: [
  { command: 'docker build', description: 'Builds an image from a Dockerfile. Example: docker build -t my_image .' },
  { command: 'docker commit', description: "Creates a new image from a container's changes. Example: docker commit container_name my_image:tag" },
  { command: 'docker logs', description: 'Fetches logs from a container. Example: docker logs container_name' },
  { command: 'docker inspect', description: 'Returns detailed information about an object (container or image). Example: docker inspect container_name' },
  { command: 'docker stats', description: 'Displays live resource usage statistics of running containers. Example: docker stats' },
  { command: 'docker cp', description: 'Copies files between a container and the host. Example: docker cp container_name:/path/to/file /path/on/host' },
  { command: 'docker rename', description: 'Renames a container. Example: docker rename old_name new_name' },
  { command: 'docker network ls', description: 'Lists all Docker networks. Example: docker network ls' },
  { command: 'docker network create', description: 'Creates a new Docker network. Example: docker network create my_network' },
  { command: 'docker network inspect', description: 'Shows details about a Docker network. Example: docker network inspect my_network' },
  { command: 'docker network connect', description: 'Connects a container to a network. Example: docker network connect my_network container_name' },
  { command: 'docker volume ls', description: 'Lists all Docker volumes. Example: docker volume ls' },
  { command: 'docker volume create', description: 'Creates a new Docker volume. Example: docker volume create my_volume' },
  { command: 'docker volume inspect', description: 'Provides details about a volume. Example: docker volume inspect my_volume' },
  { command: 'docker volume rm', description: 'Removes a Docker volume. Example: docker volume rm my_volume' }
]});

window.COMMANDS.push({ group: 'Docker', category: 'Advanced Docker Commands', items: [
  { command: 'docker-compose up', description: 'Starts services defined in a docker-compose.yml file. Example: docker-compose up' },
  { command: 'docker-compose down', description: 'Stops and removes services defined in a docker-compose.yml file. Example: docker-compose down' },
  { command: 'docker-compose logs', description: 'Displays logs for services managed by Docker Compose. Example: docker-compose logs' },
  { command: 'docker-compose exec', description: "Runs a command in a service's container. Example: docker-compose exec service_name bash" },
  { command: 'docker save', description: 'Exports an image to a tar file. Example: docker save -o my_image.tar my_image:tag' },
  { command: 'docker load', description: 'Imports an image from a tar file. Example: docker load -i my_image.tar' },
  { command: 'docker export', description: "Exports a container's filesystem as a tar file. Example: docker export container_name &gt; container.tar" },
  { command: 'docker import', description: 'Creates an image from an exported container. Example: docker import my_container.tar my_new_image' },
  { command: 'docker system df', description: 'Displays disk usage by Docker objects. Example: docker system df' },
  { command: 'docker system prune', description: 'Cleans up unused Docker resources (images, containers, volumes, networks). Example: docker system prune' },
  { command: 'docker tag', description: 'Assigns a new tag to an image. Example: docker tag old_image_name new_image_name' },
  { command: 'docker push', description: 'Uploads an image to a Docker registry. Example: docker push my_image:tag' },
  { command: 'docker login', description: 'Logs into a Docker registry. Example: docker login' },
  { command: 'docker logout', description: 'Logs out of a Docker registry. Example: docker logout' },
  { command: 'docker swarm init', description: 'Initializes a Docker Swarm mode cluster. Example: docker swarm init' },
  { command: 'docker service create', description: 'Creates a new service in Docker Swarm mode. Example: docker service create --name my_service nginx' },
  { command: 'docker stack deploy', description: 'Deploys a stack using a Compose file in Swarm mode. Example: docker stack deploy -c docker-compose.yml my_stack' },
  { command: 'docker checkpoint create', description: 'Creates a checkpoint for a container. Example: docker checkpoint create container_name checkpoint_name' },
  { command: 'docker checkpoint ls', description: 'Lists checkpoints for a container. Example: docker checkpoint ls container_name' },
  { command: 'docker checkpoint rm', description: 'Removes a checkpoint. Example: docker checkpoint rm container_name checkpoint_name' }
]});
