FROM node:16
ENV HOME /root
WORKDIR /root
COPY package*.json ./
COPY . .
RUN npm install
#RUN pip3 install -r requirements.txt
EXPOSE 8000
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait
CMD /wait && node website.js