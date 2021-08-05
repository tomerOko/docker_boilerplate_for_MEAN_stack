FROM node:16
RUN apt-get update
RUN apt-get -y install vim

RUN npm i -g @angular/cli pm2

ENV PATH=/app/node_modules/.bin:$PATH
ENV NODE_ENV=development

WORKDIR /app

# ENTRYPOINT [ "sh" , "entrypoint.sh" ]
ENTRYPOINT [ "bash" ]


#sudo docker-compose up -d 
#sudo docker-compose up -d --build  
#sudo docker-compose up -d --build --force-recreate

