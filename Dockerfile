FROM node:14-alpine

# set environments
ENV TZ=America/Sao_Paulo
ENV NPM_CONFIG_LOGLEVEL=warn

# create directory app and permission
RUN mkdir -p /home/api/node_modules && \
    chown -R node:node /home/api

# set workdir application
WORKDIR /home/api

# copy package.json and yarn lock
COPY --chown=node:node ./package.json  ./yarn.* ./

# update system and install tz
# install node_modules and clean cache
RUN apk add --update --no-cache tzdata python alpine-sdk && \
    yarn install && \
    yarn cache clean && \
    rm -rf /var/cache/apk/*

# set user
USER node

# copy all project files to working directory
COPY --chown=node:node . .
# RUN chown -R node:1000 /home/api

EXPOSE 3333

# start application
CMD ["npm", "run", "start"]
