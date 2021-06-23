FROM        node:alpine

WORKDIR     /srv
COPY        package.json        /srv
COPY        package-lock.json   /srv
RUN         npm install
COPY        ./pages             /srv/pages

CMD         npm run dev
