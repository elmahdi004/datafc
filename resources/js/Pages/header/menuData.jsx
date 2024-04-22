const menuData = [
    {
       "id":1,
       "title":"Accueil",
       "path":"/",
       "newTab":false
    },
    {
       "id":4,
       "title":"Qui sommes nous",
       "path":"/sommes-nous",
       "newTab":false
    },
    {
       "id":2,
       "title":"Nos services",
       "newTab":false,
       "submenu":[
          {
             "id":21,
             "title":"Ingénierie de formation",
             "path":"/ingenierie-de-formation",
             "newTab":false
          },
          {
             "id":22,
             "title":"Formation",
             "path":"/formation",
             "newTab":false
          },
          {
             "id":23,
             "title":"Assistance conseil en recrutement",
             "path":"/assistance-conseil-en-recrutement",
             "newTab":false
          },
          {
             "id":24,
             "title":"Domiciliation Entreprise",
             "path":"/domiciliation",
             "newTab":false
          },
          {
             "id":25,
             "title":"Étude Stratégique",
             "path":"/etude_stratigique",
             "newTab":false
          }
         
       ]
    },
    {
       "id":3,
       "title":"Formation",
       "newTab":false,
       "submenu":[
          {
             "id":31,
             "title":"Formations interentreprises",
             "path":"/formations-interentreprises",
             "newTab":false
          },
          {
             "id":32,
             "title":"Nos formations",
             "path":"/nos-formations",
             "newTab":false
          }
       ]
    },
    {
       "id":5,
       "title":"Contact",
       "path":"/contact-nous",
       "newTab":false
    }
 ]
export default menuData;
