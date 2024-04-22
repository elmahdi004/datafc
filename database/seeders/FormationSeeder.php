<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FormationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data=

        [ [
            "id" => "1",
            "code" => "DFC 11",
            "titre" => "Management d’équipe-projet",
            "objectifs" => "Connaître les techniques adaptées pour rendre efficace son équipe projet ",
            "population_cible" => "GRH, Managers, chefs de production et chefs d’équipes",
            "duree" => " 2 jours ",

            "formation_categories_id" => "1",


            "block" => 1
         ],
      [
               "id" => "2",
               "code" => "DFC 12",
               "titre" => "Gestion des conflits dans la vie professionnelle ",
               "objectifs" => "Maîtriser la gestion efficace des conflits spéciaux au management ",
               "population_cible" => "Managers, hiérarchique ou transversal, chefs de projet",
               "duree" => " 2 jours ",

               "formation_categories_id" => "1",


               "block" => 1
            ],
      [
                  "id" => "3",
                  "code" => "DFC 13",
                  "titre" => "GRH : Missions du RRH et recrutement",
                  "objectifs" => "Identifier et comprendre les enjeux de la fonction RH",
                  "population_cible" => "DRH, RRH prenant leurs fonctions , cadre ou manager opérationnels nommés RRH",
                  "duree" => " 2 jours ",

                  "formation_categories_id" => "1",


                  "block" => 1
               ],
      [
                     "id" => "4",
                     "code" => "DFC 14",
                     "titre" => "GRH : La gestion des compétences",
                     "objectifs" => "Savoir mettre en place une GPEC et élaborer son référentiel de compétences ",
                     "population_cible" => "DRH, RRH prenant leurs fonctions , cadre ou manager opérationnels nommés RRH",
                     "duree" => " 2 jours ",

                     "formation_categories_id" => "1",


                     "block" => 1
                  ],
      [
                        "id" => "5",
                        "code" => "DFC 15",
                        "titre" => "Formation Professionnelle",
                        "objectifs" => "Piloter la politique de la formation dans l’entreprise ",
                        "population_cible" => "DRH, RRH prenant leurs fonctions ,cadre ou manager opérationnels nommés RRH",
                        "duree" => " 2 jours ",

                        "formation_categories_id" => "1",


                        "block" => 1
                     ],
      [
                           "id" => "6",
                           "code" => "DFC 16",
                           "titre" => "Fonction RH, Evaluation mobilité et gestion des talents",
                           "objectifs" => "Maitriser les méthodes et les techniques de gestion de mobilité et des talents",
                           "population_cible" => "DRH, RRH prenant leurs fonctions ,cadre ou manager opérationnels nommés RRH",
                           "duree" => " 2 jours ",

                           "formation_categories_id" => "1",


                           "block" => 1
                        ],
      [
                              "id" => "7",
                              "code" => "DFC 17",
                              "titre" => "GRH : La rémunération",
                              "objectifs" => "Sécuriser ses pratiques RH par la législation de travail",
                              "population_cible" => "DRH, RRH prenant leurs fonctions ,cadre ou manager opérationnels nommés RRH",
                              "duree" => " 2 jours ",

                              "formation_categories_id" => "1",


                              "block" => 1
                           ],
      [
                                 "id" => "8",
                                 "code" => "DFC 18",
                                 "titre" => "GRH : Législation de travail",
                                 "objectifs" => "Maîtriser la gestion du système de rémunération ",
                                 "population_cible" => "DRH, RRH prenant leurs fonctions ,cadre ou manager opérationnels nommés RRH",
                                 "duree" => " 2 jours ",

                                 "formation_categories_id" => "1",


                                 "block" => 1
                              ],
      [
                                    "id" => "9",
                                    "code" => "DFC 21",
                                    "titre" => "Se former au métier de formateur ",
                                    "objectifs" => "Acquérir les méthodes et les techniques nécessaires pour exercer le métier de Formateur dans l’entreprise ",
                                    "population_cible" => "Personne désirant exercer Le métier de formateur,",
                                    "duree" => " 2 jours ",

                                    "formation_categories_id" => "2",


                                    "block" => 1
                                 ],
      [
                                       "id" => "10",
                                       "code" => "DFC 22",
                                       "titre" => "Réussir une action de formation ",
                                       "objectifs" => "Acquérir les méthodes pédagogiques et les techniques d’animations pour réussir une action de formation ",
                                       "population_cible" => "Formateur confirmé désirant faire le point sur sa pratique et innover",
                                       "duree" => " 2 jours ",

                                       "formation_categories_id" => "2",


                                       "block" => 1
                                    ],
      [
                                          "id" => "11",
                                          "code" => "DFC 31",
                                          "titre" => "Sensibilisation à la qualité ",
                                          "objectifs" => "Sensibiliser les participants sur les enjeux d’une démarche qualité",
                                          "population_cible" => "Toute personne désirant comprendre les enjeux et principes d’une démarche qualité.",
                                          "duree" => " 2 jours ",

                                          "formation_categories_id" => "3",


                                          "block" => 1
                                       ],
      [
                                             "id" => "12",
                                             "code" => "DFC 32",
                                             "titre" => "Les fondamentaux de la qualité et de l’ISO 9001",
                                             "objectifs" => "Connaître les enjeux et les principes de la qualité et de l’ISO 9001",
                                             "population_cible" => "Toute personne désirant comprendre les enjeux et principes d’une démarche qualité.",
                                             "duree" => " 2 jours ",

                                             "formation_categories_id" => "3",


                                             "block" => 1
                                          ],
      [
                                                "id" => "13",
                                                "code" => "DFC 33",
                                                "titre" => "Normes HACCP ",
                                                "objectifs" => "Savoir appliquer le système de gestion de qualité HACCP ",
                                                "population_cible" => "Responsables qualité-Chefs d’atelier-Chefs de chaîne-Responsables de production ",
                                                "duree" => " 2 jours ",

                                                "formation_categories_id" => "3",


                                                "block" => 1
                                             ],
      [
                                                   "id" => "14",
                                                   "code" => "DFC 34",
                                                   "titre" => "Hygiène et sécurité « Sensibilisation à la santé et sécurité au travail »",
                                                   "objectifs" => "Sensibiliser les participants sur la sécurité au travail",
                                                   "population_cible" => "Responsable, manager référent/animateur Santé-Sécurité, personne gérant protection/prévention des risques professionnels",
                                                   "duree" => " 2 jours ",

                                                   "formation_categories_id" => "3",


                                                   "block" => 1
                                                ],
      [
                                                      "id" => "15",
                                                      "code" => "DFC 35",
                                                      "titre" => "Management de la Santé : Sécurité et environnement dans l’entreprise ",
                                                      "objectifs" => "Maitriser les principes de management SSE pour améliorer la performance SST de l'entreprise.",
                                                      "population_cible" => "Responsable Santé / sécurité-Environnement ",
                                                      "duree" => " 2 jours ",

                                                      "formation_categories_id" => "3",


                                                      "block" => 1
                                                   ],
      [
                                                         "id" => "16",
                                                         "code" => "DFC 36",
                                                         "titre" => "Santé : Sécurité- arbre des causes ",
                                                         "objectifs" => "Maitriser les techniques d’élaboration de l’arbre des causes pour déduire les mesures correctives et préventives contre les accidents. ",
                                                         "population_cible" => "Responsable Santé-Sécurité, qualité et/ou environnement, Membre du CSE ",
                                                         "duree" => " 2 jours ",

                                                         "formation_categories_id" => "3",


                                                         "block" => 1
                                                      ],
      [
                                                            "id" => "17",
                                                            "code" => "DFC 37",
                                                            "titre" => "Santé : Sécurité-Prévention des risques ",
                                                            "objectifs" => " Savoir élaborer et mettre en œuvre un plan de prévention pour maîtriser les risques liés aux entreprises extérieures.",
                                                            "population_cible" => "Responsable Santé-Sécurité, qualité et/ou environnement, Membre du CSE ",
                                                            "duree" => " 2 jours ",

                                                            "formation_categories_id" => "3",


                                                            "block" => 1
                                                         ],
      [
                                                               "id" => "18",
                                                               "code" => "DFC 41",
                                                               "titre" => "Comptabilité générale",
                                                               "objectifs" => "Connaitre la logique comptable et savoir utiliser le plan comptable ",
                                                               "population_cible" => "Débutants en comptabilité. ",
                                                               "duree" => " 2 jours ",

                                                               "formation_categories_id" => "4",


                                                               "block" => 1
                                                            ],
      [
                                                                  "id" => "19",
                                                                  "code" => "DFC 42",
                                                                  "titre" => "Comptabilité générale : Les opérations courantes ",
                                                                  "objectifs" => "Savoir Comptabiliser les opérations courantes d'achats, de ventes, d'investissement, de trésorerie et de personnel. ",
                                                                  "population_cible" => "Débutants en comptabilité. ",
                                                                  "duree" => " 2 jours ",

                                                                  "formation_categories_id" => "4",


                                                                  "block" => 1
                                                               ],
      [
                                                                     "id" => "20",
                                                                     "code" => "DFC 43",
                                                                     "titre" => "Comptabilité Analytique ",
                                                                     "objectifs" => "Etre capable de :Calculer les charges et traiter de la CAE",
                                                                     "population_cible" => "personne cherchant à consolider une première expérience en comptabilité ",
                                                                     "duree" => " 2 jours ",

                                                                     "formation_categories_id" => "4",


                                                                     "block" => 1
                                                                  ],
      [
                                                                        "id" => "21",
                                                                        "code" => "DFC 44",
                                                                        "titre" => "Pratiquer l’analyse financière ",
                                                                        "objectifs" => "Maîtriser les outils d'analyse financière",
                                                                        "population_cible" => "Responsable financier, chef comptable, contrôleur de gestion",
                                                                        "duree" => " 2 jours ",

                                                                        "formation_categories_id" => "4",


                                                                        "block" => 1
                                                                     ],
      [
                                                                           "id" => "22",
                                                                           "code" => "DFC 45",
                                                                           "titre" => "Analyse financière du tableau de flux de trésorerie ",
                                                                           "objectifs" => "Etre capable d’analyser le tableau de flux ",
                                                                           "population_cible" => "Responsable financier, chef comptable, contrôleur de gestion",
                                                                           "duree" => " 2 jours ",

                                                                           "formation_categories_id" => "4",


                                                                           "block" => 1
                                                                        ],
      [
                                                                              "id" => "23",
                                                                              "code" => "DFC 51",
                                                                              "titre" => "Communication en interne ",
                                                                              "objectifs" => "S’approprier des fondamentaux de la communication interne. ",
                                                                              "population_cible" => "personne ayant en charge de la communication interne au sein de son organisation.",
                                                                              "duree" => " 2 jours ",

                                                                              "formation_categories_id" => "5",


                                                                              "block" => 1
                                                                           ]
   ];
   \App\Models\Formation::insert($data);

    }
}
