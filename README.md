Formation Grafikart AngularJS
==========================

Code source de la formation AngularJS de Grafikart

Chaine Youtube de la formation : http://www.youtube.com/watch?v=aBE0St5yI7U&list=PLjwdMgw5TTLUDlJyx4yIPQjoI-w-7Zs1r


Code pour JSON Generator
-----------

Code nécessaire pour générer le fichier JSON du tutorial sur http://www.json-generator.com/
```json
[
  "{{repeat(5, 7)}}",
  {
    "id": "{{index()}}",
    "picture": "http://lorempixel.com/g/250/100?random={{index()+1}}",
    "name": "{{company()}}",
    "content": "{{lorem()}}",
    "tags": ["{{repeat(7)}}", "{{lorem(1)}}"],
    "comments": [
      "{{repeat(1,3)}}",
      {
        "username": "{{firstName()}} {{surname()}}",
        "city": "{{city()}}",
        "email": "{{email()}}",
        "content": "{{lorem(5)}}"
      }
    ]
  }
]
```


