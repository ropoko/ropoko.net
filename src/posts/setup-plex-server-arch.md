---
title: 'Setting up Plex Media Server on Arch Linux'
date: '21/12/2022'
tags: ['plex', 'media server', 'linux']
---

In this tutorial, I will follow this tutorial from [arch wiki](https://wiki.archlinux.org/title/plex)

# Install from AUR
using yay - https://aur.archlinux.org/packages/plex-media-server

```bash
$ yay -Sy plex-media-server
```

# Start service
- start it

```bash
$ sudo systemctl start plexmediaserver
```

- then enable it

```bash
$ sudo systemctl enable plexmediaserver
```

# Check if it works
The default URL will be
```text
http://localhost:32400/web
```
