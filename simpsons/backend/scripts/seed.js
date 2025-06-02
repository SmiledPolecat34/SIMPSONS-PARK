// Persos
db.characters.insertMany([
    {
        name: "Homer Simpson",
        description: "Père de famille maladroit et employé à la centrale nucléaire de Springfield.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
    },
    {
        name: "Marge Simpson",
        description: "Épouse de Homer, connue pour sa coiffure bleue et son bon sens.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
    },
    {
        name: "Bart Simpson",
        description: "Fils aîné de la famille, espiègle et rebelle.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
    },
    {
        name: "Lisa Simpson",
        description: "Fille intelligente et militante, passionnée de musique et d'écologie.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png"
    },
    {
        name: "Maggie Simpson",
        description: "Le bébé de la famille, souvent silencieuse mais pleine de surprises.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png"
    },
    {
        name: "Ned Flanders",
        description: "Voisin ultra-religieux et gentil, toujours prêt à aider.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/8/84/Ned_Flanders.png"
    },
    {
        name: "Mr. Burns",
        description: "Propriétaire avare et cruel de la centrale nucléaire de Springfield.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/5/56/Mr_Burns.png"
    },
    {
        name: "Milhouse Van Houten",
        description: "Meilleur ami de Bart, timide et maladroit.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Milhouse_Van_Houten.png/250px-Milhouse_Van_Houten.png"
    },
    {
        name: "Krusty le Clown",
        description: "Clown télévisé célèbre à Springfield, au comportement douteux.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Krustytheclown.png/250px-Krustytheclown.png"
    },
    {
        name: "Chief Wiggum",
        description: "Chef de la police de Springfield, incompétent mais attachant.",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Chief_Wiggum.png/250px-Chief_Wiggum.png"
    }
]);

// Saisons
db.seasons.insertMany([
    {
        season: 1,
        year: 1989,
        title: "Saison 1"
    },
    {
        season: 2,
        year: 1990,
        title: "Saison 2"
    },
    {
        season: 3,
        year: 1991,
        title: "Saison 3"
    },
    {
        season: 4,
        year: 1992,
        title: "Saison 4"
    },
    {
        season: 5,
        year: 1993,
        title: "Saison 5"
    }
]);

