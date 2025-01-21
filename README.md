# mrm-technical-api-test
¡Bienvenido al repositorio **mrm-technical-api-test**!
Esta es una guía sencilla para ayudarle a empezar con la configuración y ejecución del proyecto.

## Requerimientos

* Python:3

* PIP:3 
 
* Postgresql

* Node

## Cómo empezar


Siga estos pasos para configurar y ejecutar el proyecto en su máquina local:

### Clonar el repositorio

```git
git@github.com:vcjuliocesar/mrm-technical-api-test.git
```

### En la ruta donde clonaste el proyecto:

**Crea el archivo de entorno:** renombra .env.template por .env

añada sus variables de entorno

**Ejemplo**
#DATABASE
DB_NAME=my_database
DB_USER=root
DB_PASSWORD=secret
DB_HOST=localhost
DB_PORT=5432

#CLIENT
HOST_CLIENT=http://localhost:8080

Es importante que tengas python,pip y postgresql instalados en tu ordenador

**Crear un entorno virtual**

```sh
python3 -m venv env
```
**Activar el Entorno Virtual: En macOS/Linux**

```sh
source env/bin/activate
```

**En Windows**

```sh
.\env\Scripts\activate
```

**Instalar dependencias**

```sh
pip3 install --no-cache-dir requirements.txt
```

**Ejecutar migraciones**
(La base de datos yiene que estar previamente creada)
```sh
python manage.py migrate
```

**Ejecutar el proyecto**

```sh
python manage.py runserver
```

## Cliente

**Instalar dependencias**

```sh
npm i
```
**Ejecutar cliente**

```sh
npm run dev
```

#### Happy Code!