FROM shipimg/appbase:latest
ADD . /home/proj/tircapi
RUN cd /home/proj/tircapi && npm install
ENTRYPOINT ["/home/proj/tircapi/boot_tirc.sh"]
EXPOSE 60000

