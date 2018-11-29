export const meta = {
id: 3,
title: "NextJS premiers retours",
yyyy: "2018",
mm: "11",
dd: "29",
author: "Vincent Hirtz",
category: "react",
}

[![Next.js](https://assets.zeit.co/image/upload/v1538361091/repositories/next-js/next-js.png)](https://nextjs.org)

### Un React simplifié

Je découvre en ce moment [NextJS](https://nextjs.org/), un framework basé sur React qui semble être un véritable couteau suisse pour le développeur qui ne veut pas s'embêter (comme moi).

### Points forts


* React friendly: pas besoin de réinventer la roue. N'importe quel développeur qui a touché à du React ne sera pas dépaysé car il n'y a pas de surcharge.

* Bac à sable: on peut vraiment développer sur le projet très rapidement car Next s'occupe de la compilation et offre des fichiers pré-conçus (non visibles) pour le webpack, App.js ou encore pour sa configuration générale. Un cas simple rencontré: quand on donne un lien au composant Link pour créer un lien interne, il va chercher directement le fichier du même nom. On peut bien sûr changer cela mais c'est important de la savoir.

* Pimp my project: Si on veut décider on peut customiser n'importe quel fichier défaut. Par exemple, _app.js remplacera le fichier par défaut de Next si vous voulez ajouter un component sur toutes les pages ou charger un css spécifique sur un CDN.

* Libs à disposition: Next porte quelques outils pour bien démarrer comme un router, un component link, l'App général...

* Documentation et tutoriels de qualité

* Production simple easy: Suffit d'un serveur node et de lancer 
  > NODE_ENV=production node server.js


### Points faibles

* Livereload: C'est cool mais suffit de changer le nom d'un fichier pour que le build ne passe plus, l'erreur suivante apparait:
Error: Cannot find module './****.extension'

* Je cherche encore...

### Conclusion

Mon site actuel où vous vous trouvez tourne avec NextJS et je suis très surpris encore aujourdhui par sa simplicité. Il y a des gens fous qui ont fait des applications intéréssantes [ici](https://github.com/unicodeveloper/awesome-nextjs).





