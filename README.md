
# Jobs board

An small application that consumes and shows jobs from the github api
  
### Prerequisites

- Install Docker - [See Instalation](https://docs.docker.com/install/overview/)

- Install Docker Compose - [See instalation](https://docs.docker.com/compose/install/)

### Built with

- Ruby (3.0.1)

- Rails (6.1.3.1)

- PostgreSQL (10.12)

## Index

1. [Settings](#settings)  

1.1. [Starting the project](#starting-the-project)

## Settings

1. `docker-compose up --build` 

2. `docker-compose exec backend rails db:create`

3. `docker-compose exec backend rails db:migrate`
  
Make sure to run steps 1-4 on a separate terminal while you leave the command from step 1 running.

[top ⇈](#settings)

### Starting the project

  

After the configuration is finished the project is already started, it can be restarted with docker-compose
  

```

docker-compose up

```

After the server is started the api and frontend can be seen at respectivelly

```
localhost:3001/
localhost:3000/
```
The requested endpoint is at /jobs
