---
title: 'Setting up Jellyfin on Raspberry Pi'
date: '30/12/2022'
tags: ['jellyfin', 'media server', 'linux', 'raspberry']
---

In this post I'll install jellyfin on a raspberry using docker.

so let's start

# Install Docker
if you don't have docker, please follow the [docs](https://docs.docker.com/engine/install/ubuntu/)


# Install the Jellyfin Image
```bash
$ docker pull jellyfin/jellyfin
```

# Create volumes
```bash
$ docker volume create jellyfin-config
$ docker volume create jellyfin-cache
```

# Run
```bash
$ docker run -d \
 --name jellyfin \
 --volume jellyfin-config:/config \
 --volume jellyfin-cache:/cache \
 --mount type=bind,source=/path/to/media,target=/media \
 --restart=unless-stopped \
 -p 8096:8096
 jellyfin/jellyfin
```

once it works, you can open your browser and open

`$ http:0.0.0.0:8096`
