// Données des jeux — généré automatiquement. Voir README pour modifier ou ajouter un jeu.
window.DECKS = [
 {
  "id": "prevention",
  "titre": "Raisonnement clinique en prévention",
  "court": "Prévention",
  "code": "PREV",
  "couleur": "#1B2A4A",
  "description": "13 situations de prévention et de repérage : tabac, alcool, HTA, diabète, dépression, carence martiale…",
  "rappel": false,
  "intro": "Un jeu de cartes classique dont chaque couleur correspond à une étape du raisonnement clinique et chaque valeur à une situation de prévention suivie à travers un même patient.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Recueillir",
    "sous": "Anamnèse, écoute, contexte de vie",
    "col": "#B3261E"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Repérer & hypothèses",
    "sous": "Outils de repérage, scores, hypothèses diagnostiques",
    "col": "#D9480F"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Vérifier",
    "sous": "Examen clinique, examens complémentaires, diagnostics différentiels",
    "col": "#1F4E46"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Agir & suivre",
    "sous": "Décision partagée, intervention, orientation, suivi",
    "col": "#1B2A4A"
   }
  ],
  "situations": [
   {
    "valeur": "2",
    "titre": "Sevrage tabagique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. D., 52 ans, chauffeur routier, fumeur depuis l'âge de 16 ans, vient pour le suivi de son HTA. Il tousse le matin.",
      "question": "Quelles données recueillez-vous pour caractériser son tabagisme ?",
      "reperes": [
       "Consommation en paquets-années (paquets/jour × années)",
       "Délai de la 1re cigarette au réveil, nombre de cigarettes/jour",
       "Autres produits : vapoteuse, cannabis, alcool",
       "Tentatives d'arrêt antérieures, aides utilisées, causes de rechute",
       "Motivation et ambivalence (réglette 0 à 10)"
      ]
     },
     "carreau": {
      "vignette": "Il fume 25 cigarettes/jour, la première dans les 5 minutes après le réveil. « J'aimerais arrêter, mais pas maintenant. »",
      "question": "Comment interprétez-vous sa dépendance et son niveau de motivation ?",
      "reperes": [
       "Fagerström simplifié : ≤ 5 min (3 pts) + 21–30 cig/j (2 pts) = 5/6 → dépendance forte",
       "Stade de contemplation (modèle de Prochaska et DiClemente)",
       "Ambivalence à explorer, non à combattre (entretien motivationnel)",
       "Hypothèse associée : BPCO débutante (toux matinale)"
      ]
     },
     "trefle": {
      "vignette": "Vous souhaitez objectiver le tabagisme et ses conséquences avant d'en reparler avec lui.",
      "question": "Quelles mesures ou quels examens sont pertinents ?",
      "reperes": [
       "Mesure du CO expiré : objectivation et levier motivationnel",
       "Spirométrie ou mini-spiromètre : VEMS/CVF < 0,7 → BPCO",
       "Évaluation du risque cardiovasculaire global (PA, lipides, glycémie)",
       "Repérage anxiété-dépression (échelle HAD) : facteur de rechute"
      ]
     },
     "pique": {
      "vignette": "Deux mois plus tard, M. D. fixe une date d'arrêt dans 15 jours.",
      "question": "Quel accompagnement proposez-vous ?",
      "reperes": [
       "Substituts nicotiniques à dose suffisante, souvent patch + forme orale (prescriptibles par l'infirmier·e, remboursés)",
       "Entretien motivationnel et soutien comportemental",
       "Tabac info service (39 89, appli), Mois sans tabac",
       "Anticiper les situations à risque (cabine du camion), la prise de poids",
       "Suivi rapproché, ajustement des doses (signes de sous- ou surdosage)"
      ]
     }
    }
   },
   {
    "valeur": "3",
    "titre": "Alcool",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme L., 45 ans, cadre commerciale, consulte pour une fatigue et des troubles du sommeil depuis plusieurs mois.",
      "question": "Comment abordez-vous la question de l'alcool ?",
      "reperes": [
       "Question systématique, non jugeante, intégrée aux habitudes de vie",
       "Questionnaire AUDIT-C : fréquence, quantité, épisodes ≥ 6 verres",
       "Contexte : stress professionnel, usage « pour dormir » ou « décompresser »",
       "Retentissement : sommeil, travail, famille, conduite automobile"
      ]
     },
     "carreau": {
      "vignette": "Elle boit 3 à 4 verres de vin chaque soir, 6 verres ou plus le week-end. AUDIT-C : 9.",
      "question": "Comment qualifiez-vous cette consommation ?",
      "reperes": [
       "Au-delà des repères à moindre risque : max. 10 verres standard/semaine, max. 2 par jour, des jours sans alcool",
       "AUDIT-C positif (seuil ≥ 3 chez la femme) → compléter par l'AUDIT à 10 questions",
       "Hypothèses : usage à risque, usage nocif, trouble de l'usage (DSM-5)",
       "Insomnie et fatigue possiblement liées à l'alcool"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez votre évaluation clinique.",
      "question": "Quels éléments cliniques et biologiques recherchez-vous ?",
      "reperes": [
       "Signes de dépendance : besoin matinal, tremblements, échecs de réduction",
       "GGT, VGM, transaminases, CDT : marqueurs d'appoint, jamais diagnostiques seuls",
       "Syndrome anxio-dépressif associé",
       "Comorbidités : HTA, tabac, prise d'hypnotiques"
      ]
     },
     "pique": {
      "vignette": "Mme L. ne présente pas de signe de dépendance physique. Elle se dit « prête à lever le pied ».",
      "question": "Quelle intervention mettez-vous en œuvre ?",
      "reperes": [
       "Intervention brève (RPIB) : restitution, information, conseil, objectif négocié",
       "Agenda de consommation, objectifs de réduction réalistes",
       "Hygiène du sommeil plutôt qu'un hypnotique",
       "Réévaluation à 1 mois ; CSAPA ou addictologie si échec",
       "Si dépendance : sevrage encadré (vitamine B1, prévention du syndrome de sevrage)"
      ]
     }
    }
   },
   {
    "valeur": "4",
    "titre": "Cannabis & autres substances",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Lucas, 19 ans, étudiant, vient pour un certificat de sport. Ses résultats universitaires ont chuté.",
      "question": "Comment créez-vous les conditions d'un repérage chez ce jeune adulte ?",
      "reperes": [
       "Entretien confidentiel, non jugeant, questions ouvertes",
       "Grille psychosociale HEEADSSS : habitat, études, activités, drogues, sexualité, humeur/suicide, sécurité",
       "Polyconsommations : cannabis, alcool, protoxyde d'azote, cocaïne, écrans",
       "Contexte : isolement, sommeil, entourage"
      ]
     },
     "carreau": {
      "vignette": "Il fume 3 joints par jour, dès le matin, « pour être calme ». Il a abandonné son club de foot.",
      "question": "Quel outil de repérage utilisez-vous ? Quelles hypothèses formulez-vous ?",
      "reperes": [
       "CAST (Cannabis Abuse Screening Test) : score ≥ 7 → usage problématique probable",
       "Trouble de l'usage du cannabis ; usage auto-thérapeutique d'une anxiété",
       "Désinvestissement scolaire et social",
       "Ne pas méconnaître un trouble psychiatrique émergent"
      ]
     },
     "trefle": {
      "vignette": "Lucas dit aussi « entendre des choses » parfois, après avoir fumé.",
      "question": "Que recherchez-vous pour affiner votre raisonnement ?",
      "reperes": [
       "Symptômes psychotiques : hallucinations, idées de persécution, désorganisation",
       "Anxiété, dépression, idées suicidaires",
       "Antécédents psychiatriques familiaux",
       "Complications somatiques : respiratoires, syndrome d'hyperémèse cannabinoïde",
       "Dépistage urinaire : seulement avec accord, intérêt diagnostique limité"
      ]
     },
     "pique": {
      "vignette": "Les symptômes sont brefs et strictement liés à la consommation. Lucas accepte d'en parler.",
      "question": "Quelle prise en charge proposez-vous ?",
      "reperes": [
       "Intervention brève, entretien motivationnel, réduction des risques",
       "Consultation Jeunes Consommateurs (CJC) : gratuite et confidentielle",
       "Avis psychiatrique rapide si symptômes psychotiques persistants",
       "Drogues info service : 0 800 23 13 13",
       "Suivi régulier ; implication de l'entourage s'il le souhaite"
      ]
     }
    }
   },
   {
    "valeur": "5",
    "titre": "Hypertension artérielle",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme B., 58 ans, ménopausée, a une PA à 152/94 mmHg lors d'une consultation de routine.",
      "question": "Quelles données recueillez-vous à l'anamnèse ?",
      "reperes": [
       "Antécédents personnels et familiaux cardiovasculaires et rénaux",
       "Facteurs de risque : tabac, diabète, dyslipidémie, sédentarité, surpoids",
       "Sel, alcool, réglisse ; médicaments (AINS, corticoïdes, décongestionnants)",
       "Symptômes : céphalées, troubles visuels, douleur thoracique, dyspnée",
       "Ronflements, somnolence diurne (apnées du sommeil)"
      ]
     },
     "carreau": {
      "vignette": "Elle est asymptomatique. Trois mesures au cabinet : 150/92, 148/94 et 152/90 mmHg.",
      "question": "Quelle est votre hypothèse et comment la confirmez-vous ?",
      "reperes": [
       "Hypothèse : HTA de grade 1 (140–159 / 90–99 mmHg)",
       "Confirmation hors cabinet avant tout traitement : automesure (règle des 3 : 3 mesures matin et soir, 3 jours) ou MAPA",
       "Seuils : automesure ≥ 135/85 ; MAPA des 24 h ≥ 130/80",
       "Écarter un effet blouse blanche"
      ]
     },
     "trefle": {
      "vignette": "L'automesure confirme une moyenne de 142/88 mmHg.",
      "question": "Quel bilan initial réalisez-vous ?",
      "reperes": [
       "Créatininémie avec estimation du DFG, kaliémie, natrémie",
       "Glycémie à jeun, bilan lipidique",
       "Recherche de protéinurie (ratio albuminurie/créatininurie)",
       "ECG de repos",
       "IMC, tour de taille, souffles, pouls périphériques ; risque cardiovasculaire global"
      ]
     },
     "pique": {
      "vignette": "Le bilan est normal. Mme B. préfère « essayer sans médicament d'abord ».",
      "question": "Comment construisez-vous le plan de soins ?",
      "reperes": [
       "Décision partagée : mesures hygiéno-diététiques seules quelques mois si le risque est faible",
       "Moins de sel, activité physique régulière, perte de poids, moins d'alcool",
       "Objectif : < 140/90 au cabinet, < 135/85 en automesure",
       "Réévaluation puis traitement si objectif non atteint ; éducation à l'automesure",
       "Orientation urgente si PA ≥ 180/110 avec signes d'atteinte d'organe"
      ]
     }
    }
   },
   {
    "valeur": "6",
    "titre": "Diabète de type 2",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. K., 55 ans, IMC 31 kg/m², père diabétique, sédentaire. Il vient pour un bilan de santé.",
      "question": "Quels éléments recueillez-vous pour évaluer son risque de diabète ?",
      "reperes": [
       "Facteurs de risque : âge > 45 ans, surpoids, hérédité, sédentarité, origine géographique",
       "Antécédents : HTA, dyslipidémie ; diabète gestationnel chez la femme",
       "Symptômes : polyurie, polydipsie, amaigrissement, infections à répétition",
       "Alimentation, activité physique, contexte socio-professionnel"
      ]
     },
     "carreau": {
      "vignette": "Score FINDRISC : 16. Aucun symptôme.",
      "question": "Quelle hypothèse ? Quelle démarche de dépistage ?",
      "reperes": [
       "FINDRISC 15–20 : risque élevé de diabète à 10 ans",
       "Dépistage par glycémie veineuse à jeun",
       "Diabète : glycémie à jeun ≥ 1,26 g/L (7 mmol/L) à 2 reprises, ou ≥ 2 g/L à tout moment avec symptômes",
       "Hyperglycémie modérée à jeun : 1,10 à 1,25 g/L"
      ]
     },
     "trefle": {
      "vignette": "Deux glycémies à jeun à 1,38 et 1,41 g/L : le diagnostic de diabète de type 2 est posé.",
      "question": "Quel bilan initial et de retentissement organisez-vous ?",
      "reperes": [
       "HbA1c, bilan lipidique, créatininémie + DFG, ratio albuminurie/créatininurie",
       "ECG ; examen des pieds (monofilament, pouls, déformations)",
       "Dépistage de la rétinopathie (rétinographie)",
       "PA, IMC, tour de taille ; examen bucco-dentaire",
       "Risque cardiovasculaire global"
      ]
     },
     "pique": {
      "vignette": "HbA1c : 7,4 %. M. K. se dit « débordé par toutes ces informations ».",
      "question": "Quelle stratégie d'éducation et de suivi proposez-vous ?",
      "reperes": [
       "Éducation thérapeutique centrée sur ses priorités, à son rythme",
       "Objectif individualisé, le plus souvent HbA1c ≤ 7 %",
       "Mode de vie + metformine en 1re intention (sauf contre-indication)",
       "HbA1c tous les 3 mois ; pieds, reins, yeux selon le calendrier recommandé",
       "Activité physique adaptée ; diététicien·ne ; podologue selon le grade"
      ]
     }
    }
   },
   {
    "valeur": "7",
    "titre": "Obésité & activité physique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme T., 38 ans, mère de 3 enfants, IMC 34 kg/m². Elle demande « un régime efficace ».",
      "question": "Comment explorez-vous la situation, au-delà du poids ?",
      "reperes": [
       "Histoire pondérale : début, fluctuations, régimes antérieurs (effet yo-yo)",
       "Comportement alimentaire : grignotages, compulsions, restrictions",
       "Activité physique et sédentarité (temps assis, écrans)",
       "Sommeil, stress, contexte psychosocial, vécu de stigmatisation",
       "Attentes et motivation de la patiente"
      ]
     },
     "carreau": {
      "vignette": "Tour de taille : 98 cm. Elle décrit des prises alimentaires importantes le soir, avec perte de contrôle.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Obésité de grade 1 (IMC 30–34,9) avec obésité abdominale (≥ 88 cm chez la femme)",
       "Hyperphagie boulimique à explorer",
       "Comorbidités : HTA, diabète, apnées du sommeil, stéatose hépatique, arthrose",
       "Causes secondaires : médicaments, hypothyroïdie"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez le bilan.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "PA, glycémie à jeun, bilan lipidique, transaminases",
       "TSH si signes cliniques évocateurs",
       "Repérage des apnées du sommeil (questionnaire STOP-BANG)",
       "Condition physique : test de marche de 6 minutes",
       "Repérage anxiété-dépression"
      ]
     },
     "pique": {
      "vignette": "Mme T. voudrait « bouger plus » mais dit ne pas avoir le temps.",
      "question": "Quel plan d'action co-construisez-vous ?",
      "reperes": [
       "Objectifs réalistes : – 5 à 10 % du poids, priorité à la qualité de vie",
       "Activité progressive vers 150 min/semaine d'intensité modérée ; moins de temps assis",
       "Prescription d'activité physique adaptée, Maison sport-santé",
       "Pas de régime restrictif ; accompagnement diététique",
       "Orientation spécialisée si hyperphagie confirmée ; parcours obésité gradué"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Syndrome dépressif",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. R., 63 ans, récemment retraité, veuf depuis un an, suivi pour un diabète. Il dit « ne plus avoir goût à rien ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Humeur et anhédonie : durée, intensité, retentissement",
       "Événements de vie : deuil, retraite, isolement",
       "Sommeil, appétit, poids, énergie, concentration",
       "Consommation d'alcool et de médicaments",
       "Ressources : entourage, activités, soutiens"
      ]
     },
     "carreau": {
      "vignette": "PHQ-2 positif. Au PHQ-9, il obtient 16.",
      "question": "Comment interprétez-vous ce résultat ? Que devez-vous évaluer impérativement ?",
      "reperes": [
       "PHQ-9 de 15 à 19 : symptômes dépressifs modérément sévères",
       "DSM-5 : ≥ 5 symptômes depuis ≥ 2 semaines, dont humeur dépressive ou anhédonie",
       "Risque suicidaire systématique (idées, scénario, moyens) : homme âgé, veuf, isolé",
       "Différentiels : deuil compliqué, trouble bipolaire (épisodes d'exaltation antérieurs)"
      ]
     },
     "trefle": {
      "vignette": "Il n'a pas d'idée suicidaire actuelle. Il est très fatigué et a pris 3 kg.",
      "question": "Quels diagnostics différentiels ou associés recherchez-vous ?",
      "reperes": [
       "Hypothyroïdie (TSH)",
       "Anémie (NFS), déséquilibre du diabète (HbA1c)",
       "Troubles cognitifs débutants (MMSE si plainte)",
       "Iatrogénie : bêtabloquants, corticoïdes…",
       "Trouble de l'usage d'alcool associé"
      ]
     },
     "pique": {
      "vignette": "Un épisode dépressif caractérisé d'intensité modérée est retenu.",
      "question": "Quelle prise en charge et quel suivi organisez-vous ?",
      "reperes": [
       "Information, alliance thérapeutique, décision partagée",
       "Psychothérapie (dispositif Mon soutien psy) et/ou antidépresseur ISRS, selon le cadre de prescription",
       "Lutte contre l'isolement : activités, associations, entourage",
       "Réévaluation à 2–4 semaines ; vigilance suicidaire en début de traitement",
       "Plan de sécurité ; numéro national de prévention du suicide : 3114"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Dénutrition de la personne âgée",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme V., 82 ans, vit seule à domicile. Sa fille signale qu'elle « flotte dans ses vêtements ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Poids actuel, poids habituel, rapidité de la perte",
       "Appétit, nombre de repas, courses et préparation des repas",
       "État bucco-dentaire, troubles de la déglutition",
       "Pathologies, polymédication, humeur, cognition",
       "Autonomie (ADL/IADL), aides en place, isolement"
      ]
     },
     "carreau": {
      "vignette": "Poids 48 kg (52 kg il y a 6 mois), IMC 20,5 kg/m². Elle mange la moitié de ses repas depuis 3 semaines.",
      "question": "La dénutrition est-elle confirmée ? De quel degré ?",
      "reperes": [
       "Critère phénotypique : IMC < 22 (≥ 70 ans) ; la perte de 7,7 % en 6 mois ne suffit pas seule",
       "Critère étiologique : prise alimentaire réduite ≥ 50 % pendant plus d'une semaine",
       "HAS 2021 : 1 critère phénotypique + 1 étiologique → dénutrition confirmée",
       "Modérée à ce stade ; sévère si IMC < 20, perte ≥ 10 % en 1 mois ou ≥ 15 % en 6 mois, ou albuminémie ≤ 30 g/L"
      ]
     },
     "trefle": {
      "vignette": "Vous recherchez les causes et évaluez le retentissement.",
      "question": "Quels éléments cliniques et biologiques explorez-vous ?",
      "reperes": [
       "Albuminémie (critère de sévérité, à interpréter avec la CRP)",
       "Force de préhension, vitesse de marche (sarcopénie)",
       "MNA (Mini Nutritional Assessment)",
       "Causes : dépression, troubles cognitifs, pathologie digestive ou cancéreuse, dents, iatrogénie",
       "NFS, ionogramme, fonction rénale, vitamine D"
      ]
     },
     "pique": {
      "vignette": "Albuminémie 33 g/L, pas de cause organique évidente. Mme V. est isolée depuis le décès de son mari.",
      "question": "Quel plan d'intervention proposez-vous ?",
      "reperes": [
       "Alimentation enrichie et fractionnée, collations, plaisir de manger",
       "Compléments nutritionnels oraux si besoin, adaptés à ses goûts",
       "Portage de repas, aide à domicile, repas partagés (rompre l'isolement)",
       "Soins dentaires ; activité physique pour préserver le muscle",
       "Pesée mensuelle, réévaluation à 1 mois, coordination avec le médecin et la famille"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Carence martiale",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme N., 34 ans, végétarienne, consulte pour une fatigue persistante et un essoufflement à l'effort.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Fatigue : ancienneté, rythme, retentissement",
       "Règles : abondance, durée (score de Higham), contraception",
       "Alimentation : sources de fer, thé ou café aux repas",
       "Signes d'appel : pâleur, chute de cheveux, ongles cassants, jambes sans repos, pica",
       "Saignements digestifs, AINS, IPP, dons du sang, projet de grossesse"
      ]
     },
     "carreau": {
      "vignette": "Règles abondantes (8 jours, protections changées toutes les 2 heures). Pâleur conjonctivale.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Carence martiale, avec ou sans anémie, par pertes (ménorragies) et apports insuffisants",
       "Mécanismes : pertes > apports, malabsorption, besoins accrus",
       "Différentiels : hypothyroïdie, dépression, autre cause d'anémie",
       "Cause gynécologique : fibrome, adénomyose, trouble de l'hémostase"
      ]
     },
     "trefle": {
      "vignette": "Hb 10,2 g/dL, VGM 74 fL, CRP normale.",
      "question": "Quel examen confirme la carence ? Comment l'interpréter ?",
      "reperes": [
       "Ferritine en 1re intention : basse (seuil souvent retenu < 30 µg/L) = carence martiale",
       "Si inflammation, ferritine faussement normale : coefficient de saturation de la transferrine (< 20 %)",
       "Anémie microcytaire hypochrome = carence déjà installée",
       "Étiologie : avis gynécologique ; sinon maladie cœliaque (IgA anti-transglutaminase), saignement digestif"
      ]
     },
     "pique": {
      "vignette": "Ferritine : 6 µg/L. Une échographie pelvienne est programmée.",
      "question": "Quel traitement et quel suivi proposez-vous ?",
      "reperes": [
       "Fer oral à distance des repas, éventuellement un jour sur deux (meilleure absorption, moins de troubles digestifs)",
       "Informer : selles noires, troubles digestifs ; éviter thé et café autour de la prise",
       "NFS à 4–6 semaines ; poursuite jusqu'à reconstitution des réserves (ferritine, ~3 mois)",
       "Traiter la cause ; fer IV si intolérance, malabsorption ou échec",
       "Conseils alimentaires : fer héminique et non héminique, vitamine C"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "BPCO : repérage",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. P., 60 ans, ancien maçon, fume un paquet par jour depuis 40 ans. Il « s'essouffle plus vite qu'avant ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Tabagisme (ici 40 paquets-années), expositions professionnelles (poussières, silice)",
       "Dyspnée : échelle mMRC, évolution, retentissement",
       "Toux, expectorations, bronchites hivernales, exacerbations",
       "Activité physique, poids, comorbidités cardiovasculaires"
      ]
     },
     "carreau": {
      "vignette": "Toux et crachats chaque matin depuis 3 ans, essoufflement en montant un étage (mMRC 2).",
      "question": "Quelle hypothèse principale ? Quels diagnostics différentiels ?",
      "reperes": [
       "Hypothèse : BPCO (facteur de risque majeur + symptômes chroniques)",
       "Questionnaire de repérage HAS : toux, crachats, essoufflement, âge > 40 ans, tabac",
       "Différentiels : asthme, insuffisance cardiaque, cancer bronchique, dilatation des bronches",
       "Alerte : hémoptysie, amaigrissement, douleur thoracique"
      ]
     },
     "trefle": {
      "vignette": "Vous organisez une exploration fonctionnelle respiratoire.",
      "question": "Quel résultat confirme le diagnostic ?",
      "reperes": [
       "Trouble ventilatoire obstructif persistant après bronchodilatateur : VEMS/CVF < 0,7",
       "Sévérité selon le VEMS : stades GOLD 1 à 4",
       "Mini-spiromètre (VEMS/VEM6) pour le repérage ; la spirométrie confirme",
       "Selon le contexte : radiographie thoracique, NFS, SpO₂"
      ]
     },
     "pique": {
      "vignette": "VEMS/CVF post-bronchodilatateur 0,62 ; VEMS 68 % de la théorique (GOLD 2).",
      "question": "Quelles actions prioritaires mettez-vous en place ?",
      "reperes": [
       "Arrêt du tabac : l'intervention la plus efficace sur l'évolution",
       "Vaccinations : grippe, Covid-19, pneumocoque, VRS selon le calendrier en vigueur",
       "Activité physique, réhabilitation respiratoire",
       "Bronchodilatateurs sur prescription ; éducation aux techniques d'inhalation",
       "Plan d'action écrit en cas d'exacerbation ; suivi spirométrique"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Dépistage des cancers",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme G., 56 ans, consulte pour des lombalgies. Elle n'a « jamais fait de dépistage ».",
      "question": "Quelles données recueillez-vous pour orienter les dépistages ?",
      "reperes": [
       "Antécédents personnels et familiaux de cancer (sein, côlon, ovaire, utérus)",
       "Dépistages déjà réalisés et leurs dates",
       "Freins : peur, pudeur, accès, littératie en santé, croyances",
       "Facteurs de risque : tabac, alcool, surpoids, traitement hormonal"
      ]
     },
     "carreau": {
      "vignette": "Pas d'antécédent familial connu. Les courriers de l'Assurance maladie sont « restés dans un tiroir ».",
      "question": "Quels dépistages organisés la concernent ?",
      "reperes": [
       "Sein : mammographie + examen clinique tous les 2 ans, de 50 à 74 ans",
       "Côlon-rectum : test immunologique fécal tous les 2 ans, de 50 à 74 ans",
       "Col de l'utérus : test HPV tous les 5 ans, de 30 à 65 ans",
       "Risque moyen → dépistage organisé ; risque élevé → suivi spécifique"
      ]
     },
     "trefle": {
      "vignette": "Elle se souvient finalement que sa sœur a eu un cancer du côlon à 48 ans.",
      "question": "Qu'est-ce que cela change dans votre raisonnement ?",
      "reperes": [
       "Parent du 1er degré atteint avant 65 ans → risque élevé : coloscopie, et non test immunologique",
       "Coloscopie dès 45 ans ou 5 ans avant l'âge du diagnostic du cas index",
       "Ici : coloscopie à programmer sans attendre",
       "Rechercher d'autres cas familiaux (syndrome de Lynch → oncogénétique)"
      ]
     },
     "pique": {
      "vignette": "Mme G. est inquiète et redoute la coloscopie.",
      "question": "Comment l'accompagnez-vous ?",
      "reperes": [
       "Écoute des craintes ; information claire, adaptée à sa littératie",
       "Explication du déroulé : préparation colique, anesthésie",
       "Orientation gastro-entérologue ; mammographie et test HPV en parallèle",
       "Décision partagée, outils d'aide à la décision",
       "Traçabilité et relance ; signes d'alerte à connaître"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Fragilité & chutes",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. F., 78 ans, vit avec son épouse. Il est tombé deux fois en six mois, sans blessure grave.",
      "question": "Quelles données recueillez-vous sur ces chutes ?",
      "reperes": [
       "Circonstances : lieu, heure, activité, malaise, perte de connaissance, temps au sol",
       "Médicaments : psychotropes, antihypertenseurs, nombre de molécules",
       "Vision, audition, marche ; peur de tomber",
       "Environnement : tapis, éclairage, escaliers, chaussage",
       "Alcool, nutrition, continence"
      ]
     },
     "carreau": {
      "vignette": "Il prend 7 médicaments, dont un hypnotique. Il se lève difficilement de sa chaise.",
      "question": "Comment évaluez-vous son risque de nouvelle chute ?",
      "reperes": [
       "Chutes répétées = facteur de risque majeur ; repérage de la fragilité (Gérontopôle, critères de Fried)",
       "Timed Up and Go, appui unipodal (< 5 s), test de lever de chaise",
       "Hypothèses : iatrogénie, sarcopénie, hypotension orthostatique",
       "Gravité : traumatisme, impossibilité de se relever seul"
      ]
     },
     "trefle": {
      "vignette": "Vous poursuivez l'examen clinique.",
      "question": "Que recherchez-vous à l'examen et en biologie ?",
      "reperes": [
       "Hypotension orthostatique : PA couché puis debout à 1 et 3 min (baisse ≥ 20 mmHg systolique ou ≥ 10 diastolique)",
       "Pieds, vision, examen neurologique, troubles cognitifs",
       "Vitamine D, NFS, ionogramme, glycémie, fonction rénale selon le contexte",
       "Risque fracturaire : ostéoporose (fracture antérieure, densitométrie)"
      ]
     },
     "pique": {
      "vignette": "Hypotension orthostatique retrouvée. Par peur de tomber, il sort de moins en moins.",
      "question": "Quelle intervention multifactorielle proposez-vous ?",
      "reperes": [
       "Révision médicamenteuse avec le médecin (déprescription de l'hypnotique)",
       "Activité physique : équilibre et renforcement (kinésithérapie)",
       "Aménagement du domicile (ergothérapeute), téléassistance",
       "Apprentissage du relever du sol ; prise en charge de la peur de chuter",
       "Lever progressif ; correction d'une carence en vitamine D ; suivi coordonné"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Risque cardiovasculaire global",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. A., 50 ans, fumeur, hypertendu traité, demande s'il « risque une crise cardiaque comme son frère ».",
      "question": "Quelles données recueillez-vous pour évaluer son risque ?",
      "reperes": [
       "Accident cardiovasculaire précoce chez un parent du 1er degré (homme < 55 ans, femme < 65 ans)",
       "Facteurs de risque : tabac, HTA, diabète, dyslipidémie, obésité, sédentarité",
       "Alimentation, alcool, stress, sommeil",
       "Symptômes : douleur thoracique d'effort, claudication, dyspnée"
      ]
     },
     "carreau": {
      "vignette": "PA 136/84 mmHg sous traitement, LDL-c 1,9 g/L. Non diabétique, sans maladie cardiovasculaire connue.",
      "question": "Quel outil utilisez-vous pour estimer son risque ?",
      "reperes": [
       "SCORE2 (ESC 2021) : risque d'événement cardiovasculaire à 10 ans, de 40 à 69 ans (SCORE2-OP au-delà)",
       "Variables : âge, sexe, tabac, PA systolique, cholestérol non-HDL, région",
       "Risque majoré par l'hérédité, l'obésité, la précarité",
       "Prévention secondaire, diabète, maladie rénale : outils et objectifs spécifiques"
      ]
     },
     "trefle": {
      "vignette": "Son risque SCORE2 est estimé élevé.",
      "question": "Quels examens complètent votre évaluation ?",
      "reperes": [
       "Bilan lipidique complet, glycémie à jeun ou HbA1c",
       "Créatininémie, DFG, ratio albuminurie/créatininurie",
       "ECG ; IMC, tour de taille",
       "LDL-c ≥ 1,9 g/L : évoquer une hypercholestérolémie familiale",
       "Atteinte d'organe asymptomatique (IPS, doppler) selon le contexte, sur avis médical"
      ]
     },
     "pique": {
      "vignette": "M. A. veut « tout changer d'un coup ».",
      "question": "Comment priorisez-vous les actions avec lui ?",
      "reperes": [
       "Arrêt du tabac : le bénéfice le plus important",
       "Décision partagée : 1 ou 2 objectifs à la fois, réalistes et mesurables",
       "Alimentation de type méditerranéen, activité physique, contrôle tensionnel",
       "Statine selon l'objectif de LDL-c fixé par le niveau de risque, sur prescription",
       "Suivi régulier, renforcement positif ; dépistage familial si forme familiale"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Drapeau rouge",
    "icone": "⚑",
    "texte": "Choisissez une thématique et citez au moins deux signes d'alerte qui imposent une orientation urgente.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Patient partenaire",
    "icone": "◎",
    "texte": "Reprenez la dernière question jouée du point de vue du patient : ses priorités, ses craintes, ses préférences, ses savoirs expérientiels.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   }
  ]
 },
 {
  "id": "theories",
  "titre": "Théories de soins infirmiers",
  "court": "Théories de soins",
  "code": "THEO",
  "couleur": "#3B2350",
  "description": "8 théories de soins (Peplau, Henderson, Orem, Roy, McGill, Pender, Kolcaba, Meleis) appliquées à des cas cliniques.",
  "rappel": true,
  "intro": "Un jeu de 32 cartes classique dont chaque couleur correspond à une étape de mobilisation d'une théorie de soins et chaque valeur à une théoricienne, travaillée à partir d'un cas clinique. Les valeurs suivent l'ordre chronologique des théories, de Peplau (1952) à Meleis (2010). Réunir les quatre cartes d'une valeur, c'est passer de la théorie à la pratique.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Comprendre la théorie",
    "sous": "Auteure, concepts clés, vision du soin",
    "col": "#B3261E"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Recueillir avec le modèle",
    "sous": "Ce que la théorie invite à observer chez la personne",
    "col": "#D9480F"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Analyser la situation",
    "sous": "Formuler la situation dans le langage de la théorie",
    "col": "#1F4E46"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Intervenir & évaluer",
    "sous": "Interventions et critères d'évaluation issus du modèle",
    "col": "#1B2A4A"
   }
  ],
  "situations": [
   {
    "valeur": "7",
    "titre": "Hildegard Peplau",
    "sous_titre": "Relations interpersonnelles · 1952",
    "cartes": {
     "coeur": {
      "vignette": "M. J., 28 ans, est suivi en CMP par une IPA après un premier épisode psychotique. Méfiant, il parle peu.",
      "question": "Quels sont les concepts clés de la théorie de Peplau ?",
      "reperes": [
       "La relation infirmière-patient est en elle-même un processus thérapeutique",
       "Quatre phases : orientation, identification, exploitation, résolution",
       "Rôles infirmiers : inconnue, personne-ressource, enseignante, leader, substitut, conseillère",
       "L'anxiété, selon son niveau, mobilise ou bloque l'apprentissage"
      ]
     },
     "carreau": {
      "vignette": "Il arrive en retard, regarde la porte et répond par monosyllabes.",
      "question": "Quelles données recueillez-vous au regard de ce modèle ?",
      "reperes": [
       "Niveau d'anxiété et ses manifestations",
       "Perception qu'il a de sa situation et de ses besoins",
       "Attentes vis-à-vis de l'IPA, représentation du soin",
       "Expériences relationnelles antérieures avec les soignants",
       "Vos propres réactions dans la relation (contre-attitudes)"
      ]
     },
     "trefle": {
      "vignette": "Après trois rencontres, il ne sait toujours pas « à quoi sert » le suivi.",
      "question": "Comment formulez-vous la situation selon Peplau ?",
      "reperes": [
       "Phase d'orientation non achevée : le problème et le cadre ne sont pas clarifiés",
       "L'IPA reste dans le rôle d'« inconnue »",
       "Méfiance et anxiété élevée limitent la capacité d'apprentissage",
       "Préalable : construire la sécurité relationnelle avant tout projet éducatif"
      ]
     },
     "pique": {
      "vignette": "Il commence à évoquer ses voix et sa peur de « redevenir fou ».",
      "question": "Quelles interventions et quels critères d'évaluation retenez-vous ?",
      "reperes": [
       "Cadre stable : même soignante, même horaire, contrat clair",
       "Écoute active, reformulation, clarification de ses besoins",
       "Accompagner vers l'exploitation : il utilise les ressources (ETP, CMP, pairs aidants)",
       "Préparer la résolution dès le début : autonomie, fin anticipée du suivi",
       "Évaluation : il formule ses besoins et s'engage dans le suivi"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Virginia Henderson",
    "sous_titre": "Les 14 besoins fondamentaux · 1960-1966",
    "cartes": {
     "coeur": {
      "vignette": "Mme H., 79 ans, rentre à domicile après un AVC avec hémiparésie gauche légère. Elle vit seule.",
      "question": "Quelles sont les idées clés du modèle de Henderson ?",
      "reperes": [
       "14 besoins fondamentaux, de « respirer » à « apprendre »",
       "Chaque besoin s'évalue en termes d'indépendance ou de dépendance",
       "Sources de difficulté : manque de force, de volonté ou de connaissance",
       "Rôle infirmier : suppléer et aider la personne à retrouver son indépendance le plus vite possible"
      ]
     },
     "carreau": {
      "vignette": "Elle marche avec une canne, peine à s'habiller et dit « ne plus servir à rien ».",
      "question": "Comment organisez-vous le recueil de données ?",
      "reperes": [
       "Passage en revue des 14 besoins : manifestations d'indépendance et de dépendance",
       "Se mouvoir, se vêtir, être propre, éliminer, éviter les dangers (chutes)",
       "Communiquer, s'occuper en vue de se réaliser, se récréer",
       "Apprendre : connaissances sur l'AVC et les aides possibles",
       "Ressources : entourage, aides à domicile, logement"
      ]
     },
     "trefle": {
      "vignette": "Elle a chuté une fois dans la salle de bains et sort de moins en moins.",
      "question": "Comment analysez-vous la situation avec ce modèle ?",
      "reperes": [
       "Besoins perturbés à hiérarchiser : éviter les dangers, se mouvoir, être propre",
       "Source de difficulté identifiée pour chacun : force (hémiparésie), connaissance, volonté (découragement)",
       "Besoins interdépendants : la peur de chuter réduit la mobilité et l'occupation",
       "Limite du modèle : risque de fragmenter la personne en besoins"
      ]
     },
     "pique": {
      "vignette": "Mme H. souhaite rester chez elle.",
      "question": "Quelles interventions et quels critères d'évaluation proposez-vous ?",
      "reperes": [
       "Suppléance partielle et temporaire (aide à la toilette), à réduire progressivement",
       "Stimuler l'indépendance : kinésithérapie, ergothérapie, aménagement de la salle de bains",
       "Enseignement : prévention des chutes, signes d'alerte d'AVC",
       "Restaurer l'occupation et la récréation : activités, liens sociaux",
       "Évaluation : niveau d'indépendance par besoin, au fil du temps"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Dorothea Orem",
    "sous_titre": "Déficit d'auto-soin · 1959-1971",
    "cartes": {
     "coeur": {
      "vignette": "M. O., 66 ans, insuffisant cardiaque, a été réhospitalisé deux fois en six mois. Il est suivi par une IPA.",
      "question": "Quelles sont les trois théories qui composent le modèle d'Orem ?",
      "reperes": [
       "Théorie de l'auto-soin : actions que la personne accomplit pour maintenir vie, santé et bien-être",
       "Théorie du déficit d'auto-soin : la demande dépasse la capacité d'auto-soin",
       "Théorie des systèmes infirmiers : entièrement compensatoire, partiellement compensatoire, soutien-éducation",
       "Exigences d'auto-soin universelles, liées au développement, liées à un écart de santé"
      ]
     },
     "carreau": {
      "vignette": "Il ne se pèse jamais et ne fait pas le lien entre son essoufflement et ses écarts de sel.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Exigences universelles : alimentation, hydratation, activité-repos",
       "Exigences de développement : retraite récente, changement de rôle",
       "Exigences liées à l'écart de santé : régime peu salé, pesée, traitements, signes d'alerte",
       "Capacités d'auto-soin : connaissances, motivation, capacités physiques et cognitives",
       "Facteurs conditionnants : âge, famille, ressources, système de santé"
      ]
     },
     "trefle": {
      "vignette": "Ses capacités physiques et cognitives sont préservées ; son épouse est très présente.",
      "question": "Comment formulez-vous la situation selon Orem ?",
      "reperes": [
       "Déficit d'auto-soin lié à l'écart de santé : surveillance et régime non assurés",
       "Cause principale : connaissances insuffisantes, et non incapacité",
       "Système infirmier indiqué : soutien-éducation",
       "Ressource : l'épouse peut être agent d'auto-soin associé"
      ]
     },
     "pique": {
      "vignette": "M. O. accepte un suivi rapproché.",
      "question": "Quelles interventions et quels critères d'évaluation retenez-vous ?",
      "reperes": [
       "Éducation thérapeutique : pesée quotidienne, régime peu salé, traitements",
       "Signes d'alerte et conduite à tenir (prise de poids rapide, œdèmes, dyspnée)",
       "Outils : carnet de suivi, télésurveillance selon le dispositif local",
       "Associer l'épouse sans se substituer à lui",
       "Évaluation : autonomie dans l'auto-surveillance, réhospitalisations évitées"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Callista Roy",
    "sous_titre": "Modèle de l'adaptation · 1970",
    "cartes": {
     "coeur": {
      "vignette": "Mme R., 47 ans, mère de deux adolescents, est en chimiothérapie après une mastectomie pour cancer du sein.",
      "question": "Quels sont les concepts clés du modèle de Roy ?",
      "reperes": [
       "La personne est un système adaptatif soumis à des stimuli",
       "Stimuli focal, contextuels et résiduels",
       "Mécanismes d'adaptation : régulateur (physiologique) et cognateur (cognitif, émotionnel)",
       "Quatre modes : physiologique, concept de soi, fonction de rôle, interdépendance",
       "Réponses adaptatives ou inefficaces ; soin = promouvoir l'adaptation"
      ]
     },
     "carreau": {
      "vignette": "Elle évite les miroirs, a cessé de travailler et se replie sur elle-même.",
      "question": "Que recueillez-vous selon les quatre modes d'adaptation ?",
      "reperes": [
       "Physiologique : fatigue, nausées, douleur, sommeil",
       "Concept de soi : image corporelle, estime de soi, féminité",
       "Fonction de rôle : arrêt de travail, rôle de mère et de conjointe",
       "Interdépendance : relation avec le conjoint, soutien, repli",
       "Pour chaque comportement : adaptatif ou inefficace ?"
      ]
     },
     "trefle": {
      "vignette": "« Je ne me reconnais plus. Mon mari ne me regarde plus de la même façon. »",
      "question": "Comment analysez-vous les stimuli en jeu ?",
      "reperes": [
       "Stimulus focal : mastectomie et alopécie",
       "Stimuli contextuels : fatigue de la chimiothérapie, regard perçu du conjoint, arrêt de travail",
       "Stimuli résiduels : croyances sur la féminité, expériences antérieures",
       "Réponse inefficace prioritaire dans le mode concept de soi"
      ]
     },
     "pique": {
      "vignette": "Mme R. accepte d'en parler avec son mari et vous.",
      "question": "Quelles interventions et quels critères d'évaluation proposez-vous ?",
      "reperes": [
       "Agir sur les stimuli : information sur prothèse et reconstruction, gestion de la fatigue",
       "Soins de support : socio-esthétique, psychologue, activité physique adaptée",
       "Associer le conjoint ; groupes de pairs",
       "Préparer la reprise progressive du travail",
       "Évaluation : comportements adaptatifs (regard sur soi, reprise d'activités, liens)"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "Moyra Allen",
    "sous_titre": "Modèle de McGill · années 1970-1980",
    "cartes": {
     "coeur": {
      "vignette": "M. L., 76 ans, a une maladie de Parkinson évoluée. Son épouse, 74 ans, assure seule son accompagnement.",
      "question": "Quels sont les concepts clés du modèle de McGill ?",
      "reperes": [
       "La santé s'apprend, surtout au sein de la famille",
       "La famille est l'unité de soin",
       "Santé = processus de coping et de développement, qui coexiste avec la maladie",
       "Partenariat collaboratif ; l'infirmière s'appuie sur les forces de la famille"
      ]
     },
     "carreau": {
      "vignette": "Mme L. dit être « à bout », mais refuse toute aide extérieure.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Perception de la situation par chacun des membres de la famille",
       "Forces : savoirs acquis, humour, réseau, histoire du couple",
       "Façons de faire face (coping) et ce qui a déjà fonctionné",
       "Objectifs de santé que se fixe la famille",
       "Tâches de développement : vieillissement, transformation du couple"
      ]
     },
     "trefle": {
      "vignette": "Elle veut « bien faire » et craint d'être jugée si elle délègue.",
      "question": "Comment formulez-vous la situation selon ce modèle ?",
      "reperes": [
       "Situation d'apprentissage : la famille apprend à vivre avec une maladie évolutive",
       "Forces présentes mais sous-utilisées ; coping centré sur l'effort seul",
       "Objectif prioritaire défini par la famille : préserver la santé de l'aidante",
       "Le refus d'aide a un sens, à explorer plutôt qu'à contourner"
      ]
     },
     "pique": {
      "vignette": "Le couple accepte de « réfléchir ensemble » à des solutions.",
      "question": "Quelles interventions et quels critères d'évaluation proposez-vous ?",
      "reperes": [
       "Co-construire les objectifs à partir des priorités du couple",
       "Valoriser les compétences de l'aidante",
       "Favoriser l'apprentissage par essais : un accueil de jour à l'essai, par exemple",
       "Mobiliser le réseau : plateforme de répit, aides à domicile, associations",
       "Évaluation : sentiment de compétence, fardeau de l'aidante (échelle de Zarit)"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Nola Pender",
    "sous_titre": "Promotion de la santé · 1982",
    "cartes": {
     "coeur": {
      "vignette": "Mme P., 50 ans, sédentaire, prédiabétique, voudrait « se remettre au sport » sans y parvenir.",
      "question": "Quels sont les concepts clés du modèle de Pender ?",
      "reperes": [
       "Caractéristiques et expériences individuelles : comportements antérieurs, facteurs personnels",
       "Bénéfices perçus, obstacles perçus, auto-efficacité perçue",
       "Affects liés à l'activité ; influences interpersonnelles et situationnelles",
       "Engagement dans un plan d'action, face à des exigences concurrentes",
       "Résultat : comportement de promotion de la santé"
      ]
     },
     "carreau": {
      "vignette": "Elle adorait nager à 20 ans. Aujourd'hui, elle s'occupe de sa mère malade.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Comportements antérieurs : natation, expériences positives",
       "Bénéfices perçus et obstacles perçus (temps, coût, douleur au genou)",
       "Auto-efficacité : se sent-elle capable ?",
       "Influences interpersonnelles : amie, famille ; influences situationnelles : piscine, horaires",
       "Exigences concurrentes : rôle d'aidante, travail"
      ]
     },
     "trefle": {
      "vignette": "« Je n'y arriverai pas, je n'ai jamais le temps. »",
      "question": "Comment formulez-vous la situation selon Pender ?",
      "reperes": [
       "Auto-efficacité faible ; obstacles perçus supérieurs aux bénéfices",
       "Exigences concurrentes fortes qui empêchent l'engagement",
       "Leviers : affect positif lié à la natation, soutien possible d'une amie",
       "Pas encore d'engagement dans un plan d'action précis"
      ]
     },
     "pique": {
      "vignette": "Elle accepte d'essayer « un petit quelque chose ».",
      "question": "Quelles interventions et quels critères d'évaluation proposez-vous ?",
      "reperes": [
       "Objectifs modestes et atteignables pour vivre des réussites",
       "Plan d'action écrit : quoi, quand, où, avec qui",
       "Lever les obstacles : créneaux compatibles, relais pour sa mère",
       "S'appuyer sur le plaisir (natation) et sur le soutien de l'amie",
       "Évaluation : comportement adopté puis maintenu, auto-efficacité accrue"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Katharine Kolcaba",
    "sous_titre": "Théorie du confort · années 1990",
    "cartes": {
     "coeur": {
      "vignette": "M. K., 72 ans, en hémodialyse trois fois par semaine, se plaint de crampes, de démangeaisons et de l'ennui des séances.",
      "question": "Quels sont les concepts clés de la théorie de Kolcaba ?",
      "reperes": [
       "Trois types de confort : soulagement, bien-être (tranquillité), transcendance",
       "Quatre contextes : physique, psychospirituel, socioculturel, environnemental",
       "Grille taxonomique de 12 cases pour repérer les besoins de confort",
       "Un confort accru favorise les comportements de santé"
      ]
     },
     "carreau": {
      "vignette": "Les séances durent 4 heures, dans une salle froide et bruyante.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Physique : crampes, prurit, fatigue, soif",
       "Psychospirituel : découragement, sens donné au traitement",
       "Socioculturel : famille, transports, lien avec l'équipe",
       "Environnemental : froid, bruit, position, durée des séances",
       "Mesure du confort (questionnaire général de confort)"
      ]
     },
     "trefle": {
      "vignette": "Il envisage d'écourter ses séances.",
      "question": "Comment analysez-vous la situation avec la grille de Kolcaba ?",
      "reperes": [
       "Soulagement non atteint : prurit et crampes",
       "Bien-être compromis : ennui, froid, bruit",
       "Transcendance fragile : découragement, risque de renoncer au traitement",
       "Inconfort qui menace l'adhésion : priorité de soin"
      ]
     },
     "pique": {
      "vignette": "M. K. accepte d'en parler avec l'équipe de néphrologie.",
      "question": "Quelles interventions et quels critères d'évaluation proposez-vous ?",
      "reperes": [
       "Interventions techniques : réévaluer le poids sec et le bilan phosphocalcique avec le néphrologue",
       "Coaching : écoute, réassurance, information",
       "Réconfort : couverture, musique, activités pendant la séance",
       "Projets hors dialyse, lien avec les pairs",
       "Évaluation : confort mesuré, séances maintenues"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Afaf Meleis",
    "sous_titre": "Théorie des transitions · 2000-2010",
    "cartes": {
     "coeur": {
      "vignette": "M. T., 70 ans, diabétique, rentre à domicile après une amputation sous le genou. Il vit avec son épouse.",
      "question": "Quels sont les concepts clés de la théorie de Meleis ?",
      "reperes": [
       "Types de transition : développementale, situationnelle, santé-maladie, organisationnelle",
       "Propriétés : prise de conscience, engagement, changement, durée, points critiques",
       "Conditions facilitantes ou inhibantes : personnelles, communautaires, sociétales",
       "Indicateurs de processus et de résultat : maîtrise, identité reformulée"
      ]
     },
     "carreau": {
      "vignette": "Il dit : « Je remarcherai comme avant, c'est juste une question de temps. »",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Transitions en jeu : santé-maladie, situationnelle (épouse aidante), organisationnelle (hôpital-domicile)",
       "Prise de conscience et engagement dans la transition",
       "Significations et croyances, préparation, connaissances",
       "Ressources : logement, appareillage, rééducation, entourage"
      ]
     },
     "trefle": {
      "vignette": "Le logement comporte un étage. Personne ne lui a parlé du délai d'appareillage.",
      "question": "Comment formulez-vous la situation selon Meleis ?",
      "reperes": [
       "Transitions multiples, simultanées et liées",
       "Conditions inhibantes : faible prise de conscience, logement inadapté, préparation insuffisante",
       "Points critiques prévisibles : premiers jours, appareillage, reprise de la marche",
       "Indicateurs de processus absents : il ne se sent ni connecté ni en confiance"
      ]
     },
     "pique": {
      "vignette": "La sortie est prévue dans 10 jours.",
      "question": "Quelles interventions et quels critères d'évaluation proposez-vous ?",
      "reperes": [
       "Préparer la sortie : information réaliste, étapes d'appareillage et de rééducation",
       "Supplémentation de rôle : préparer l'épouse à son nouveau rôle",
       "Aménagement du logement, coordination ville-hôpital",
       "Suivi rapproché aux points critiques",
       "Évaluation : maîtrise des nouvelles compétences, identité reformulée"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Métaparadigme",
    "icone": "◈",
    "texte": "Pour la théorie de votre choix, définissez les quatre concepts du métaparadigme : personne, santé, environnement, soin.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Changement de lunettes",
    "icone": "◐",
    "texte": "Relisez la situation de la dernière carte jouée avec une autre théorie du jeu. Qu'est-ce que cette autre lunette fait voir de nouveau ?",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   }
  ]
 },
 {
  "id": "pcs",
  "titre": "Pathologies chroniques stabilisées, prévention et polypathologies courantes en soins primaires",
  "court": "Pathologies chroniques stabilisées",
  "code": "PCS",
  "couleur": "#1F4E46",
  "description": "La mention PCS couvre le suivi de patients atteints de pathologies chroniques stabilisées (diabète, insuffisance cardiaque, maladie coronaire, artériopathie, AVC, insuffisance respiratoire chronique, maladies d'Alzheimer et de Parkinson, épilepsie), la prévention et la prise en charge des polypathologies courantes en soins primaires.",
  "rappel": true,
  "competences": [
   [
    "C1",
    "Évaluer l'état de santé de patients en relais de consultations médicales pour des pathologies identifiées",
    "♥ ♦ ♣"
   ],
   [
    "C2",
    "Définir et mettre en œuvre le projet de soins du patient à partir de l'évaluation globale de son état de santé",
    "♣ ♠"
   ],
   [
    "C3",
    "Concevoir et mettre en œuvre des actions de prévention et d'éducation thérapeutique",
    "♦ ♠"
   ],
   [
    "C4",
    "Organiser les parcours de soins et de santé en collaboration avec l'ensemble des acteurs concernés",
    "♠"
   ],
   [
    "C5",
    "Mettre en place et conduire des actions d'évaluation et d'amélioration des pratiques en exerçant un leadership clinique",
    "Joker 2, repères ♠"
   ],
   [
    "C6",
    "Rechercher, analyser et produire des données professionnelles et scientifiques",
    "Joker 2, débriefing"
   ]
  ],
  "intro": "Un jeu de 52 cartes pour la mention « Pathologies chroniques stabilisées, prévention et polypathologies courantes en soins primaires ». Chaque couleur correspond à une étape du raisonnement clinique, chaque valeur à une situation clinique suivie à travers un même patient. Chaque carte indique les compétences IPA qu'elle mobilise. Réunir les quatre cartes d'une valeur, c'est dérouler un raisonnement complet, du recueil des données à la coordination du parcours.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Recueillir",
    "sous": "Anamnèse, écoute, contexte de vie",
    "col": "#B3261E",
    "comp": "C1"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Repérer & hypothèses",
    "sous": "Repérage, scores, hypothèses et drapeaux rouges",
    "col": "#D9480F",
    "comp": "C1 · C3"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Vérifier",
    "sous": "Examen clinique, examens complémentaires, diagnostics différentiels",
    "col": "#1F4E46",
    "comp": "C1 · C2"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Agir & suivre",
    "sous": "Projet de soins, prévention, ETP, parcours et coordination",
    "col": "#1B2A4A",
    "comp": "C2 · C3 · C4"
   }
  ],
  "situations": [
   {
    "valeur": "2",
    "titre": "Diabète de type 2 : pied diabétique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. D., 67 ans, diabétique de type 2 depuis 15 ans, vit seul. Lors de son suivi, il dit « ne plus bien sentir ses pieds ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Ancienneté et équilibre du diabète (HbA1c), autres complications",
       "Symptômes : paresthésies, douleurs, claudication",
       "Antécédents de plaie, d'ulcération ou d'amputation",
       "Chaussage, hygiène, capacité à examiner ses pieds (vue, souplesse)",
       "Tabac, isolement, recours au pédicure-podologue"
      ]
     },
     "carreau": {
      "vignette": "Monofilament non perçu sur 2 sites à droite, pouls pédieux faibles, hyperkératose sous la tête du 1er métatarsien.",
      "question": "Comment gradez-vous le risque podologique ?",
      "reperes": [
       "Neuropathie (monofilament) + artériopathie suspectée + zone d'hyperappui",
       "Grade 0 : pas de neuropathie ; grade 1 : neuropathie isolée",
       "Grade 2 : neuropathie + AOMI et/ou déformation → au moins grade 2 ici",
       "Grade 3 : antécédent d'ulcération chronique ou d'amputation"
      ]
     },
     "trefle": {
      "vignette": "Il n'a pas de plaie. Il fume 10 cigarettes par jour.",
      "question": "Quels examens complètent votre évaluation ?",
      "reperes": [
       "Index de pression systolique (IPS) : < 0,90 = AOMI ; > 1,30 = artères incompressibles",
       "Écho-doppler artériel si IPS anormal ou ininterprétable",
       "Inspection complète : espaces interorteils, ongles, mycoses",
       "Bilan du diabète : HbA1c, fonction rénale, rétinopathie"
      ]
     },
     "pique": {
      "vignette": "Risque de grade 2 confirmé, IPS droit à 0,82.",
      "question": "Quel plan de soins proposez-vous ?",
      "reperes": [
       "ETP : auto-examen quotidien, hygiène, jamais pieds nus, conduite à tenir devant une plaie",
       "Soins de pédicurie-podologie pris en charge (grades 2 et 3), chaussage adapté",
       "Arrêt du tabac, marche régulière, optimisation des facteurs de risque",
       "Avis vasculaire ; examen des pieds à chaque consultation",
       "Toute plaie = consultation urgente en centre spécialisé du pied diabétique"
      ]
     }
    }
   },
   {
    "valeur": "3",
    "titre": "Diabète de type 1 : hypoglycémies",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Léa, 24 ans, diabétique de type 1 sous pompe à insuline et capteur de glucose, rapporte des malaises nocturnes depuis qu'elle a repris la course à pied.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Malaises : horaires, symptômes, resucrage, aide d'un tiers",
       "Données du capteur : temps dans la cible, temps sous 0,70 g/L",
       "Débits de base, bolus, adaptation à l'effort",
       "Horaires de l'activité physique, alimentation, alcool",
       "Connaissances et peur des hypoglycémies"
      ]
     },
     "carreau": {
      "vignette": "Capteur : 8 % du temps sous 0,70 g/L, surtout 2 à 5 heures après les entraînements du soir.",
      "question": "Comment interprétez-vous ces données ?",
      "reperes": [
       "Hypoglycémies nocturnes retardées après l'effort",
       "Objectifs consensuels : < 4 % du temps sous 0,70 g/L, < 1 % sous 0,54 g/L, > 70 % dans la cible (0,70–1,80 g/L)",
       "Causes : débit basal non réduit, absence de collation, alcool éventuel",
       "Risque : hypoglycémies non ressenties puis sévères"
      ]
     },
     "trefle": {
      "vignette": "Elle dit ne plus sentir certaines hypoglycémies.",
      "question": "Que recherchez-vous ?",
      "reperes": [
       "Non-perception des hypoglycémies (score de Gold ou de Clarke)",
       "Autres causes : insuffisance rénale, insuffisance surrénale, maladie cœliaque",
       "HbA1c, fonction rénale ; TSH selon le contexte",
       "Retentissement : conduite automobile, sommeil, anxiété"
      ]
     },
     "pique": {
      "vignette": "Léa veut continuer à courir le soir.",
      "question": "Quel plan co-construisez-vous ?",
      "reperes": [
       "Adaptation à l'effort : débit basal temporaire réduit, collation, ajustement des bolus, selon le protocole du diabétologue",
       "Alarmes du capteur ; resucrage par 15 g de glucides ; glucagon disponible, entourage formé",
       "ETP : prévention, reconnaissance, règles de conduite automobile",
       "Analyse des données à 2–4 semaines",
       "Coordination avec l'équipe de diabétologie"
      ]
     }
    }
   },
   {
    "valeur": "4",
    "titre": "Maladie coronaire stable",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. C., 61 ans, a eu un infarctus traité par angioplastie il y a un an. Il vient pour son suivi semestriel.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Douleur thoracique d'effort, dyspnée, palpitations, malaises",
       "Observance et tolérance : antiagrégants, statine, bêtabloquant, IEC",
       "Tabac, PA, LDL-c, glycémie, poids, activité physique",
       "Retour au travail, sexualité, humeur (dépression post-infarctus)",
       "Réadaptation cardiaque suivie ou non"
      ]
     },
     "carreau": {
      "vignette": "Il a repris « quelques cigarettes ». LDL-c : 0,95 g/L. Il a arrêté sa statine à cause de douleurs musculaires.",
      "question": "Quels problèmes et quels risques identifiez-vous ?",
      "reperes": [
       "Prévention secondaire non optimale : tabac, LDL-c hors cible",
       "Cible ESC à très haut risque : LDL-c < 0,55 g/L et baisse ≥ 50 %",
       "Myalgies : intolérance réelle ou effet nocebo à explorer",
       "Risque élevé de récidive ; dépression à rechercher"
      ]
     },
     "trefle": {
      "vignette": "Pas de douleur thoracique. Myalgies diffuses, sans faiblesse musculaire.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "CPK (myalgies), TSH (l'hypothyroïdie favorise les myalgies)",
       "Bilan lipidique, HbA1c, créatinine, transaminases",
       "ECG de suivi, PA, IMC, tour de taille",
       "PHQ-9 ; mesure du CO expiré"
      ]
     },
     "pique": {
      "vignette": "M. C. accepte de « revoir les choses ».",
      "question": "Quel plan de suivi proposez-vous ?",
      "reperes": [
       "Arrêt du tabac : substituts nicotiniques, entretien motivationnel",
       "Réintroduction d'une statine (autre molécule ou dose) avec le cardiologue ; ézétimibe si besoin",
       "Activité physique ; réadaptation cardiaque si non faite",
       "ETP : conduite à tenir en cas de douleur thoracique (15), observance des antiagrégants",
       "Suivi partagé avec le cardiologue et le médecin traitant"
      ]
     }
    }
   },
   {
    "valeur": "5",
    "titre": "Insuffisance cardiaque",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme I., 78 ans, insuffisante cardiaque à fraction d'éjection réduite, vit avec son mari. Elle a été hospitalisée il y a un mois pour une décompensation.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Dyspnée (classe NYHA), orthopnée, œdèmes, évolution du poids",
       "Traitements, tolérance (vertiges, toux, hypotension), observance",
       "Régime peu salé, apports hydriques, pesée",
       "Comorbidités : FA, MRC, diabète, anémie",
       "Autonomie, entourage, compréhension de la maladie"
      ]
     },
     "carreau": {
      "vignette": "Elle a pris 2,5 kg en 4 jours, dort avec trois oreillers ; œdèmes des chevilles.",
      "question": "Quelle hypothèse ? Quels signes de gravité recherchez-vous ?",
      "reperes": [
       "Décompensation cardiaque débutante",
       "Facteurs déclenchants : écart de sel, AINS, infection, FA rapide, arrêt de traitement",
       "Gravité : dyspnée de repos, SpO₂ basse, hypotension, confusion, douleur thoracique",
       "Signe de gravité → orientation urgente"
      ]
     },
     "trefle": {
      "vignette": "Pas de signe de gravité. PA 118/70, pouls irrégulier à 88/min, SpO₂ 95 %.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "ECG : fibrillation atriale ?",
       "Ionogramme, créatinine et DFG (diurétiques, IEC, antialdostérone), NFS",
       "BNP ou NT-proBNP comparé à la valeur de référence",
       "Recherche du facteur déclenchant"
      ]
     },
     "pique": {
      "vignette": "Une FA est découverte ; la créatinine est stable.",
      "question": "Quelle conduite à tenir et quel suivi ?",
      "reperes": [
       "Adaptation du diurétique selon le protocole, avec le cardiologue",
       "FA : avis cardiologique, anticoagulation selon le score CHA₂DS₂-VASc",
       "Contrôle rapproché : poids, clinique, ionogramme sous quelques jours",
       "ETP : pesée quotidienne, signes d'alerte, régime peu salé",
       "Télésurveillance, programme de retour à domicile, coordination ville-hôpital"
      ]
     }
    }
   },
   {
    "valeur": "6",
    "titre": "Artériopathie des membres inférieurs",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. A., 64 ans, fumeur et diabétique, a des douleurs au mollet droit à la marche, qui cèdent à l'arrêt.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Périmètre de marche, délai de récupération, douleurs de repos ou nocturnes",
       "Facteurs de risque : tabac (paquets-années), diabète, HTA, dyslipidémie",
       "Antécédents coronaires ou d'AVC",
       "Troubles trophiques, plaies, retentissement sur la vie quotidienne"
      ]
     },
     "carreau": {
      "vignette": "Périmètre de marche de 200 m ; pouls pédieux droit absent.",
      "question": "Quelle hypothèse ? Comment la confirmer ?",
      "reperes": [
       "Claudication intermittente évocatrice d'AOMI",
       "IPS < 0,90 = AOMI ; > 1,30 (diabète) → mesure de la pression d'orteil",
       "Différentiels : canal lombaire étroit, sciatique, arthrose",
       "AOMI = marqueur d'athérome diffus : chercher d'autres localisations"
      ]
     },
     "trefle": {
      "vignette": "IPS droit : 0,72. Pas de plaie.",
      "question": "Quel bilan complémentaire ?",
      "reperes": [
       "Écho-doppler artériel des membres inférieurs",
       "Bilan lipidique, HbA1c, fonction rénale",
       "Autres localisations : ECG, auscultation carotidienne",
       "Stade de Leriche et Fontaine : stade II"
      ]
     },
     "pique": {
      "vignette": "L'AOMI est confirmée.",
      "question": "Quelle prise en charge proposez-vous ?",
      "reperes": [
       "Arrêt du tabac : priorité absolue",
       "Traitement médical (antiagrégant, statine, IEC) selon prescription ; équilibre du diabète",
       "Marche supervisée : au moins 30 min, 3 fois par semaine",
       "ETP : soin des pieds, signes d'alerte (douleur de repos, plaie, pied froid)",
       "Ischémie aiguë (pied froid, pâle, douloureux) = urgence"
      ]
     }
    }
   },
   {
    "valeur": "7",
    "titre": "AVC : prévention secondaire",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme V., 70 ans, rentre à domicile 3 semaines après un AVC ischémique, avec une légère faiblesse du bras droit.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Déficits résiduels : moteurs, langage, déglutition, cognition, humeur",
       "Cause retenue (FA, athérome carotidien, petites artères) et traitements",
       "Facteurs de risque : HTA, diabète, tabac, alcool",
       "Autonomie, aides, entourage, conduite automobile",
       "Connaissance des signes d'alerte d'AVC"
      ]
     },
     "carreau": {
      "vignette": "PA en automesure : 152/90 mmHg. Elle se dit « fatiguée et triste ».",
      "question": "Quels problèmes repérez-vous ?",
      "reperes": [
       "Objectif tensionnel non atteint (cible habituelle < 130/80 après un AVC)",
       "Dépression post-AVC fréquente : PHQ-9",
       "Fatigue post-AVC, troubles cognitifs possibles (MoCA)",
       "Risque de récidive majoré"
      ]
     },
     "trefle": {
      "vignette": "Elle prend son traitement de façon irrégulière.",
      "question": "Quelles évaluations complètent le bilan ?",
      "reperes": [
       "Observance : entretien, pilulier, compréhension des traitements",
       "Bilan lipidique (LDL-c < 0,70 g/L après AVC athéromateux), HbA1c, créatinine",
       "Dépistage cognitif, troubles de la déglutition",
       "Spasticité, épaule douloureuse"
      ]
     },
     "pique": {
      "vignette": "Mme V. veut « ne pas refaire d'AVC ».",
      "question": "Quel plan de soins proposez-vous ?",
      "reperes": [
       "Optimisation de la PA et du LDL-c avec le médecin, selon protocole",
       "ETP : signes d'alerte VITE (visage, inertie d'un membre, trouble de la parole, en urgence le 15)",
       "Rééducation : kinésithérapie, orthophonie, activité physique adaptée",
       "Soutien de l'humeur, avis médical",
       "Coordination neurologue et médecin traitant"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Insuffisance respiratoire chronique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. B., 74 ans, BPCO sévère sous oxygène à domicile, ancien fumeur, est vu après une exacerbation.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Dyspnée (mMRC), toux, expectorations : couleur, volume",
       "Usage réel de l'oxygène (heures par jour, débit), tolérance",
       "Technique d'inhalation, observance",
       "Exacerbations et hospitalisations dans l'année",
       "Poids, activité, humeur, isolement"
      ]
     },
     "carreau": {
      "vignette": "Il utilise l'oxygène 8 heures par jour au lieu de 15. Il a perdu 4 kg en 3 mois.",
      "question": "Quels problèmes repérez-vous ?",
      "reperes": [
       "Oxygénothérapie insuffisante : bénéfice si ≥ 15 h/jour",
       "Dénutrition probable : facteur pronostique péjoratif",
       "Exacerbations fréquentes",
       "Freins : bruit, gêne, peur, image de soi"
      ]
     },
     "trefle": {
      "vignette": "SpO₂ 90 % sous 2 L/min au repos.",
      "question": "Quelles évaluations réalisez-vous ?",
      "reperes": [
       "Gaz du sang selon le protocole (hypercapnie ?)",
       "IMC, albuminémie, évaluation nutritionnelle",
       "Test de marche de 6 minutes si possible",
       "Anxiété-dépression (HAD), comorbidités cardiaques"
      ]
     },
     "pique": {
      "vignette": "M. B. veut « continuer à jardiner ».",
      "question": "Quel plan de soins proposez-vous ?",
      "reperes": [
       "Négocier ≥ 15 h/jour d'oxygène, matériel portable adapté",
       "Réhabilitation respiratoire, activité physique adaptée",
       "Prise en charge nutritionnelle",
       "Plan d'action écrit en cas d'exacerbation ; vaccinations à jour",
       "Sécurité (pas de flamme) ; coordination pneumologue et prestataire"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Maladie d'Alzheimer : repérage et suivi",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme A., 77 ans, vient avec sa fille, inquiète de ses oublis : rendez-vous manqués, factures impayées.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Plainte : nature, ancienneté, évolution, avis de l'entourage",
       "Activités instrumentales : finances, téléphone, transports, médicaments",
       "Comportement, humeur, sommeil",
       "Médicaments (anticholinergiques, benzodiazépines), alcool",
       "Audition, vision"
      ]
     },
     "carreau": {
      "vignette": "MMSE : 22/30. Elle s'est perdue une fois en voiture.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Trouble neurocognitif probable avec retentissement sur l'autonomie",
       "Maladie d'Alzheimer ; forme vasculaire ou mixte",
       "Différentiels : dépression, confusion, iatrogénie, hypothyroïdie, carence en B12",
       "Danger immédiat : conduite automobile"
      ]
     },
     "trefle": {
      "vignette": "Vous préparez la consultation mémoire.",
      "question": "Quel bilan réalisez-vous ?",
      "reperes": [
       "NFS, ionogramme, calcémie, glycémie, TSH, albuminémie, fonction rénale",
       "Vitamine B12, folates selon le contexte",
       "Imagerie cérébrale (IRM) selon prescription",
       "Tests complémentaires (5 mots, horloge), humeur, autonomie"
      ]
     },
     "pique": {
      "vignette": "Maladie d'Alzheimer au stade léger.",
      "question": "Quel plan de soins et d'accompagnement ?",
      "reperes": [
       "Annonce et information adaptées, plan de soins et d'aides",
       "Sécurité : conduite, gestion des médicaments et des finances",
       "Équipe spécialisée Alzheimer, activité physique, stimulation",
       "Soutien de l'aidante : plateforme de répit, formation",
       "Anticiper : protection juridique, directives anticipées ; suivi tous les 6 mois"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Maladie de Parkinson",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. P., 72 ans, parkinsonien depuis 8 ans, signale des « blocages » de plus en plus fréquents et deux chutes.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Blocages, dyskinésies : horaires par rapport aux prises",
       "Horaires réels de la lévodopa, lien avec les repas protéinés",
       "Chutes, freezing, malaises au lever",
       "Signes non moteurs : constipation, urines, sommeil, hallucinations, humeur",
       "Retentissement pour le patient et son aidante"
      ]
     },
     "carreau": {
      "vignette": "Les blocages surviennent environ 3 heures après chaque prise.",
      "question": "Comment interprétez-vous ces symptômes ?",
      "reperes": [
       "Fluctuations de fin de dose : maladie avancée",
       "Chutes multifactorielles : freezing, instabilité posturale, hypotension orthostatique",
       "Iatrogénie possible (antihypertenseurs, psychotropes)",
       "Risques : fracture, dénutrition, fausse route"
      ]
     },
     "trefle": {
      "vignette": "PA couché 138/80, debout à 3 minutes 108/66.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Hypotension orthostatique confirmée (baisse ≥ 20/10 mmHg)",
       "Agenda des fluctuations (périodes on/off)",
       "Déglutition, poids, constipation, cognition",
       "Revue de l'ensemble des traitements"
      ]
     },
     "pique": {
      "vignette": "M. P. veut garder son autonomie.",
      "question": "Quel plan de soins proposez-vous ?",
      "reperes": [
       "Avis neurologique pour ajuster le traitement dopaminergique",
       "Prises à heure fixe ; jamais d'arrêt brutal (vigilance à l'hôpital)",
       "Hypotension orthostatique : hydratation, lever progressif, contention, revue des antihypertenseurs",
       "Kinésithérapie, prévention des chutes, orthophonie",
       "Soutien de l'aidante ; lien avec le centre expert Parkinson"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "Épilepsie et projet de grossesse",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Sofia, 29 ans, épileptique, traitée par valproate depuis l'adolescence, vient pour son suivi. Elle a un projet de grossesse.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Type d'épilepsie, fréquence des crises, date de la dernière crise",
       "Traitement, observance, effets indésirables",
       "Facteurs déclenchants : manque de sommeil, alcool, oublis",
       "Contraception, projet de grossesse",
       "Conduite automobile, travail, vécu de la maladie"
      ]
     },
     "carreau": {
      "vignette": "Pas de crise depuis 3 ans ; contraception orale.",
      "question": "Quels risques identifiez-vous ?",
      "reperes": [
       "Valproate : tératogène majeur (malformations, troubles neurodéveloppementaux)",
       "Ne jamais arrêter brutalement le traitement (risque de crises)",
       "Interactions de certains antiépileptiques inducteurs avec la contraception hormonale",
       "Acide folique à prévoir avant la conception"
      ]
     },
     "trefle": {
      "vignette": "Elle ignore les risques liés au valproate.",
      "question": "Que vérifiez-vous ?",
      "reperes": [
       "Suivi spécialisé et formulaire annuel d'accord de soins",
       "Test de grossesse en cas de doute",
       "Contraception efficace jusqu'au changement de traitement",
       "Rendez-vous rapide avec le neurologue"
      ]
     },
     "pique": {
      "vignette": "Sofia veut « tout faire bien ».",
      "question": "Quel accompagnement proposez-vous ?",
      "reperes": [
       "Information claire, sans culpabilisation",
       "Changement de traitement par le neurologue avant la conception",
       "Acide folique en préconceptionnel, selon prescription",
       "ETP : hygiène de vie, conduite à tenir en cas de crise pour l'entourage",
       "Coordination neurologue, sage-femme ou gynécologue, médecin traitant"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Anticoagulants oraux",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. F., 81 ans, sous apixaban pour une FA, vient pour son renouvellement. Ses gencives saignent.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Indication, molécule, dose, horaires, observance",
       "Saignements : localisation, fréquence ; selles noires, hématurie",
       "Chutes, cognition (gestion du traitement)",
       "AINS, antiagrégants, automédication",
       "Poids, dernière fonction rénale"
      ]
     },
     "carreau": {
      "vignette": "Poids 58 kg, créatininémie 125 µmol/L. Il prend de l'ibuprofène pour ses genoux.",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Saignements mineurs, risque hémorragique majoré (âge, AINS, rein)",
       "Apixaban dans la FA : dose réduite si 2 critères sur 3 (≥ 80 ans, ≤ 60 kg, créatinine ≥ 133 µmol/L)",
       "Ici 2 critères : vérifier la posologie avec le prescripteur",
       "Interaction AINS-anticoagulant : à arrêter"
      ]
     },
     "trefle": {
      "vignette": "Pas de signe de gravité ; pas d'hémoglobine récente.",
      "question": "Quels examens et évaluations réalisez-vous ?",
      "reperes": [
       "NFS, clairance de la créatinine (Cockcroft-Gault pour les AOD)",
       "Scores HAS-BLED et CHA₂DS₂-VASc",
       "Examen bucco-dentaire ; saignement occulte si anémie",
       "Risque de chute, cognition"
      ]
     },
     "pique": {
      "vignette": "La posologie est réduite par le cardiologue.",
      "question": "Quel plan de suivi proposez-vous ?",
      "reperes": [
       "Arrêt des AINS ; paracétamol, mesures non médicamenteuses",
       "ETP : signes d'alerte, carte de porteur, information des soignants",
       "Fonction rénale au moins une fois par an, plus souvent si DFG bas",
       "Ne jamais arrêter seul ; conduite en cas d'oubli",
       "Lien avec le pharmacien (entretiens pharmaceutiques AOD)"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Polymédication et iatrogénie",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme M., 85 ans, prend 11 médicaments. Elle est plus somnolente et a chuté la semaine dernière.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Liste exhaustive : ordonnances, automédication, compléments, collyres",
       "Qui prépare les médicaments ? Pilulier, compréhension",
       "Introductions ou modifications récentes",
       "Somnolence, confusion, chutes, constipation, vertiges",
       "Fonction rénale, poids, hydratation"
      ]
     },
     "carreau": {
      "vignette": "Un hypnotique, un antihistaminique et un antidépresseur tricyclique ont été ajoutés successivement.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Effet indésirable : charge anticholinergique et sédative élevée",
       "Cascade de prescription",
       "Médicaments potentiellement inappropriés (liste de Laroche, critères STOPP/START)",
       "Différentiels : infection, déshydratation, hyponatrémie, AVC"
      ]
     },
     "trefle": {
      "vignette": "Pas de fièvre. Elle boit peu.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Ionogramme (natrémie), créatinine et DFG, glycémie",
       "Hypotension orthostatique",
       "Globe urinaire, fécalome (anticholinergiques)",
       "Bilan de la chute : traumatisme, capacité à se relever"
      ]
     },
     "pique": {
      "vignette": "Mme M. et sa fille veulent « alléger » le traitement.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Révision avec le médecin et le pharmacien (bilan partagé de médication)",
       "Déprescription progressive des sédatifs et anticholinergiques",
       "Hygiène du sommeil, hydratation, activité",
       "Plan de prise actualisé, partagé avec tous les soignants",
       "Réévaluation à 2–4 semaines ; pharmacovigilance si effet grave"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Patient polypathologique : parcours",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. G., 76 ans, diabétique, insuffisant cardiaque et en MRC stade 3, vit seul. Il a été hospitalisé trois fois cette année.",
      "question": "Quelles données recueillez-vous pour une évaluation globale ?",
      "reperes": [
       "Pathologies, traitements, priorités du patient",
       "Autonomie, cognition, humeur, nutrition",
       "Logement, aides, entourage, ressources",
       "Intervenants et circulation de l'information",
       "Motifs des hospitalisations"
      ]
     },
     "carreau": {
      "vignette": "Les hospitalisations suivent des oublis de traitement.",
      "question": "Quels problèmes prioritaires identifiez-vous ?",
      "reperes": [
       "Observance difficile : isolement, traitement complexe",
       "Fragilité : risques de perte d'autonomie, de chute, de dénutrition",
       "Défaut de coordination entre intervenants",
       "Risque élevé de réhospitalisation"
      ]
     },
     "trefle": {
      "vignette": "Il dit : « Je ne sais plus qui fait quoi. »",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Repérage cognitif, dénutrition, risque de chute",
       "Ionogramme, DFG, HbA1c",
       "Bilan partagé de médication",
       "Cartographie des intervenants et des aides"
      ]
     },
     "pique": {
      "vignette": "M. G. souhaite rester à domicile.",
      "question": "Comment organisez-vous le parcours ?",
      "reperes": [
       "Plan personnalisé de coordination en santé partagé avec le patient",
       "Traitement simplifié, pilulier, passages infirmiers",
       "Dispositif d'appui à la coordination (DAC), aides à domicile",
       "Télésurveillance de l'insuffisance cardiaque",
       "Indicateurs : réhospitalisations, qualité de vie (amélioration des pratiques)"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Drapeau rouge",
    "icone": "⚑",
    "texte": "Choisissez une situation du jeu et citez au moins deux signes d'alerte qui imposent une orientation urgente.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Leadership & recherche",
    "icone": "◈",
    "texte": "À partir de la dernière situation jouée, proposez une action d'amélioration des pratiques (protocole, audit, formation) ou formulez une question de recherche (PICO).",
    "regle": "Compétences C5 · C6. Si le groupe valide, ce joker remplace une carte manquante d'un carré."
   }
  ]
 },
 {
  "id": "oncologie",
  "titre": "Oncologie et hémato-oncologie",
  "court": "Oncologie et hémato-oncologie",
  "code": "OHO",
  "couleur": "#5B2A4E",
  "description": "La mention oncologie et hémato-oncologie couvre le suivi des patients atteints de cancer ou d'hémopathie maligne : surveillance des traitements (chimiothérapie, thérapies orales, immunothérapie), repérage et gestion des toxicités, soins de support, prévention, après-cancer et coordination du parcours ville-hôpital.",
  "rappel": true,
  "competences": [
   [
    "C1",
    "Évaluer l'état de santé de patients en relais de consultations médicales pour des pathologies identifiées",
    "♥ ♦ ♣"
   ],
   [
    "C2",
    "Définir et mettre en œuvre le projet de soins du patient à partir de l'évaluation globale de son état de santé",
    "♣ ♠"
   ],
   [
    "C3",
    "Concevoir et mettre en œuvre des actions de prévention et d'éducation thérapeutique",
    "♦ ♠"
   ],
   [
    "C4",
    "Organiser les parcours de soins et de santé en collaboration avec l'ensemble des acteurs concernés",
    "♠"
   ],
   [
    "C5",
    "Mettre en place et conduire des actions d'évaluation et d'amélioration des pratiques en exerçant un leadership clinique",
    "Joker 2, repères ♠"
   ],
   [
    "C6",
    "Rechercher, analyser et produire des données professionnelles et scientifiques",
    "Joker 2, débriefing"
   ]
  ],
  "intro": "Un jeu de 52 cartes pour la mention « Oncologie et hémato-oncologie ». Chaque couleur correspond à une étape du raisonnement clinique, chaque valeur à une situation clinique suivie à travers un même patient. Chaque carte indique les compétences IPA qu'elle mobilise. Réunir les quatre cartes d'une valeur, c'est dérouler un raisonnement complet, du recueil des données à la coordination du parcours.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Recueillir",
    "sous": "Anamnèse, écoute, contexte de vie",
    "col": "#B3261E",
    "comp": "C1"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Repérer & hypothèses",
    "sous": "Repérage, scores, hypothèses et drapeaux rouges",
    "col": "#D9480F",
    "comp": "C1 · C3"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Vérifier",
    "sous": "Examen clinique, examens complémentaires, diagnostics différentiels",
    "col": "#1F4E46",
    "comp": "C1 · C2"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Agir & suivre",
    "sous": "Projet de soins, prévention, ETP, parcours et coordination",
    "col": "#1B2A4A",
    "comp": "C2 · C3 · C4"
   }
  ],
  "situations": [
   {
    "valeur": "2",
    "titre": "Thérapie orale : capécitabine",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme L., 63 ans, cancer colique métastatique, débute de la capécitabine. C'est sa première consultation de suivi infirmier.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Compréhension du schéma : cycles, prises, moment des repas",
       "Observance, gestion des oublis, capacité à manipuler les comprimés",
       "Autres traitements, automédication, phytothérapie (interactions)",
       "Fonction rénale, poids, état général (OMS)",
       "Entourage, ressources, lien avec le pharmacien d'officine"
      ]
     },
     "carreau": {
      "vignette": "À J10, paumes rouges et douloureuses, 4 selles liquides par jour (contre 1 habituellement).",
      "question": "Quelles toxicités identifiez-vous ? Comment les gradez-vous ?",
      "reperes": [
       "Syndrome main-pied et diarrhée : toxicités des fluoropyrimidines",
       "Gradation selon la classification CTCAE (grades 1 à 4)",
       "Diarrhée : + 4 à 6 selles/jour par rapport à l'habitude = grade 2",
       "Main-pied douloureux limitant les activités instrumentales = grade 2"
      ]
     },
     "trefle": {
      "vignette": "Pas de fièvre, pas de sang dans les selles. Elle se sent fatiguée.",
      "question": "Quels éléments recherchez-vous ?",
      "reperes": [
       "Déshydratation : PA, FC, diurèse",
       "Ionogramme, créatinine ; NFS (neutropénie associée ?)",
       "Dépistage du déficit en DPD (uracilémie) réalisé avant traitement : à vérifier",
       "Gravité : fièvre, rectorragies, douleurs abdominales, ≥ 7 selles/jour"
      ]
     },
     "pique": {
      "vignette": "Toxicités de grade 2, sans déshydratation.",
      "question": "Quelle conduite à tenir et quel suivi ?",
      "reperes": [
       "Suspension jusqu'au grade ≤ 1, reprise selon le protocole, avec l'oncologue",
       "Diarrhée : hydratation, lopéramide selon protocole ; main-pied : émollients, éviter frottements et chaleur",
       "Consignes écrites : quand et qui appeler",
       "Suivi téléphonique rapproché, lien avec le pharmacien d'officine",
       "Traçabilité des toxicités (données pour l'amélioration des pratiques)"
      ]
     }
    }
   },
   {
    "valeur": "3",
    "titre": "Neutropénie fébrile",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. N., 55 ans, traité pour un lymphome, est à J9 de sa chimiothérapie. Il appelle : « J'ai 38,4 °C et des frissons. »",
      "question": "Quelles données recueillez-vous au téléphone ?",
      "reperes": [
       "Température (deux mesures), frissons, date de la dernière cure",
       "Gravité : malaise, marbrures, confusion, dyspnée",
       "Point d'appel : toux, brûlures urinaires, diarrhée, cathéter",
       "Facteur de croissance prescrit ? Antibiotique en cours ?"
      ]
     },
     "carreau": {
      "vignette": "Il a une chambre implantable et se sent « très faible ».",
      "question": "Quelle hypothèse ? Quel niveau d'urgence ?",
      "reperes": [
       "Neutropénie fébrile suspectée (nadir entre J7 et J14) : urgence",
       "Fièvre ≥ 38,3 °C une fois ou ≥ 38 °C pendant 1 heure",
       "Risque d'évolution rapide vers un sepsis grave",
       "Évaluation médicale le jour même, sans attendre"
      ]
     },
     "trefle": {
      "vignette": "Il est adressé aux urgences de l'hôpital de référence.",
      "question": "Quels examens sont attendus ?",
      "reperes": [
       "NFS : polynucléaires neutrophiles < 0,5 G/L (ou baisse attendue)",
       "Hémocultures périphériques et sur chambre, ECBU, radio thoracique selon signes",
       "Lactates, CRP, fonction rénale",
       "Évaluation du risque (score MASCC)"
      ]
     },
     "pique": {
      "vignette": "Neutropénie fébrile confirmée, sans signe de gravité, à faible risque (MASCC élevé).",
      "question": "Quelle prise en charge et quelle prévention pour la suite ?",
      "reperes": [
       "Antibiothérapie probabiliste dans l'heure ; ambulatoire possible si faible risque, selon protocole",
       "ETP : prise de température, numéro à appeler, pas d'antipyrétique avant d'appeler",
       "Facteurs de croissance aux cures suivantes si prescrits",
       "Hygiène, vaccination antigrippale de l'entourage",
       "Analyse du délai d'appel en équipe (amélioration des pratiques)"
      ]
     }
    }
   },
   {
    "valeur": "4",
    "titre": "Mucite et radiochimiothérapie",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme M., 48 ans, cancer ORL, est en radiochimiothérapie depuis 3 semaines. Elle mange de moins en moins.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Douleur buccale (EVA), retentissement sur l'alimentation",
       "Hygiène bucco-dentaire, bains de bouche utilisés",
       "Poids, apports, hydratation",
       "Tabac, alcool",
       "Sécheresse buccale, troubles du goût"
      ]
     },
     "carreau": {
      "vignette": "Ulcérations étendues, alimentation liquide seulement ; – 6 % de poids en 3 semaines.",
      "question": "Comment évaluez-vous la sévérité ?",
      "reperes": [
       "Mucite de grade 3 (OMS : alimentation liquide seule)",
       "Dénutrition : perte ≥ 5 % en 1 mois",
       "Risque de déshydratation et d'interruption du traitement",
       "Surinfection possible : candidose, herpès"
      ]
     },
     "trefle": {
      "vignette": "Dépôts blanchâtres sur la langue.",
      "question": "Que recherchez-vous ?",
      "reperes": [
       "Candidose buccale (prélèvement si doute)",
       "Déshydratation : créatinine, ionogramme",
       "Évaluation nutritionnelle, albuminémie",
       "Besoin d'antalgiques de palier supérieur"
      ]
     },
     "pique": {
      "vignette": "Elle a peur que le traitement soit arrêté.",
      "question": "Quelle prise en charge proposez-vous ?",
      "reperes": [
       "Antalgie adaptée, y compris opioïde, selon protocole ; bains de bouche au bicarbonate",
       "Antifongique si candidose, sur prescription",
       "Textures adaptées, compléments ; discuter une nutrition entérale",
       "Hygiène buccale douce ; arrêt du tabac et de l'alcool",
       "Coordination radiothérapeute, diététicien, dentiste"
      ]
     }
    }
   },
   {
    "valeur": "5",
    "titre": "Nausées et vomissements chimio-induits",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme K., 39 ans, cancer du sein, a reçu sa première cure (anthracycline et cyclophosphamide). Elle a beaucoup vomi les jours suivants.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Chronologie : aiguë (< 24 h), retardée (> 24 h), anticipatoire",
       "Nombre de vomissements, capacité à boire et à manger",
       "Prise réelle des antiémétiques prescrits",
       "Facteurs de risque : femme jeune, mal des transports, nausées de grossesse, anxiété",
       "Poids, fatigue, moral"
      ]
     },
     "carreau": {
      "vignette": "Vomissements de J2 à J4 ; elle n'a pas pris l'antiémétique « pour ne pas prendre trop de médicaments ».",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Nausées-vomissements retardés d'une chimiothérapie hautement émétisante",
       "Prophylaxie non suivie : défaut d'information ou croyances",
       "Facteurs de risque individuels élevés",
       "Risque de nausées anticipatoires aux cures suivantes"
      ]
     },
     "trefle": {
      "vignette": "Elle a perdu 2 kg ; pas de douleur abdominale.",
      "question": "Que vérifiez-vous ?",
      "reperes": [
       "Déshydratation : PA, FC, diurèse, ionogramme, créatinine",
       "Autres causes : constipation, hypercalcémie, métastases cérébrales",
       "Effets indésirables des antiémétiques",
       "Niveau d'anxiété"
      ]
     },
     "pique": {
      "vignette": "La deuxième cure est dans 3 semaines.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Prophylaxie selon les recommandations (anti-NK1, sétron, dexaméthasone, ± olanzapine) avec l'oncologue",
       "Expliquer le rôle et le calendrier de chaque médicament",
       "Repas fractionnés, froids, éviter les odeurs fortes",
       "Relaxation, hypnose pour la composante anticipatoire",
       "Appel de suivi à J3"
      ]
     }
    }
   },
   {
    "valeur": "6",
    "titre": "Immunothérapie : effets immuno-médiés",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. I., 66 ans, mélanome métastatique, reçoit un anti-PD-1 depuis 4 mois. Il signale de la fatigue et des selles plus fréquentes.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Nombre de selles par rapport à l'habitude, sang, douleurs abdominales",
       "Fatigue, frilosité, prise de poids (dysthyroïdie)",
       "Éruption, prurit, toux, dyspnée",
       "Céphalées, troubles visuels (hypophysite)",
       "Date de début de l'immunothérapie"
      ]
     },
     "carreau": {
      "vignette": "5 selles par jour au lieu d'une, sans sang ; frilosité.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Effets indésirables immuno-médiés : colite et dysthyroïdie",
       "Colite de grade 2 (+ 4 à 6 selles/jour)",
       "Possibles à tout moment, même après l'arrêt",
       "Différentiels : infection (C. difficile), progression tumorale"
      ]
     },
     "trefle": {
      "vignette": "Pas de fièvre, abdomen souple.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "TSH, T4 libre ; cortisol selon le contexte",
       "NFS, CRP, ionogramme, créatinine, bilan hépatique",
       "Coproculture, recherche de C. difficile",
       "Endoscopie si persistance, selon le protocole"
      ]
     },
     "pique": {
      "vignette": "Colite de grade 2 et hypothyroïdie confirmées.",
      "question": "Quelle conduite à tenir ?",
      "reperes": [
       "Avis oncologique le jour même : suspension de l'immunothérapie, corticothérapie selon protocole",
       "Substitution thyroïdienne sur prescription",
       "ETP : signaler tout symptôme nouveau ; carte patient immunothérapie",
       "Surveillance rapprochée, information des autres soignants",
       "Recours au réseau de gestion des toxicités"
      ]
     }
    }
   },
   {
    "valeur": "7",
    "titre": "Douleur cancéreuse",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. D., 70 ans, cancer de la prostate avec métastases osseuses, a des douleurs lombaires qui l'empêchent de dormir.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Siège, irradiation, intensité (EN), horaire, facteurs aggravants",
       "Composante neuropathique (DN4)",
       "Antalgiques pris, efficacité, effets indésirables",
       "Sommeil, humeur, autonomie",
       "Représentations sur la morphine"
      ]
     },
     "carreau": {
      "vignette": "EN à 7/10 malgré le tramadol ; douleur en ceinture avec fourmillements des jambes.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Douleur mixte : osseuse et neuropathique",
       "Antalgie insuffisante : palier 3 à discuter",
       "Drapeau rouge : compression médullaire débutante ?",
       "Hypercalcémie à évoquer (douleur, constipation, confusion)"
      ]
     },
     "trefle": {
      "vignette": "Il décrit une faiblesse des jambes depuis la veille.",
      "question": "Quels examens ? Quel niveau d'urgence ?",
      "reperes": [
       "Examen neurologique : force, sensibilité, réflexes, sphincters",
       "Suspicion de compression médullaire = IRM du rachis en urgence",
       "Calcémie corrigée, fonction rénale",
       "Corticothérapie et avis radiothérapie ou neurochirurgie selon protocole"
      ]
     },
     "pique": {
      "vignette": "Compression écartée ; métastases osseuses douloureuses.",
      "question": "Quel plan antalgique et de suivi ?",
      "reperes": [
       "Opioïde fort à libération prolongée + interdoses, titration selon protocole",
       "Prévention systématique de la constipation",
       "Radiothérapie antalgique à discuter ; traitement de la douleur neuropathique",
       "ETP : carnet de douleur, interdoses, lever les craintes",
       "Recours à l'équipe douleur et soins de support"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Fatigue et activité physique adaptée",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme F., 52 ans, a terminé sa chimiothérapie pour un cancer du sein il y a 2 mois. Elle se dit « épuisée » et ne reprend pas le travail.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Fatigue : intensité (0–10), évolution, retentissement",
       "Sommeil, humeur, anxiété, douleur",
       "Activité physique avant et depuis le cancer",
       "Alimentation, poids",
       "Traitements en cours (hormonothérapie)"
      ]
     },
     "carreau": {
      "vignette": "Fatigue à 7/10 ; elle reste allongée une grande partie de la journée.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Fatigue liée au cancer, fréquente et persistante",
       "Causes curables : anémie, hypothyroïdie, dépression, troubles du sommeil, douleur",
       "Déconditionnement physique (cercle vicieux)",
       "Effets de l'hormonothérapie"
      ]
     },
     "trefle": {
      "vignette": "Pas de signe dépressif majeur.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "NFS, ferritine, TSH, ionogramme, glycémie, bilan hépatique",
       "Anxiété et dépression (HAD)",
       "Condition physique (test de marche)",
       "Évaluation nutritionnelle"
      ]
     },
     "pique": {
      "vignette": "Le bilan est normal.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Activité physique adaptée : intervention la plus efficace sur la fatigue",
       "Prescription d'APA, programme de réadaptation, Maison sport-santé",
       "Gestion de l'énergie, sommeil ; soutien psychologique",
       "Reprise progressive : temps partiel thérapeutique, médecin du travail",
       "Réévaluation à 1–3 mois"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Dénutrition en oncologie",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. E., 68 ans, cancer du pancréas, débute une chimiothérapie. Il a perdu 7 kg en un mois.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Poids actuel et habituel, IMC",
       "Ingesta (échelle de 0 à 10)",
       "Nausées, douleur, diarrhée, satiété précoce",
       "Selles grasses (insuffisance pancréatique exocrine)",
       "Force musculaire, autonomie"
      ]
     },
     "carreau": {
      "vignette": "Poids passé de 78 à 71 kg (– 9 % en 1 mois). Ingesta 4/10. Selles grasses.",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Dénutrition : perte ≥ 5 % en 1 mois",
       "Sévère si perte ≥ 10 % en 1 mois, ≥ 15 % en 6 mois ou albuminémie ≤ 30 g/L",
       "Ingesta < 7/10 : apports insuffisants",
       "Insuffisance pancréatique exocrine probable"
      ]
     },
     "trefle": {
      "vignette": "Albuminémie 32 g/L, CRP 25 mg/L.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Albumine à interpréter avec la CRP",
       "Force de préhension, masse musculaire (sarcopénie)",
       "Glycémie (diabète pancréatique)",
       "Évaluation des symptômes digestifs"
      ]
     },
     "pique": {
      "vignette": "M. E. « n'a pas faim ».",
      "question": "Quel plan nutritionnel proposez-vous ?",
      "reperes": [
       "Enrichissement, repas fractionnés, compléments nutritionnels oraux",
       "Extraits pancréatiques en début de repas, sur prescription",
       "Contrôle des symptômes (antiémétiques, antalgie)",
       "Nutrition entérale à discuter selon le projet de soins",
       "Suivi diététique, pesée hebdomadaire, activité physique"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Thrombose et cancer",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme T., 59 ans, cancer de l'ovaire sous chimiothérapie, a le mollet gauche gonflé et douloureux depuis 2 jours.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Douleur, œdème, chaleur ; dyspnée, douleur thoracique",
       "Facteurs de risque : cancer actif, chimiothérapie, cathéter, alitement, chirurgie récente",
       "Traitements en cours, anticoagulant prophylactique ?",
       "Antécédents de thrombose ou de saignement"
      ]
     },
     "carreau": {
      "vignette": "Mollet gauche augmenté de 3 cm ; pas de dyspnée.",
      "question": "Quelle est votre hypothèse ?",
      "reperes": [
       "Thrombose veineuse profonde probable",
       "Cancer actif : facteur de risque majeur (score de Wells élevé)",
       "Embolie pulmonaire si dyspnée, douleur thoracique, tachycardie",
       "Différentiels : hématome, kyste poplité, érysipèle"
      ]
     },
     "trefle": {
      "vignette": "SpO₂ 97 %, FC 88/min.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Écho-doppler veineux en urgence",
       "D-dimères inutiles pour exclure si probabilité forte",
       "NFS-plaquettes, créatinine, hémostase avant anticoagulation",
       "Angioscanner thoracique si signes d'embolie pulmonaire"
      ]
     },
     "pique": {
      "vignette": "TVP proximale confirmée.",
      "question": "Quelle prise en charge et quel suivi ?",
      "reperes": [
       "Anticoagulation curative adaptée au cancer (HBPM ou AOD selon situation), sur prescription",
       "Au moins 6 mois, tant que le cancer est actif",
       "Surveillance : saignements, plaquettes, interactions",
       "ETP : injections, signes d'alerte, contention",
       "Coordination oncologue, médecin vasculaire, infirmier libéral"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "Hémopathie : thérapie ciblée orale",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. H., 74 ans, leucémie lymphoïde chronique, prend de l'ibrutinib depuis 6 mois. Il vient pour son suivi infirmier.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Observance, horaires, oublis",
       "Ecchymoses, saignements, palpitations, diarrhée, arthralgies",
       "Infections récentes",
       "Tous les médicaments et compléments (interactions, anticoagulants)",
       "PA (HTA sous ibrutinib)"
      ]
     },
     "carreau": {
      "vignette": "Palpitations depuis une semaine. Il prend du millepertuis « pour le moral ».",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Fibrillation atriale possible : effet indésirable connu",
       "Millepertuis : inducteur enzymatique, baisse d'efficacité de l'ibrutinib",
       "Risque hémorragique si anticoagulation",
       "Humeur à évaluer"
      ]
     },
     "trefle": {
      "vignette": "Pouls irrégulier à 110/min.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "ECG",
       "NFS, ionogramme, créatinine",
       "PA",
       "Gravité : malaise, douleur thoracique, dyspnée"
      ]
     },
     "pique": {
      "vignette": "FA confirmée.",
      "question": "Quelle conduite à tenir ?",
      "reperes": [
       "Avis hématologue et cardiologue : poursuite ou changement de traitement, anticoagulation",
       "Arrêt du millepertuis ; vérification des interactions avec le pharmacien",
       "Soutien de l'humeur",
       "ETP : saignements, infections, palpitations",
       "Vaccinations recommandées ; pas de vaccin vivant"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Neuropathie chimio-induite",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme O., 56 ans, cancer du côlon, reçoit de l'oxaliplatine. Elle a des fourmillements des doigts au froid.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Symptômes aigus au froid ou persistants entre les cures",
       "Localisation, intensité, gestes difficiles (boutons, écriture, marche)",
       "Nombre de cures, dose cumulée",
       "Diabète, alcool, carence en B12",
       "Chutes"
      ]
     },
     "carreau": {
      "vignette": "Les fourmillements persistent entre les cures ; elle a du mal à boutonner son chemisier.",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Neuropathie cumulative à l'oxaliplatine",
       "Grade 2 : limite les activités instrumentales",
       "Peut s'aggraver après l'arrêt (phénomène de coasting)",
       "Retentissement fonctionnel et sur la qualité de vie"
      ]
     },
     "trefle": {
      "vignette": "Réflexes achilléens diminués.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Sensibilité, proprioception, équilibre",
       "Échelle de neurotoxicité ; DN4 si douleur",
       "Glycémie, B12 selon le contexte",
       "Risque de chute"
      ]
     },
     "pique": {
      "vignette": "L'oncologue envisage une adaptation.",
      "question": "Quelle prise en charge proposez-vous ?",
      "reperes": [
       "Réduction de dose ou pause de l'oxaliplatine, décidée par l'oncologue",
       "Prévention : éviter le froid, gants, boissons tièdes",
       "Sécurité : chutes, brûlures (eau chaude)",
       "Douleur neuropathique : duloxétine possible, sur prescription",
       "Kinésithérapie, ergothérapie"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Après-cancer",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. R., 58 ans, a terminé le traitement d'un cancer du poumon il y a 6 mois. Il vient pour la consultation de fin de traitement.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Séquelles : dyspnée, douleur, fatigue, neuropathie",
       "Tabac, alcool, activité physique, alimentation",
       "Humeur, peur de la récidive",
       "Situation professionnelle et sociale",
       "Compréhension du suivi prévu"
      ]
     },
     "carreau": {
      "vignette": "Il a repris 5 cigarettes par jour et appréhende chaque scanner.",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Reprise du tabac : récidive, second cancer",
       "Peur de la récidive, anxiété avant les examens",
       "Besoin d'un programme personnalisé de l'après-cancer",
       "Réinsertion professionnelle à accompagner"
      ]
     },
     "trefle": {
      "vignette": "Il est essoufflé à l'effort.",
      "question": "Quelles évaluations réalisez-vous ?",
      "reperes": [
       "Calendrier de surveillance oncologique",
       "EFR selon le contexte",
       "Anxiété-dépression (HAD)",
       "Dépistage des autres cancers, facteurs de risque cardiovasculaire"
      ]
     },
     "pique": {
      "vignette": "M. R. veut « reprendre une vie normale ».",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Arrêt du tabac : accompagnement renforcé",
       "Activité physique adaptée, réhabilitation respiratoire",
       "Soutien psychologique, groupes de patients",
       "Retour au travail : médecin du travail, temps partiel thérapeutique",
       "Programme d'après-cancer partagé avec le médecin traitant"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Soins palliatifs précoces",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme P., 71 ans, cancer du poumon métastatique en progression après deux lignes de traitement, est plus fatiguée et essoufflée.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Dyspnée, douleur, fatigue, anorexie, anxiété",
       "État général (OMS), autonomie",
       "Compréhension de la maladie et du pronostic",
       "Souhaits, valeurs, lieu de vie souhaité",
       "Entourage, personne de confiance"
      ]
     },
     "carreau": {
      "vignette": "Elle dit : « Je ne veux pas finir à l'hôpital. »",
      "question": "Quels besoins identifiez-vous ?",
      "reperes": [
       "Soins palliatifs précoces : bénéfice sur la qualité de vie",
       "Anticipation : directives anticipées, personne de confiance",
       "Symptômes à contrôler",
       "Faisabilité d'une fin de vie à domicile"
      ]
     },
     "trefle": {
      "vignette": "SpO₂ 92 % au repos ; épanchement pleural connu.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Échelle de symptômes (ESAS)",
       "Ressources et épuisement de l'aidant",
       "Faisabilité du maintien à domicile",
       "Balance bénéfice-risque des traitements, avec l'oncologue"
      ]
     },
     "pique": {
      "vignette": "Elle souhaite rester chez elle le plus longtemps possible.",
      "question": "Comment organisez-vous le parcours ?",
      "reperes": [
       "Équipe ou réseau de soins palliatifs ; HAD si besoin",
       "Directives anticipées, personne de confiance",
       "Prescriptions anticipées personnalisées (dyspnée, douleur, angoisse)",
       "Soutien de l'aidant, coordination médecin traitant et infirmier libéral",
       "Réévaluation régulière du projet de soins"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Drapeau rouge",
    "icone": "⚑",
    "texte": "Choisissez une situation du jeu et citez au moins deux signes d'alerte qui imposent une orientation urgente.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Leadership & recherche",
    "icone": "◈",
    "texte": "À partir de la dernière situation jouée, proposez une action d'amélioration des pratiques (protocole, audit, formation) ou formulez une question de recherche (PICO).",
    "regle": "Compétences C5 · C6. Si le groupe valide, ce joker remplace une carte manquante d'un carré."
   }
  ]
 },
 {
  "id": "mrc",
  "titre": "Maladie rénale chronique, dialyse, transplantation rénale",
  "court": "Maladie rénale chronique",
  "code": "MRC",
  "couleur": "#164B73",
  "description": "La mention maladie rénale chronique, dialyse et transplantation rénale couvre le repérage et le suivi de la MRC, la néphroprotection, la gestion de ses complications, la préparation aux traitements de suppléance, le suivi en dialyse (hémodialyse, dialyse péritonéale), le suivi des patients transplantés et l'accompagnement du traitement conservateur.",
  "rappel": true,
  "competences": [
   [
    "C1",
    "Évaluer l'état de santé de patients en relais de consultations médicales pour des pathologies identifiées",
    "♥ ♦ ♣"
   ],
   [
    "C2",
    "Définir et mettre en œuvre le projet de soins du patient à partir de l'évaluation globale de son état de santé",
    "♣ ♠"
   ],
   [
    "C3",
    "Concevoir et mettre en œuvre des actions de prévention et d'éducation thérapeutique",
    "♦ ♠"
   ],
   [
    "C4",
    "Organiser les parcours de soins et de santé en collaboration avec l'ensemble des acteurs concernés",
    "♠"
   ],
   [
    "C5",
    "Mettre en place et conduire des actions d'évaluation et d'amélioration des pratiques en exerçant un leadership clinique",
    "Joker 2, repères ♠"
   ],
   [
    "C6",
    "Rechercher, analyser et produire des données professionnelles et scientifiques",
    "Joker 2, débriefing"
   ]
  ],
  "intro": "Un jeu de 52 cartes pour la mention « Maladie rénale chronique, dialyse, transplantation rénale ». Chaque couleur correspond à une étape du raisonnement clinique, chaque valeur à une situation clinique suivie à travers un même patient. Chaque carte indique les compétences IPA qu'elle mobilise. Réunir les quatre cartes d'une valeur, c'est dérouler un raisonnement complet, du recueil des données à la coordination du parcours.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Recueillir",
    "sous": "Anamnèse, écoute, contexte de vie",
    "col": "#B3261E",
    "comp": "C1"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Repérer & hypothèses",
    "sous": "Repérage, scores, hypothèses et drapeaux rouges",
    "col": "#D9480F",
    "comp": "C1 · C3"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Vérifier",
    "sous": "Examen clinique, examens complémentaires, diagnostics différentiels",
    "col": "#1F4E46",
    "comp": "C1 · C2"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Agir & suivre",
    "sous": "Projet de soins, prévention, ETP, parcours et coordination",
    "col": "#1B2A4A",
    "comp": "C2 · C3 · C4"
   }
  ],
  "situations": [
   {
    "valeur": "2",
    "titre": "Repérage de la MRC",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. S., 62 ans, hypertendu et diabétique, vient pour un bilan annuel. Son albuminurie n'a jamais été dosée.",
      "question": "Quelles données recueillez-vous pour évaluer son risque rénal ?",
      "reperes": [
       "Facteurs de risque : diabète, HTA, maladie cardiovasculaire, obésité, antécédents familiaux",
       "Médicaments néphrotoxiques : AINS, lithium, IPP au long cours",
       "Antécédents : insuffisance rénale aiguë, lithiase, infections urinaires",
       "Nycturie, œdèmes, urines mousseuses"
      ]
     },
     "carreau": {
      "vignette": "DFG (CKD-EPI) : 52 mL/min/1,73 m². Ratio albuminurie/créatininurie : 45 mg/mmol.",
      "question": "Comment classez-vous l'atteinte rénale ?",
      "reperes": [
       "MRC si anomalie persistante > 3 mois : DFG < 60 et/ou albuminurie",
       "Stade G3a (DFG 45–59)",
       "Albuminurie A3 (> 30 mg/mmol) : risque élevé",
       "Confirmation nécessaire à 3 mois"
      ]
     },
     "trefle": {
      "vignette": "Le contrôle à 3 mois confirme les résultats.",
      "question": "Quel bilan réalisez-vous ?",
      "reperes": [
       "Ionogramme, bicarbonates, calcium, phosphore, NFS",
       "Bandelette urinaire (hématurie ?)",
       "Échographie rénale et des voies urinaires",
       "HbA1c, bilan lipidique"
      ]
     },
     "pique": {
      "vignette": "MRC G3a A3, d'origine diabétique probable.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Néphroprotection : bloqueur du système rénine-angiotensine et iSGLT2, sur prescription",
       "PA cible souvent < 130/80 en cas d'albuminurie ; équilibre glycémique",
       "ETP : éviter AINS et automédication, adaptation des médicaments au DFG",
       "Avis néphrologique (albuminurie A3)",
       "Suivi DFG et albuminurie selon le stade"
      ]
     }
    }
   },
   {
    "valeur": "3",
    "titre": "Néphroprotection et iatrogénie",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme N., 74 ans, MRC stade 3b (DFG 38), doit passer un scanner injecté. Elle prend de l'ibuprofène pour son arthrose.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Tous les médicaments, automédication, phytothérapie",
       "Hydratation, diurétiques, IEC ou ARA2, metformine",
       "Antécédents d'insuffisance rénale aiguë",
       "Indication et urgence de l'examen injecté"
      ]
     },
     "carreau": {
      "vignette": "Elle prend aussi metformine 1 g × 2 et un IEC.",
      "question": "Quels risques identifiez-vous ?",
      "reperes": [
       "AINS : risque d'insuffisance rénale aiguë, majoré avec IEC + diurétique",
       "Metformine : dose maximale 1 g/jour pour un DFG entre 30 et 44",
       "Produit de contraste iodé : risque selon le DFG et l'hydratation",
       "Nombreux médicaments à adapter au DFG"
      ]
     },
     "trefle": {
      "vignette": "DFG à 38, stable.",
      "question": "Que vérifiez-vous avant l'examen ?",
      "reperes": [
       "Créatinine récente selon le protocole",
       "Hydratation adaptée avant et après",
       "Suspension de la metformine autour de l'injection, selon protocole",
       "Balance bénéfice-risque discutée avec le radiologue"
      ]
     },
     "pique": {
      "vignette": "L'examen est maintenu.",
      "question": "Quel plan de néphroprotection proposez-vous ?",
      "reperes": [
       "Arrêt définitif des AINS ; paracétamol, mesures non médicamenteuses",
       "Metformine adaptée au DFG avec le prescripteur",
       "Créatinine de contrôle à 48–72 h",
       "ETP : carte « mes reins », informer pharmacien et soignants",
       "Consignes en cas de déshydratation (suspension de certains médicaments)"
      ]
     }
    }
   },
   {
    "valeur": "4",
    "titre": "Hyperkaliémie",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. K., 70 ans, MRC stade 4, insuffisant cardiaque sous IEC et spironolactone. Kaliémie : 6,2 mmol/L.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Faiblesse musculaire, paresthésies, palpitations, malaise",
       "Médicaments hyperkaliémiants : IEC, ARA2, antialdostérone, AINS, triméthoprime",
       "Alimentation : sels de régime, fruits secs, jus",
       "Déshydratation, diarrhée",
       "Conditions du prélèvement (hémolyse ?)"
      ]
     },
     "carreau": {
      "vignette": "Asymptomatique. Il utilise un sel de régime « sans sodium ».",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Hyperkaliémie potentiellement grave (6,0 à 6,5 mmol/L)",
       "Causes : sel de substitution riche en potassium, double blocage, MRC",
       "Fausse hyperkaliémie par hémolyse à éliminer",
       "La gravité dépend de l'ECG et du niveau de kaliémie"
      ]
     },
     "trefle": {
      "vignette": "Vous faites réaliser un ECG.",
      "question": "Que recherchez-vous ? Quelle urgence ?",
      "reperes": [
       "Ondes T pointues, élargissement du QRS, troubles conductifs",
       "Contrôle immédiat de la kaliémie, bicarbonates, créatinine",
       "Anomalie ECG ou kaliémie ≥ 6,5 mmol/L → urgence hospitalière",
       "Évaluation de la volémie"
      ]
     },
     "pique": {
      "vignette": "ECG normal, kaliémie contrôlée à 6,0 mmol/L.",
      "question": "Quelle conduite à tenir ?",
      "reperes": [
       "Avis médical le jour même : adaptation des traitements, chélateur du potassium",
       "Arrêt du sel de régime ; conseils diététiques ciblés",
       "Correction d'une acidose selon prescription",
       "Contrôle biologique sous 48–72 h",
       "ETP : signes d'alerte, médicaments à éviter"
      ]
     }
    }
   },
   {
    "valeur": "5",
    "titre": "Anémie de la MRC",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme A., 66 ans, MRC stade 4, se plaint d'essoufflement et d'une fatigue croissante.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Fatigue, dyspnée, tolérance à l'effort, douleur thoracique",
       "Saignements digestifs ou gynécologiques, antiagrégants",
       "Alimentation, apports en fer",
       "Comorbidités cardiaques"
      ]
     },
     "carreau": {
      "vignette": "Hb 9,4 g/dL, anémie normocytaire.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Anémie de la MRC (déficit en érythropoïétine)",
       "Carence martiale souvent associée",
       "Autres causes : saignement, carence en B12 ou folates, inflammation, hémopathie",
       "Retentissement cardiaque"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez le bilan.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Ferritine, coefficient de saturation de la transferrine (CST)",
       "Réticulocytes, B12, folates, CRP",
       "Recherche d'un saignement digestif selon le contexte",
       "Carence martiale dans la MRC : ferritine < 100 µg/L et/ou CST < 20 %"
      ]
     },
     "pique": {
      "vignette": "Ferritine 60 µg/L, CST 15 %.",
      "question": "Quelle prise en charge ?",
      "reperes": [
       "Supplémentation martiale orale ou IV, sur prescription",
       "Agent stimulant l'érythropoïèse si l'anémie persiste, selon le néphrologue",
       "Cible d'Hb autour de 10–11,5 g/dL, sans normalisation complète",
       "Surveillance : Hb, PA, ferritine",
       "ETP : traitements et signes d'alerte"
      ]
     }
    }
   },
   {
    "valeur": "6",
    "titre": "Troubles minéraux et osseux",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. P., 60 ans, MRC stade 4, se plaint de démangeaisons et de douleurs osseuses.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Prurit : intensité, retentissement sur le sommeil",
       "Douleurs osseuses, fractures",
       "Alimentation : produits industriels, charcuterie, sodas (phosphates)",
       "Chélateurs, vitamine D, observance"
      ]
     },
     "carreau": {
      "vignette": "Phosphore 1,9 mmol/L, calcium normal, PTH à 4 fois la normale.",
      "question": "Comment interprétez-vous ce bilan ?",
      "reperes": [
       "Troubles minéraux et osseux de la MRC",
       "Hyperphosphatémie",
       "Hyperparathyroïdie secondaire",
       "Risque cardiovasculaire (calcifications) et osseux"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez l'évaluation.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "25-OH vitamine D",
       "Phosphatases alcalines",
       "Bicarbonates",
       "Évaluation diététique des apports en phosphore"
      ]
     },
     "pique": {
      "vignette": "M. P. consomme beaucoup de produits industriels.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "ETP diététique : repérer les additifs phosphatés sur les étiquettes",
       "Chélateurs du phosphore pendant les repas, sur prescription",
       "Correction de la vitamine D, traitement de l'hyperparathyroïdie selon le néphrologue",
       "Prise en charge du prurit",
       "Suivi biologique régulier"
      ]
     }
    }
   },
   {
    "valeur": "7",
    "titre": "Nutrition et MRC",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme D., 69 ans, MRC stade 4, a lu qu'il fallait « manger moins de viande ». Elle a perdu 5 kg en 3 mois.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Poids, IMC, évolution",
       "Apports en protéines, sel, potassium",
       "Appétit, nausées, goût métallique (urémie)",
       "Restrictions qu'elle s'impose, sources d'information"
      ]
     },
     "carreau": {
      "vignette": "Albuminémie 33 g/L, bicarbonates 18 mmol/L.",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Risque de dénutrition par restriction excessive",
       "Acidose métabolique (bicarbonates < 22) : favorise le catabolisme",
       "Apports protéiques modérés (environ 0,6 à 0,8 g/kg/j selon prescription), jamais au prix d'une dénutrition",
       "Symptômes urémiques possibles"
      ]
     },
     "trefle": {
      "vignette": "Elle se sent fatiguée.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Évaluation diététique, force musculaire",
       "Urée, créatinine, ionogramme",
       "Symptômes urémiques",
       "Activité physique"
      ]
     },
     "pique": {
      "vignette": "Elle veut « bien faire ».",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Diététicien spécialisé : protéines adaptées, sel < 6 g/j, potassium si besoin",
       "Bicarbonate de sodium sur prescription",
       "Information fiable, programme d'ETP rénale",
       "Activité physique adaptée",
       "Suivi du poids et de l'albuminémie"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Choix du traitement de suppléance",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. L., 58 ans, MRC stade 4 (DFG 18), travaille encore. Le néphrologue veut aborder les traitements de suppléance.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Connaissances et représentations sur la dialyse et la greffe",
       "Travail, logement, voyages, loisirs",
       "Entourage, donneur vivant potentiel",
       "Souhait d'autonomie (dialyse à domicile, autodialyse)",
       "Craintes et priorités"
      ]
     },
     "carreau": {
      "vignette": "Il dit : « La dialyse, c'est la fin de ma vie. »",
      "question": "Quels besoins identifiez-vous ?",
      "reperes": [
       "Information complète et neutre sur toutes les options",
       "Peurs à explorer, soutien",
       "Greffe préemptive à évaluer",
       "Temps de décision partagée"
      ]
     },
     "trefle": {
      "vignette": "Vous préparez la décision.",
      "question": "Quelles évaluations sont nécessaires ?",
      "reperes": [
       "Bilan prégreffe selon le néphrologue",
       "Capital veineux à préserver",
       "Faisabilité de la dialyse à domicile",
       "Vitesse de déclin du DFG"
      ]
     },
     "pique": {
      "vignette": "Il hésite entre dialyse péritonéale et greffe préemptive.",
      "question": "Comment l'accompagnez-vous ?",
      "reperes": [
       "Programme d'information prédialyse, rencontre de patients-ressources",
       "Outils d'aide à la décision, décision partagée",
       "Préservation du capital veineux (bras de la future fistule)",
       "Coordination avec l'équipe de greffe ; information sur le don du vivant",
       "Anticiper l'abord de dialyse pour éviter un démarrage en urgence"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Fistule artério-veineuse",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme F., 65 ans, hémodialysée sur fistule depuis 2 ans, signale que « le frisson de la fistule est moins fort ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Thrill et souffle : changement récent",
       "Dernières séances : ponctions difficiles, pressions, saignement prolongé",
       "Douleur, œdème, rougeur du bras",
       "Hypotensions, compression du bras la nuit"
      ]
     },
     "carreau": {
      "vignette": "Thrill diminué ; saignement prolongé après le retrait des aiguilles.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Sténose de la fistule probable",
       "Risque de thrombose de l'abord",
       "Infection à éliminer si signes locaux",
       "Urgence relative : préserver l'abord"
      ]
     },
     "trefle": {
      "vignette": "Pas de signe infectieux.",
      "question": "Quels examens ?",
      "reperes": [
       "Examen clinique (thrill, souffle, test d'élévation du bras)",
       "Mesure du débit, écho-doppler",
       "Données de dialyse : pressions veineuses, recirculation, Kt/V",
       "Avis néphrologue ou chirurgien vasculaire"
      ]
     },
     "pique": {
      "vignette": "Une sténose est confirmée.",
      "question": "Quelle conduite et quelle éducation ?",
      "reperes": [
       "Angioplastie programmée par l'équipe",
       "ETP : vérifier le thrill chaque jour, aucune compression (montre, sac, sommeil)",
       "Ni PA ni prise de sang sur le bras de la fistule",
       "Hygiène du bras avant ponction",
       "Disparition du thrill = appel immédiat"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Hémodialyse : surcharge hydrosodée",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. B., 72 ans, hémodialysé 3 fois par semaine, arrive avec 4 kg de plus depuis la dernière séance.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Prise de poids interdialytique, poids sec",
       "Dyspnée, orthopnée, œdèmes",
       "Apports en eau et en sel, soif",
       "Diurèse résiduelle",
       "PA, crampes ou hypotensions en séance"
      ]
     },
     "carreau": {
      "vignette": "Orthopnée, œdèmes des chevilles, PA 170/95.",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Surcharge hydrosodée",
       "Prise de poids interdialytique excessive (souvent > 4 % du poids sec)",
       "Risque d'œdème pulmonaire",
       "Poids sec à réévaluer"
      ]
     },
     "trefle": {
      "vignette": "SpO₂ 93 %.",
      "question": "Quelles évaluations réalisez-vous ?",
      "reperes": [
       "Auscultation pulmonaire, radiographie selon le contexte",
       "Kaliémie avant séance",
       "Évaluation du poids sec (clinique, bio-impédance)",
       "Analyse des apports en sel et en liquides"
      ]
     },
     "pique": {
      "vignette": "Il dit avoir « toujours soif ».",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Ajustement de l'ultrafiltration et du poids sec avec le néphrologue",
       "Réduire le sel, moteur de la soif",
       "Astuces : glaçons, petites quantités, boissons comptées",
       "ETP : carnet de poids, objectifs réalistes",
       "Dyspnée de repos = orientation urgente"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "Dialyse péritonéale : péritonite",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme K., 55 ans, en dialyse péritonéale à domicile, appelle : son liquide de drainage est trouble.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Aspect du dialysat, douleurs abdominales, fièvre",
       "Faute d'asepsie, déconnexion accidentelle",
       "Orifice du cathéter : rougeur, écoulement",
       "Diarrhée, constipation"
      ]
     },
     "carreau": {
      "vignette": "Douleurs abdominales diffuses, 38,2 °C.",
      "question": "Quelle est votre hypothèse ?",
      "reperes": [
       "Péritonite liée à la dialyse péritonéale",
       "Urgence : prise en charge le jour même",
       "Origine : contamination lors des échanges, orifice, digestive",
       "Risque d'échec de la technique"
      ]
     },
     "trefle": {
      "vignette": "Elle se rend au centre de dialyse.",
      "question": "Quels examens ?",
      "reperes": [
       "Dialysat : leucocytes > 100/mm³ dont > 50 % de polynucléaires",
       "Examen direct et culture du dialysat",
       "Prélèvement de l'orifice si écoulement",
       "NFS, CRP, hémocultures si signes systémiques"
      ]
     },
     "pique": {
      "vignette": "Péritonite confirmée.",
      "question": "Quelle prise en charge et quelle prévention ?",
      "reperes": [
       "Antibiothérapie intrapéritonéale selon protocole",
       "Analyse des causes : réévaluation de la technique, reformation",
       "ETP : hygiène des mains, masque, soin de l'orifice",
       "Surveillance de l'aspect du dialysat",
       "Suivi du taux de péritonites du centre (indicateur qualité)"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Greffe : observance",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Thomas, 23 ans, transplanté rénal à 18 ans, voit sa créatinine augmenter. Il fait ses études loin de chez ses parents.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Prise des immunosuppresseurs : horaires, oublis, arrêts",
       "Mode de vie : horaires, sorties, alcool, substances",
       "Effets indésirables vécus (tremblements, acné, poids)",
       "Transition pédiatrie-adulte, soutien",
       "Représentations du greffon"
      ]
     },
     "carreau": {
      "vignette": "Taux résiduel de tacrolimus bas ; il avoue oublier la prise du soir.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Non-observance aux immunosuppresseurs (fréquente chez le jeune adulte)",
       "Risque de rejet aigu ou chronique",
       "Autres causes : déshydratation, infection, obstacle",
       "Facteurs : transition, contraintes, effets indésirables"
      ]
     },
     "trefle": {
      "vignette": "Créatinine 160 µmol/L (valeur de base 110).",
      "question": "Quels examens ?",
      "reperes": [
       "Créatinine de contrôle, protéinurie, anticorps anti-HLA spécifiques du donneur",
       "Échographie du greffon",
       "Biopsie selon l'équipe de transplantation",
       "ECBU, taux de tacrolimus"
      ]
     },
     "pique": {
      "vignette": "Thomas veut « garder son rein ».",
      "question": "Quel accompagnement proposez-vous ?",
      "reperes": [
       "Entretien motivationnel, sans jugement",
       "Forme à libération prolongée en une prise, si l'équipe la propose",
       "Alarmes, application, pilulier",
       "ETP transplantation, pairs aidants",
       "Suivi rapproché avec le centre de transplantation"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Greffe : prévention",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme G., 60 ans, transplantée rénale depuis 10 ans, vient pour son suivi annuel.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Infections récentes, vaccinations",
       "Exposition solaire, lésions cutanées",
       "PA, poids, lipides, glycémie",
       "Dépistages des cancers",
       "Observance, effets indésirables"
      ]
     },
     "carreau": {
      "vignette": "Elle jardine sans protection solaire ; lésion croûteuse sur le dos de la main.",
      "question": "Quels risques identifiez-vous ?",
      "reperes": [
       "Cancers cutanés (carcinomes épidermoïdes) très augmentés sous immunosuppresseurs",
       "Lésion suspecte à examiner rapidement",
       "Risques infectieux et cardiovasculaire élevés",
       "Diabète post-transplantation"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez le bilan annuel.",
      "question": "Quelles évaluations réalisez-vous ?",
      "reperes": [
       "Examen dermatologique complet annuel",
       "Dépistages des cancers adaptés",
       "HbA1c, lipides, PA",
       "Fonction du greffon, taux des immunosuppresseurs"
      ]
     },
     "pique": {
      "vignette": "Une consultation dermatologique est programmée.",
      "question": "Quel plan de prévention ?",
      "reperes": [
       "Photoprotection : vêtements, chapeau, écran haute protection, éviter les heures chaudes",
       "Auto-examen de la peau",
       "Vaccinations à jour, pas de vaccin vivant ; entourage vacciné",
       "Prévention cardiovasculaire",
       "Coordination dermatologue, centre de transplantation, médecin traitant"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Traitement conservateur du sujet âgé",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. V., 87 ans, MRC stade 5 (DFG 11), insuffisant cardiaque, vit en EHPAD. Le néphrologue propose de discuter des options.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Fatigue, prurit, nausées, dyspnée, anorexie",
       "Autonomie, cognition, fragilité, comorbidités",
       "Souhaits, valeurs ; directives anticipées",
       "Entourage, personne de confiance",
       "Compréhension de la situation"
      ]
     },
     "carreau": {
      "vignette": "Il dit : « Je ne veux pas de machine. »",
      "question": "Quels besoins identifiez-vous ?",
      "reperes": [
       "Traitement conservateur sans dialyse : un choix légitime à présenter",
       "Bénéfice incertain de la dialyse chez le sujet très âgé polypathologique",
       "Contrôle des symptômes",
       "Anticipation, soutien de l'entourage"
      ]
     },
     "trefle": {
      "vignette": "Vous préparez la décision partagée.",
      "question": "Quelles évaluations sont nécessaires ?",
      "reperes": [
       "Évaluation gériatrique standardisée",
       "Échelle de symptômes",
       "Capacité à décider",
       "Avis de l'équipe de l'EHPAD"
      ]
     },
     "pique": {
      "vignette": "Le traitement conservateur est choisi.",
      "question": "Comment organisez-vous le parcours ?",
      "reperes": [
       "Traitement conservateur actif : symptômes, anémie, équilibre hydrique",
       "Équipe de soins palliatifs, prescriptions anticipées",
       "Directives anticipées et personne de confiance formalisées",
       "Coordination néphrologue, médecin coordonnateur, équipe de l'EHPAD",
       "Réévaluation régulière, soutien de la famille"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Drapeau rouge",
    "icone": "⚑",
    "texte": "Choisissez une situation du jeu et citez au moins deux signes d'alerte qui imposent une orientation urgente.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Leadership & recherche",
    "icone": "◈",
    "texte": "À partir de la dernière situation jouée, proposez une action d'amélioration des pratiques (protocole, audit, formation) ou formulez une question de recherche (PICO).",
    "regle": "Compétences C5 · C6. Si le groupe valide, ce joker remplace une carte manquante d'un carré."
   }
  ]
 },
 {
  "id": "psychiatrie",
  "titre": "Psychiatrie et santé mentale",
  "court": "Psychiatrie et santé mentale",
  "code": "PSM",
  "couleur": "#4A3B7A",
  "description": "La mention psychiatrie et santé mentale couvre le repérage et le suivi des troubles psychiques, la surveillance des traitements psychotropes, la prévention du suicide, la santé somatique des personnes vivant avec un trouble psychique, les addictions et l'accompagnement orienté vers le rétablissement, en lien avec les CMP, les équipes hospitalières et les soins primaires.",
  "rappel": true,
  "competences": [
   [
    "C1",
    "Évaluer l'état de santé de patients en relais de consultations médicales pour des pathologies identifiées",
    "♥ ♦ ♣"
   ],
   [
    "C2",
    "Définir et mettre en œuvre le projet de soins du patient à partir de l'évaluation globale de son état de santé",
    "♣ ♠"
   ],
   [
    "C3",
    "Concevoir et mettre en œuvre des actions de prévention et d'éducation thérapeutique",
    "♦ ♠"
   ],
   [
    "C4",
    "Organiser les parcours de soins et de santé en collaboration avec l'ensemble des acteurs concernés",
    "♠"
   ],
   [
    "C5",
    "Mettre en place et conduire des actions d'évaluation et d'amélioration des pratiques en exerçant un leadership clinique",
    "Joker 2, repères ♠"
   ],
   [
    "C6",
    "Rechercher, analyser et produire des données professionnelles et scientifiques",
    "Joker 2, débriefing"
   ]
  ],
  "intro": "Un jeu de 52 cartes pour la mention « Psychiatrie et santé mentale ». Chaque couleur correspond à une étape du raisonnement clinique, chaque valeur à une situation clinique suivie à travers un même patient. Chaque carte indique les compétences IPA qu'elle mobilise. Réunir les quatre cartes d'une valeur, c'est dérouler un raisonnement complet, du recueil des données à la coordination du parcours.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Recueillir",
    "sous": "Anamnèse, écoute, contexte de vie",
    "col": "#B3261E",
    "comp": "C1"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Repérer & hypothèses",
    "sous": "Repérage, scores, hypothèses et drapeaux rouges",
    "col": "#D9480F",
    "comp": "C1 · C3"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Vérifier",
    "sous": "Examen clinique, examens complémentaires, diagnostics différentiels",
    "col": "#1F4E46",
    "comp": "C1 · C2"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Agir & suivre",
    "sous": "Projet de soins, prévention, ETP, parcours et coordination",
    "col": "#1B2A4A",
    "comp": "C2 · C3 · C4"
   }
  ],
  "situations": [
   {
    "valeur": "2",
    "titre": "Repérage du risque suicidaire",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme S., 45 ans, suivie pour dépression, vient en consultation : elle a perdu son emploi et dit « ne plus voir d'issue ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Idées suicidaires : fréquence, intensité, scénario, échéance, accès aux moyens",
       "Antécédents de tentative de suicide, personnels et familiaux",
       "Facteurs de risque : événement de vie, isolement, alcool",
       "Facteurs de protection : enfants, soutiens, projets, alliance",
       "La question posée directement n'augmente pas le risque"
      ]
     },
     "carreau": {
      "vignette": "Elle pense au suicide chaque jour et a un scénario, sans échéance fixée.",
      "question": "Comment évaluez-vous le niveau de risque ?",
      "reperes": [
       "Évaluation RUD : risque, urgence, dangerosité",
       "Urgence moyenne à élevée : idées quotidiennes, scénario élaboré",
       "Dangerosité : létalité et accessibilité du moyen envisagé",
       "Le niveau évalué détermine l'orientation"
      ]
     },
     "trefle": {
      "vignette": "Le moyen envisagé est accessible à son domicile.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Intensité dépressive, désespoir, impulsivité",
       "Consommation d'alcool ou de substances",
       "Symptômes psychotiques",
       "Soutiens mobilisables dans les 24 à 48 heures"
      ]
     },
     "pique": {
      "vignette": "Elle accepte de l'aide.",
      "question": "Quelle conduite à tenir ?",
      "reperes": [
       "Urgence élevée : ne pas la laisser seule ; orientation vers les urgences psychiatriques",
       "Mise à distance des moyens létaux, avec l'entourage",
       "Plan de sécurité co-construit ; numéro national 3114",
       "Avis psychiatrique rapide, recontacts programmés (VigilanS après une tentative)",
       "Traçabilité, transmission à l'équipe"
      ]
     }
    }
   },
   {
    "valeur": "3",
    "titre": "Premier épisode psychotique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Kevin, 20 ans, est amené par ses parents : il s'isole, vit la nuit et dit que ses voisins l'espionnent.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Idées délirantes, hallucinations, désorganisation, retrait",
       "Durée de psychose non traitée",
       "Cannabis et autres substances",
       "Antécédents psychiatriques familiaux",
       "Études, relations, autonomie"
      ]
     },
     "carreau": {
      "vignette": "Symptômes depuis 4 mois ; cannabis quotidien.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Premier épisode psychotique",
       "Trouble psychotique induit par le cannabis à discuter",
       "Différentiels : cause organique (neurologique, endocrinienne), trouble de l'humeur avec caractéristiques psychotiques",
       "Risque suicidaire à évaluer"
      ]
     },
     "trefle": {
      "vignette": "Il accepte un bilan.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Examen somatique et neurologique",
       "NFS, ionogramme, glycémie, TSH, bilan hépatique ; toxiques urinaires avec accord",
       "Imagerie cérébrale selon prescription",
       "Bilan de référence avant antipsychotique : poids, tour de taille, PA, glycémie, lipides, ECG"
      ]
     },
     "pique": {
      "vignette": "Un antipsychotique est prescrit par le psychiatre.",
      "question": "Quel accompagnement proposez-vous ?",
      "reperes": [
       "Programme d'intervention précoce, suivi intensif",
       "Psychoéducation du patient et de la famille",
       "Réduction du cannabis : entretien motivationnel",
       "Surveillance de la tolérance et des paramètres métaboliques",
       "Maintien des études, réhabilitation psychosociale"
      ]
     }
    }
   },
   {
    "valeur": "4",
    "titre": "Antipsychotiques et santé métabolique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. A., 38 ans, schizophrénie stabilisée sous olanzapine depuis 3 ans, vient pour son suivi au CMP.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Symptômes, stabilité, adhésion au traitement",
       "Effets indésirables : poids, sédation, troubles sexuels, symptômes extrapyramidaux",
       "Tabac, alimentation, activité physique",
       "Dernier bilan somatique, médecin traitant",
       "Logement, insertion sociale"
      ]
     },
     "carreau": {
      "vignette": "+ 15 kg en 3 ans, tour de taille 108 cm, 30 cigarettes par jour.",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Syndrome métabolique probable",
       "Risque cardiovasculaire élevé ; espérance de vie réduite dans les troubles psychiques sévères",
       "Tabagisme massif",
       "Retentissement sur l'estime de soi et l'adhésion"
      ]
     },
     "trefle": {
      "vignette": "Pas de bilan sanguin depuis 2 ans.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Glycémie à jeun ou HbA1c, bilan lipidique",
       "PA, IMC, tour de taille",
       "ECG (QT)",
       "Prolactine selon les symptômes"
      ]
     },
     "pique": {
      "vignette": "Glycémie à jeun 1,18 g/L, triglycérides élevés.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Discuter avec le psychiatre d'une molécule moins métabolique",
       "Programme alimentation et activité physique adaptée",
       "Sevrage tabagique avec substituts nicotiniques",
       "Coordination avec le médecin traitant",
       "Suivi métabolique régulier"
      ]
     }
    }
   },
   {
    "valeur": "5",
    "titre": "Trouble bipolaire et lithium",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme L., 52 ans, trouble bipolaire stabilisé sous lithium depuis 10 ans, a des tremblements et des diarrhées depuis quelques jours.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Tremblements, diarrhée, vomissements, confusion, troubles de l'équilibre",
       "Changements récents : AINS, IEC, diurétique, déshydratation, régime sans sel",
       "Dernière lithiémie, fonction rénale, TSH",
       "Humeur actuelle",
       "Observance, horaires de prise"
      ]
     },
     "carreau": {
      "vignette": "Elle prend un anti-inflammatoire pour une sciatique depuis 5 jours.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Surdosage en lithium probable (interaction avec l'AINS)",
       "Marge thérapeutique étroite",
       "Gravité : confusion, ataxie, troubles de la conscience → urgence",
       "Autre cause de diarrhée à éliminer"
      ]
     },
     "trefle": {
      "vignette": "Pas de confusion.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Lithiémie en urgence (12 h après la dernière prise)",
       "Créatinine, ionogramme",
       "ECG",
       "TSH et calcémie pour le suivi"
      ]
     },
     "pique": {
      "vignette": "Lithiémie au-dessus de la zone thérapeutique.",
      "question": "Quelle conduite à tenir ?",
      "reperes": [
       "Avis médical urgent : suspension ou adaptation du lithium",
       "Arrêt de l'AINS",
       "Hydratation",
       "ETP : interactions (AINS, IEC, diurétiques), déshydratation, signes de surdosage",
       "Suivi régulier : lithiémie, fonction rénale, TSH, calcémie"
      ]
     }
    }
   },
   {
    "valeur": "6",
    "titre": "Dépression : suivi de l'antidépresseur",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. T., 34 ans, a commencé un ISRS il y a 3 semaines pour un épisode dépressif. Il dit que « ça ne marche pas ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Évolution des symptômes (PHQ-9 comparé), sommeil, énergie",
       "Idées suicidaires (vigilance en début de traitement)",
       "Observance, effets indésirables",
       "Attentes, compréhension du délai d'action",
       "Alcool, substances"
      ]
     },
     "carreau": {
      "vignette": "PHQ-9 de 18 à 15. Nausées et agitation la première semaine ; il a arrêté 3 jours.",
      "question": "Comment analysez-vous la situation ?",
      "reperes": [
       "Délai d'action habituel de 2 à 4 semaines ; réponse partielle",
       "Observance irrégulière liée aux effets indésirables initiaux",
       "Agitation en début de traitement : vigilance suicidaire",
       "Trop tôt pour conclure à l'inefficacité"
      ]
     },
     "trefle": {
      "vignette": "Pas d'idée suicidaire actuelle.",
      "question": "Que recherchez-vous ?",
      "reperes": [
       "Virage de l'humeur (symptômes hypomaniaques)",
       "Comorbidité anxieuse, alcool",
       "Facteurs de maintien : conflits, travail",
       "PHQ-9 répétés"
      ]
     },
     "pique": {
      "vignette": "Il accepte de poursuivre.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Information sur le délai d'action et les effets transitoires",
       "Poursuite, réévaluation à 4–6 semaines avec le médecin",
       "Psychothérapie associée",
       "Activité physique, rythmes de vie",
       "Traitement poursuivi 6 mois à 1 an après la rémission"
      ]
     }
    }
   },
   {
    "valeur": "7",
    "titre": "Trouble panique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme P., 29 ans, consulte après trois passages aux urgences pour « malaise cardiaque », avec des bilans normaux.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Crises : palpitations, dyspnée, peur de mourir, durée",
       "Fréquence, déclencheurs, anxiété anticipatoire",
       "Évitements : transports, lieux publics",
       "Caféine, substances, médicaments",
       "Retentissement social et professionnel"
      ]
     },
     "carreau": {
      "vignette": "Crises brutales de 10 minutes, peur intense d'en refaire ; elle ne prend plus le métro.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Trouble panique avec agoraphobie",
       "Différentiels : hyperthyroïdie, trouble du rythme, substances",
       "Comorbidité dépressive fréquente",
       "Risque de recours prolongé aux anxiolytiques"
      ]
     },
     "trefle": {
      "vignette": "Les bilans cardiaques sont normaux.",
      "question": "Quels examens complètent votre évaluation ?",
      "reperes": [
       "TSH, glycémie",
       "Relire avec elle les résultats déjà obtenus",
       "Échelles : GAD-7, sévérité du trouble panique",
       "Évaluation de l'humeur"
      ]
     },
     "pique": {
      "vignette": "Elle veut « reprendre le métro ».",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Psychoéducation : mécanisme de la crise",
       "TCC avec exposition progressive",
       "Respiration, relaxation",
       "ISRS si besoin, sur prescription ; éviter les benzodiazépines au long cours",
       "Suivi et réévaluation"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Alcool : sevrage",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. B., 50 ans, demande à arrêter l'alcool. Il boit l'équivalent d'une bouteille de whisky par jour depuis des années.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Consommation, horaires, besoin matinal",
       "Antécédents de sevrage compliqué (convulsions, delirium tremens)",
       "Comorbidités hépatiques et psychiatriques, autres substances",
       "Contexte social, entourage",
       "Motivation, objectifs"
      ]
     },
     "carreau": {
      "vignette": "Tremblements matinaux ; une crise convulsive lors d'un arrêt il y a 2 ans.",
      "question": "Quels risques identifiez-vous ?",
      "reperes": [
       "Dépendance sévère",
       "Risque de sevrage compliqué : antécédent de convulsion",
       "Sevrage ambulatoire déconseillé : sevrage hospitalier",
       "Carence en vitamine B1 : risque d'encéphalopathie de Gayet-Wernicke"
      ]
     },
     "trefle": {
      "vignette": "Il accepte un bilan.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Bilan hépatique, GGT, NFS (VGM, plaquettes), TP",
       "Ionogramme, glycémie",
       "Humeur, risque suicidaire",
       "Score de Cushman pour suivre le sevrage"
      ]
     },
     "pique": {
      "vignette": "Un sevrage hospitalier est programmé.",
      "question": "Quel accompagnement proposez-vous ?",
      "reperes": [
       "Sevrage encadré : benzodiazépines selon protocole, vitamine B1, hydratation",
       "Suivi addictologique après le sevrage (CSAPA)",
       "Traitement d'aide au maintien de l'abstinence, sur prescription",
       "Groupes d'entraide, entourage",
       "Prévention de la rechute"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Anorexie mentale : repérage",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Chloé, 19 ans, étudiante, est amenée par sa mère pour un amaigrissement important et un arrêt des règles.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Histoire pondérale, IMC",
       "Comportements alimentaires, activité physique",
       "Perception du corps, peur de grossir",
       "Aménorrhée, fatigue, frilosité, malaises",
       "Humeur, anxiété, isolement"
      ]
     },
     "carreau": {
      "vignette": "IMC 15,5 kg/m², restriction sévère, activité physique intense.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Anorexie mentale probable",
       "Questionnaire de repérage SCOFF",
       "Gravité somatique et psychiatrique à évaluer",
       "Différentiels : maladie cœliaque, hyperthyroïdie, diabète"
      ]
     },
     "trefle": {
      "vignette": "Vous évaluez la gravité.",
      "question": "Quels éléments recherchez-vous ?",
      "reperes": [
       "FC, PA, température, malaises",
       "Kaliémie, phosphorémie, glycémie, ECG",
       "Rapidité de la perte de poids",
       "Risque suicidaire"
      ]
     },
     "pique": {
      "vignette": "FC à 42/min.",
      "question": "Quelle conduite à tenir ?",
      "reperes": [
       "Signe de gravité : avis spécialisé urgent, hospitalisation à discuter",
       "Orientation vers une équipe spécialisée",
       "Alliance avec la patiente et sa famille",
       "Renutrition encadrée (risque de syndrome de renutrition)",
       "Suivi pluridisciplinaire"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Stress post-traumatique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. D., 41 ans, pompier, consulte 2 mois après une intervention où un enfant est décédé. Il dort mal et évite son travail.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Reviviscences : cauchemars, flash-backs",
       "Évitement, hypervigilance, irritabilité",
       "Humeur, culpabilité, idées suicidaires",
       "Alcool, médicaments",
       "Soutiens professionnels et familiaux"
      ]
     },
     "carreau": {
      "vignette": "Symptômes quotidiens depuis 2 mois ; consommation d'alcool en hausse.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Trouble de stress post-traumatique (symptômes > 1 mois)",
       "Échelle PCL-5",
       "Comorbidités : dépression, trouble de l'usage d'alcool",
       "Risque suicidaire"
      ]
     },
     "trefle": {
      "vignette": "Il craint le regard de ses collègues.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Risque suicidaire",
       "AUDIT",
       "Retentissement fonctionnel",
       "Antécédents traumatiques"
      ]
     },
     "pique": {
      "vignette": "Il accepte une prise en charge.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Psychothérapie centrée sur le trauma (TCC, EMDR)",
       "Prise en charge de l'alcool",
       "Lien avec la santé au travail",
       "Sommeil : mesures non médicamenteuses",
       "Suivi régulier"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "Sujet âgé : confusion",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme R., 82 ans, en EHPAD, est agitée et désorientée la nuit depuis 2 jours. L'équipe évoque une « démence qui s'aggrave ».",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Début brutal ou progressif, fluctuations",
       "Nouveau médicament, fièvre, douleur, constipation, rétention urinaire",
       "Hydratation, alimentation",
       "État cognitif antérieur",
       "Sommeil, changement d'environnement"
      ]
     },
     "carreau": {
      "vignette": "Début brutal, fluctuations, inattention.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Syndrome confusionnel (CAM positive)",
       "Urgence : rechercher une cause somatique",
       "Ne pas conclure à une aggravation de la démence",
       "Différentiels : dépression, évolution d'un trouble neurocognitif"
      ]
     },
     "trefle": {
      "vignette": "Vous cherchez la cause.",
      "question": "Quels examens réalisez-vous ?",
      "reperes": [
       "Constantes, glycémie capillaire",
       "Globe urinaire, fécalome, douleur",
       "Ionogramme, calcémie, NFS, CRP, ECBU",
       "Revue des médicaments (anticholinergiques, benzodiazépines)"
      ]
     },
     "pique": {
      "vignette": "Une rétention urinaire est retrouvée.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Traitement de la cause (sondage, recherche d'infection)",
       "Mesures non médicamenteuses : orientation, présence, lunettes et appareils auditifs",
       "Éviter contention et sédatifs",
       "Révision des médicaments",
       "Protocole de repérage de la confusion pour l'équipe"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Santé somatique en psychiatrie",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. H., 55 ans, schizophrène, vit en appartement thérapeutique. Il n'a pas de médecin traitant.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Antécédents somatiques, dernier bilan",
       "Tabac, alimentation, activité",
       "Santé bucco-dentaire",
       "Dépistages, vaccinations",
       "Douleur (expression souvent atypique)"
      ]
     },
     "carreau": {
      "vignette": "Il fume, a mal aux dents et n'a jamais fait de dépistage.",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Surmortalité somatique des personnes ayant un trouble psychique sévère",
       "Retards de dépistage et de soins",
       "Risques cardiovasculaire, respiratoire, dentaire",
       "Obstacles à l'accès aux soins"
      ]
     },
     "trefle": {
      "vignette": "Vous préparez un bilan.",
      "question": "Quel bilan proposez-vous ?",
      "reperes": [
       "Examen somatique complet, PA, IMC",
       "Glycémie, lipides",
       "Dépistages organisés selon l'âge",
       "ECG, consultation dentaire"
      ]
     },
     "pique": {
      "vignette": "M. H. accepte d'être accompagné.",
      "question": "Comment organisez-vous le parcours ?",
      "reperes": [
       "Recherche d'un médecin traitant",
       "Accompagnement physique aux rendez-vous",
       "Sevrage tabagique adapté",
       "Coordination psychiatrie et soins primaires",
       "Indicateurs de suivi somatique du service"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Insomnie et hypnotiques",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme Z., 68 ans, prend un hypnotique chaque soir depuis 6 ans et demande un renouvellement.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Plainte : endormissement, réveils, durée du sommeil",
       "Habitudes, siestes",
       "Durée et dose de l'hypnotique, effet ressenti",
       "Chutes, mémoire, somnolence diurne",
       "Anxiété, dépression"
      ]
     },
     "carreau": {
      "vignette": "Deux chutes. Elle a peur de « ne plus dormir du tout » sans son comprimé.",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Usage prolongé, dépendance",
       "Risques : chutes, troubles cognitifs, accidents",
       "Insomnie chronique non traitée en tant que telle",
       "Anxiété liée à l'arrêt"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez l'évaluation.",
      "question": "Quelles évaluations réalisez-vous ?",
      "reperes": [
       "Agenda du sommeil",
       "Apnées du sommeil, jambes sans repos",
       "Humeur",
       "Risque de chute"
      ]
     },
     "pique": {
      "vignette": "Elle accepte d'essayer de réduire.",
      "question": "Quel plan proposez-vous ?",
      "reperes": [
       "Décroissance progressive sur plusieurs semaines, avec le prescripteur",
       "TCC de l'insomnie",
       "Hygiène du sommeil, restriction du temps passé au lit",
       "Information sur l'effet rebond transitoire",
       "Suivi régulier"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Rétablissement et parcours",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme E., 33 ans, trouble bipolaire, sort d'une hospitalisation pour épisode maniaque. Elle veut reprendre son travail.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Compréhension de la maladie, signes précurseurs",
       "Traitement, adhésion, effets indésirables",
       "Entourage, logement, travail",
       "Projets, priorités",
       "Soutiens professionnels"
      ]
     },
     "carreau": {
      "vignette": "Elle a arrêté son traitement deux fois en un an.",
      "question": "Quels besoins identifiez-vous ?",
      "reperes": [
       "Psychoéducation",
       "Plan de crise, directives anticipées en psychiatrie",
       "Soutien à l'insertion professionnelle",
       "Approche orientée rétablissement"
      ]
     },
     "trefle": {
      "vignette": "Elle exprime des réticences au traitement.",
      "question": "Quelles évaluations complètent votre analyse ?",
      "reperes": [
       "Freins à l'adhésion",
       "Fonctionnement et cognition",
       "Besoins sociaux",
       "Humeur"
      ]
     },
     "pique": {
      "vignette": "Elle souhaite être actrice de son parcours.",
      "question": "Comment organisez-vous le parcours ?",
      "reperes": [
       "Plan de crise conjoint, directives anticipées en psychiatrie",
       "Psychoéducation, pair-aidance",
       "Réhabilitation psychosociale, emploi accompagné",
       "Coordination CMP, médecin traitant, services sociaux",
       "Évaluation des résultats avec la patiente"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Drapeau rouge",
    "icone": "⚑",
    "texte": "Choisissez une situation du jeu et citez au moins deux signes d'alerte qui imposent une orientation urgente.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Leadership & recherche",
    "icone": "◈",
    "texte": "À partir de la dernière situation jouée, proposez une action d'amélioration des pratiques (protocole, audit, formation) ou formulez une question de recherche (PICO).",
    "regle": "Compétences C5 · C6. Si le groupe valide, ce joker remplace une carte manquante d'un carré."
   }
  ]
 },
 {
  "id": "urgences",
  "titre": "Urgences",
  "court": "Urgences",
  "code": "URG",
  "couleur": "#8E1B1B",
  "description": "La mention urgences couvre l'accueil, l'évaluation et l'orientation des patients consultant aux urgences : repérage des situations graves et des drapeaux rouges, prise en charge des motifs de recours courants selon les protocoles, prévention et repérage (alcool, chutes, vaccination), et organisation de la sortie et du parcours d'aval.",
  "rappel": true,
  "competences": [
   [
    "C1",
    "Évaluer l'état de santé de patients en relais de consultations médicales pour des pathologies identifiées",
    "♥ ♦ ♣"
   ],
   [
    "C2",
    "Définir et mettre en œuvre le projet de soins du patient à partir de l'évaluation globale de son état de santé",
    "♣ ♠"
   ],
   [
    "C3",
    "Concevoir et mettre en œuvre des actions de prévention et d'éducation thérapeutique",
    "♦ ♠"
   ],
   [
    "C4",
    "Organiser les parcours de soins et de santé en collaboration avec l'ensemble des acteurs concernés",
    "♠"
   ],
   [
    "C5",
    "Mettre en place et conduire des actions d'évaluation et d'amélioration des pratiques en exerçant un leadership clinique",
    "Joker 2, repères ♠"
   ],
   [
    "C6",
    "Rechercher, analyser et produire des données professionnelles et scientifiques",
    "Joker 2, débriefing"
   ]
  ],
  "intro": "Un jeu de 52 cartes pour la mention « Urgences ». Chaque couleur correspond à une étape du raisonnement clinique, chaque valeur à une situation clinique suivie à travers un même patient. Chaque carte indique les compétences IPA qu'elle mobilise. Réunir les quatre cartes d'une valeur, c'est dérouler un raisonnement complet, du recueil des données à la coordination du parcours.",
  "couleurs": [
   {
    "cle": "coeur",
    "sym": "♥",
    "nom": "Cœur",
    "etape": "Recueillir",
    "sous": "Anamnèse, écoute, contexte de vie",
    "col": "#B3261E",
    "comp": "C1"
   },
   {
    "cle": "carreau",
    "sym": "♦",
    "nom": "Carreau",
    "etape": "Repérer & hypothèses",
    "sous": "Repérage, scores, hypothèses et drapeaux rouges",
    "col": "#D9480F",
    "comp": "C1 · C3"
   },
   {
    "cle": "trefle",
    "sym": "♣",
    "nom": "Trèfle",
    "etape": "Vérifier",
    "sous": "Examen clinique, examens complémentaires, diagnostics différentiels",
    "col": "#1F4E46",
    "comp": "C1 · C2"
   },
   {
    "cle": "pique",
    "sym": "♠",
    "nom": "Pique",
    "etape": "Agir & suivre",
    "sous": "Projet de soins, prévention, ETP, parcours et coordination",
    "col": "#1B2A4A",
    "comp": "C2 · C3 · C4"
   }
  ],
  "situations": [
   {
    "valeur": "2",
    "titre": "Douleur thoracique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. C., 52 ans, fumeur, consulte aux urgences pour une douleur thoracique qui dure depuis 1 heure.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Siège, type (constrictive), irradiation, durée, lien avec l'effort",
       "Dyspnée, sueurs, nausées, malaise",
       "Facteurs de risque cardiovasculaire",
       "Antécédents cardiaques, traitements",
       "PA aux deux bras, FC, SpO₂"
      ]
     },
     "carreau": {
      "vignette": "Douleur constrictive irradiant dans le bras gauche, sueurs.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Syndrome coronarien aigu : priorité absolue",
       "Autres urgences : dissection aortique, embolie pulmonaire, péricardite, pneumothorax",
       "ECG dans les 10 minutes",
       "Niveau de tri élevé"
      ]
     },
     "trefle": {
      "vignette": "ECG : sus-décalage du segment ST en territoire inférieur.",
      "question": "Quels examens ? Quelle urgence ?",
      "reperes": [
       "SCA avec sus-décalage : alerte médicale immédiate, filière de reperfusion",
       "Troponine, NFS, ionogramme, hémostase",
       "Monitorage, voie veineuse",
       "Reperfusion le plus tôt possible"
      ]
     },
     "pique": {
      "vignette": "Le patient part en salle de coronarographie.",
      "question": "Quel est votre rôle et quel suivi ?",
      "reperes": [
       "Coordination de la filière, traçabilité des délais",
       "Information du patient et des proches",
       "Après l'épisode : prévention secondaire (tabac, réadaptation cardiaque)",
       "Suivi des délais porte-ECG et porte-reperfusion (indicateurs qualité)",
       "Retour d'expérience en équipe"
      ]
     }
    }
   },
   {
    "valeur": "3",
    "titre": "Traumatisme de la cheville",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Léo, 25 ans, s'est tordu la cheville au football. Il marche difficilement.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Mécanisme (inversion), craquement, douleur immédiate",
       "Capacité à faire 4 pas, juste après et aux urgences",
       "Antécédents d'entorse",
       "Douleur (EN)",
       "Activité professionnelle et sportive"
      ]
     },
     "carreau": {
      "vignette": "Douleur à la palpation du bord postérieur de la malléole latérale ; impossible de faire 4 pas.",
      "question": "Quelle règle appliquez-vous ?",
      "reperes": [
       "Règles d'Ottawa : radiographie indiquée",
       "Critères : douleur au bord postérieur ou à la pointe d'une malléole, à la base du 5e métatarsien ou au naviculaire, ou impossibilité de faire 4 pas",
       "Hypothèses : entorse ou fracture malléolaire",
       "Gravité de l'entorse à évaluer"
      ]
     },
     "trefle": {
      "vignette": "Radiographie normale.",
      "question": "Comment évaluez-vous l'entorse ?",
      "reperes": [
       "Entorse du ligament collatéral latéral",
       "Œdème, ecchymose, laxité (réévaluée à J3–J5)",
       "Lésions associées : base du 5e métatarsien, tendons fibulaires",
       "Examen vasculo-nerveux"
      ]
     },
     "pique": {
      "vignette": "Entorse de gravité moyenne.",
      "question": "Quelle prise en charge proposez-vous ?",
      "reperes": [
       "Repos relatif, glace, compression, élévation ; antalgiques",
       "Orthèse stabilisatrice, appui selon la douleur",
       "Rééducation proprioceptive précoce",
       "Consignes de réévaluation, signes d'alerte",
       "Arrêts de travail et de sport adaptés"
      ]
     }
    }
   },
   {
    "valeur": "4",
    "titre": "Plaie de la main",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme B., 46 ans, s'est coupé la paume avec un couteau de cuisine il y a 2 heures.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Circonstances, objet, délai, souillure",
       "Statut vaccinal antitétanique",
       "Diabète, anticoagulants, immunodépression",
       "Main dominante, profession",
       "Allergies"
      ]
     },
     "carreau": {
      "vignette": "Plaie de 2 cm, peu profonde. Dernier rappel antitétanique il y a 15 ans.",
      "question": "Quelles hypothèses ? Quels risques ?",
      "reperes": [
       "Plaie simple à confirmer : aucune atteinte tendineuse, nerveuse ou vasculaire",
       "Plaie de la main : exploration rigoureuse",
       "Vaccination antitétanique non à jour",
       "Risque infectieux faible si plaie propre"
      ]
     },
     "trefle": {
      "vignette": "Vous examinez la main.",
      "question": "Que vérifiez-vous ?",
      "reperes": [
       "Flexion et extension de chaque doigt (tendons)",
       "Sensibilité des pulpes (nerfs digitaux)",
       "Recoloration",
       "Corps étranger dans la plaie"
      ]
     },
     "pique": {
      "vignette": "Pas de lésion profonde.",
      "question": "Quelle prise en charge proposez-vous ?",
      "reperes": [
       "Lavage, parage, suture ou colle",
       "Rappel antitétanique ± immunoglobulines selon le statut et le type de plaie",
       "Pansement, conseils, date d'ablation des fils",
       "Signes d'infection à surveiller",
       "Avis SOS Main en cas de doute"
      ]
     }
    }
   },
   {
    "valeur": "5",
    "titre": "Céphalée brutale",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme T., 38 ans, consulte pour une céphalée intense survenue brutalement en soulevant une charge.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Mode d'installation : brutal ou progressif",
       "Antécédents de céphalées, migraine",
       "Vomissements, raideur de nuque, fièvre, signes neurologiques",
       "Traitements, anticoagulants",
       "Grossesse, post-partum"
      ]
     },
     "carreau": {
      "vignette": "Céphalée maximale en moins d'une minute, « la pire de ma vie ».",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Céphalée en coup de tonnerre : hémorragie méningée jusqu'à preuve du contraire",
       "Autres : dissection artérielle, vasoconstriction cérébrale réversible",
       "Drapeaux rouges des céphalées",
       "Bilan immédiat"
      ]
     },
     "trefle": {
      "vignette": "Examen neurologique normal.",
      "question": "Quels examens ?",
      "reperes": [
       "Scanner cérébral sans injection en urgence",
       "Ponction lombaire si scanner normal et suspicion forte",
       "Angio-imagerie selon le contexte",
       "Surveillance neurologique"
      ]
     },
     "pique": {
      "vignette": "Hémorragie méningée confirmée.",
      "question": "Quel est votre rôle ?",
      "reperes": [
       "Alerte, coordination avec la neurochirurgie et la neuroradiologie",
       "Surveillance : conscience, PA, douleur",
       "Information de la patiente et des proches",
       "Traçabilité",
       "Analyse de cas sur l'application des drapeaux rouges"
      ]
     }
    }
   },
   {
    "valeur": "6",
    "titre": "Lombalgie aiguë",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. L., 42 ans, consulte pour une lombalgie apparue il y a 2 jours en portant un meuble.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Mécanisme, horaire de la douleur, irradiation",
       "Drapeaux rouges : fièvre, amaigrissement, cancer, traumatisme, troubles sphinctériens",
       "Drapeaux jaunes : peur, catastrophisme, difficultés au travail",
       "Traitements essayés",
       "Profession"
      ]
     },
     "carreau": {
      "vignette": "Douleur mécanique, sans irradiation, sans drapeau rouge.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Lombalgie commune aiguë",
       "Pas d'imagerie indiquée",
       "Évolution favorable en quelques semaines dans la majorité des cas",
       "Facteurs de chronicisation à repérer"
      ]
     },
     "trefle": {
      "vignette": "Il réclame une radiographie.",
      "question": "Que vérifiez-vous ?",
      "reperes": [
       "Examen neurologique : déficit, réflexes",
       "Syndrome de la queue de cheval : anesthésie en selle, troubles urinaires",
       "Ses attentes et ses craintes",
       "Risque de chronicité (STarT Back)"
      ]
     },
     "pique": {
      "vignette": "Lombalgie commune confirmée.",
      "question": "Quelle prise en charge ?",
      "reperes": [
       "Expliquer pourquoi l'imagerie n'est pas utile",
       "Maintien de l'activité, pas de repos au lit",
       "Antalgiques simples",
       "Arrêt de travail court si nécessaire",
       "Consignes : drapeaux rouges, réévaluation si pas d'amélioration"
      ]
     }
    }
   },
   {
    "valeur": "7",
    "titre": "Infection urinaire",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme U., 32 ans, consulte pour des brûlures mictionnelles et des envies fréquentes d'uriner depuis 24 heures.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Signes urinaires, fièvre, douleurs lombaires",
       "Grossesse possible ?",
       "Antécédents d'infections ou d'anomalies urinaires",
       "Allergies",
       "Facteurs de risque de complication"
      ]
     },
     "carreau": {
      "vignette": "Pas de fièvre, pas de douleur lombaire, pas de grossesse.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Cystite aiguë simple",
       "Différentiels : vaginite, IST",
       "Bandelette urinaire",
       "Aucun facteur de risque de complication"
      ]
     },
     "trefle": {
      "vignette": "Bandelette positive (leucocytes et nitrites).",
      "question": "Faut-il un ECBU ?",
      "reperes": [
       "Non pour une cystite simple",
       "ECBU si cystite à risque de complication, récidive, échec ou grossesse",
       "Bandelette négative : chercher un autre diagnostic",
       "Fièvre ou douleur lombaire → pyélonéphrite : ECBU"
      ]
     },
     "pique": {
      "vignette": "Cystite simple confirmée.",
      "question": "Quelle prise en charge ?",
      "reperes": [
       "Fosfomycine-trométamol en dose unique en 1re intention, selon protocole",
       "Hydratation, mictions régulières",
       "Signes d'alerte : fièvre, douleur lombaire",
       "Pas d'examen de contrôle si évolution favorable",
       "Prévention des récidives"
      ]
     }
    }
   },
   {
    "valeur": "8",
    "titre": "Traumatisme crânien sous anticoagulant",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. V., 78 ans, sous anticoagulant pour une FA, a chuté et s'est cogné la tête.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Circonstances, perte de connaissance, amnésie",
       "Anticoagulant, heure de la dernière prise",
       "Céphalées, vomissements, confusion",
       "Score de Glasgow",
       "Cause de la chute"
      ]
     },
     "carreau": {
      "vignette": "Glasgow 15, pas de perte de connaissance, céphalée modérée.",
      "question": "Quels risques identifiez-vous ?",
      "reperes": [
       "Traumatisme crânien léger",
       "Anticoagulant : risque d'hémorragie intracrânienne",
       "Âge ≥ 65 ans : autre facteur de risque",
       "Imagerie indiquée"
      ]
     },
     "trefle": {
      "vignette": "Vous organisez la prise en charge.",
      "question": "Quels examens ?",
      "reperes": [
       "Scanner cérébral rapide",
       "Bilan d'anticoagulation selon la molécule",
       "Cause de la chute : malaise, hypotension orthostatique",
       "Autres lésions traumatiques"
      ]
     },
     "pique": {
      "vignette": "Scanner normal.",
      "question": "Quelle prise en charge et quelles consignes ?",
      "reperes": [
       "Surveillance selon le protocole",
       "Consignes écrites de surveillance pour l'entourage",
       "Réévaluation de la balance bénéfice-risque de l'anticoagulation avec le médecin traitant",
       "Programme de prévention des chutes",
       "Courrier de liaison vers la ville"
      ]
     }
    }
   },
   {
    "valeur": "9",
    "titre": "Brûlure",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Lina, 30 ans, s'est brûlé l'avant-bras avec de l'eau bouillante il y a 30 minutes.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Agent, durée de contact, refroidissement immédiat",
       "Surface, localisation",
       "Douleur",
       "Vaccination antitétanique",
       "Antécédents"
      ]
     },
     "carreau": {
      "vignette": "Phlyctènes, fond rose et douloureux ; 2 % de la surface corporelle.",
      "question": "Comment évaluez-vous la brûlure ?",
      "reperes": [
       "Brûlure du 2e degré superficiel",
       "Surface estimée avec la paume de la main (≈ 1 %)",
       "Pas de critère de gravité",
       "Prise en charge ambulatoire possible"
      ]
     },
     "trefle": {
      "vignette": "Vous vérifiez les critères de gravité.",
      "question": "Quels critères recherchez-vous ?",
      "reperes": [
       "Surface > 10 % chez l'adulte",
       "Localisation : visage, mains, pieds, périnée, plis",
       "Profondeur : 2e degré profond, 3e degré",
       "Terrain : âges extrêmes, comorbidités"
      ]
     },
     "pique": {
      "vignette": "Brûlure superficielle sans gravité.",
      "question": "Quelle prise en charge ?",
      "reperes": [
       "Refroidissement à l'eau tempérée (environ 15 min) si brûlure récente",
       "Nettoyage, pansement adapté",
       "Antalgie",
       "Mise à jour antitétanique",
       "Revoir à 48 h ; signes d'infection"
      ]
     }
    }
   },
   {
    "valeur": "10",
    "titre": "Asthme aigu",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Malik, 22 ans, asthmatique, consulte pour une gêne respiratoire depuis la veille.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Dyspnée, toux, sifflements",
       "Traitement de fond et de crise, utilisation réelle",
       "Facteurs déclenchants",
       "Antécédents d'asthme grave",
       "FR, SpO₂, FC"
      ]
     },
     "carreau": {
      "vignette": "Il parle par phrases, SpO₂ 94 %, débit expiratoire de pointe à 60 % de la théorique.",
      "question": "Comment évaluez-vous la gravité ?",
      "reperes": [
       "Exacerbation modérée",
       "Gravité : parole difficile, SpO₂ < 92 %, DEP < 50 %, troubles de conscience",
       "Facteur déclenchant : infection, allergène",
       "Asthme mal contrôlé"
      ]
     },
     "trefle": {
      "vignette": "Vous traitez et réévaluez.",
      "question": "Que surveillez-vous ?",
      "reperes": [
       "DEP, SpO₂, FR après bronchodilatateurs",
       "Réponse au traitement à 1 heure",
       "Signes d'épuisement",
       "Gaz du sang si gravité"
      ]
     },
     "pique": {
      "vignette": "Bonne réponse au traitement.",
      "question": "Quelle prise en charge et quel suivi ?",
      "reperes": [
       "Bronchodilatateurs et corticoïdes oraux selon protocole",
       "ETP : technique d'inhalation, plan d'action écrit",
       "Vérification du traitement de fond",
       "Consultation de suivi rapide",
       "Arrêt du tabac"
      ]
     }
    }
   },
   {
    "valeur": "V",
    "titre": "Chute de la personne âgée",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme A., 84 ans, vit seule. Sa voisine l'a retrouvée au sol, où elle a passé la nuit.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Durée au sol",
       "Circonstances, malaise, perte de connaissance",
       "Douleurs, traumatismes",
       "Traitements",
       "Autonomie, aides à domicile"
      ]
     },
     "carreau": {
      "vignette": "Station au sol de 8 heures.",
      "question": "Quels risques identifiez-vous ?",
      "reperes": [
       "Rhabdomyolyse, déshydratation, hypothermie",
       "Escarres",
       "Cause de la chute à rechercher",
       "Fragilité, risque de récidive"
      ]
     },
     "trefle": {
      "vignette": "Vous organisez le bilan.",
      "question": "Quels examens ?",
      "reperes": [
       "CPK, créatinine, ionogramme",
       "ECG, glycémie",
       "Radiographies selon les douleurs",
       "Évaluation cognitive"
      ]
     },
     "pique": {
      "vignette": "Pas de fracture. Elle souhaite rentrer chez elle.",
      "question": "Comment organisez-vous la sortie ?",
      "reperes": [
       "Évaluation de l'autonomie et du domicile",
       "Téléassistance",
       "Lien avec le médecin traitant et les aides",
       "Programme de prévention des chutes",
       "Évaluation gériatrique si possible"
      ]
     }
    }
   },
   {
    "valeur": "D",
    "titre": "Intoxication alcoolique aiguë",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Romain, 19 ans, est amené par ses amis après une soirée. Il est somnolent et a beaucoup bu.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Quantité, type d'alcool, horaire",
       "Autres substances",
       "Traumatisme, chute",
       "Antécédents",
       "Constantes, glycémie"
      ]
     },
     "carreau": {
      "vignette": "Somnolent mais réveillable, Glasgow 13, haleine alcoolique.",
      "question": "Quelles hypothèses formulez-vous ?",
      "reperes": [
       "Intoxication alcoolique aiguë",
       "Ne pas méconnaître : traumatisme crânien, hypoglycémie, autre intoxication",
       "Risque d'inhalation",
       "Surveillance nécessaire"
      ]
     },
     "trefle": {
      "vignette": "Vous le surveillez.",
      "question": "Quels examens et quelle surveillance ?",
      "reperes": [
       "Glycémie capillaire",
       "Alcoolémie selon le contexte",
       "Surveillance neurologique répétée",
       "Recherche de traumatisme"
      ]
     },
     "pique": {
      "vignette": "Il se réveille.",
      "question": "Quelle intervention avant la sortie ?",
      "reperes": [
       "Repérage précoce et intervention brève (RPIB)",
       "Information sur les risques",
       "Orientation vers une Consultation Jeunes Consommateurs",
       "Sortie accompagnée",
       "Lien avec l'entourage"
      ]
     }
    }
   },
   {
    "valeur": "R",
    "titre": "Colique néphrétique",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "M. N., 35 ans, consulte pour une douleur lombaire droite brutale et intense, irradiant vers l'aine.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Siège, irradiation, intensité de la douleur",
       "Fièvre, signes urinaires",
       "Antécédents de lithiase",
       "Fonction rénale connue, rein unique",
       "Grossesse (chez une femme)"
      ]
     },
     "carreau": {
      "vignette": "Patient agité, sans fièvre.",
      "question": "Quelle hypothèse ?",
      "reperes": [
       "Colique néphrétique simple",
       "Formes compliquées : fébrile, anurique, hyperalgique",
       "Différentiels : appendicite ; dissection aortique après 50 ans",
       "Évaluation de la douleur"
      ]
     },
     "trefle": {
      "vignette": "Vous complétez le bilan.",
      "question": "Quels examens ?",
      "reperes": [
       "Bandelette urinaire",
       "Créatinine",
       "Imagerie : scanner sans injection ou échographie",
       "Température"
      ]
     },
     "pique": {
      "vignette": "Colique néphrétique simple.",
      "question": "Quelle prise en charge ?",
      "reperes": [
       "AINS en 1re intention si pas de contre-indication",
       "Filtrer les urines",
       "Signes d'alerte : fièvre, anurie",
       "Consultation urologique selon la taille du calcul",
       "Hydratation"
      ]
     }
    }
   },
   {
    "valeur": "A",
    "titre": "Passages répétés : parcours",
    "sous_titre": "",
    "cartes": {
     "coeur": {
      "vignette": "Mme H., 66 ans, BPCO, consulte pour la quatrième fois en 2 mois aux urgences pour dyspnée.",
      "question": "Quelles données recueillez-vous ?",
      "reperes": [
       "Motifs des passages",
       "Suivi médical en ville",
       "Traitements, observance",
       "Contexte social",
       "Compréhension de la maladie"
      ]
     },
     "carreau": {
      "vignette": "Elle n'a pas de médecin traitant.",
      "question": "Quels problèmes identifiez-vous ?",
      "reperes": [
       "Absence de parcours de soins",
       "Maladie chronique non suivie",
       "Risque d'hospitalisations répétées",
       "Vulnérabilité sociale"
      ]
     },
     "trefle": {
      "vignette": "Vous évaluez sa situation.",
      "question": "Quelles évaluations ?",
      "reperes": [
       "Évaluation respiratoire",
       "Évaluation sociale",
       "Revue des traitements",
       "Ressources locales disponibles"
      ]
     },
     "pique": {
      "vignette": "Elle souhaite être suivie.",
      "question": "Comment organisez-vous le parcours ?",
      "reperes": [
       "Recherche d'un médecin traitant, lien avec la CPTS",
       "Lien avec le dispositif d'appui à la coordination (DAC)",
       "Éducation thérapeutique",
       "Plan d'action écrit",
       "Suivi du nombre de passages (indicateur)"
      ]
     }
    }
   }
  ],
  "jokers": [
   {
    "titre": "Drapeau rouge",
    "icone": "⚑",
    "texte": "Choisissez une situation du jeu et citez au moins deux signes d'alerte qui imposent une orientation urgente.",
    "regle": "Si le groupe valide, ce joker remplace n'importe quelle carte manquante d'un carré."
   },
   {
    "titre": "Leadership & recherche",
    "icone": "◈",
    "texte": "À partir de la dernière situation jouée, proposez une action d'amélioration des pratiques (protocole, audit, formation) ou formulez une question de recherche (PICO).",
    "regle": "Compétences C5 · C6. Si le groupe valide, ce joker remplace une carte manquante d'un carré."
   }
  ]
 }
];
