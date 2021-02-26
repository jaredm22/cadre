# Cadre

## Requirements
### Frontend
For dev on the frontend you'll need to install:
- React (instructions to install can be found [here](https://reactjs.org/docs/create-a-new-react-app.html))

### Backend
For dev on the backend you'll need to install: 
- Python3
- Pip (python -m pip --version)
- Virtualenv (python -m pip install --user virtualenv)

## Quickstart

### Frontend
TBD

### Backend
1. Start the virtual environment:
```bash
$ python3 -m venv venv
$ . venv/bin/activate
```
2. Install libraries
```bash
$ pip install -r requirements.txt
```
3. Make the postgres database url into a enivronment variable
```bash
$ export DATABASE_URL= <INSERT DATABASE URL HERE>
```
If you would like to use the exisiting database url for this project, please contact the admins

4. Start the server
```bash
$ python3 run.py
```
The server should be running on [http://0.0.0.0:5000](http://0.0.0.0:5000)
