ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-bullseye AS build

LABEL container.author="AleXLaeR"

# USER node
WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.yarn \
    YARN_CACHE_FOLDER=/root/.yarn && \
    yarn install --frozen-lockfile

COPY ./ ./

RUN npm run build

FROM nginxinc/nginx-unprivileged:1.23-alpine-perl as serve
ARG OUTPUT_FOLDER=/usr/src/app/dist

COPY --from=build $OUTPUT_FOLDER /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

ENV PORT 3000
EXPOSE $PORT

ENTRYPOINT ["nginx", "-g", "daemon off;"]