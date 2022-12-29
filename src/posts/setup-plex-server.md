---
title: 'Setting up Plex Media Server Linux'
date: '21/12/2022'
tags: ['plex', 'media server', 'linux']
---

In this "tutorial", I'll show how to create a plex server on different linux distributions (my main ones), this will be more a todo list for me remember in the future.


# Arch Linux

I will follow this tutorial from [arch wiki](https://wiki.archlinux.org/title/plex)

## Install from AUR
using yay - https://aur.archlinux.org/packages/plex-media-server

```bash
$ yay -Sy plex-media-server
```

## Start service
- start it

```bash
$ sudo systemctl start plexmediaserver
```

- then enable it

```bash
$ sudo systemctl enable plexmediaserver
```

## Check if it works
The default URL will be
```text
http://localhost:32400/web
```

# Raspberry Pi OS

## Download the .deb package
get the file here https://www.plex.tv/media-server-downloads/#plex-media-server, copy the link of the version you want and then change the url below by the copied link

`$ wget https://file`

now we can install it:

`$ dpkg -i <file-name>.deb`

## Manage the service
start:

`$ sudo systemctl start plexmediaserver`

enable (will start in the next boot):

`$ sudo systemctl enable plexmediaserver`

## Installing IPTV plugin

- [how to install](https://support.plex.tv/articles/201187656-how-do-i-manually-install-a-plugin/)

- [iptv plugin](https://github.com/Cigaras/IPTV.bundle)


> about the first link, about the "plugins folders" -> mine is at "/usr/lib/plexmediaserver/Resources/Plug-ins-629d58034/"
