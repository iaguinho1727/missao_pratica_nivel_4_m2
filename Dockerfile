FROM --platform=amd64 node:23-alpine

RUN apk update && apk upgrade

WORKDIR /app

COPY . .
COPY package-lock.json .

RUN npm i

ENTRYPOINT [ "npx","ng","serve","--host","0.0.0.0" ]

