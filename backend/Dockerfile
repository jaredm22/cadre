FROM python:3.8.3-slim-buster AS dev
COPY . .
RUN pip3 install -r requirements.txt
ENTRYPOINT [ "python3" ]
CMD [ "app.py"] 

FROM python:3.8.3-slim-buster AS prod
COPY . .
RUN pip3 install -r requirements.txt 
RUN pip3 install flask gunicorn==19.9.0
EXPOSE 8000
CMD ["gunicorn", "-b", "0.0.0.0:8000", "app:app"]