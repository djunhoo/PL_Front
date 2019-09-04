import os
import warnings

from setuptools import setup, find_packages


def version():
    try:
        root = os.path.abspath(os.path.dirname(__file__))
        with open(os.path.join(root, '.version')) as f:
            return f.read().strip()
    except IOError:
        warnings.warn("Couldn't found .version file", RuntimeWarning)
        return ''


setup(
    name='PLLAB',
    version=version(),
    description='PLLAB',
    url='https://github.com/djunhoo/pllab',
    author='tube@smartstudy.co.kr',
    author_email='tube@smartstudy.co.kr',
    maintainer='tube@smartstudy.co.kr',
    maintainer_email='tube@smartstudy.co.kr',
    packages=find_packages(),
    install_requires=[
        'Django==2.2.5',
        'django-environ==0.4.5',
        'django-webpack-loader==0.6.0',
        'mysqlclient==1.4.4',
        'Pillow==6.1.0',
        'six==1.12.0',
        'uwsgi==2.0.18',
    ],
    extras_require={
        'dev': [
            'django-debug-toolbar',
        ]
    }
)
