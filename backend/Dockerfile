FROM python:3.8.3-slim-buster
COPY ./requirements.txt /requirements.txt
WORKDIR /
RUN pip3 install -r requirements.txt
COPY . /
ENTRYPOINT [ "python3" ]
EXPOSE 5000
CMD [ "main/api.py", "--host=0.0.0.0"] 