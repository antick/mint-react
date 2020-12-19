FROM node:14.15.3-alpine3.12

RUN mkdir -p /home/mint-react

RUN chown node /home/mint-react

USER node

WORKDIR /home/mint-react

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . /home/mint-react

ENV PATH /home/mint-react/node_modules/.bin:$PATH
ENV PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start"]
