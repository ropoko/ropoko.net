---
title: Some things about Hikvision ANPR module
description: This will be a quick post about some tricky things that I found while working with Hikvision ANPR module.
date: 2024/08/03
tag: hikvision,camera,ISAPI,ANPR
author: Ropoko
---

# About the camera
I'm using the model `DS-TCG405-E` firmware version `V5.2.0 230629`.

# ANPR
- the camera works very well detecting license plates
- you need to configure the trigger line in Configuration > Capture > Application Mode > Recognition Area

if you're trying to recognize a plate, keep in mind that, in order to the camera recognize the plate, it needs to have a movement, simulating entrance and exit.

## Code Samples (using ISAPI)
These requests use the authentication method `Digest` in the headers, you can check that under Configuration > System > Security.

- Trigger Manual Number Plate Recognition (MNPR)

```text
# <channel-id> is usually 1
http://<ip>/ISAPI/Traffic/MNPR/channels/<channel-id>
```
- Listen to events

```text
# in the request, you need to pass the header: Connection: keep-alive
http://<ip>/ISAPI/Event/notification/alertStream
```
> Note: For some reason, when trying to listen to the events (using the url above) via Postman, I did not get any response, the only way I could test was creating a script to request this URL.

# References
- https://www.dropbox.com/scl/fi/y26bew5ed2s1s9i7sjsi2/isapi.zip?rlkey=mxcnuecay7qlhm4nx6ujo5422&e=6&dl=0
- https://github.com/naveenrobo/Hikvision-ANPR-SDK
  