// Ep
db.episodes.insertMany([
    {
        _id: ObjectId("6839bc8871ccc5a006d861ff"),
        season: 1,
        number: 1,
        code: "S01E01",
        title: "Noël mortel",
        original_title: "Simpsons roasting on an open fire",
        date_usa: ISODate("1989-12-17T00:00:00.000Z"),
        description: `Ce soir, les Simpson assistent à la fête de Noël de l'école dans laquelle Bart et Lisa participent. De retour à la maison, les enfants rédigent leur lettre pour le Père Noël : Lisa réclame pour la énième année un poney et Bart veut un tatouage. Homer est fier de montrer aux enfants sa décoration extérieure, mais ces derniers sont plutôt en extase devant celle de Ned Flanders. Pendant que Marge et Lisa vont faire les courses, Bart se fait tatouer "Maman" en cachette pour lui faire une surprise. Celle-ci n'est pas très appréciée par Marge qui se voit donc obligée de le lui faire effacer. L'opération est très coûteuse et Marge dépense toutes les économies en se disant qu'il reste la prime de Noël d'Homer. Mais Homer n'en aura pas cette année ! Les Simpson se retrouvent sans un sous à quelques jours à peine de Noël...`
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86200"),
        season: 1,
        number: 2,
        code: "S01E02",
        title: "Bart le génie",
        original_title: "Bart the Genius",
        date_usa: ISODate("1990-01-14T00:00:00.000Z"),
        description: "Toute la famille est réunie autour d'une table pour jouer au scrable. Bart est d'humeur joyeuse et Lisa lui rappelle qu'il a plutôt intérêt à réviser pour les tests qu'il va devoir passer. Le lendemain, il se fait dénoncer par Martin pour s'être moqué du principal Skinner, qui d'ailleurs le convoque dans son bureau après la classe. Mme Krapabelle fait faire un test de Q.I. à ses élèves. Celui-ci semble être bien trop dur pour l'esprit de Bart ; il répond au hasard et réussit à échanger sa feuille avec celle de Martin. Alors que Skinner discute de Bart avec ses parents, le docteur Loren Pryor, le psychologue scolaire, leur annonce que leur enfant est un génie, avec un QI de 216. Le psychologue propose alors à Bart d'intégrer une école pour surdoués. Il accepte volontiers..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86201"),
        season: 1,
        number: 3,
        code: "S01E03",
        title: "Un atome de bon sens",
        original_title: "Homer's Odyssey",
        date_usa: ISODate("1990-01-21T00:00:00.000Z"),
        description: "Lors d'une visite de l'école à la centrale, Homer se ridiculise devant son fils en provoquant une catastrophe et se fait renvoyer. Il se met aussitôt à rechercher un nouveau travail mais toutes les portes se ferment devant lui. Il termine sa journée au bar, comme à son habitude, et demande à Moe s'il peut lui faire crédit. Comme Moe pense qu'il ne trouvera pas un nouveau travail, il refuse. Marge se voit alors contrainte de travailler pour faire vivre sa famille. Au bout du rouleau, Homer va casser la tirelire de son fils pour récupérer de quoi s'acheter une bière. Après s'être rendu compte de ce qu'il venait de faire, il prend la décision de se suicider en se jetant du pont de Springfield..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86202"),
        season: 1,
        number: 4,
        code: "S01E04",
        title: "Simpsonothérapie",
        original_title: "There's No Disgrace Like Home",
        date_usa: ISODate("1990-01-28T00:00:00.000Z"),
        description: "Homer est invité avec sa famille au pique-nique qu'organise M. Burns pour ses employés. Pendant la journée, Marge s'ennuie et passe son temps à boire et Bart refuse, cette année, de laisser gagner M. Burns à la course de sac. Heureusement, Homer l'en empêche au dernier moment. En quittant le pique-nique, Homer pense que sa famille n'est pas normale et va essayer de la remettre sur le droit chemin. C'est en voyant la publicité du docteur Marvin Monroe qu'il trouve la solution. Il décide donc de faire subir à sa famille une thérapie. Comme il n'a pas assez d'argent, il se voit obligé de vendre sa télévision pour payer la séance. Homer conduit ainsi sa famille au centre thérapeutique, avec l'espoir en tête de la changer..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86203"),
        season: 1,
        number: 5,
        code: "S01E05",
        title: "Terreur à la récré",
        original_title: "Bart the General",
        date_usa: ISODate("1990-02-04T00:00:00.000Z"),
        description: "A l'école, Nelson fait tomber par terre volontairement les gâteaux de Lisa. Pour la défendre, Bart se confronte à lui et le fait saigner du nez. N'acceptant pas que Bart ait fait couler son sang, il lui donne rendez-vous à la sortie pour se battre. Bart craint ce moment toute la journée jusqu'à ce que Nelson et ses amis le frappent. Nelson lui jure de recommencer. Quand Marge entend ce qui s'est passé, elle espère bien que Bart va aller voir le principal Skinner pour lui raconter ce qui est arrivé mais Homer est contre, invoquant le 'code d'honneur de la cours de récré'. Il lui donne quelques conseils mais lorsqu'il se retrouve face à Nelson, Bart se prend une nouvelle leçon. Il décide d'aller voir son grand-père pour qu'il lui donne de bons conseils..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86204"),
        season: 1,
        number: 6,
        code: "S01E06",
        title: "St Lisa Blues",
        original_title: "Moaning Lisa",
        date_usa: ISODate("1990-02-11T00:00:00.000Z"),
        description: "Lisa n'est pas très bien et se sent déprimée, si bien que les Simpson reçoivent un mot disant qu'elle ne veut pas participer au cours de sport. Homer et Bart, quant à eux s'affrontent dans un jeu de boxe. Marge tente en vain de la faire à nouveau sourire mais la seule chose qui la rend plus heureuse est de jouer un peu de blues. Seulement Homer lui demande d'arrêter parce que ça le déconcentre et le fait perdre au jeu vidéo. Alors que Lisa pensait que tout était perdu, elle entend, en pleine nuit, de sa fenêtre, jouer du saxophone. Elle sort de la maison pour savoir qui en joue et rencontre 'Gencives Sanglantes' avec qui elle fait un bœuf. Marge se rend compte en pleine nuit que Lisa n'est pas dans sa chambre et part à sa recherche..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86205"),
        season: 1,
        number: 7,
        code: "S01E07",
        title: "L'abominable homme des bois",
        original_title: "The Call of the Simpsons",
        date_usa: ISODate("1990-02-18T00:00:00.000Z"),
        description: "Homer et Bart sont en train de s'occuper du jardin quand Ned Flanders débarque avec son nouveau camping-car. Jaloux de son voisin, Homer décide de s'en acheter un. Le camping-car de ses rêves est malheureusement hors de prix. Le vendeur arrive tout de même à lui vendre un vieux camping-car d'occasion en piteux état. Pour profiter au plus vite de leur achat, les Simpson font une virée en forêt. En voulant prendre un raccourci, Homer se retrouve au bord d'un ravin. La seule solution qu'ils ont pour sauver leurs peaux est de sortir du véhicule et de le laisser tomber. Les Simpson n'ont plus rien et se retrouvent seuls, enfin presque, dans les bois..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86206"),
        season: 1,
        number: 8,
        code: "S01E08",
        title: "Bart a perdu la tête",
        original_title: "The Telltale Head",
        date_usa: ISODate("1990-02-25T00:00:00.000Z"),
        description: "Homer et Bart sont poursuivis à travers la ville par des habitants en colère, avec la tête de la statue de Jebediah Springfield, le fondateur de la ville, entre les mains. Bart raconte alors aux habitants comment cette situation est arrivée : tout a commencé dimanche matin après la messe. Bart a eu très envie d'aller voir un nouveau film mais Marge n'a pas voulu ; il a alors demandé à Homer de l'argent et y est allé quand même. En arrivant devant le cinéma, il est tombé par hasard sur la bande de Jimbo. Les loubards l'ont incité à rentrer frauduleusement au cinéma avec eux puis il est devenu l'un des leurs. Après avoir entendu qu'ils trouveraient cool de couper la tête de la statue de Jebediah Springfield, Bart a décidé de le faire pour leur montrer qu'il était lui aussi rebelle. Mais, il a vite regretté son geste..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86207"),
        season: 1,
        number: 9,
        code: "S01E09",
        title: "Marge perd la boule",
        original_title: "Life on the Fast Lane",
        date_usa: ISODate("1990-03-18T00:00:00.000Z"),
        description: "Bart et Lisa préparent un petit déjeuner pour l'anniversaire de Marge. Homer se rend compte qu'il l'a encore une fois oubliée. Il se dépêche d'aller lui acheter un cadeau et décide de lui offrir une boule de bowling. Le soir, au restaurant, lorsqu'il lui offre son cadeau, Marge est en colère car elle sait qu'Homer l'a achetée pour lui parce qu'il a fait graver son nom dessus. Elle a bien l'intention de garder ce cadeau pour elle et va jouer seule au bowling. Sur les pistes, elle rencontre Jacques, un professeur de bowling qui va tout de suite être séduit par elle. Après plusieurs soirées passées au bowling, Homer et les enfants sentent que quelque chose ne tourne pas rond..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86208"),
        season: 1,
        number: 10,
        code: "S01E10",
        title: "L'odyssée d'Homer",
        original_title: "Homer's Night Out",
        date_usa: ISODate("1990-03-25T00:00:00.000Z"),
        description: "Bart reçoit un appareil photo miniature et s'amuse à prendre tout un tas de photos. Ce soir, Homer est invité à l'enterrement de la vie de garçon d'Eugène Fisk, un de ses collègues de la centrale. Il se trouve que le reste de la famille va également dans le même restaurant sans le savoir. Pendant la fête, une danseuse orientale danse avec Homer sur une table, et ceci juste au moment où Bart entre accidentellement dans la salle et en profite pour faire une photo. En donnant une copie à Milhouse, elle va circuler dans toute la ville jusqu'à arriver dans les mains de Marge. Tout le monde se moque de lui sans qu'il ne comprenne pourquoi. Lorsqu'il rentre tranquillement à la maison, Marge lui montre la photo compromettante et le met à la porte..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d86209"),
        season: 1,
        number: 11,
        code: "S01E11",
        title: "L'espion qui venait de chez moi",
        original_title: "The Crepes of Wrath",
        date_usa: ISODate("1990-04-15T00:00:00.000Z"),
        description: "Homer se prend dans les pied le skate de Bart qui traînait à l'étage. Après une chute douloureuse, il se retrouve immobilisé jusqu'à l'arrivée de Marge. Furieuse, Marge demande expressément à Bart de ranger sa chambre. En faisant le ménage, il trouve une cerise explosive. Il en profite pour la faire exploser dans les toilettes de l'école alors que la mère du principal Skinner s'y trouvait ! Skinner qui en a marre de toutes ses bêtises propose à ses parents de l'envoyer en France, dans le cadre d'un échange d'enfants. Bart est ravi et accepte. En échange, les Simpson reçoivent un enfant Albanais, Adil Hoxha. Mais les choses ne se déroulent pas comme prévu. César et Ugolin, les vignerons Français qui hébergent Bart le font travailler très dur tandis que l'Albanais qui vit chez les Simpson, s'avère être un espion qui travaille pour son gouvernement..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d8620a"),
        season: 1,
        number: 12,
        code: "S01E12",
        title: "Un clown à l'ombre",
        original_title: "Krusty Gets Busted",
        date_usa: ISODate("1990-04-29T00:00:00.000Z"),
        description: "Marge appelle Homer pour lui demander d'acheter en rentrant un pot de glace parce qu'elle reçoit ses sœurs. Lorsqu'il se rend au mini-marché pour l'acheter, il est témoin d'un braquage. En effet, il a vu Krusty pointer un revolver sur Apu et s'enfuit avec le butin. Avec la vidéo de surveillance comme preuve, Krusty est vite arrêté par la police. On commence à parler de l'histoire à la télévision alors que Krusty clame son innocence. Bart est certain que ce n'est pas lui qui a commis le coup, et avec l'aide de Lisa, il mène l'enquête. Ils se rendent chez Apu à la recherche d'indices. Premier indice : sur la vidéo, on voit Krusty utiliser le micro-ondes, or il ne peut pas s'en approcher puisqu'il porte un pacemaker..."
    },
    {
        _id: ObjectId("6839bc8871ccc5a006d8620b"),
        season: 1,
        number: 13,
        code: "S01E13",
        title: "Une soirée d'enfer",
        original_title: "Some Enchanted Evening",
        date_usa: ISODate("1990-05-13T00:00:00.000Z"),
        description: "Marge ne se sent pas aimée par Homer, alors elle décide d'appeler une radio pour parler de ses problèmes de couple. Homer qui écoute la radio à ce moment-là, veut se racheter mais il a tellement peur que Marge le quitte, qu'il hésite à rentrer à la maison. Cependant, quand il rentre, Marge est furieuse contre lui mais elle change rapidement d'attitude lorsqu'elle se rend compte qu'il n'est pas venu les mains vides. Ils décident alors d'aller au restaurant en amoureux et font venir Mlle Botz, une baby-sitter, pour garder les enfants. Bart et Lisa la trouvent un peu étrange puis ils se rendent compte qu'elle est recherchée par la police et qu'elle est là uniquement pour cambrioler la maison..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e0"),
        season: 2,
        number: 14,
        code: "S02E01",
        title: "Aide-toi, le ciel t'aidera",
        original_title: "Bart Gets an F",
        date_usa: ISODate("1990-10-11T00:00:00.000Z"),
        description: `Une fois que Martin a fini son exposé, Mme Krapabelle demande à Bart de présenter le sien sur le livre "L'île au trésor" qu'il est censé avoir lu. Bien évidemment, Bart ne l'a jamais ouvert et tente d'en faire une explication sans convaincre personne. Mme Krapabelle le puni et lui rappelle que le lendemain il a une interrogation d'Histoire très importante. Au lieu de passer son temps à réviser, il préfère jouer aux jeux vidéos et regarder la télévision. Le jour J, il fait semblant d'être malade en classe et se fait renvoyer à la maison pour se reposer. Mais il devra quand même passer son contrôle. Il demande à Martin de l'aider à réviser. La veille de son contrôle, il fait une prière et implore le Seigneur de faire en sorte qu'il ne puisse pas se rendre à l'école le lendemain. Au petit matin, Springfield est couverte de neige...`
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e1"),
        season: 2,
        number: 15,
        code: "S02E02",
        title: "Simpson et Dalila",
        original_title: "Simpson and Delilah",
        date_usa: ISODate("1990-10-18T00:00:00.000Z"),
        description: "Pendant un programme télé, Homer voit une publicité qui vante les mérites de Dimoxinil, un produit miracle qui permet de faire pousser les cheveux. Il court voir un médecin afin qu'il lui prescrive le traitement mais ce dernier coûte 1 000 $ ! En discutant avec Lenny et Carl, il se rend compte que son traitement peut être pris en charge par son assurance maladie. Il s'empresse donc de retourner voir le médecin à la clinique du cheveu pour obtenir le produit miracle. Lorsqu'il se réveille, le lendemain, il constate que le produit a agi comme il l'espérait. M. Burns le repère et lui propose de passer cadre. Il recrute alors Karl, son assistant, qui va entre autre, l'aider à éviter les pièges que Smithers va lui tendre par jalousie..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e2"),
        season: 2,
        number: 16,
        code: "S02E03",
        title: "Simpson's Horror Show",
        original_title: "Treehouse of Horror",
        date_usa: ISODate("1990-10-25T00:00:00.000Z"),
        description: `La maison du mauvais rêve : Homer vient d'acheter une grande maison très bon marché. Lorsque la famille emménage, elle remarque très rapidement que des phénomènes bizarres se produisent... Les damnés ont faim : Alors que les Simpson sont en train de faire un barbecue, des extra-terrestres viennent les enlever. Ils leurs offrent un délicieux dîner afin de les engraisser... Le corbeau : Un homme riche vit seul dans un immense manoir. Un corbeau s'introduit dans sa demeure et terrorise le propriétaire en ne prononçant que deux simples mots : "Jamais plus"...`
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e3"),
        season: 2,
        number: 17,
        code: "S02E04",
        title: "Sous le signe du poisson",
        original_title: "Two Cars in Every Garage and Three Eyes on Every Fish",
        date_usa: ISODate("1990-11-01T00:00:00.000Z"),
        description: "Bart et Lisa pêchent tranquillement près de la centrale lorsque Dave Shutton, un journaliste, vient leur poser quelques questions. Au même moment, Bart attrape un drôle de poisson à trois yeux ! Peu de temps après, une commission d'enquête du gouvernement vient visiter la centrale et ordonne à M. Burns de la rendre conforme au plus vite sous peine d'être obliger de la fermer. Pour cela, M. Burns a besoin de 56 millions de dollars ! Alors qu'il est complètement désespéré, Homer lui donne l'idée de se présenter au poste de gouverneur de la ville. Il s'entoure alors des meilleurs hommes pour l'aider à gagner cette campagne..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e4"),
        season: 2,
        number: 18,
        code: "S02E05",
        title: "Le dieu du stade",
        original_title: "Dancin' Homer",
        date_usa: ISODate("1990-11-08T00:00:00.000Z"),
        description: "Pendant un match de base-ball, Homer se dévoue pour encourager, en dansant, l'équipe des Isotopes de Springfield, qui sont en train de perdre. Son énergie redynamise très vite les joueurs qui remportent le match. À la fin, le président de l'équipe des Isotopes lui propose de devenir la mascotte officielle de l'équipe. Après quelques minutes de réflexion, il accepte la proposition. Ainsi, Homer accompagne les Isotopes dans tous leurs matchs et leur porte chance jusqu'au jour où ils en perdent un. Sans plus attendre, le président de l'équipe lui propose de quitter les Isotopes pour celle de Capital City. Les Simpson déménagent donc et vont s'installer à la capitale..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e5"),
        season: 2,
        number: 19,
        code: "S02E06",
        title: "Mini golf, Maxi Beauf",
        original_title: "Dead Putting Society",
        date_usa: ISODate("1990-11-15T00:00:00.000Z"),
        description: "Homer est énervé parce qu'il tond la pelouse. Pour calmer ses nerfs, il demande à Marge de lui apporter une bière mais il n'en reste plus. Ned Flanders, qui assiste à la scène, l'invite à en prendre une chez lui. Homer accepte volontiers et en profite pour découvrir un peu plus ses voisins. Agacé de voir les Flanders heureux, il s'énèrve et s'en prend à Ned, qui lui demande de partir ! Le lendemain matin, Ned dépose chez les Simpson une lettre d'excuses qui fait rire toute la famille. Suite à cette altercation, Homer décide de mieux s'occuper de sa famille et emmène Bart au golf miniature où il rencontre Ned et Todd qui eux aussi, passent du bon temps. En prenant connaissance d'un tournoi, Homer pari avec Ned que Bart peut gagner le tournoi malgré le fait qu'il n'ait jamais rien gagné de sa vie..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e6"),
        season: 2,
        number: 20,
        code: "S02E07",
        title: "La fugue de Bart",
        original_title: "Bart vs. Thanksgiving",
        date_usa: ISODate("1990-11-22T00:00:00.000Z"),
        description: "Pendant que Marge prépare la dinde pour le dîner de Thanksgiving, Lisa finalise sa composition pour décorer la table. L'heure du repas familial approche ; la mère et les sœurs de Marge sont arrivées et Homer est parti chercher son père à la maison de retraite. Une fois à table, Lisa présente fièrement sa composition sans pour autant se douter que Bart va par accident la lui mettre au feu et gâcher ainsi la soirée ! Homer et Marge le punissent sans plus attendre en l'obligeant à monter dans sa chambre sans manger. Incompris, Bart s'enfuit avec Petit Papa Noël et erre dans les rues de Springfield. Mais la faim le rattrape et il se voit obligé de faire un don du sang pour gagner 12 $. Trop faible, il s'évanouit dans la rue et il est recueilli par deux clochards..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e7"),
        season: 2,
        number: 21,
        code: "S02E08",
        title: "Le saut de la mort",
        original_title: "Bart the Daredevil",
        date_usa: ISODate("1990-12-06T00:00:00.000Z"),
        description: "Bart et ses copains regardent ensemble un match de catch à la télévision. À la fin du programme, une publicité annonce que le rallye des monstres se déroulera samedi soir à Springfield. Homer et Bart sont littéralement hypnotisés et n'ont qu'une envie : y assister. Seulement, Lisa fait son premier concert le même jour. Après une petite discussion en famille, ils décident donc d'aller l'écouter puis de filer voir le spectacle. En cherchant une place sur le parking du rallye, Homer rentre par accident dans l'arène. Le dragonosaure s'attaque à la voiture et n'en fait qu'une bouchée ! Après un arrangement avec le propriétaire de ce dernier, ils assistent au spectacle du grand cascadeur Lance Murdock. Après avoir apprécié son talent et son courage, Bart décide de se lancer, lui aussi, dans les cascades en skate. Une fois bien entraîné, il prend la décision de franchir les Gorges de Springfield malgré l'interdiction d'Homer..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e8"),
        season: 2,
        number: 22,
        code: "S02E09",
        title: "Tous à la manif !",
        original_title: "Itchy & Scratchy & Marge",
        date_usa: ISODate("1990-12-20T00:00:00.000Z"),
        description: "Homer décide de rendre service à Marge en fabriquant une étagère à épices. Pendant ce temps, Marge prépare le repas et les enfants regardent comme d'habitude Itchy et Scratchy, leur dessin animé préféré. Cependant, un événement inattendu intervient : Maggie assomme Homer à l'aide d'un maillet ! Marge, qui se demande comment elle a pu avoir une telle idée, découvre avec stupeur que c'est en regardant Itchy et Scratchy. Elle envoie alors une lettre à la production qui n'en tient pas vraiment compte. Elle décide donc de manifester devant les bureaux de la production et arrive malgré tout à mobiliser les habitants de la ville. Kent Brockman l'invite dans son émission, Smartline, afin qu'elle puisse débattre avec les principaux intéressés. À la suite de son intervention télévisée, la production est inondée de courriers de protestations qui demandent que le dessin animé soit moins violent..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861e9"),
        season: 2,
        number: 23,
        code: "S02E10",
        title: "Toute la vérité, rien que la vérité",
        original_title: "Bart Gets Hit By A Car",
        date_usa: ISODate("1991-01-10T00:00:00.000Z"),
        description: "Bart dévale les rues de Springfield lorsqu'il se fait heurter par la voiture de M. Burns. Le choc est tellement violent que son âme monte au ciel et atterrit en enfer. Le Diable, après avoir fait quelques vérifications, lui indique qu'il y a eu une erreur et qu'il n'est pas encore son heure. À son réveil à l'hôpital, il voit sa famille et Lionel Hutz, un avocat un peu louche, qui propose aux Simpson de demander un dédommagement à M. Burns. Homer, gêné par cette situation, décide de ne pas poursuivre son patron jusqu'au jour où ce dernier, conseillé par ses avocats, lui offre un chèque de 100 $ ! Homer, offensé par l'attitude de M. Burns, décide de recourir à maître Hutz et de réclamer 1 million de dollars de dommages. Lionel Hutz va demander à Bart de jouer un peu la comédie afin de l'aider à gagner le procès..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861ea"),
        season: 2,
        number: 24,
        code: "S02E11",
        title: "Un poisson nommé Fugu",
        original_title: "One Fish, Two Fish, Blowfish, Blue Fish",
        date_usa: ISODate("1991-01-24T00:00:00.000Z"),
        description: "En dînant, Marge propose d'aller manger le lendemain soir des sushis dans un tout nouveau restaurant japonais. Homer, n'étant pas vraiment convaincu par ce qu'il va bien pouvoir manger, change très vite d'avis une fois les premiers sushis engloutis. Il aime tellement cette nouvelle cuisine qu'il commande le fameux poisson Fugu, un poisson qui peut être mortel s'il n'est pas correctement découpé. L'apprenti cuisinier qui se charge de le préparer commet une erreur ; ce qui envoie Homer directement à l'hôpital. Le Dr Hibbert lui annonce qu'il ne lui reste plus que 22 heures à vivre ! Homer se met alors à faire la liste de tout ce qu'il doit faire avant de partir..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861eb"),
        season: 2,
        number: 25,
        code: "S02E12",
        title: "Il était une fois Homer et Marge",
        original_title: "The Way We Was",
        date_usa: ISODate("1991-01-31T00:00:00.000Z"),
        description: "Les Simpson regardent en famille une émission sur le cinéma lorsque la télévision fait des siennes. Homer essaie comme il peut de la réparer et finit par la casser définitivement. Marge commence à raconter l'époque où avec Homer, ils ne regardaient que très peu la télévision. Rapidement Lisa lui demande comment ils se sont rencontrés. C'est alors que Marge commence le récit de leur rencontre : en 1974, Homer ne pensant qu'à sécher les cours, à manger et à fumer aux toilettes, alors que Marge militait pour l'égalité des sexes. Pendant une colle, Homer tombe sous le charme de Marge, mais cela n'a rien de réciproque. Pour essayer de séduire la belle fille aux cheveux longs, Homer est prêt à beaucoup de choses. Cependant, sa maladresse l'exaspère et elle finit par accepter d'être la cavalière d'Artie Ziff, au bal de fin d'année..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861ec"),
        season: 2,
        number: 26,
        code: "S02E13",
        title: "Tu ne déroberas point",
        original_title: "Homer vs. Lisa and the Eighth Commandment",
        date_usa: ISODate("1991-02-07T00:00:00.000Z"),
        description: `1220 avant JC, au Mont Sinaï. Homer le voleur écoute Moïse énoncer les 10 commandements et apprend tristement qu'il ne devra plus voler. De retour à Springfield, Homer entend dans le jardin Ned Flanders se disputer. Ned lui explique la raison de sa colère : l'employé du câble lui proposait d'installer le câble gratuit pour seulement 50 $. Homer, qui ne reste pas insensible à cet argument rattrape in extremis l'employé et se fait connecter au câble. Les Simpson peuvent profiter à présent de 1 600 heures de programmes par jour ! Mais Lisa n'est pas très fière de l'initiative qu'a pris Homer parce qu'elle estime que c'est du "vol". Bart profite de la situation et fait payer ses copains pour voir des films pour adultes. Quant à Homer, il invite tous ses amis à venir voir le match de boxe du siècle entre Dedrick Tatum et Watson...`
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861ed"),
        season: 2,
        number: 27,
        code: "S02E14",
        title: "Jamais deux sans toi",
        original_title: "Principal Charming",
        date_usa: ISODate("1991-02-14T00:00:00.000Z"),
        description: "À 8 heures du matin, Barney réveille Homer pour l'informer qu'un nouveau restaurant propose des grillades à volonté ; pourtant Homer s'était juré de ne manger des côtes de porc que 6 fois par semaine ! Il ne résiste pas à la tentation et emmène Marge avec lui pendant que Patty et Selma gardent les enfants. De retour du restaurant, Selma, désespérée, se confie à Marge en lui demandant de l'aider pour se trouver un mari. Marge, n'ayant pas oublié qu'Homer lui doit une faveur, lui demande naturellement de trouver un mari pour sa sœur. Comme Bart vient de faire une grosse bêtise à l'école, le principal Skinner convoque Homer dans son bureau. Lorsqu'Homer le voit, il réalise qu'il est de bon parti et qu'il pourrait bien plaire à Selma. Il l'invite donc à un dîner à la maison en présence des sœurs de Marge, mais voilà que lorsque Skinner arrive, il tombe sous le charme de Patty..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861ee"),
        season: 2,
        number: 28,
        code: "S02E15",
        title: "Fluctuat Homergitur",
        original_title: "Oh Brother, Where Art Thou?",
        date_usa: ISODate("1991-02-21T00:00:00.000Z"),
        description: "Pendant que les Simpson sont en train de dîner, le téléphone sonne pour annoncer à Homer que son père a eu une arythmie cardiaque et qu'il est hospitalisé. Homer se rend à l'hôpital pour voir Abraham qui a pris conscience qu'il est passé près de la mort. Il décide alors de dévoiler à Homer qu'il a un demi-frère. Il lui explique que pendant qu'il séduisait sa mère, il a eu une liaison avec une foraine et qu'ils ont eu cet enfant. Par la suite, Abraham et Mona ont décidé de le placer à l'orphelinat de Shelbyville afin qu'Homer puisse grandir dans le respect de son père. De ce pas, Homer part à la recherche de ce demi-frère et apprend qu'il a été élevé par la famille Powell et qu'il vit désormais à Détroit. Après maints coups de fils, il tombe enfin sur lui et l'invite à Détroit. Lorsque les Simpson arrivent, ils s'aperçoivent qu'Herbert est un riche homme d'affaires..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861ef"),
        season: 2,
        number: 29,
        code: "S02E16",
        title: "Une vie de chien",
        original_title: "Bart's Dog Gets an F",
        date_usa: ISODate("1991-03-07T00:00:00.000Z"),
        description: `En allant chercher le journal, Homer se bat avec Petit Papa Noël pour le récupérer. Le chien finit par le déchirer, ce qui énerve Homer. Comme il ne s'arrête pas là, Homer l’attache dans le jardin. Lisa a attrapé les oreillons et devra rester à la maison. Le chien arrive malgré tout à se détacher et déambule en ville en faisant un tas de bêtises. Homer est obligé d’aller le récupérer chez sa voisine. En allant au centre commercial pour acheter des revues pour Lisa, il succombe à une folie et s’achète une paire de baskets "Assassin" à 125 $ qu’il avait vue portée sur Ned ! Marge profite d’être seule avec sa fille pour lui montrer le dessus de lit que la famille Bouvier entretient depuis 5 générations. Lorsque les Simpson découvrent avec horreur que Petit Papa Noël a détruit les baskets d’Homer et le dessus de lit, ils décident de l’envoyer dans une école de dressage pour chien...`
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861f0"),
        season: 2,
        number: 30,
        code: "S02E17",
        title: "Un amour de grand-père",
        original_title: "Old Money",
        date_usa: ISODate("1991-03-28T00:00:00.000Z"),
        description: `Pendant la distribution des médicaments à la maison de retraite, Abraham se rend compte qu'il y a eu une erreur et qu'on ne lui a pas donné les bons cachets. En fait, l’infirmière l’a confondu avec une certaine Bea Simmons. Lorsqu’Abe et Bea se rencontrent, ils ont tout de suite un coup de foudre et ne se quittent plus. Ils revivent enfin ! Quelques semaines plus tard, Homer vient chercher son père pour l’emmener avec la famille au "Safari aux lions à prix discount", mais voilà qu'en voulant partir ils se retrouvent bloqués dans la voiture toute la nuit dans le parc, encerclés par tous les lions. Le lendemain matin, lorsqu'Abe rentre à la maison de retraite, il apprend que Bea est décédée pendant la nuit et qu'elle lui a légué 160 000 $ ! Il essaie comme il peut de profiter de cet argent mais il n'y arrive pas vraiment. Il décide alors d'offrir l'argent à la personne qui en aura le plus besoin...`
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861f1"),
        season: 2,
        number: 31,
        code: "S02E18",
        title: "Le pinceau qui tue",
        original_title: "Brush with Greatness",
        date_usa: ISODate("1991-04-11T00:00:00.000Z"),
        description: "Lors de sa dernière émission en direct du Mont Splashmore, Krusty conseille aux enfants de venir faire un tour au parc aquatique. Bart et Lisa tannent sans relâche Homer pour qu'il les accompagne le lendemain. Une fois au parc, Homer essaie la fameuse attraction H2-Oh. Manque de chance, il reste coincé dedans. En se pesant, il constate qu'il fait 130 kilos et décide de faire un régime. En allant au grenier, il tombe sur d'anciens tableaux de Marge représentant Ringo Starr. Marge raconte aux enfants pourquoi elle a abandonné la peinture. Lisa l'encourage à reprendre des cours. Marge devient vite l'élève préférée du professeur Lombardo, qui va lui permettre de remporter le 1er prix à la galerie d'art de Springfield. M. Burns entend parler de Marge et lui demande de peindre son portrait pour l'ouverture de l'aile Burns au musée d'art..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861f2"),
        season: 2,
        number: 32,
        code: "S02E19",
        title: "Mon prof, ce héros au sourire si doux",
        original_title: "Lisa's Substitute",
        date_usa: ISODate("1991-04-25T00:00:00.000Z"),
        description: "Mlle Hoover annonce à ses élèves qu'elle est malade et qu'elle va devoir s'absenter le temps de se soigner. Elle est aussitôt remplacée par M. Bergstrom, un professeur pas comme les autres, aux allures de cow-boy. Lisa tombe immédiatement sous son charme ! Pendant ce temps-là, les élections du président de la classe de CM1 se disputent entre Martin et Bart, qui est encouragé par ses copains et Homer. Mme Krapabelle s’empresse quant à elle de mettre la main sur le nouvel instituteur mais sans succès. Afin de se rapprocher de Lisa, Homer l'accompagne visiter le musée où ils rencontrent M. Bergstrom. Cependant, Lisa a honte du comportement d'Homer et est déçue de ne pas avoir pu profiter de cette rencontre. Marge lui propose alors d'inviter M. Bergstrom à dîner chez eux..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861f3"),
        season: 2,
        number: 33,
        code: "S02E20",
        title: "La guerre des Simpson",
        original_title: "The War of the Simpsons",
        date_usa: ISODate("1991-05-02T00:00:00.000Z"),
        description: "Marge organise à la maison une grande soirée à laquelle elle convie tous leurs amis. En fin de soirée, Homer est totalement saoul et fait fuir tous les invités. Marge n'a jamais eu aussi honte de sa vie et décide de régler ses problèmes avec Homer à l'écart des enfants. Le révérend Lovejoy organise une retraite conjugale au lac du Poisson chat, pour essayer d'aider psychologiquement les couples qui traversent une mauvaise passe. Marge s'inscrit et oblige donc Homer à l'accompagner. En entendant parler du Général Sherman, un poisson chat de 200 kilos, Homer ne pense plus qu'à une seule chose : le pêcher..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861f4"),
        season: 2,
        number: 34,
        code: "S02E21",
        title: "Un pour tous, tous contre un",
        original_title: "Three Men and a Comic Book",
        date_usa: ISODate("1991-05-09T00:00:00.000Z"),
        description: "Pendant le festival de la bande dessinée, Bart rencontre Martin et Milhouse qui sont fans comme lui de Radioactive Man. Ils profitent de la venue de Buddy Hodges, qui interprétait Atomic Boy, pour lui poser tout un tas de questions. En quittant le festival, le vendeur de BD montre à Bart et Nelson le premier numéro de Radioactive Man qu'il vend 100 $. À partir de ce moment-là, Bart va tout faire pour réunir cette somme : épuiser son père, vendre des bouteilles vides, vendre de la bière et même entretenir la maison de madame Glick. Tout ça pour seulement gagner 35 $ ! Lorsqu'il passe devant le Donjon de l'Androïde pour baver devant le n° 1 de Radioactive Man, il se rend compte que Martin et Milhouse cherchent aussi à l'acheter, sans pour autant avoir l'argent suffisant..."
    },
    {
        _id: ObjectId("683c6a660bdd12eea7d861f5"),
        season: 2,
        number: 35,
        code: "S02E22",
        title: "Le sang, c'est de l'argent",
        original_title: "Blood Feud",
        date_usa: ISODate("1991-07-11T00:00:00.000Z"),
        description: "Pendant que le maire Quimby inaugure le nouveau système d'alertes nucléaires, financé par M. Burns, ce dernier fait une crise sérieuse d'anémie. Pour se remettre sur pieds, il a absolument besoin d'une transfusion sanguine. Le problème est que son groupe sanguin est O négatif et qu'il est très rare. Homer apprend que Bart a le même groupe sanguin que son patron et arrive à le convaincre de faire un don du sang pour le sauver. Après une transfusion réussie, M. Burns est en pleine forme. Pour remercier Bart, il lui envoie simplement un mot par courrier alors qu'Homer pensait recevoir de l'argent. Furieux, il demande à Bart de rédiger une lettre qu'il veut lui envoyer mais Marge arrive à l'en empêcher de justesse. Le lendemain matin, Bart va tranquillement la poster..."
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861f6"),
        season: 3,
        number: 36,
        code: "S03E01",
        title: "Mon pote Michael Jackson",
        original_title: "Stark Raving Dad",
        date_usa: ISODate("1991-09-19T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861f7"),
        season: 3,
        number: 37,
        code: "S03E02",
        title: "Lisa va à Washington",
        original_title: "Mr. Lisa Goes to Washington",
        date_usa: ISODate("1991-09-26T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861f8"),
        season: 3,
        number: 38,
        code: "S03E03",
        title: "Le palais du gaucher",
        original_title: "When Flanders Failed",
        date_usa: ISODate("1991-10-03T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861f9"),
        season: 3,
        number: 39,
        code: "S03E04",
        title: "Le petit parrain",
        original_title: "Bart the Murderer",
        date_usa: ISODate("1991-10-10T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861fa"),
        season: 3,
        number: 40,
        code: "S03E05",
        title: "Une belle simpsonnerie",
        original_title: "Homer Defined",
        date_usa: ISODate("1991-10-17T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861fb"),
        season: 3,
        number: 41,
        code: "S03E06",
        title: "Tel père, tel clown",
        original_title: "Like Father Like Clown",
        date_usa: ISODate("1991-10-24T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861fc"),
        season: 3,
        number: 42,
        code: "S03E07",
        title: "Les Simpson Spécial Halloween II",
        original_title: "Treehouse of Horror II",
        date_usa: ISODate("1991-10-31T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861fd"),
        season: 3,
        number: 43,
        code: "S03E08",
        title: "Le poney de Lisa",
        original_title: "Lisa's Pony",
        date_usa: ISODate("1991-11-07T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861fe"),
        season: 3,
        number: 44,
        code: "S03E09",
        title: "Un père dans la course",
        original_title: "Saturdays of Thunder",
        date_usa: ISODate("1991-11-14T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d861ff"),
        season: 3,
        number: 45,
        code: "S03E10",
        title: "Un cocktail d'enfer",
        original_title: "Flaming Moe's",
        date_usa: ISODate("1991-11-21T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86200"),
        season: 3,
        number: 46,
        code: "S03E11",
        title: "Burns verkaufen der Kraftwerk",
        original_title: "Burns Verkaufen der Kraftwerk",
        date_usa: ISODate("1991-12-05T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86201"),
        season: 3,
        number: 47,
        code: "S03E12",
        title: "Vive les mariés !",
        original_title: "I Married Marge",
        date_usa: ISODate("1991-12-26T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86202"),
        season: 3,
        number: 48,
        code: "S03E13",
        title: "Un puits de mensonges",
        original_title: "Radio Bart",
        date_usa: ISODate("1992-01-09T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86203"),
        season: 3,
        number: 49,
        code: "S03E14",
        title: "L'enfer du jeu",
        original_title: "Lisa the Greek",
        date_usa: ISODate("1992-01-23T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86204"),
        season: 3,
        number: 50,
        code: "S03E15",
        title: "Homer au foyer",
        original_title: "Homer Alone",
        date_usa: ISODate("1992-02-06T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86205"),
        season: 3,
        number: 51,
        code: "S03E16",
        title: "Bart le tombeur",
        original_title: "Bart the Lover",
        date_usa: ISODate("1992-02-13T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86206"),
        season: 3,
        number: 52,
        code: "S03E17",
        title: "Homer la foudre",
        original_title: "Homer at the Bat",
        date_usa: ISODate("1992-02-20T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86207"),
        season: 3,
        number: 53,
        code: "S03E18",
        title: "Le flic et la rebelle",
        original_title: "Separate Vocations",
        date_usa: ISODate("1992-02-27T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86208"),
        season: 3,
        number: 54,
        code: "S03E19",
        title: "Chienne de vie",
        original_title: "Dog of Death",
        date_usa: ISODate("1992-03-12T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d86209"),
        season: 3,
        number: 55,
        code: "S03E20",
        title: "Impresario de mon cœur",
        original_title: "Colonel Homer",
        date_usa: ISODate("1992-03-26T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d8620a"),
        season: 3,
        number: 56,
        code: "S03E21",
        title: "La veuve noire",
        original_title: "Black Widower",
        date_usa: ISODate("1992-04-09T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d8620b"),
        season: 3,
        number: 57,
        code: "S03E22",
        title: "Le permis d'Otto-Bus",
        original_title: "The Otto Show",
        date_usa: ISODate("1992-04-23T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d8620c"),
        season: 3,
        number: 58,
        code: "S03E23",
        title: "Séparés par l'amour",
        original_title: "Bart's Friend Falls in Love",
        date_usa: ISODate("1992-05-07T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6b4c0bdd12eea7d8620d"),
        season: 3,
        number: 59,
        code: "S03E24",
        title: "Le retour du frère prodigue",
        original_title: "Brother, Can You Spare Two Dimes?",
        date_usa: ISODate("1992-08-27T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8620e"),
        season: 4,
        number: 60,
        code: "S04E01",
        title: "Les jolies colonies de vacances",
        original_title: "Kamp Krusty",
        date_usa: ISODate("1992-09-24T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8620f"),
        season: 4,
        number: 61,
        code: "S04E02",
        title: "Un tramway nommé Marge",
        original_title: "A Streetcar Named Marge",
        date_usa: ISODate("1992-10-01T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86210"),
        season: 4,
        number: 62,
        code: "S04E03",
        title: "Homer l'hérétique",
        original_title: "Homer the Heretic",
        date_usa: ISODate("1992-10-08T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86211"),
        season: 4,
        number: 63,
        code: "S04E04",
        title: "Lisa, la reine de beauté",
        original_title: "Lisa the Beauty Queen",
        date_usa: ISODate("1992-10-15T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86212"),
        season: 4,
        number: 64,
        code: "S04E05",
        title: "Simpson Horror Show III",
        original_title: "Treehouse of Horror III",
        date_usa: ISODate("1992-10-29T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86213"),
        season: 4,
        number: 65,
        code: "S04E06",
        title: "Itchy et Scratchy : le film",
        original_title: "Itchy & Scratchy : The Movie",
        date_usa: ISODate("1992-11-03T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86214"),
        season: 4,
        number: 66,
        code: "S04E07",
        title: "Marge a trouvé un boulot",
        original_title: "Marge Gets a Job",
        date_usa: ISODate("1992-11-05T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86215"),
        season: 4,
        number: 67,
        code: "S04E08",
        title: "La plus belle du quartier",
        original_title: "The New Kid on the Block",
        date_usa: ISODate("1992-11-12T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86216"),
        season: 4,
        number: 68,
        code: "S04E09",
        title: "Monsieur chasse-neige",
        original_title: "Mr. Plow",
        date_usa: ISODate("1992-11-19T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86217"),
        season: 4,
        number: 69,
        code: "S04E10",
        title: "Le premier mot de Lisa",
        original_title: "Lisa's First Word",
        date_usa: ISODate("1992-12-03T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86218"),
        season: 4,
        number: 70,
        code: "S04E11",
        title: "Oh la crise... cardiaque !",
        original_title: "Homer's Triple Bypass",
        date_usa: ISODate("1992-12-17T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86219"),
        season: 4,
        number: 71,
        code: "S04E12",
        title: "Le monorail",
        original_title: "Marge vs. the Monorail",
        date_usa: ISODate("1993-01-14T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8621a"),
        season: 4,
        number: 72,
        code: "S04E13",
        title: "Le choix de Selma",
        original_title: "Selma's Choice",
        date_usa: ISODate("1993-01-21T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8621b"),
        season: 4,
        number: 73,
        code: "S04E14",
        title: "Le grand frère",
        original_title: "Brother from the Same Planet",
        date_usa: ISODate("1993-02-04T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8621c"),
        season: 4,
        number: 74,
        code: "S04E15",
        title: "J'aime Lisa",
        original_title: "I Love Lisa",
        date_usa: ISODate("1993-02-11T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8621d"),
        season: 4,
        number: 75,
        code: "S04E16",
        title: "Ne lui jetez pas la première bière !",
        original_title: "Duffless",
        date_usa: ISODate("1993-02-18T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8621e"),
        season: 4,
        number: 76,
        code: "S04E17",
        title: "Grève à la centrale",
        original_title: "Last Exit to Springfield",
        date_usa: ISODate("1993-03-11T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d8621f"),
        season: 4,
        number: 77,
        code: "S04E18",
        title: "Poisson d'avril",
        original_title: "So It's Come to This: A Simpsons Clip Show",
        date_usa: ISODate("1993-04-01T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86220"),
        season: 4,
        number: 78,
        code: "S04E19",
        title: "Le roi du dessin animé",
        original_title: "The Front",
        date_usa: ISODate("1993-04-15T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86221"),
        season: 4,
        number: 79,
        code: "S04E20",
        title: "Le jour de la raclée",
        original_title: "Whacking Day",
        date_usa: ISODate("1993-04-29T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86222"),
        season: 4,
        number: 80,
        code: "S04E21",
        title: "Marge à l'ombre",
        original_title: "Marge in Chains",
        date_usa: ISODate("1993-05-06T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6bb20bdd12eea7d86223"),
        season: 4,
        number: 81,
        code: "S04E22",
        title: "Krusty le retour",
        original_title: "Krusty Gets Kancelled",
        date_usa: ISODate("1993-05-13T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86224"),
        season: 5,
        number: 82,
        code: "S05E01",
        title: "Le quatuor d'Homer",
        original_title: "Homer's Barbershop Quartet",
        date_usa: ISODate("1993-09-30T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86225"),
        season: 5,
        number: 83,
        code: "S05E02",
        title: "Lac Terreur",
        original_title: "Cape Feare",
        date_usa: ISODate("1993-10-07T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86226"),
        season: 5,
        number: 84,
        code: "S05E03",
        title: "Homer va à la fac",
        original_title: "Homer Goes to College",
        date_usa: ISODate("1993-10-14T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86227"),
        season: 5,
        number: 85,
        code: "S05E04",
        title: "Rosebud",
        original_title: "Rosebud",
        date_usa: ISODate("1993-10-21T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86228"),
        season: 5,
        number: 86,
        code: "S05E05",
        title: "Simpson Horror Show IV",
        original_title: "Treehouse of Horror IV",
        date_usa: ISODate("1993-10-28T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86229"),
        season: 5,
        number: 87,
        code: "S05E06",
        title: "Marge en cavale",
        original_title: "Marge on the Lam",
        date_usa: ISODate("1993-11-04T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d8622a"),
        season: 5,
        number: 88,
        code: "S05E07",
        title: "Bart enfant modèle",
        original_title: "Bart's Inner Child",
        date_usa: ISODate("1993-11-11T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d8622b"),
        season: 5,
        number: 89,
        code: "S05E08",
        title: "Scout un jour, scout toujours",
        original_title: "Boy-Scoutz 'n the Hood",
        date_usa: ISODate("1993-11-18T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d8622c"),
        season: 5,
        number: 90,
        code: "S05E09",
        title: "La dernière tentation d'Homer",
        original_title: "The Last Temptation of Homer",
        date_usa: ISODate("1993-12-09T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d8622d"),
        season: 5,
        number: 91,
        code: "S05E10",
        title: "L'enfer du jeu",
        original_title: "$pringfield (or, How I Learned to Stop Worrying and Love Legalized Gambling)",
        date_usa: ISODate("1993-12-16T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d8622e"),
        season: 5,
        number: 92,
        code: "S05E11",
        title: "Erreur sur la ville",
        original_title: "Homer the Vigilante",
        date_usa: ISODate("1994-01-06T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d8622f"),
        season: 5,
        number: 93,
        code: "S05E12",
        title: "Bart devient célèbre",
        original_title: "Bart Gets Famous",
        date_usa: ISODate("1994-02-03T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86230"),
        season: 5,
        number: 94,
        code: "S05E13",
        title: "Le blues d'Apu",
        original_title: "Homer and Apu",
        date_usa: ISODate("1994-02-10T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86231"),
        season: 5,
        number: 95,
        code: "S05E14",
        title: "Lisa s'en va-t-en guerre",
        original_title: "Lisa vs. Malibu Stacy",
        date_usa: ISODate("1994-02-17T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86232"),
        season: 5,
        number: 96,
        code: "S05E15",
        title: "Homer dans l'espace",
        original_title: "Deep Space Homer",
        date_usa: ISODate("1994-02-24T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86233"),
        season: 5,
        number: 97,
        code: "S05E16",
        title: "Homer aime Flanders",
        original_title: "Homer Loves Flanders",
        date_usa: ISODate("1994-03-17T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86234"),
        season: 5,
        number: 98,
        code: "S05E17",
        title: "Mon pote l'éléphant",
        original_title: "Bart Gets an Elephant",
        date_usa: ISODate("1994-03-31T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86235"),
        season: 5,
        number: 99,
        code: "S05E18",
        title: "L'héritier de Burns",
        original_title: "Burns' Heir",
        date_usa: ISODate("1994-04-14T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86236"),
        season: 5,
        number: 100,
        code: "S05E19",
        title: "Un ennemi très cher",
        original_title: "Sweet Seymour Skinner's Baadasssss Song",
        date_usa: ISODate("1994-04-28T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86237"),
        season: 5,
        number: 101,
        code: "S05E20",
        title: "Le garçon qui en savait trop",
        original_title: "The Boy Who Knew Too Much",
        date_usa: ISODate("1994-05-05T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86238"),
        season: 5,
        number: 102,
        code: "S05E21",
        title: "L'amoureux de grand-mère",
        original_title: "Lady Bouvier's Lover",
        date_usa: ISODate("1994-05-12T00:00:00.000Z")
    },
    {
        _id: ObjectId("683c6c200bdd12eea7d86239"),
        season: 5,
        number: 103,
        code: "S05E22",
        title: "Les secrets d'un mariage réussi",
        original_title: "Secrets of a Successful Marriage",
        date_usa: ISODate("1994-05-19T00:00:00.000Z")
    }
]);
