## Overview
This is the code of a tutorial I wrote on DEV Community about Node js and Docker. [View Full Tutorial](https://dev.to/ahmedwadod/nodejs-and-docker-write-build-and-publish-h4f)

![Header](https://res.cloudinary.com/practicaldev/image/fetch/s--_ePHZ0sa--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mot9q5va9zguj01ydck9.jpg)

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
