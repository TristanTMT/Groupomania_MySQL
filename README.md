# GROUPOMANIA - OpenClassrooms P7

# [Développeur Web Bac+2 - OpenClassRooms](https://openclassrooms.com/fr/paths/185-developpeur-web)
## Projet07-Groupomania - *Création d'une application fullstack*

/* Mettre un gif */

### Compétences professionnelles :

- Conception et integration de l'interface utilisateur (VueJS)

- Création et implémentation d'un modèle logique de données conformément à la réglementation (API REST)

- Mettre en œuvre des opérations CRUD de manière sécurisée

- Stockage des données dans une base de données SQL

- Sécurisation des données (OWASP/RGPD)

- Authentifier un utilisateur et maintenir sa session

- Personnaliser le contenu envoyé à un client web

### Compétences techniques :

- HTML
- CSS / SCSS
- API REST
- VUEJS
- NODE.JS / Express
- MySQL
- GIT

## Installation
Clone this project from GitHub.

----------
### Database setup
Start your MySQL server with GUI like Workbench, PhpMyAdmin, etc or with your terminal :
````
mysql -u root -p
````

Create your database :

```
CREATE DATABASE groupomania;
````
For work this database in terminal :
```
USE groupomania;
````
Then import the database, 
you can find it from :
```
/backend/database_import/groupomania.sql
```
After :
```
cd backend
```
Create a .ENV file in the backend *root*
copy paste the following and
change DB_USER and DB_PASS with your infos:
```
DB_HOST= localhost
DB_USER= your_databse_user
DB_PASS= your_user_password
DB_NAME= groupomania
```
### Back-end setup

then
```
npm install
```
Start server
```
nodemon server.js
```
You must read in terminal :
```
Listening on port 3000
Houra ! Connection à la base de donnée réussie !
```
### Front-end setup
```
cd frontend
```
Make sure to have Vue.cli. My version is 4.5.0.
```
npm install -g @vue/cli
```
Then
```
npm install
```
Create a file .eslintrc.js and copy this code :
```
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
```
Start front
```
npm run serve
```
Let's go :
```
http://localhost:8080/
```
Create users on the connection page and enjoy !

To access admin user (admin = 1 in users table), enter the following infos on the connection page :   
Don't delete this account, just disconnect.
```
Email:
admin@admin.com

Password:
admin
```
