<div align="center">
    <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1593524185/zfwgali2ynkoeysxw40m.svg" width="300px"/>
</div>

<br />

<h2 align="center">
   💈✂️ GoBarber ✂️💈
</h2>

<p align="center">
  <img alt="Project programing languages count" src="https://img.shields.io/github/languages/count/StefanoSaffran/gobarber?color=ff9000">
   <img alt="Repository size" src="https://img.shields.io/github/repo-size/StefanoSaffran/gobarber?color=ff9000">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/StefanoSaffran/gobarber?color=ff9000">
  <img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?color=ff9000">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/StefanoSaffran/gobarber?color=ff9000">
  <img alt="GitHub license" src="https://img.shields.io/github/license/StefanoSaffran/gobarber?color=ff9000">
</p> 

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
  </p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=GoBarber%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FStefanoSaffran%2Fgobarber%2Fmaster%2FInsomnia_2020-06-30.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
  </a>
</p>

## :computer: Project 

 💈 A barber scheduling app allowing users to choose from a list of barbers and barbers to track their appointments. 💈

 <p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1593515951/GoStack/wpdzqxxsrsfvmipep1r2.gif" >
</p>

## :rocket: Built with

This project was developed with the following technologies:

<details>
  <summary>Backend</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [TypeORM](https://typeorm.io/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
-   [MongoDB](https://www.mongodb.com/)
-   [Docker](https://www.docker.com/docker-community)
-   [PostgreSQL](https://www.postgresql.org/)
-   [JWT](https://jwt.io/)
-   [Celebrate](https://github.com/arb/celebrate)
-   [AWS S3](https://aws.amazon.com/pt/s3/)
-   [Multer](https://github.com/expressjs/multer)
-   [Tsyringe](https://github.com/microsoft/tsyringe)
-   [uuidv4](https://www.npmjs.com/package/uuidv4)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Cors](https://www.npmjs.com/package/cors)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [Handlebars](https://handlebarsjs.com/)
-   [Nodemailer](https://nodemailer.com/about/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Frontend</summary>

-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Unform](https://unform.dev/)
-   [Styled Components](https://styled-components.com/)
-   [Context API](https://reactjs.org/docs/context.html)
-   [React-toggle](https://github.com/aaronshaf/react-toggle)
-   [React-spring](https://www.react-spring.io/)
-   [Polished](https://polished.js.org/)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Date-fns](https://date-fns.org/)
-   [uuidv4](https://www.npmjs.com/package/uuidv4)
-   [Axios](https://www.npmjs.com/package/axios)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Mobile</summary>

-   [React](https://pt-br.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Unform](https://unform.dev/)
-   [Styled Components](https://styled-components.com/)
-   [Context API](https://reactjs.org/docs/context.html)
-   [React Navigation](https://reactnavigation.org/)
-   [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
-   [Axios](https://www.npmjs.com/package/axios)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: How to run

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/) 

I strongly recommend using [Docker](https://www.docker.com/) to run the databases.
<br>
If you decide to use docker, follow this steps to install and run the docker image.

```bash
# install Postgres image (if you don't specify an username it will be postgres by default)
$ docker run --name postgresimagename -e POSTGRES_PASSWORD=yourPassword -p 5432:5432 -d postgres

# install Mongo image
$ docker run --name mongoimagename -p 27017:27017 -d -t mongo

# install Redis image
docker run --name redisimageName -p 6379:6379 -d -t redis:alpine

# start Postgres
$ docker start postgresimagename

# start Mongo
docker start mongoimagename

# start Redis
docker start redisimageName

```
### Backend
Now clone the repository and install the dependencies.
```bash
# to clone the repository
$ git clone https://github.com/StefanoSaffran/gobarber.git

# go into the backend folder
$ cd gobarber/backend

#install the backend dependencies
$ yarn

```
In order to connect to the database, you will need to enter the access informations into a ormconfig.json. You can find more about it [here](https://typeorm.io/#/using-ormconfig).

Also, you have to configure the enviroments variables in the .env file, based on a .env.example file that is provided in the backend folder, change the variables according to your environment.

```bash
# run migrations
$ yarn typeorm migration:run

# run api
$ yarn dev:server
```

### Frontend

```bash
# in another tab of the terminal install the frontend dependencies and run it 
$ cd frontend
$ yarn
$ yarn start
```

### Mobile

for mobile you need the Android emulator with the SDK installed or IOS emulator and the react-native cli.

<blockquote>The project was developed and tested on Android emulator</blockquote>

```bash
# install dependencies and run the mobile
$ cd mobile
$ yarn

# first open the emulator and start the react native server
$ yarn start

# in another tab install and run the app
$ yarn android

```

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/StefanoSaffran/gobarber/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch!

<a href="https://stefanosaffran.com" target="_blank" >
  <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:stefanoas@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Stefano Saffran.