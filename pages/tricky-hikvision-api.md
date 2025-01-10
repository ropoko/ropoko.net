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

## My Implementation
The `/alertStream` endpoint returns a response of type: `Content-type: multipart/mixed; boundary: -----x`.

It returns: the ANPR event xml and 2 images - plate and vehicle in jpeg format.

The class below listen to the events and filter to get only the ANPR event, and it captures the plate and the save the 2 images.

```python
import requests
import xmltodict
import json
import re
import os
import time
from io import BytesIO

class Hikvision:
	def __init__(self, ip, port=80):
		self.ip = ip
		self.port = port
		self.events_url = f'http://{self.ip}:{self.port}/ISAPI/Event/notification/alertStream'

	def authenticate(self, username, password):
		self.auth = requests.auth.HTTPDigestAuth(username, password)

	def get_anpr_events(self):
		response = requests.get(
			self.events_url,
			auth=self.auth,
			stream=True,
			headers={
				'Connection': 'keep-alive'
			}
		)

		# get boundary from headers Content-Type
		content_type = response.headers.get('Content-Type', '')
		boundary_match = re.search(r'boundary=(.*)', content_type)

		if boundary_match:
			boundary = boundary_match.group(1).strip()
		else:
			print("Boundary not found in Content-Type header")
			return

		buffer = b''
		for chunk in response.iter_content(chunk_size=1024):
			if chunk:
				buffer += chunk
				while True:
					boundary_index = buffer.find(boundary.encode())
					if boundary_index == -1:
						break
					
					part = buffer[:boundary_index]
					buffer = buffer[boundary_index + len(boundary) + 2:]

					if b'Content-Type: application/xml' in part:
						xml_content = self._extract_xml(part)

						if xml_content:
							self._process_xml(xml_content)

					elif b'Content-Type: image/jpeg' in part:
						self._process_image(part)

	def _extract_xml(self, chunk):
		xml_match = re.search(b'<EventNotificationAlert.*?</EventNotificationAlert>', chunk, re.DOTALL)
		return xml_match.group(0) if xml_match else None

	def _process_xml(self, xml_content):
		try:
			content = xmltodict.parse(xml_content)

			if content['EventNotificationAlert']['eventType'] == 'ANPR':
				timestamp = content['EventNotificationAlert']['dateTime']
				plate = content['EventNotificationAlert']['ANPR']['licensePlate']

				json_data = json.dumps(content, indent=2)
		except Exception as e:
			print(f"Error processing XML: {e}")

	def _process_image(self, image_part):
		try:
			headers_end = image_part.find(b'\r\n\r\n')
			if headers_end == -1:
				print("Could not find end of headers in image part")
				return

			image_data = image_part[headers_end + 4:]

			if not image_data:
				return

			filename = f"anpr_image_{int(time.time())}.jpg"
			self._save_image(image_data, filename)
		except Exception as e:
			print(f"Error processing image: {e}")

	def _save_image(self, image_data, filename):
		try:
			with open(filename, 'wb') as f:
				f.write(image_data)
		except Exception as e:
			print(f"Error saving image: {e}")
```

# References
- https://www.dropbox.com/scl/fi/y26bew5ed2s1s9i7sjsi2/isapi.zip?rlkey=mxcnuecay7qlhm4nx6ujo5422&e=6&dl=0
- https://github.com/naveenrobo/Hikvision-ANPR-SDK
  