## Overview
This is the code of a tutorial I wrote on DEV Community about Node js and Docker. View Full Tutorial

## Usage

To build the Docker Image run:
```
$ docker build -t ahmedwadod/nodejs-docker-tutorial:latest .
```

Then run a container with the image
```
$ docker run -d -p 8080:8080 ahmedwadod/nodejs-docker-tutorial:latest
```

Then if you go to `http://localhost:8080/` you should see the app running.