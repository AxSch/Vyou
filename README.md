# VYou

### Tech

VYou uses a number of open source projects to work properly:

* [ReactJS] - JavaScript UI library
* [Django] - High-level python framework used for the backend
* [Django-Rest-Framework] - Django library used solely for the API
* [Postgres] - Relational database
* [ebAWS] - AWS instance used to host the app

The repo lives with a [private repository][vyou]
on GitHub.

### Installation

Start of by activating your virtual python env and using the commands below to install the required dependencies and get setup.

### Python, Django & Postgres setup

* Install `python3` via brew
* Clone the repo
* cd into repo
* Install `virtualenv` using `pip3` (think yarn)

```sh
sudo pip3 install virtualenv
```

* Create a virtualenv for the project

```sh
virtualenv -p python3 venv
```

If you're having trouble completing this step, try upgrading virtualenv first `pip3 install --upgrade virtualenv`

* Activate the virtualenv

```sh
source venv/bin/activate
```

* Install dependencies in the new virtualenv

```
pip3 install -r requirements.txt
```

* To run the django server - but don't yet!

```
python3 manage.py runserver
```

* Install postgreSQL via homebrew

```
brew install postgresql
```

* Start postgres
```
brew services start postgresql
```

* Create a localdb - username being your mac/windows user account
```
psql <db_name> -U <user_name>
```

Now go to the `settings.py` file after `cd vapp`:

And change the database details sction of this files to reflect your postgres db setup.

* Once done, `cd vapp` and run the following:
```
./manage.py makemigrations
```

This will apply the migrations to your local db

now run to complete the migration process:
```
./manage.py migrate
```
 * create a superuser for the db & follow the steps
```
./manage.py createsuperuser
```

after this you can now run the following command to start the python server:
```
./manage.py runserver
```

And for production build:
```
./manage.py runserver --settings=vapp.production_settings
```

### React frontend

* cd into `frontend` and run `yarn install`

* Run `yarn start`.

Once this has been done, any changes during development will be reflected at the localhost:8000 address.

* Run `yarn build` before deploying to AWS

### Deploying to AWS
These instructions will allow you to deploy to the AWS eb instance

* Make sure all wanted changes are committed
* Firstly install eb-cli whilst in your virtual env
```
pip install awsebcli --upgrade --user
```
* inistilize repo with AWS eb instance
```
eb init
```

* deploy to environment
```
eb deploy
```
### Todos

 - Frontend Styling
 - Frontend Validation
 - Exportation of data
 - Clean up FE code
 - Testing


   [vyou]: <https://github.com/AxSch/Vyou>
   [ReactJS]: <https://reactjs.org/>
   [ebAWS]: <https://aws.amazon.com/elasticbeanstalk/>
   [Postgres]: <https://www.postgresql.org/>
   [Django-Rest-Framework]: <https://www.django-rest-framework.org/>
   [Django]: <https://www.djangoproject.com/>
