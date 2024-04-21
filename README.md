# PySkins

## Introduction

PySkins is a comprehensive platform designed for opening, selling, and buying CS2 skins and cases. This project aims to provide a seamless user experience while adhering to industry standards for security, scalability, and performance.

## Features

- **Skin and Case Management**: PySkins offers robust functionalities for managing CS2 skins and cases, including opening cases, selling skins, and purchasing items.
- **Custom API**: We've developed a custom API that collects base information about skins and cases, populating them into our database to facilitate smooth operations.
- **Technological Stack**: The project leverages cutting-edge technologies such as Django REST for backend development, React for frontend interfaces, PostgreSQL for database management, and Docker for local development environments.
- **Team Collaboration**: Our team, comprised of four members (with two actively engaged and two on standby), collaborates to ensure the project's success and evolution.

## Technologies Used

- Django REST Framework
- React
- PostgreSQL
- Docker

## Getting Started

To get started with PySkins, follow these steps:

1. Clone this repository to your local machine.
2. Set up your development environment using Docker.
3. Make sure you have Python installed on your machine.
4. Run the following commands in the terminal:
 - docker-compose up -d
 - docker-compose exec django python manage.py migrate
 - docker-compose exec django python manage.py populate_db

## Contributing

We welcome contributions from the community to enhance PySkins. If you'd like to contribute, please follow these guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Ensure your code adheres to the project's coding standards.
- Submit a pull request detailing your changes for review by the maintainers.
