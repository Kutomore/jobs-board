
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

2. [Runing commands](#run-commands)

3. [Stopping containers](#stop-and-remove-containers)

## Settings

1. `docker-compose up --build` 

2. `docker-compose exec backend rails db:create`

3. `docker-compose exec backend rails db:migrate`
  
Make sure to run steps 1-4 on a separate terminal while you leave the command from step 1 running.

[top ⇈](#settings)

### Starting the project

  

After the configuration is finished the project can be started with docker-compose
  

```

docker-compose up

```

After the server is started the api and frontend can be seen at respectivelly

```
localhost:3001/
localhost:3000/
```
The requested endpoint is at /jobs

[top ⇈](#settings)

### Run Commands

We can also run the commands inside the containers using the command `docker-compose run`, specifying a container. If I want to run as `backend` the specs, for example, I can use:

```

docker-compose run web bundle exec rspec

```

  
  

[top ⇈](#working-with-containers)

### Stop and Remove Containers

  

To stop a container running in the foreground, I use `Ctrl-C`. To stop a container in the background, I drag:

  

```

docker-compose stop db web

```

  

To stop all active containers, I can run the command without arguments, as in:

  
  

```

docker-compose stop

```

  

Note, however, that the `stop` command does not remove the containers, just to execute them. If I want to get into them again, I can use the `docker-compose -f dev.yml up` command and it will start the same container where I was working. To remove containers individually, we can run:

  

```

docker-compose rm db web

```

  

And we can also remove everything with:

  

```

docker-compose down

```

  

[top ⇈](#working-with-containers)
