# Jeux de cartes IPA · Raisonnement clinique

Application web pour utiliser en formation les jeux de cartes pédagogiques destinés aux **étudiants infirmiers en pratique avancée (IPA), niveau Master**.

Chaque jeu suit le même principe : **chaque couleur correspond à une étape du raisonnement clinique** (♥ recueillir, ♦ repérer et formuler des hypothèses, ♣ vérifier, ♠ agir et suivre) et **chaque valeur à une situation clinique** suivie à travers un même patient. Réunir les quatre cartes d'une valeur (un « carré »), c'est dérouler un raisonnement complet.

## Jeux inclus

| Jeu | Cartes |
| --- | --- |
| Raisonnement clinique en prévention | 52 + 2 jokers |
| Théories de soins infirmiers (Peplau, Henderson, Orem, Roy, McGill, Pender, Kolcaba, Meleis) | 32 + 2 jokers |
| Mention Pathologies chroniques stabilisées (PCS) | 52 + 2 jokers |
| Mention Oncologie et hémato-oncologie | 52 + 2 jokers |
| Mention Maladie rénale chronique, dialyse, transplantation | 52 + 2 jokers |
| Mention Psychiatrie et santé mentale | 52 + 2 jokers |
| Mention Urgences | 52 + 2 jokers |

Les jeux par mention indiquent sur chaque carte les compétences IPA mobilisées (C1 à C6).

## Fonctionnalités

- **Tirage éclair** : révision individuelle ou en binôme, carte au hasard, minuteur, repères masqués jusqu'à la réponse, suivi « réussie / à revoir ».
- **Fil rouge** : déroulé d'une situation étape par étape, à projeter en travaux dirigés.
- **QCM** : sans écrire, cocher les repères attendus d'une carte, retrouver la situation ou l'étape du raisonnement d'un repère (questions générées automatiquement à partir des cartes).
- **Oral** : l'étudiant répond à voix haute, l'application écoute (reconnaissance vocale du navigateur : Chrome, Edge, Safari) et vérifie les repères cités ; verdict corrigeable d'un toucher. Seul, sans écrire.
- **Carré clinique** : tableau des scores et minuteur pour accompagner une partie avec les cartes imprimées.
- **Consultation** des cartes avec filtres par couleur et recherche plein texte.
- **Gestion** : export d'un jeu en JSON, import d'un jeu créé par l'équipe, modèle vierge, réinitialisation de la progression.
- **Jeux imprimables** (PDF A4 recto verso) dans le dossier `print/`.
- Fonctionne **hors connexion** une fois chargée (application installable sur téléphone).

Aucune donnée n'est envoyée à un serveur : progression, scores et jeux importés restent dans le navigateur de chaque utilisateur.

## Mise en ligne sur GitHub Pages

1. Créez un dépôt sur GitHub (par exemple `jeux-cartes-ipa`).
2. Déposez-y tout le contenu de ce dossier (bouton **Add file → Upload files**, ou `git push`).
3. Dans le dépôt : **Settings → Pages → Build and deployment**, choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une à deux minutes, l'application est disponible à l'adresse `https://<votre-compte>.github.io/jeux-cartes-ipa/`.

En ligne de commande :

```bash
git init
git add .
git commit -m "Jeux de cartes IPA"
git branch -M main
git remote add origin https://github.com/<votre-compte>/jeux-cartes-ipa.git
git push -u origin main
```

Pour tester sur votre ordinateur : ouvrez `index.html` dans un navigateur, ou lancez `python3 -m http.server` dans le dossier puis ouvrez `http://localhost:8000`.

## Structure

```
index.html              page unique de l'application
css/style.css           mise en forme
js/app.js               logique (navigation, modes de jeu, import/export)
data/decks.js           contenu des 7 jeux (window.DECKS = [...])
print/*.pdf             jeux imprimables A4 recto verso
icons/, manifest.webmanifest, sw.js   installation et mode hors connexion
```

## Modifier ou ajouter un jeu

**Sans toucher au code** : dans l'application, menu **Gérer** → *Exporter (JSON)* ou *Télécharger un modèle vierge*, modifiez le fichier dans un éditeur de texte, puis *Importer un jeu*. Le jeu importé reste disponible dans ce navigateur.

**Pour l'intégrer au site pour tous** : ajoutez l'objet JSON du jeu dans le tableau de `data/decks.js` (séparé des autres par une virgule), puis incrémentez `VERSION` dans `sw.js` pour forcer la mise à jour du cache.

Format d'un jeu :

```json
{
  "id": "mon-jeu",
  "titre": "Titre complet",
  "court": "Titre court",
  "code": "PERSO",
  "couleur": "#1F4E46",
  "description": "Texte affiché sur l'accueil",
  "intro": "Présentation du jeu",
  "rappel": true,
  "couleurs": [ { "cle": "coeur", "sym": "♥", "nom": "Cœur", "etape": "Recueillir", "sous": "…", "col": "#B3261E", "comp": "C1" }, "… 4 couleurs" ],
  "situations": [
    { "valeur": "2", "titre": "Titre", "sous_titre": "",
      "cartes": { "coeur": { "vignette": "…", "question": "…", "reperes": ["…", "…"] }, "… une carte par couleur" } }
  ],
  "jokers": [ { "titre": "…", "icone": "⚑", "texte": "…", "regle": "…" } ]
}
```

`rappel: true` affiche la situation de départ en tête des cartes ♦ ♣ ♠. `comp` (facultatif) affiche les compétences IPA.

## Avertissement

Outil pédagogique. Les contenus s'appuient sur des recommandations connues en octobre 2026 (HAS, sociétés savantes, référentiels des mentions) et doivent être relus et actualisés par l'équipe pédagogique avant usage. Les conduites thérapeutiques s'entendent dans le cadre des protocoles et de la réglementation en vigueur.

## Licence

À préciser par l'autrice (par exemple CC BY-NC-SA 4.0 pour les contenus pédagogiques).
