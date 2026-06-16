const COMPETENCES = {
  realiser: {
    id: 'realiser',
    code: '01',
    name: 'Réaliser',
    verb: 'Développer des applications informatiques',
    desc: 'Concevoir, coder, tester et intégrer une solution informatique pour un client.',
    hasN3: true,
    niveaux: {
      1: {
        annee: '2024 - 2025',
        titre: 'Développer des applications simples',
        acs: [
          {
            code: 'AC11.01',
            titre: 'Implémenter des conceptions simples',
            contexte: "Le programme a été développé à partir d’une consigne simple : séparer les nombres pairs et impairs dans un intervalle saisi par l’utilisateur. L’implémentation repose sur l’utilisation d’une boucle et d’une condition modulo (% 2) pour trier chaque valeur dans deux listes distinctes. Le programme affiche ensuite les deux listes. Il a été testé avec plusieurs cas simples pour vérifier son bon fonctionnement.",
            situation: "Ce programme permet de saisir un intervalle de nombres et d’en extraire la liste des valeurs paires et impaires. Les résultats sont ensuite affichés séparément. Il s’agit d’une implémentation directe d’une consigne simple, avec un traitement conditionnel et des structures de boucle.",
            preuve: 'images/Competences/1/ac11.01.webp'
          },
          {
            code: 'AC11.02',
            titre: 'Élaborer des conceptions simples',
            contexte: "La conception a été réalisée à partir d’un besoin simple : structurer les données avant la création d’une base de données. J’ai modélisé les entités (comme véhicule, exploitation, parcelle, plante, variété) et leurs relations sous forme de MCD. Cette modélisation conceptuelle a permis de clarifier les règles de gestion (cardinalités) et de poser une base logique et cohérente pour le développement de la base.",
            situation: "Avant de développer la base de données, une modélisation conceptuelle a été réalisée à l’aide d’un MCD. Elle structure les entités principales du système (véhicule, exploitation, parcelle, plante, variété) ainsi que leurs relations. Cette conception a permis de clarifier les règles de gestion (comme les cardinalités ou les dépendances entre éléments) et de poser une base cohérente pour la suite du développement.",
            preuve: 'images/Competences/1/ac11.02.png'
          },
          {
            code: 'AC11.03',
            titre: 'Faire des essais et évaluer leurs résultats en regard des spécifications',
            contexte: "Ce code a été réalisé dans le cadre d’un TP d’introduction à la bibliothèque turtle. L’objectif était de tracer une forme complexe à partir d’une liste de coordonnées et d’y intégrer des éléments visuels simples, ici des carrés, ainsi que des annotations textuelles. Le programme représente la carte de la Martinique avec les 4 préfectures. Plusieurs essais ont été nécessaires pour ajuster les coordonnées, la mise à l’échelle et le placement du texte, afin d’obtenir un affichage cohérent.",
            situation: "Programme Python utilisant la bibliothèque turtle pour tracer une carte simplifiée de la Martinique avec des formes géométriques et l’affichage de noms de villes. Le code a été testé et ajusté pour vérifier le bon rendu graphique.",
            preuve: 'images/Competences/1/ac11.03.webp'
          },
          {
            code: 'AC11.04',
            titre: 'Développer des interfaces utilisateurs',
            contexte: "L’interface a été réalisée durant la SAÉ 2.01 Développement d’une application, dans le cadre d’un projet de gestion d’entretien de véhicules. J’ai utilisé Qt Designer pour structurer visuellement les éléments de l’interface (boutons, formulaires, tableaux), puis j’ai intégré le code avec PySide6.",
            situation: "Avant d’implémenter cette interface, la conception a été réalisée avec Qt Designer afin de créer une structure claire et fonctionnelle. Les éléments graphiques ont été organisés pour faciliter l’interaction utilisateur. Cette démarche a permis de préparer une intégration cohérente avec la logique applicative, assurant ainsi une expérience utilisateur fluide et un code maintenable.",
            preuve: 'images/Competences/1/ac11.04.png'
          }
        ]
      },
      2: {
        annee: '2025 - 2026',
        titre: "Partir des exigences et aller jusqu'à une application complète",
        acs: [
          {
            code: 'AC21.01',
            titre: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
            contexte: "Dans le cadre de la SAÉ 4.01, nous avons développé SKAR Location, une application web de location de véhicules citadins en Martinique. Avant toute phase de développement, un cahier des charges complet a été rédigé pour formaliser les besoins fonctionnels du système, en définissant les acteurs impliqués et le déroulement complet d'une location.",
            situation: "Cette capture présente deux sections clés du cahier des charges : la section Acteurs qui identifie les 6 profils du système (client standard, client étudiant, employé, prestataire, administrateur et système), et le Cycle de vie d'une location qui détaille les 7 étapes ordonnées de la réservation jusqu'à la remise en disponibilité du véhicule. Ces éléments constituent la base des spécifications fonctionnelles ayant guidé le développement.",
            preuve: 'images/Competences/2/ac21.01.png'
          },
          {
            code: 'AC21.02',
            titre: "Appliquer des principes d'accessibilité et d'ergonomie",
            contexte: "Dans le cadre de la réalisation de mon portfolio BUT Informatique, hébergé sur GitHub Pages, j'ai développé le site en HTML/CSS/JS natif en appliquant les principes d'accessibilité et de bonne structure sémantique. L'objectif était de produire un code lisible, bien organisé et conforme aux standards du web, sans dépendance à un framework.",
            situation: "Cette capture du fichier index.html montre l'application des bonnes pratiques d'accessibilité et d'ergonomie web : utilisation des balises sémantiques main et section pour structurer le contenu, métadonnées description et viewport correctement renseignées, et liens de navigation explicites avec des intitulés clairs. La page est responsive et consultable sur ordinateur comme sur mobile.",
            preuve: 'images/Competences/2/ac21.02.png'
          },
          {
            code: 'AC21.03',
            titre: "Adopter de bonnes pratiques de conception et de programmation",
            contexte: "Dans le cadre du projet Librom, une application de lecture d'œuvres du domaine public, nous avons choisi d'implémenter une architecture MVC natif en PHP sans framework. Ce choix impliquait de structurer manuellement la séparation entre la logique métier, les données et l'affichage, en respectant les bonnes pratiques de conception logicielle.",
            situation: "Cette capture montre l'arborescence du projet Librom avec les dossiers models/, views/ et controllers/ distincts, illustrant l'application du patron de conception MVC. Chaque couche a un rôle défini : les modèles gèrent les données, les contrôleurs orchestrent la logique, et les vues assurent l'affichage - sans dépendance à un framework externe.",
            preuve: 'images/Competences/2/ac21.03.png'
          },
          {
            code: 'AC21.04',
            titre: "Vérifier et valider la qualité de l'application par les tests",
            contexte: "Durant mon stage chez Intelligence School, de nouveaux filtres ont été ajoutés à l'API GESécole, notamment le filtre GET /api/parent_eleves?nom= permettant de rechercher des parents par nom. Avant d'intégrer ces routes dans les workflows n8n, j'ai procédé à des tests manuels via Hoppscotch pour valider leur comportement, identifier leurs limites et documenter les résultats.",
            situation: "Cette capture présente un test de la route GET /api/parent_eleves?nom= effectué dans Hoppscotch. Elle montre la requête envoyée, le statut de réponse, et le JSON retourné. Le test a permis de confirmer que le filtre fonctionne sur les noms exacts mais ne supporte pas la recherche partielle ni les métacaractères - une limite documentée avant intégration en production.",
            preuve: 'images/Competences/2/ac21.04.png'
          }
        ]
   
      },
      3: {
        annee: '2026 - 2027',
        titre: 'Adapter des applications sur un ensemble de supports',
        acs: [
          {
            code: 'AC31.01',
            titre: "Choisir et implémenter les architectures adaptées",
            contexte: null,
            preuve: null
          },
          {
            code: 'AC31.02',
            titre: "Faire évoluer une application existante",
            contexte: null,
            preuve: null
          },
          {
            code: 'AC31.03',
            titre: "Intégrer des solutions dans un environnement de production",
            contexte: null,
            preuve: null
          }
        ]
      }
    }
  },

  optimiser: {
    id: 'optimiser',
    code: '02',
    name: 'Optimiser',
    verb: 'Proposer des applications informatiques optimisées',
    desc: "Sélectionner les algorithmes adéquats et optimiser une solution selon les contraintes données.",
    hasN3: true,
    niveaux: {
      1: {
        annee: '2024 - 2025',
        titre: 'Appréhender et construire des algorithmes simples',
        acs: [
          {
            code: 'AC12.01',
            titre: "Analyser un problème avec méthode (découpe en éléments algorithmiques, structure de données…)",
            contexte: "J’ai réalisé ce programme durant un TD portant sur la gestion d’une bibliothèque. L’objectif était de simuler le fonctionnement d’un système d’emprunts et de retours de livres, en structurant les données autour des classes Livre, Membre et Bibliotheque.",
            situation: "Le programme simule un système de gestion de bibliothèque. Il est structuré autour de trois classes principales : Bibliotheque, Livre et Membre. Chaque classe gère des responsabilités spécifiques : la bibliothèque centralise les livres et les membres, les livres peuvent être empruntés, et les membres peuvent emprunter et retourner des ouvrages. Ce découpage permet de gérer les interactions en isolant chaque rôle.",
            preuve: 'images/Competences/1/ac12.01.webp'
          },
          {
            code: 'AC12.02',
            titre: "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche)",
            contexte: "Ce code a été réalisé en début d’année, lors d’un TP d’introduction au développement. Il s’agissait de manipuler des listes et de mettre en œuvre un tri simple pour en observer le fonctionnement étape par étape.",
            situation: "Ce programme fusionne deux listes, filtre les éléments numériques, puis les trie dans l’ordre croissant ou décroissant selon le paramètre choisi. Le tri est effectué manuellement avec un algorithme de tri par sélection, ce qui permet de mieux comprendre son fonctionnement.",
            preuve: 'images/Competences/1/ac12.02.webp'
          },
          {
            code: 'AC12.03',
            titre: "Formaliser et mettre en œuvre des outils mathématiques pour l’informatique",
            contexte: "J’ai réalisé ce programme lors d’un TP en début d’année. Il consistait à appliquer des formules mathématiques simples (périmètre d’un rectangle, carré ou cercle) à travers un code interactif. L’exercice m’a permis d’intégrer concrètement ces notions dans un programme structuré avec des fonctions.",
            situation: "Ce programme permet de calculer le périmètre de trois figures géométriques (rectangle, carré, cercle) en fonction des valeurs saisies par l’utilisateur. Chaque cas utilise une fonction dédiée, dans laquelle est appliquée la formule mathématique appropriée. Ce travail illustre l’intégration d’outils mathématiques élémentaires dans un code structuré et interactif.",
            preuve: 'images/Competences/1/ac12.03.png'
          }
        ]
      },
      2: {
        annee: '2025 - 2026',
        titre: 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
        acs: [
          {
            code: 'AC22.01',
            titre: "Choisir des structures de données complexes adaptées au problème",
            contexte: "Dans le cadre de la SAÉ 4.01 SKAR Location, nous avons conçu le modèle de données complet de l'application avant toute phase de développement. La base de données devait couvrir l'ensemble du système : gestion des véhicules, des réservations, des points relais, des convoyages, des missions de nettoyage, des paiements et des utilisateurs.",
            situation: "Ce MLD présente les 20 tables du système SKAR Location avec leurs attributs, clés primaires, clés étrangères et relations. On y distingue les entités centrales (reservation, vehicule, location, convoyage) ainsi que les entités périphériques (incident, paiement, photo, mission_nettoyage), illustrant la complexité du modèle relationnel conçu en amont du développement.",
            preuve: "images/Competences/2/ac22.01.png"
          },
          {
            code: 'AC22.02',
            titre: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
            contexte: "Dans le cadre de mon stage chez Intelligence School, les workflows n8n devaient s'authentifier à l'API GESécole avant chaque appel. Pour sécuriser cette authentification, j'ai mis en place un sous-workflow dédié au login qui récupère un token JWT, token ensuite réutilisé dynamiquement dans les nœuds HTTP suivants sans jamais être stocké en dur dans le code.",
            situation: "Cette capture montre la configuration du nœud HTTP Request 'Get Docs' dans n8n, avec le header Authorization renseigné dynamiquement via l'expression Bearer {{ $json.token }}. Le token est injecté à l'exécution depuis le résultat du nœud GES Login, garantissant qu'aucune credential n'est exposée en clair dans le workflow.",
            preuve: "images/Competences/2/ac22.02.png"
          },
          {
            code: 'AC22.03',
            titre: "Comprendre les enjeux et moyens de sécurisation des données et du code",
            contexte: "Dans le cadre d'un projet universitaire, j'ai développé un chatbot de recommandation d'animés et de mangas utilisant un LLM (Groq) combiné à l'API AniList. L'intelligence artificielle est utilisée pour analyser la requête de l'utilisateur, interroger l'API, et traduire automatiquement les descriptions en français lorsqu'elles sont disponibles uniquement en anglais.",
            situation: "Cette capture montre le chatbot en fonctionnement avec la saisie 'Gachiakuta' : le système retourne 7 recommandations personnalisées avec poster, note, genres, description traduite en français et lien AniList. L'interface affiche également le LLM utilisé (Groq) et la source des données (AniList API), illustrant l'intégration concrète de l'IA dans une application fonctionnelle.",
            preuve: "images/Competences/2/ac22.03.png"
          },
          {
            code: 'AC22.04',
            titre: "Évaluer l'impact environnemental et sociétal des solutions proposées",
            contexte: "Dans le cadre du module R4.04 Méthodes d'optimisation (S4), nous avons étudié et appliqué l'algorithme de Ford-Fulkerson pour résoudre des problèmes de flot maximal sur des réseaux de transport. Cet algorithme permet de trouver la solution optimale de manière efficace en identifiant des chaînes améliorantes successives, là où une énumération exhaustive serait computationnellement inenvisageable.",
            situation: "Cette capture présente la résolution complète d'un problème de flot maximal : validation du flot initial (valeur 11), identification de la chaîne améliorante 1→2→4→3→6→7, mise à jour du réseau résiduel, puis détermination de la coupe minimale (capacité 7+7=14) prouvant l'optimalité du flot final de valeur 14.",
            preuve: "images/Competences/2/ac22.04.png"
          }
        ]
      },
      3: {
        annee: '2026 - 2027',
        titre: 'Analyser et optimiser des applications',
        acs: [
          {
            code: 'AC32.01',
            titre: "Anticiper les résultats de diverses métriques de performance",
            contexte: null,
            preuve: null
          },
          {
            code: 'AC32.02',
            titre: "Profiler, analyser et justifier le comportement d'un code existant",
            contexte: null,
            preuve: null
          },
          {
            code: 'AC32.03',
            titre: "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine mathématique",
            contexte: null,
            preuve: null
          }
        ]
      }
    }
  },

  administrer: {
    id: 'administrer',
    code: '03',
    name: 'Administrer',
    verb: 'Installer et configurer des infrastructures informatiques',
    desc: "Déployer et maintenir en conditions opérationnelles des infrastructures, réseaux et services.",
    hasN3: false,
    niveaux: {
      1: {
        annee: '2024 - 2025',
        titre: 'Installer et configurer un poste de travail',
        acs: [
          {
            code: 'AC13.01',
            titre: "Identifier les différents composants (matériels et logiciels) d’un système numérique",
            contexte: "J’ai réalisé cette preuve à partir d’une observation du gestionnaire de périphériques sur mon ordinateur personnel. L’objectif était d’identifier les noms et propriétés des composants matériels.",
            situation: "Une capture du gestionnaire de périphériques a été réalisée pour identifier les composants matériels d’un poste de travail. Ce document montre l’ensemble des éléments détectés par le système (processeur, carte graphique, stockage, etc.) et illustre la capacité à reconnaître et nommer les composants d’un système informatique.",
            preuve: 'images/Competences/1/ac13.01.webp'
          },
          {
            code: 'AC13.02',
            titre: "Utiliser les fonctionnalités de base d’un système multitâche / multiutilisateurs",
            contexte: "Pendant mon stage, j’ai partagé un dossier en réseau local pour permettre à un camarade d’y accéder directement depuis son poste. J’ai configuré les autorisations en lecture pour l’utilisateur « Tout le monde », afin de sécuriser l’accès tout en facilitant le partage de fichiers dans un environnement collaboratif.",
            situation: "Le dossier a été configuré pour être partagé sur le réseau local, permettant un accès simplifié par d’autres utilisateurs. La gestion des permissions a été réalisée en ajoutant l’utilisateur « Tout le monde » avec un accès en lecture, garantissant la sécurité minimale nécessaire. Cette configuration facilite le travail collaboratif en rendant les fichiers accessibles depuis d’autres postes du réseau.",
            preuve: 'images/Competences/1/ac13.02.webp'
          },
          {
            code: 'AC13.03',
            titre: "Installer et configurer un système d’exploitation et des outils de développement",
            contexte: "J’ai créé une machine virtuelle sous Ubuntu à l’aide de VirtualBox, afin de disposer d’un environnement isolé pour faire des tests. Le système d’exploitation a été installé et configuré pour pouvoir accueillir des outils de développement sans impacter mon système principal.",
            situation: "Une machine virtuelle a été configurée dans VirtualBox pour simuler un poste de travail. Le système d’exploitation a été installé, et l’environnement est prêt à accueillir des outils de développement. Ce processus permet de créer un environnement isolé, facilement réinitialisable, pour expérimenter ou travailler sans impacter le système principal.",
            preuve: 'images/Competences/1/ac13.03.webp'
          },
          {
            code: 'AC13.04',
            titre: "Configurer un poste de travail dans un réseau d’entreprise",
            contexte: "J’ai utilisé Cisco Packet Tracer dans un TP pour simuler un poste de travail connecté à un réseau via un switch et un routeur. J’ai configuré manuellement l’adresse IP et la passerelle du poste, puis vérifié la connectivité avec un test de ping vers le routeur.",
            situation: "Dans Cisco Packet Tracer, un environnement réseau a été simulé avec un poste de travail, un switch et un routeur. Une adresse IP a été attribuée manuellement au poste, ainsi qu’une passerelle. La connectivité a été vérifiée avec succès grâce à un test de ping vers le routeur. Cette simulation représente une configuration basique de poste dans un réseau d’entreprise.",
            preuve: 'images/Competences/1/ac13.04.webp'
          }
        ]
      },
      2: {
        annee: '2025 - 2026',
        titre: 'Déployer des services dans une architecture réseau',
        acs: [
          {
            code: 'AC23.01',
            titre: "Concevoir et développer des applications communicantes",
            contexte: "Durant mon stage chez Intelligence School, j'ai développé un workflow n8n permettant à l'assistant vocal VAPI de consulter en temps réel les disponibilités de l'agenda ClicRDV. Lors d'un appel téléphonique, quand un client demande une date de rendez-vous, VAPI déclenche ce workflow via webhook pour vérifier si le créneau est disponible et répondre instantanément au client.",
            situation: "Cette capture montre le workflow 'VAPI Check Disponibilité' composé de 5 nœuds : Webhook VAPI (déclencheur POST), Parse VAPI Args (extraction des arguments), Call Check Dispo ClicRDV (appel au sous-workflow de consultation de l'agenda), Format Response VAPI (mise en forme de la réponse), et Respond to Webhook (retour à VAPI). Ce workflow illustre la communication entre deux services distants - un assistant vocal IA et un système de prise de rendez-vous - via des appels webhook en temps réel.",
            preuve: 'images/Competences/2/ac23.01.png'
          },
          {
            code: 'AC23.02',
            titre: "Déployer des services dans une architecture réseau",
            contexte: "Dans le cadre d'un projet personnel, j'ai développé Domino 972, un jeu de dominos martiniquais en mode multijoueur temps réel. L'application repose sur une architecture client-serveur avec un backend Node.js/Express qui expose une API REST et gère la synchronisation des parties via WebSocket.",
            situation: "Cette capture montre une partie multijoueur en cours avec 3 joueurs connectés simultanément (Sayann, Moi, Nolaan), le plateau de jeu partagé en temps réel et le code de salle '1809'. La synchronisation instantanée des actions entre les joueurs est assurée par WebSocket, illustrant la conception et le déploiement d'une application communicante avec gestion d'état réseau en temps réel.",
            preuve: 'images/Competences/2/ac23.02.png'
          },
          {
            code: 'AC23.03',
            titre: "Sécuriser les services et données d'un système",
            contexte: "Dans le cadre de la SAÉ 4.01 SKAR Location, le système devait gérer plusieurs profils d'utilisateurs avec des droits et des règles métier différenciées selon leur rôle. Cette distinction a été modélisée dès la conception du schéma relationnel pour garantir une séparation claire des responsabilités.",
            situation: "Cette capture présente la partie du MLD relative à la gestion des rôles : la table utilisateur centralise tous les profils via le champ type_utilisateur (enum : client, employe_agence, prestataire_nettoyage, administrateur), défini en SQL comme `type_utilisateur` enum('client','employe_agence','prestataire_nettoyage','administrateur'). Les tables client et employe_agence héritent de utilisateur via une relation 'est un', chacune avec ses attributs métier spécifiques (est_etudiant, statut_etudiant pour le client ; matricule, disponible pour l'employé).",
            preuve: 'images/Competences/2/ac23.03.png'
       
          }
        ]
      }
    }
  },

  gerer: {
    id: 'gerer',
    code: '04',
    name: 'Gérer',
    verb: 'Concevoir et administrer des bases de données',
    desc: "Concevoir, mettre en place et optimiser des bases de données adaptées aux besoins.",
    hasN3: false,
    niveaux: {
      1: {
        annee: '2024 - 2025',
        titre: "Concevoir et mettre en place une base de données à partir d'un cahier des charges client",
        acs: [
          {
            code: 'AC14.01',
            titre: "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
            contexte: "J’ai rédigé cette requête SQL lors d’exercices sur OneCompiler, en introduction aux bases de données. L’objectif était de manipuler des jointures et des fonctions d’agrégation pour interroger une base représentant des exploitations agricoles.",
            situation: "Une base de données relationnelle a été construite pour modéliser des exploitations agricoles. Une requête SQL a été rédigée pour afficher la surface totale cultivée par exploitation, en utilisant une jointure entre les tables exploitation et parcelle et la fonction SUM() pour agréger les surfaces. Cette requête permet d’obtenir une vue synthétique des ressources foncières par domaine.",
            preuve: 'images/Competences/1/ac14.01.webp'
          },
          {
            code: 'AC14.02',
            titre: "Visualiser des données",
            contexte: "J’ai réalisé ce graphique durant un TP, à partir d’une base de données simulée de produits. L’objectif était de représenter visuellement la répartition des prix par catégorie afin de faciliter l’analyse comparative entre les types de produits.",
            situation: "J’ai utilisé un tableau de données issues d’une base simulée de produits pour représenter graphiquement la répartition des prix par catégorie. Le graphique permet de visualiser rapidement les écarts de prix entre les types de produits, ce qui facilite l’analyse comparative.",
            preuve: 'images/Competences/1/ac14.02.png'
          },
          {
            code: 'AC14.03',
            titre: "Concevoir une base de données relationnelle à partir d’un cahier des charges",
            contexte: "J’ai conçu ce Modèle Logique de Données (MLD) durant la SAÉ 1.04 Création d’une base de données, avant l’implémentation d’une base de données. Le besoin exprimé portait sur le suivi de jours, événements et saisons. J’ai structuré les entités (JOUR, VACANCE, SAINT, LUNE, ANNIVERSAIRE) avec leurs attributs et relations en respectant les dépendances fonctionnelles. Ce travail a permis de préparer une base exploitable et cohérente.",
            situation: "À partir d’un besoin exprimé (suivi de jours, événements, saisons, etc.), j’ai conçu un Modèle Logique de Données (MLD) représentant les entités comme JOUR, VACANCE, SAINT, LUNE ou encore ANNIVERSAIRE. J’ai défini les attributs et les relations clés en prenant en compte les dépendances fonctionnelles. Le MLD structuré permet d’organiser les données de manière relationnelle et exploitable dans une base.",
            preuve: 'images/Competences/1/ac14.03.png'
          }
        ]
      },
      2: {
        annee: '2025 - 2026',
        titre: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
        acs: [
          {
            code: 'AC24.01',
            titre: "Optimiser les modèles de données de l'entreprise",
            contexte: "Dans le cadre du projet Librom, une application web de lecture d'œuvres du domaine public développée avec PHP/MySQL en architecture MVC, nous avons conçu un modèle de données structuré pour gérer les utilisateurs, les œuvres et leurs interactions. Le schéma a été pensé pour optimiser les requêtes de lecture, de recherche et de suivi de progression.",
            situation: "Ce MLD présente les 5 tables de la base de données Librom avec leurs relations : users (authentification), books (catalogue des œuvres avec titre, auteur, chemin du fichier et genre), favorites et ratings (tables de liaison pour les interactions utilisateur-livre), et reading_history (suivi de progression avec position de scroll, date de dernière lecture et statut de fin). Les contraintes d'unicité sur les paires user_id/book_id garantissent l'intégrité des données.",
            preuve: 'images/Competences/2/ac24.01.png'
          },
          {
            code: 'AC24.02',
            titre: "Assurer la confidentialité des données (intégrité et sécurité)",
            contexte: "Dans le cadre du parcours EDU-B Injection SQL de Root-Me Pro, j'ai travaillé sur la compréhension et l'exploitation des vulnérabilités SQL pour mieux comprendre comment les sécuriser. Le challenge 'SQL Injection - Data' consistait à extraire le contenu d'une table secrète cachée en base de données en exploitant une faille d'injection SQL sur une application web.",
            situation: "Cette capture montre la validation du challenge 'SQL Injection - Data' sur Root-Me Pro (250 points, niveau Facile), classé dans le parcours EDU | BUT - Tronc commun. La résolution de ce challenge démontre la compréhension des mécanismes d'injection SQL permettant d'accéder à des données confidentielles, et par extension la connaissance des protections nécessaires (requêtes préparées, échappement des entrées) pour sécuriser une base de données.",
            preuve: 'images/Competences/2/ac24.02.png'
          },
          {
            code: 'AC24.03',
            titre: "Organiser la restitution de données à travers la programmation et la visualisation",
            contexte: "Durant mon stage chez Intelligence School, j'ai développé un widget HTML interactif de documentation de l'API GESécole. L'objectif était de permettre aux stagiaires et coordinateurs de consulter et comprendre rapidement les endpoints disponibles, sans avoir à lire la documentation technique brute au format JSON.",
            situation: "Cette capture montre le widget de documentation de l'API GESécole en fonctionnement, filtré sur la section Familles. On y voit les 6 endpoints disponibles avec leurs méthodes HTTP (GET, POST, DELETE), les corps de requête attendus avec les champs requis annotés, et les codes de réponse possibles (201, 400). Le header affiche le token Bearer requis pour l'authentification JWT, illustrant la restitution structurée et interactive de données techniques issues de l'API.",
            preuve: 'images/Competences/2/ac24.03.png'
          },
          {
            code: 'AC24.04',
            titre: "Manipuler des données hétérogènes",
            contexte: "Dans le cadre du workflow de suivi des renouvellements 2025-2026 chez Intelligence School, j'ai développé un nœud d'assemblage en JavaScript dans n8n qui fusionne deux sources de données hétérogènes : la liste des inscrits issue d'un Google Sheets (données élèves, classes, coordonnées) et l'index des règlements construit à partir de 12 onglets mensuels (soldes, commentaires de facturation). Ces deux sources utilisent des formats et des nomenclatures différents.",
            situation: "Cette capture montre le nœud 'L'assembleur' dans n8n, qui récupère les deux index préalablement construits (indexInscrits et indexReglements), normalise les noms de classe selon un référentiel unifié (Seconde→2NDE, Première→1ERE, etc.), filtre les niveaux non concernés (Terminale, BTS, BAC PRO, Prépa), puis fusionne les données par N° facture pour produire une sortie organisée par centre (BLE, PDA, TNT, RS).",
            preuve: 'images/Competences/2/ac24.04.png'
          }
        ]
      }
    }
  },

  conduire: {
    id: 'conduire',
    code: '05',
    name: 'Conduire',
    verb: 'Satisfaire les besoins des utilisateurs',
    desc: "Identifier les besoins, formaliser les exigences et piloter un projet informatique de bout en bout.",
    hasN3: true,
    niveaux: {
      1: {
        annee: '2024 - 2025',
        titre: 'Identifier les besoins métiers des clients et des utilisateurs',
        acs: [
          {
            code: 'AC15.01',
            titre: "Appréhender les besoins du client et de l’utilisateur",
            contexte: "J’ai réalisé une fiche persona dans le cadre du projet de site fictif StarBucks. Elle m’a permis de formaliser les attentes, objectifs et contraintes d’un utilisateur-type, afin d’orienter les choix fonctionnels et graphiques selon un usage réaliste.",
            situation: "Pour mieux cerner les attentes des utilisateurs, une fiche persona a été élaborée. Elle synthétise les caractéristiques, objectifs et frustrations d’un profil-type représentatif. Cette étape a permis de structurer les besoins fonctionnels du projet et d’orienter les choix de conception selon un usage réel.",
            preuve: 'images/Competences/1/ac15.01.png'
          },
          {
            code: 'AC15.02',
            titre: "Mettre en place les outils de gestion de projet",
            contexte: "Pour le projet fictif d’application SNEAKDROP, j’ai réalisé un graphe de PERT afin de planifier les tâches et visualiser leurs dépendances. Cet outil m’a permis de structurer les étapes du développement, de repérer le chemin critique, et de formaliser une démarche de gestion de projet.",
            situation: "Dans le cadre de ce projet fictif, un graphe de PERT a été réalisé afin de modéliser les enchaînements de tâches et leurs dépendances. Cet outil a permis de structurer les étapes clés du développement et de repérer le chemin critique. Il a servi de support pour illustrer une démarche de planification rigoureuse, attendue dans une gestion de projet.",
            preuve: 'images/Competences/1/ac15.02.webp'
          },
          {
            code: 'AC15.03',
            titre: "Identifier les acteurs et les différentes phases d’un cycle de développement",
            contexte: "Lors de la SAÉ 2.02 Exploitation algorithmique d’un problème, un camarade a réalisé un tableau qui a été utilisé pour organiser les tâches du projet. Ce document m’a permis d’identifier les différentes phases du cycle de développement (modélisation, implémentation, tests…) ainsi que la répartition des rôles au sein de l’équipe.",
            situation: "Ce tableau présente la répartition des tâches effectuées dans le cadre d’un projet en équipe. Il liste les différentes phases de développement (modélisation, implémentation, rédaction, etc.), les membres responsables de chaque tâche, ainsi que les dates de début et de fin prévues. Cette organisation a permis d’identifier clairement les rôles de chacun, de structurer les étapes du projet et d’assurer un bon suivi de l’avancement.",
            preuve: 'images/Competences/1/ac15.03.webp'
          }
        ]
      },
      2: {
        annee: '2025 - 2026',
        titre: 'Appliquer une démarche de suivi de projet en fonction des besoins métiers',
        acs: [
          {
            code: 'AC25.01',
            titre: "Identifier et mettre en œuvre les processus présents dans une organisation en regard des enjeux de la digitalisation",
            contexte: "En arrivant en stage chez Intelligence School, avant de proposer toute amélioration, j'ai analysé et documenté l'architecture des workflows automatisés déjà en place. Cette étape d'analyse de l'existant était nécessaire pour comprendre comment s'organisaient les processus métier et identifier les points d'amélioration possibles.",
            situation: "Ce schéma présente l'architecture des deux workflows principaux d'Intelligence School : le workflow Telegram (à gauche) avec ses 3 points d'entrée, l'agent IA Gemini, les 4 agents spécialisés (ClicRDV, Gésécole, ZeenDoc, Stats) et les tâches parallèles post-réponse ; et le workflow Notion (à droite) qui traite les comptes-rendus de réunion via webhook, extraction Gemini et routage selon 3 statuts. Ce document d'analyse a servi de base pour identifier les évolutions à apporter.",
            preuve: "images/Competences/2/ac25.01.png"
          },
          {
            code: 'AC25.02',
            titre: "Formaliser les besoins du client et de l'utilisateur",
            contexte: "Dans le cadre de mon stage chez Intelligence School, notre responsable Mathieu nous a transmis un besoin métier concernant le workflow de relances de renouvellements : les messages devaient être personnalisés selon le profil du destinataire (nouveau client ou ancien élève), avec une stratégie de relance progressive sur 3 niveaux avant passage au coordinateur.",
            situation: "Cette capture présente la formalisation de ce besoin en spécifications concrètes : choix entre un ou deux templates avec justification métier (anciens vs primo-inscrits), structure de l'objet du mail, et logique des 3 niveaux de relance (relance 1 explique, relance 2 rappelle avec date limite, relance 3 ultra-courte). Ce document traduit une demande orale en spécifications techniques directement exploitables pour le développement du workflow.",
            preuve: "images/Competences/2/ac25.02.png"
          },
          {
            code: 'AC25.03',
            titre: "Identifier les critères de faisabilité d'un projet informatique",
            contexte: "Durant le développement du workflow de renouvellements chez Intelligence School, j'ai identifié un blocage technique : le template de mail prévoyait deux versions selon l'ancienneté de l'élève, mais l'API GESécole ne permettait pas de faire cette distinction de manière fiable. J'ai documenté cette analyse de faisabilité avant de prendre une décision d'architecture.",
            situation: "Cette capture présente l'analyse des 3 approches explorées pour distinguer nouveaux et anciens clients via l'API GESécole : double appel before/after sur dateInscription (abandonné car la date est écrasée à chaque réinscription), champ connaissance avec la valeur 'Renouvellement' (abandonné car dépend de la saisie manuelle), et séparation par dates de recherche (abandonné car nécessite un appel API par élève, trop lent à l'échelle). La décision finale de conserver un template universel est argumentée et documentée.",
            preuve: "images/Competences/2/ac25.03.png"
          },
          {
            code: 'AC25.04',
            titre: "Définir et mettre en œuvre une démarche de suivi de projet",
            contexte: "Dans le cadre du projet QUIK Connect à l'IUT, nous avons conduit un projet de refonte d'intranet pour une entreprise de logistique martiniquaise fictive. En tant que chargé de projet, j'ai mis en place et présenté une démarche de suivi structurée couvrant l'ensemble du cycle de déploiement, de l'analyse des besoins jusqu'au déploiement officiel.",
            situation: "Ce diagramme de GANTT présenté lors de la réunion d'information du 16 mars 2026 détaille le planning de déploiement de QUIK Connect sur 7 mois (février à août 2026), avec 8 étapes jalonnées (analyse des besoins, rédaction du cahier des charges, développement, tests internes, réunion de transition, formation des employés, déploiement officiel) et 2 réunions clés identifiées comme jalons. Les phases sont codées par couleur selon leur nature (conception, développement, tests, déploiement).",
            preuve: "images/Competences/2/ac25.04.png"
          }
        ]
      },
      3: {
        annee: '2026 - 2027',
        titre: 'Faire évoluer un système informatique en fonction de nouvelles contraintes',
        acs: [
          {
            code: 'AC35.01',
            titre: "Développer une vision systémique des besoins du client et de l'utilisateur",
            contexte: null,
            preuve: null
          },
          {
            code: 'AC35.02',
            titre: "Mettre en œuvre les principes de pilotage et de gouvernance des systèmes d'information",
            contexte: null,
            preuve: null
          },
          {
            code: 'AC35.03',
            titre: "Anticiper les évolutions et s'adapter à un environnement en mutation",
            contexte: null,
            preuve: null
          }
        ]
      }
    }
  },

  collaborer: {
    id: 'collaborer',
    code: '06',
    name: 'Collaborer',
    verb: 'Travailler dans une équipe informatique',
    desc: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement en équipe.",
    hasN3: false,
    niveaux: {
      1: {
        annee: '2024 - 2025',
        titre: "Identifier ses aptitudes pour travailler dans une équipe informatique",
        acs: [
          {
            code: 'AC16.01',
            titre: "Appréhender l’écosystème numérique",
            contexte: "J’ai réalisé un exposé dans le cadre d’un cours, portant sur la robotique et ses technologies numériques embarquées. Ce travail présente les composants matériels (capteurs, actionneurs), les logiciels associés, ainsi que les domaines d’application (industriel, médical, domestique). Il permet de situer la robotique dans l’écosystème numérique, en montrant ses liens avec l’IA, les réseaux et l’automatisation.",
            situation: "Un exposé sur la robotique a été réalisé dans le cadre du cours pour explorer les technologies numériques embarquées. Il présente les composants matériels (capteurs, actionneurs), les logiciels embarqués, ainsi que les domaines d’application (industriel, médical, domestique). Ce travail a permis de situer la robotique dans l’écosystème numérique, en identifiant ses interactions avec d’autres domaines comme l’IA, les réseaux ou l’automatisation.",
            preuve: 'images/Competences/1/ac16.01.webp'
          },
          {
            code: 'AC16.02',
            titre: "Découvrir les aptitudes requises selon les différents secteurs informatiques",
            contexte: "J’ai rédigé une fiche métier sur le poste de développeur Front-End dans le cadre d’un exercice scolaire. Ce document détaille les missions, les compétences techniques (langages, frameworks) et les qualités personnelles attendues, ainsi que les débouchés professionnels. Cela m’a permis de mieux comprendre les aptitudes nécessaires dans ce domaine spécifique du développement web.",
            situation: "Une fiche métier a été rédigée sur le poste de développeur Front-End, incluant les missions typiques, les compétences attendues (langages, frameworks, savoir-être), ainsi que les débouchés possibles. Ce travail a permis de mieux cerner les aptitudes requises dans ce secteur spécifique du développement web.",
            preuve: 'images/Competences/1/ac16.02.webp'
          },
          {
            code: 'AC16.03',
            titre: "Identifier les statuts, les fonctions et les rôles de chaque membre d’une équipe pluridisciplinaire",
            contexte: "Un camarade a réalisé un tableau lors de la SAÉ 2.01 Développement d’une application pour préciser les rôles et responsabilités de chaque membre du groupe. Cette répartition facilite le suivi des tâches et permet de clarifier les contributions à chaque étape du projet.",
            situation: "Un tableau a été réalisé pour identifier les rôles de chaque membre du groupe et leur implication dans les différentes étapes du projet. Cette répartition permet de visualiser clairement les responsabilités et de suivre l’évolution du projet en fonction des phases du cycle de développement.",
            preuve: 'images/Competences/1/ac16.03.png'
          },
          {
            code: 'AC16.04',
            titre: "Acquérir les compétences interpersonnelles pour travailler en équipe",
            contexte: "Durant la réalisation d’une application graphique simple, j’ai participé à des échanges collaboratifs sur Discord avec les membres de l’équipe. Ces discussions portaient notamment sur des choix techniques, comme l’utilisation d’un composant QLabel. Cet échange illustre la communication, l’entraide et la recherche collective de solutions cohérentes.",
            situation: "Cette capture montre un échange entre plusieurs membres de l’équipe sur Discord à propos d’un choix technique dans une interface graphique. L’un pose une question sur un composant (QLabel), les autres partagent leurs approches et comparent avec celles d’autres membres. Cet échange illustre la collaboration, l’entraide et la recherche de cohérence dans le projet.",
            preuve: 'images/Competences/1/ac16.04.png'
          }
        ]
      },
      2: {
        annee: '2025 - 2026',
        titre: "Situer son rôle et ses missions au sein d'une équipe informatique",
        acs: [
          {
            code: 'AC26.01',
            titre: "Comprendre la diversité, la digitalisation et les enjeux économiques et écologiques de l'informatique",
            contexte: "Dans le cadre de mon stage chez Intelligence School, j'ai participé au développement et à la gestion du bot Telegram utilisé par les collaborateurs des 4 centres. Ce bot repose sur une base de données Neon qui gère les accès et les rôles de chaque utilisateur autorisé à interagir avec le système.",
            situation: "Cette capture montre la table users de la base Neon du bot Telegram IS, avec les colonnes telegram_id, user_id, name, active, created_at, email et role. On y distingue 4 rôles différents : admin (Mathieu Brival-Calixte), admin_stage (Andy Lowenski, Kenjy Jacques), gerant (Paul-Henri Jos) et user (Lucas Arnaud, Nadia Suaud, Marylène Caliste, Alex Cebarec). Cette structure illustre la modélisation des parties prenantes du système avec des niveaux d'accès différenciés selon les responsabilités de chaque acteur.",
            preuve: 'images/Competences/2/ac26.01.png'
          },
          {
            code: 'AC26.02',
            titre: "Appliquer une démarche pour intégrer une équipe informatique",
            contexte: "En début de stage chez Intelligence School, j'ai suivi un parcours d'intégration structuré en plusieurs missions pour monter en compétences sur les outils et l'environnement technique de l'entreprise. L'un des livrables attendus était un glossaire personnel des concepts n8n, destiné à formaliser les apprentissages et à servir de référence partageable pour l'équipe.",
            situation: "Cette capture présente le glossaire n8n produit en mission 3, définissant 10 termes fondamentaux : Workflow, Credentials, Nodes, Expression, Webhook, Template, Sub-Workflow, Root Node, Core Node et Merge Node. Chaque définition est rédigée de façon claire et accessible, illustrant la capacité à formaliser des connaissances techniques acquises pour les partager au reste de l'équipe.",
            preuve: 'images/Competences/2/ac26.02.png'
          },
     
          {
            code: 'AC26.03',
            titre: "Mobiliser les compétences interpersonnelles pour travailler en équipe",
            contexte: "Lors de notre première réunion de cadrage en stage chez Intelligence School, les trois stagiaires (Kenjy, Lucas et Andy) se sont réunis pour organiser le travail en autonomie après la passation avec le tuteur temporaire. La réunion avait pour objectif d'assigner les missions principales, de détailler les workflows d'automatisation Notion existants et de préparer la présentation d'équipe prévue le jeudi 17 avril à 16h.",
            situation: "Ce compte-rendu de réunion formalise la répartition des missions entre les trois stagiaires : Mission 1 WhatsApp/Dashlane assignée à Kenjy, Mission 2 Bot Telegram assignée à Lucas, Mission 3 VAPI assignée à Andy. Il atteste d'une organisation collective structurée, avec une répartition explicite des rôles et des niveaux de complexité définis pour chaque mission.",
            preuve: 'images/Competences/2/ac26.03.png'
          },
          {
            code: 'AC26.04',
            titre: "Rendre compte de son activité professionnelle",
            contexte: "Suite à une incohérence relevée par Paul-Henri dans les statistiques du bot Telegram (56 élèves actifs affichés pour Bellevue au lieu des 254 attendus), j'ai mené une investigation pour identifier la cause du problème, apporter une correction et documenter l'ensemble de la démarche.",
            situation: "Ce document de bilan retrace l'identification du bug (limitation technique dans la récupération des données), la correction apportée (augmentation de la limite et traitement par mois), la mise à jour du prompt du bot, et une analyse du coût d'utilisation estimé à moins de 10€ par mois pour 1 000 exécutions.",
            preuve: 'images/Competences/2/ac26.04.png'
          }
        ]
      }
    }
  }
};
