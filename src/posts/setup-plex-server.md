---
title: 'Setting up Plex Media Server Linux'
date: '21/12/2022'
updated: '30/12/2022'
tags: ['plex', 'media server', 'linux']
---

In this "tutorial", I'll show how to create a plex server on different linux distributions (my main ones), this will be more a todo list for me remember in the future.

***Note:*** The IPTV plugin does not work anymore, you can see more about in the [section](#installing-iptv-plugin).

# Arch Linux

I will follow this tutorial from [arch wiki](https://wiki.archlinux.org/title/plex)

## Install from AUR
using yay - https://aur.archlinux.org/packages/plex-media-server

```bash
$ yay -Sy plex-media-server
```

# Raspberry Pi OS

## Download the .deb package
get the file here https://www.plex.tv/media-server-downloads/#plex-media-server, copy the link of the version you want and then change the url below by the copied link

`$ wget https://file`

now we can install it:

`$ dpkg -i <file-name>.deb`

# Start service
This step works for any of the above distributions.

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

## Installing IPTV plugin
This plugin does nto work anymore, [because plex decided to not accept video plugins anymore](https://www.plex.tv/blog/subtitles-and-sunsets-big-improvements-little-housekeeping/), so in the next days, I'll be doing another post testing [Jellyfin](https://jellyfin.org/), since IPTV is essential for me at this time.

But, as mentioned in this [issue on github](https://github.com/Cigaras/IPTV.bundle/issues/231) video plugins still work if you downgrade to Version 1.16.0.1226

I won't explain how to setup plex in this old version, so you're on your own. Good luck.


- [how to install](https://support.plex.tv/articles/201187656-how-do-i-manually-install-a-plugin/)

- [iptv plugin](https://github.com/Cigaras/IPTV.bundle)

About the first link, about the "plugins folders" - mine is at

`/usr/lib/plexmediaserver/Resources/Plug-ins-629d58034/`

hope it helps.
