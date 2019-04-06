FROM node:8
COPY . /stale-grade-frontend/
WORKDIR /stale-grade-frontend/
RUN npm install --no-optional
RUN npm rebuild
RUN npm run build
CMD npm start
