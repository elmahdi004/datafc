<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
/* use App\Models\ProgrammeFormation; */


class ProgrammeFormationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "id" => "1",
                "Titre" => " Les missions de chef de projet",
                "formation_id" => "1"
            ],
            [
                "id" => "2",
                "Titre" => " S’affirmer en tant que chef de projet ",
                "formation_id" => "1"
            ],
            [
                "id" => "3",
                "Titre" => " Etre efficace dans l’animation de l’équipe-projet",
                "formation_id" => "1"
            ],
            [
                "id" => "4",
                "Titre" => " Dimension humaine dans la motivation de l’équipe-projet ",
                "formation_id" => "1"
            ],
            [
                "id" => "5",
                "Titre" => " Le chef de projet en Management transversal",
                "formation_id" => "1"
            ],
            [
                "id" => "6",
                "Titre" => " Différencier problèmes tension, crise et conflits",
                "formation_id" => "2"
            ],
            [
                "id" => "7",
                "Titre" => " Utilisation des comportements efficaces pour résoudre les conflits ",
                "formation_id" => "2"
            ],
            [
                "id" => "8",
                "Titre" => " Assumer ses responsabilités face aux conflits",
                "formation_id" => "2"
            ],
            [
                "id" => "9",
                "Titre" => " Les outils de gestion de conflits ",
                "formation_id" => "2"
            ],
            [
                "id" => "10",
                "Titre" => "Acquérir une vision globale de la fonction RH et ses enjeux",
                "formation_id" => "3"
            ],
            [
                "id" => "11",
                "Titre" => "Identifier les enjeux et impacts de la fonction RH.",
                "formation_id" => "3"
            ],
            [
                "id" => "12",
                "Titre" => "Diagnostiquer les pratiques RH de son entreprise.",
                "formation_id" => "3"
            ],
            [
                "id" => "13",
                "Titre" => "Identifier les missions, rôles et compétences du DRH et RRH.",
                "formation_id" => "3"
            ],
            [
                "id" => "14",
                "Titre" => " Processus de recrutement.",
                "formation_id" => "3"
            ],
            [
                "id" => "15",
                "Titre" => "Définition du poste de travail-profil.",
                "formation_id" => "3"
            ],
            [
                "id" => "16",
                "Titre" => "Processus de présélection et planification des entretiens de recrutement.",
                "formation_id" => "3"
            ],
            [
                "id" => "17",
                "Titre" => " Bâtir une gestion prévisionnelles des emplois et compétences (GPEC)",
                "formation_id" => "4"
            ],
            [
                "id" => "18",
                "Titre" => " Situer les enjeux et étapes de la GPEC.",
                "formation_id" => "4"
            ],
            [
                "id" => "19",
                "Titre" => " Connaître le cadre juridique et les points clés d'un accord.",
                "formation_id" => "4"
            ],
            [
                "id" => "20",
                "Titre" => " Élaborer un référentiel de métiers et de compétences.",
                "formation_id" => "4"
            ],
            [
                "id" => "21",
                "Titre" => " Identifier les métiers sensibles et stratégiques.",
                "formation_id" => "4"
            ],
            [
                "id" => "22",
                "Titre" => " Identifier les écarts qualitatifs et quantitatifs.",
                "formation_id" => "4"
            ],
            [
                "id" => "23",
                "Titre" => " Élaborer un plan d'actions RH.",
                "formation_id" => "4"
            ],
            [
                "id" => "24",
                "Titre" => " La formation : composante du plan stratégique de l’entreprise",
                "formation_id" => "5"
            ],
            [
                "id" => "25",
                "Titre" => " Articuler GPEC et formation.",
                "formation_id" => "5"
            ],
            [
                "id" => "26",
                "Titre" => " La formation et le système des contrats spéciaux de formation (CSF).",
                "formation_id" => "5"
            ],
            [
                "id" => "27",
                "Titre" => " Bâtir un plan de développement des compétences.",
                "formation_id" => "5"
            ],
            [
                "id" => "28",
                "Titre" => " Mettre en place le plan, évaluer la formation.",
                "formation_id" => "5"
            ],
            [
                "id" => "29",
                "Titre" => " Innover et digitaliser les dispositifs.",
                "formation_id" => "5"
            ],
            [
                "id" => "30",
                "Titre" => " Mettre en place un plan des entretiens annuels et professionnels",
                "formation_id" => "6"
            ],
            [
                "id" => "31",
                "Titre" => " Elaborer des supports et des référentiels d'évaluation.",
                "formation_id" => "6"
            ],
            [
                "id" => "32",
                "Titre" => " Mener des évaluations avec objectivité et prévenir les situations à risque.",
                "formation_id" => "6"
            ],
            [
                "id" => "33",
                "Titre" => " Distinguer entretien annuel et professionnel.",
                "formation_id" => "6"
            ],
            [
                "id" => "34",
                "Titre" => " Explorer les motivations et le projet professionnel.",
                "formation_id" => "6"
            ],
            [
                "id" => "35",
                "Titre" => " Gérer les cas difficiles en termes de mobilité.",
                "formation_id" => "6"
            ],
            [
                "id" => "36",
                "Titre" => "  Identifier et développer les potentiels et les talents",
                "formation_id" => "6"
            ],
            [
                "id" => "37",
                "Titre" => " Les critères d'évaluation du potentiel et des talents.",
                "formation_id" => "6"
            ],
            [
                "id" => "38",
                "Titre" => " Bâtir des plans de succession.",
                "formation_id" => "6"
            ],
            [
                "id" => "39",
                "Titre" => " Développer et fidéliser les talents.",
                "formation_id" => "6"
            ],
            [
                "id" => "40",
                "Titre" => " Gestion du système de rémunération",
                "formation_id" => "7"
            ],
            [
                "id" => "41",
                "Titre" => " Composantes de la rémunération globale.",
                "formation_id" => "7"
            ],
            [
                "id" => "42",
                "Titre" => " Analyser des grilles de salaire.",
                "formation_id" => "7"
            ],
            [
                "id" => "43",
                "Titre" => " Individualiser les salaires. Créer une part variable.",
                "formation_id" => "7"
            ],
            [
                "id" => "44",
                "Titre" => " Identifier les périphériques de la rémunération.",
                "formation_id" => "7"
            ],
            [
                "id" => "45",
                "Titre" => " La législation de travail dans le fonctionnement de l’entreprise",
                "formation_id" => "8"
            ],
            [
                "id" => "46",
                "Titre" => " Les différents types de contrats de travail",
                "formation_id" => "8"
            ],
            [
                "id" => "47",
                "Titre" => " La résiliation du contrat de travail",
                "formation_id" => "8"
            ],
            [
                "id" => "48",
                "Titre" => " Les causes de réduction de la durée de travail",
                "formation_id" => "8"
            ],
            [
                "id" => "49",
                "Titre" => " Règlement des conflits collectifs de travail par la législation ",
                "formation_id" => "8"
            ],
            [
                "id" => "50",
                "Titre" => " Le rôle du Formateur",
                "formation_id" => "9"
            ],
            [
                "id" => "51",
                "Titre" => " Les fonctions du formateur ",
                "formation_id" => "9"
            ],
            [
                "id" => "52",
                "Titre" => " Les techniques d’animations et de choix des méthodes pédagogiques",
                "formation_id" => "9"
            ],
            [
                "id" => "53",
                "Titre" => " Utilisation des supports de formation adéquats,",
                "formation_id" => "9"
            ],
            [
                "id" => "54",
                "Titre" => " Gestion du temps lors d’une séquence de formation,",
                "formation_id" => "9"
            ],
            [
                "id" => "55",
                "Titre" => " Dispositif d’évaluation de l’acte de Formation ",
                "formation_id" => "9"
            ],
            [
                "id" => "56",
                "Titre" => " Identifier les leviers de motivation des différents participants ;",
                "formation_id" => "10"
            ],
            [
                "id" => "57",
                "Titre" => " Attirer l’attention des participants en travaillant sa propre présence ;",
                "formation_id" => "10"
            ],
            [
                "id" => "58",
                "Titre" => " Favoriser les interactions entre les participants pour faciliter l’apprentissage ;",
                "formation_id" => "10"
            ],
            [
                "id" => "59",
                "Titre" => " Utiliser les principes de neurosciences dans ses pratiques d’animations ; ",
                "formation_id" => "10"
            ],
            [
                "id" => "60",
                "Titre" => " Adopter une communication qui facilite les échanges en situations difficiles ;",
                "formation_id" => "10"
            ],
            [
                "id" => "61",
                "Titre" => " Identifier les techniques d’évaluations appropriées pour mesurer l’impact de l’acte de formation      ",
                "formation_id" => "10"
            ],
            [
                "id" => "62",
                "Titre" => " Sensibilisation à la qualité",
                "formation_id" => "11"
            ],
            [
                "id" => "63",
                "Titre" => " Les missions du responsable qualité",
                "formation_id" => "11"
            ],
            [
                "id" => "64",
                "Titre" => " Le diagnostic de la qualité dans l’entreprise ",
                "formation_id" => "11"
            ],
            [
                "id" => "65",
                "Titre" => " Les outils de management de la qualité",
                "formation_id" => "11"
            ],
            [
                "id" => "66",
                "Titre" => " Formaliser un système qualité ",
                "formation_id" => "11"
            ],
            [
                "id" => "67",
                "Titre" => " Références et domaines d’applications de la norme ISO 9001",
                "formation_id" => "12"
            ],
            [
                "id" => "68",
                "Titre" => " Exigences principales de l'ISO 9001 : pratique dans l'entreprise.",
                "formation_id" => "12"
            ],
            [
                "id" => "69",
                "Titre" => " Les objectifs visés par la norme ISO 9001",
                "formation_id" => "12"
            ],
            [
                "id" => "70",
                "Titre" => " Les objectifs de la certification et le déroulement de l'audit.",
                "formation_id" => "12"
            ],
            [
                "id" => "71",
                "Titre" => " Conformité des produits et des services (Les 5 M)",
                "formation_id" => "12"
            ],
            [
                "id" => "72",
                "Titre" => " Utilité des procédures dans l’amélioration continue et la satisfaction des clients ",
                "formation_id" => "12"
            ],
            [
                "id" => "73",
                "Titre" => " Présentation du système de gestion de qualité HACCP ;",
                "formation_id" => "13"
            ],
            [
                "id" => "74",
                "Titre" => " Démarche d’instauration du HACCP ;",
                "formation_id" => "13"
            ],
            [
                "id" => "75",
                "Titre" => " Analyse des dangers et identification des dangers potentiels",
                "formation_id" => "13"
            ],
            [
                "id" => "76",
                "Titre" => " Analyse et identification des points critiques",
                "formation_id" => "13"
            ],
            [
                "id" => "77",
                "Titre" => " Etablissement des limites critiques",
                "formation_id" => "13"
            ],
            [
                "id" => "78",
                "Titre" => " Méthodes de surveillance des PCC",
                "formation_id" => "13"
            ],
            [
                "id" => "79",
                "Titre" => " Documentation du HACCP",
                "formation_id" => "13"
            ],
            [
                "id" => "80",
                "Titre" => " Démarche santé et sécurité au travail et vocabulaire associé (danger, dommage, événement dangereux, risques).",
                "formation_id" => "14"
            ],
            [
                "id" => "81",
                "Titre" => " Les indicateurs clés SST.",
                "formation_id" => "14"
            ],
            [
                "id" => "82",
                "Titre" => " Analyse de risques SST",
                "formation_id" => "14"
            ],
            [
                "id" => "83",
                "Titre" => " Etablir un bilan sécurité et faire un document pour l’évaluation de risques SST",
                "formation_id" => "14"
            ],
            [
                "id" => "84",
                "Titre" => " Agir sur l’esprit sécurité pour favoriser la protection (Réduction de la gravité) et la prévention (Réduire la probabilité d’apparition des risques) ",
                "formation_id" => "14"
            ],
            [
                "id" => "85",
                "Titre" => " Faire respecter les consignes clés par les salariés ",
                "formation_id" => "14"
            ],
            [
                "id" => "86",
                "Titre" => " Analyser les accidents (Arbre des causes) et mettre en place les mesures correctives ;",
                "formation_id" => "14"
            ],
            [
                "id" => "87",
                "Titre" => " Impliquer l’encadrement pour développer une logique d'accompagnement et Réagir aux non-respects des consignes.",
                "formation_id" => "14"
            ],
            [
                "id" => "88",
                "Titre" => " Evaluer à chaque fois les progrès obtenus en les communicant à tous les niveaux pour instaurer une dynamique sécurité dans son activité.  ",
                "formation_id" => "14"
            ],
            [
                "id" => "89",
                "Titre" => " Les enjeux des systèmes de management Santé Sécurité Environnement (SSE).",
                "formation_id" => "15"
            ],
            [
                "id" => "90",
                "Titre" => "  la réglementation SSE.",
                "formation_id" => "15"
            ],
            [
                "id" => "91",
                "Titre" => " Missions d'un responsable SSE.",
                "formation_id" => "15"
            ],
            [
                "id" => "92",
                "Titre" => " Aperçus général sur les référentiels ISO 14001et 45001 ;",
                "formation_id" => "15"
            ],
            [
                "id" => "93",
                "Titre" => " L’identification et l'analyse des risques SSE, ",
                "formation_id" => "15"
            ],
            [
                "id" => "94",
                "Titre" => " Conduite des actions de prévention et de protection...",
                "formation_id" => "15"
            ],
            [
                "id" => "95",
                "Titre" => " Evaluation et suivi des actions sur les chantiers ;",
                "formation_id" => "15"
            ],
            [
                "id" => "96",
                "Titre" => " Utilisation du cycle PDCA",
                "formation_id" => "15"
            ],
            [
                "id" => "97",
                "Titre" => " Définir les objectifs à partir de la politique SSE et Etablir un plan d’action SSE ;",
                "formation_id" => "15"
            ],
            [
                "id" => "98",
                "Titre" => " Faire un état des lieux et mener des audits de poste pour progresser ;",
                "formation_id" => "15"
            ],
            [
                "id" => "99",
                "Titre" => " Les actions correctives en cas d’incidents et identification des causes premières.",
                "formation_id" => "15"
            ],
            [
                "id" => "100",
                "Titre" => " Elaborer des bilans et conduire des réunions chantier.",
                "formation_id" => "15"
            ],
            [
                "id" => "101",
                "Titre" => " Etablir Les indicateurs SSE à suivre et le tableau de bord, pour l’application du PDCA",
                "formation_id" => "15"
            ],
            [
                "id" => "102",
                "Titre" => " Etablir le plan de communication SSE pour clarifier les responsabilités de chacun",
                "formation_id" => "15"
            ],
            [
                "id" => "103",
                "Titre" => " Définition de l’arbre des causes ;",
                "formation_id" => "16"
            ],
            [
                "id" => "104",
                "Titre" => " Les intérêts et les limites de l'arbre des causes ; ",
                "formation_id" => "16"
            ],
            [
                "id" => "105",
                "Titre" => " Rôle de l’arbre des causes dans la résolution de problème ;",
                "formation_id" => "16"
            ],
            [
                "id" => "106",
                "Titre" => " Analyse de l'accident et recueil des faits et des données ;",
                "formation_id" => "16"
            ],
            [
                "id" => "107",
                "Titre" => " Recherche de l’enchaînement des causes à l’origine de l’événement.",
                "formation_id" => "16"
            ],
            [
                "id" => "108",
                "Titre" => " Construire l’arbre des causes en respectant la logique d’enchainement des évènements ",
                "formation_id" => "16"
            ],
            [
                "id" => "109",
                "Titre" => "Réaliser des comptes-rendus d'accidents exploitables et déduire les actions correctives et préventives clés.",
                "formation_id" => "16"
            ]


        ];
        \App\Models\ProgrammeFormation::insert($data);
    }
}
