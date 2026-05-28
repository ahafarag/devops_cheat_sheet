window.COMMANDS = window.COMMANDS || [];

window.COMMANDS.push({ group: 'Linux', category: 'Basic Linux Commands', items: [
  { command: 'pwd', description: 'Print the current working directory.' },
  { command: 'ls', description: 'List files and directories.' },
  { command: 'cd', description: 'Change directory.' },
  { command: 'touch', description: 'Create an empty file.' },
  { command: 'mkdir', description: 'Create a new directory.' },
  { command: 'rm', description: 'Remove files or directories.' },
  { command: 'rmdir', description: 'Remove empty directories.' },
  { command: 'cp', description: 'Copy files or directories.' },
  { command: 'mv', description: 'Move or rename files and directories.' },
  { command: 'cat', description: 'Display the content of a file.' },
  { command: 'echo', description: 'Display a line of text.' },
  { command: 'clear', description: 'Clear the terminal screen.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Intermediate Linux Commands', items: [
  { command: 'chmod', description: 'Change file permissions.' },
  { command: 'chown', description: 'Change file ownership.' },
  { command: 'find', description: 'Search for files and directories.' },
  { command: 'grep', description: 'Search for text in a file.' },
  { command: 'wc', description: 'Count lines, words, and characters in a file.' },
  { command: 'head', description: 'Display the first few lines of a file.' },
  { command: 'tail', description: 'Display the last few lines of a file.' },
  { command: 'sort', description: 'Sort the contents of a file.' },
  { command: 'uniq', description: 'Remove duplicate lines from a file.' },
  { command: 'diff', description: 'Compare two files line by line.' },
  { command: 'tar', description: 'Archive files into a tarball.' },
  { command: 'zip/unzip', description: 'Compress and extract ZIP files.' },
  { command: 'df', description: 'Display disk space usage.' },
  { command: 'du', description: 'Display directory size.' },
  { command: 'top', description: 'Monitor system processes in real time.' },
  { command: 'ps', description: 'Display active processes.' },
  { command: 'kill', description: 'Terminate a process by its PID.' },
  { command: 'ping', description: 'Check network connectivity.' },
  { command: 'wget', description: 'Download files from the internet.' },
  { command: 'curl', description: 'Transfer data from or to a server.' },
  { command: 'scp', description: 'Securely copy files between systems.' },
  { command: 'rsync', description: 'Synchronize files and directories.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Advanced Linux Commands', items: [
  { command: 'awk', description: 'Text processing and pattern scanning.' },
  { command: 'sed', description: 'Stream editor for filtering and transforming text.' },
  { command: 'cut', description: 'Remove sections from each line of a file.' },
  { command: 'tr', description: 'Translate or delete characters.' },
  { command: 'xargs', description: 'Build and execute command lines from standard input.' },
  { command: 'ln', description: 'Create symbolic or hard links.' },
  { command: 'df -h', description: 'Display disk usage in human-readable format.' },
  { command: 'free', description: 'Display memory usage.' },
  { command: 'iostat', description: 'Display CPU and I/O statistics.' },
  { command: 'netstat', description: 'Network statistics (use ss as modern alternative).' },
  { command: 'ifconfig/ip', description: 'Configure network interfaces (use ip as modern alternative).' },
  { command: 'iptables', description: 'Configure firewall rules.' },
  { command: 'systemctl', description: 'Control the systemd system and service manager.' },
  { command: 'journalctl', description: 'View system logs.' },
  { command: 'crontab', description: 'Schedule recurring tasks.' },
  { command: 'at', description: 'Schedule tasks for a specific time.' },
  { command: 'uptime', description: 'Display system uptime.' },
  { command: 'whoami', description: 'Display the current user.' },
  { command: 'users', description: 'List all users currently logged in.' },
  { command: 'hostname', description: 'Display or set the system hostname.' },
  { command: 'env', description: 'Display environment variables.' },
  { command: 'export', description: 'Set environment variables.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Networking Commands', items: [
  { command: 'ip addr', description: 'Display or configure IP addresses.' },
  { command: 'ip route', description: 'Show or manipulate routing tables.' },
  { command: 'traceroute', description: 'Trace the route packets take to a host.' },
  { command: 'nslookup', description: 'Query DNS records.' },
  { command: 'dig', description: 'Query DNS servers.' },
  { command: 'ssh', description: 'Connect to a remote server via SSH.' },
  { command: 'ftp', description: 'Transfer files using the FTP protocol.' },
  { command: 'nmap', description: 'Network scanning and discovery.' },
  { command: 'telnet', description: 'Communicate with remote hosts.' },
  { command: 'netcat (nc)', description: 'Read/write data over networks.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'File Management and Search', items: [
  { command: 'locate', description: 'Find files quickly using a database.' },
  { command: 'stat', description: 'Display detailed information about a file.' },
  { command: 'tree', description: 'Display directories as a tree.' },
  { command: 'file', description: "Determine a file's type." },
  { command: 'basename', description: 'Extract the filename from a path.' },
  { command: 'dirname', description: 'Extract the directory part of a path.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'System Monitoring', items: [
  { command: 'vmstat', description: 'Display virtual memory statistics.' },
  { command: 'htop', description: 'Interactive process viewer (alternative to top).' },
  { command: 'lsof', description: 'List open files.' },
  { command: 'dmesg', description: 'Print kernel ring buffer messages.' },
  { command: 'uptime', description: 'Show how long the system has been running.' },
  { command: 'iotop', description: 'Display real-time disk I/O by processes.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Package Management', items: [
  { command: 'apt', description: 'Package manager for Debian-based distributions.' },
  { command: 'yum/dnf', description: 'Package manager for RHEL-based distributions.' },
  { command: 'snap', description: 'Manage snap packages.' },
  { command: 'rpm', description: 'Manage RPM packages.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Disk and Filesystem', items: [
  { command: 'mount/umount', description: 'Mount or unmount filesystems.' },
  { command: 'fsck', description: 'Check and repair filesystems.' },
  { command: 'mkfs', description: 'Create a new filesystem.' },
  { command: 'blkid', description: 'Display information about block devices.' },
  { command: 'lsblk', description: 'List information about block devices.' },
  { command: 'parted', description: 'Manage partitions interactively.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Scripting and Automation', items: [
  { command: 'bash', description: 'Command interpreter and scripting shell.' },
  { command: 'sh', description: 'Legacy shell interpreter.' },
  { command: 'cron', description: 'Automate tasks.' },
  { command: 'alias', description: 'Create shortcuts for commands.' },
  { command: 'source', description: 'Execute commands from a file in the current shell.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Development and Debugging', items: [
  { command: 'gcc', description: 'Compile C programs.' },
  { command: 'make', description: 'Build and manage projects.' },
  { command: 'strace', description: 'Trace system calls and signals.' },
  { command: 'gdb', description: 'Debug programs.' },
  { command: 'git', description: 'Version control system.' },
  { command: 'vim/nano', description: 'Text editors for scripting and editing.' }
]});

window.COMMANDS.push({ group: 'Linux', category: 'Other Useful Commands', items: [
  { command: 'uptime', description: 'Display system uptime.' },
  { command: 'date', description: 'Display or set the system date and time.' },
  { command: 'cal', description: 'Display a calendar.' },
  { command: 'man', description: 'Display the manual for a command.' },
  { command: 'history', description: 'Show previously executed commands.' },
  { command: 'alias', description: 'Create custom shortcuts for commands.' }
]});
