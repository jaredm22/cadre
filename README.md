# Cadre

## Team
- Noelle No - UX Designer
- Jaqueline Mang - UX Designer
- Melissa Lin - Software Engineer
- Chinwe Oparaji - Software Engineer
- Jared Min - Software Engineer

## Product Backlog
Link to Product Backlong is [here:](https://buspark.atlassian.net/jira/software/projects/CAD/boards/15/backlog)
</br>
The reasoning of how we ordered our product backlog was that we ordered the items that we thought were vital to the app on the top and those after those are items that the app could feature, but it is not entirely necessary to it.

### Forecast
- 02/22/2020 - 02/29/2020: We forecast to work on the **Switch calendar view b/w 1 and 5 days** story and **View Classes on Calender** story.
  - Our rational behind our forecast is because these two tasks are on the top of our backlong list and thus since these are the most important tasks on our backlog, it makes up the core of our app, so we need to get these task done first in order to make our app functional and thus easier to implement other non-necessary features. 

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

#### Daily Scrum
##### Done past 24 hours:
- Jacqueline: changed it to a one day view with the class info; no side bar
- Noelle: Update lofi design for one-day class view
- Melissa: PostgreSQL query for student info
- Chinwe: Slider to switch day components from 1 to 5
- Jared: Make database relational
##### Will do:
- Jacqueline: low-mid-fi day view design
- Noelle: low-mid-fi calendar design
- Melissa: Dummy data
- Chinwe: Use Carbon UI for styling
- Jared: Create day component, populated with class events
##### Blockers:
- Jacqueline: 
- Noelle: sleep
- Melissa: parsing json data in flask 
- Chinwe: Carbon documentation for Grid, just need to read more
- Jared: intelligence