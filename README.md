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
Create a .ENV file in the backend *root*, 
copy paste the following and
change DB_USER and DB_PASS with your infos:
```
DB_HOST= localhost
DB_USER= your_databse_user
DB_PASS= your_user_password
DB_NAME= groupomania
TOKEN= hHpK79ZV4N7YAbdj
```
$cd BACKEND repository in terminal :
```
nodemon server.js
```
Your BDD is ready ! 
----------

To access admin user, enter the following infos on the connection page :
```
Email:
admin@admin.com

Password:
admin
```

### Back-end setup
```
cd backend
```
then
```
npm install
```
Start server
```
nodemon server
```
### Front-end setup
```
cd frontend
```
Make sure to have Vue.cli
```
npm install -g @vue/cli
```
Then
```
npm install
```
Start front
```
npm run serve
```

