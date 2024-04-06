Node instalação

    # installs NVM (Node Version Manager)
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

    # download and install Node.js
    nvm install 20

    # verifies the right Node.js version is in the environment
    node -v # should print `v20.12.1`

    # verifies the right NPM version is in the environment
    npm -v # should print `10.5.0`

Fonte: https://nodejs.org/en/download/package-manager


<h2> Criação do projeto: </h2>

    sudo apt install npm

    npm init -y

    npm install typescript express

    npm install @types/node @types/express --save-dev

    npx tsc --init


<h2>Crie o arquivo app.ts inicial </h2>

    atualize o package.json

    "scripts": {
        "start": "tsc && node dist/app.js",
        "dev": "nodemon src/app.ts"
    },

    npm install nodemon ts-node --save-dev


<h2> Postgresl </h2>


    npm install @types/pg --save-dev


<h2> DDL Postgres </h2>


    CREATE TABLE books (
        id serial,
        title VARCHAR(40) NOT NULL,
        author VARCHAR(40) NOT NULL,
        isbn VARCHAR(10) NOT NULL,
        release_date VARCHAR(10),
        
        constraint pk_books primary key (id)
    );


    select * from books;