# 👻  **FUNDAMENTOS DE INGENIERÍA DE SOFTWARE**

<img src="https://www.udistrital.edu.co/themes/custom/versh/images/default/preloader.png" width="192px" height="192px" align="right"/>

[![Juan Felipe Rodriguez Galindo](https://img.shields.io/badge/Juferoga-github-br?style=flat-square)][1]
[![Felipe Martin Rodríguez](https://img.shields.io/badge/felimarod-github-blue?style=flat-square)][9]
[![Brayan Stiven Yate](https://img.shields.io/badge/BrayanYate-github-br?style=flat-square)][10]
[![Nicolas Farias](https://img.shields.io/badge/NicoFarii-github-yellow?style=flat-square)][11]
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)][2]


Repositorio para almacenar las tareas, talleres, ejercicios, entre otros que se desarrollen a lo largo de la materia Fundamentos de ingeniería de software, proyecto Cine distrito.

## Contenido

1. Backend  → Desarrollo del backend del aplicativo, en este caso [Django][3].
2. Docs  → Documentación del proyecto hosteada en [github][5].
    - Dentro de los docs se almacenan las actas del desarrollo y los documentos importantes.
4. ETC   → Cosas random a organizar.
3. Frontend → Desarrollo del frontend del aplicativo, en este caso [Angular][4].

## Fast SetUp

### Backend
Primero debes tener instalado [docker][6], ejecuta el script para desplegar en local.

```
./despliegue.sh
```
Otra forma es crear un entorno virtual en python para manejar las librerías necesarias que utiliza django.
```
python3 -m venv venv
source ./venv/bin/activate
```

### Frontend
Sigue la [guía][7]

### Compilar los docs localmente

Instala ruby, y dentro de la carpeta docs ejecuta 
```
bundle install
```
Luego inicia el servidor local con
```
jekyll serve
```
Sigue la [guía de github][8] para más información.

## Contributors:
 - [Juan Felipe Rodríguez Galindo - Código 20181020158][1]
 - [Andrés Felipe Martín R. 20201020137][9]
 - [Brayan Stiven Yate P. 20192020151][10]
 - [Nicolas Farias 20182020096][11]

 [1]:https://gitlab.com/Juferoga
 [2]:https://github.com/Juferoga/fis/blob/main/LICENSE
 [3]:https://angular.io/
 [4]:https://www.djangoproject.com/
 [5]:https://github.com/Juferoga/fis
 [6]:https://www.docker.com/
 [7]:https://github.com/Juferoga/fis/frontend/
 [8]:https://docs.github.com/es/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll
 [9]:https://gitlab.com/felimarod
 [10]:https://gitlab.com/BrayanYate
 [11]:https://gitlab.com/nicofarii
