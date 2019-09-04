#!/bin/bash
cd /home/service/pllab/django && pip install --upgrade setuptools
cd /home/service/pllab/django && pip install -r requirements-dev.txt
cd /home/service/pllab/django && python manage.py migrate
cd /home/service/pllab/django && python manage.py runserver 0:8000