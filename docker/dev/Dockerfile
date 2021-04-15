FROM node:12
#Aquí le digo a docker que versión de node voy a ocupar

WORKDIR /usr/src/app
#Aquí le digo a docker donde va a estar trabajando mi container
#/opt/app

COPY package*.json ./
#copia los package y muevelos al WORKDIR

RUN npm install
#aquí instalo todas las dependencias de mi proyecto

RUN npm install nodemon -g
#Instalando de manera global nodemon

COPY . .
#voy a copiar el resto de los archivos al WORKDIR

EXPOSE 3000
#Expon(abre) el puerto para que te puedas conectar

CMD ["nodemon","-L","--watch",".","server.js"]
#nodemon -L --watch . server.js
#-L, --legacy-watch ...... use polling to watch for changes (typically needed when watching over a network/Docker)
#entrypoint - punto de entrada es la linea principal que ejecuta o inicia el container
#Va a ejecutar el comando node server.js como si lo escribieramos en la consola

# Comandos de Docker
# Crear la imagen.
# docker build -t <nombre_de_la_imagen> .
 
# Correr la imagen. Conectar el puerto 3000 del contenedor al 8000 de mi computadora.
# docker run -p 8000:3000 -d <nombre_de_la_imagen>
 
# Ver qué imágenes tengo en mi computadora.
# docker images
 
# Ver qué contenedores están en ejecución.
# docker ps
 
# Ver qué logs tiene mi contenedor.
# docker logs <id_que_se_obtiene_con_docker_ps>
 
# Dejar de ejecutar un contenedor.
# docker stop <id_que_se_obtiene_con_docker_ps>

# Ejecutar un comando dentro de un contenedor.
# docker exec -it <id_que_se_obtiene_con_docker_ps> <comando>