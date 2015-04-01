FROM shippableimages/ubuntu1404_nodejs:latest
ADD . /source/tIrc
RUN cd /source/tIrc && npm install
EXPOSE 3000
CMD ["index.js"]
ENTRYPOINT node