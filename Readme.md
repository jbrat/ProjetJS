##Projet Javascript Licence 

###Organisation du travail : 

- Design/css : Paul NEGRONI
- Developpement React & Server NodeJS : Julien BRAT


###Realisation

- FrontEnd en ReactJS
Interface très simple avec un tableau listant une liste de séries ainsi qu'un formulaire permettant d'ajouter une série. Ces deux composants sont créés à partir du framework ReactJS, ils sont aussi reliés à l'aide de requêtes à un serveur qui a été developpé sur NodeJS. 


- BackEnd API NodeJS
Le BackEnd est un serveur créé avec NodeJS, il joue le rôle d'une API Rest permettant de post, delete, get des series se trouvant sur le serveur, une architecture MVC est présente et un HTTP status est retourné à chaque Réponse du serveur. 


###Installation 

Vous devez posséder NodeJS ainsi que npm 

``` bash
	apt-get install nodejs
	apt-get install npm
```

Une fois fait il ne vous reste qu'a réaliser un npm install sur les dossiers du serveur et du front. 

Pour compiler le code ReactJS utiliser la commande : 

``` bash
node_modules/.bin/webpack -w --config 
```

Et pour lancer le serveur :

``` bash
node --harmony --use_strict server/index.js
```

Il vous suffira d'accéder à la page index.html située dans front/ pour avoir l'affichage. 

Le design réalisé par Paul NEGRONI est dit responsive, il s'adapte sur les différents types d'écrans. 
