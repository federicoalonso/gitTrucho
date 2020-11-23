![Imágen Logo ORT](assets/logoort.png)

# Fundamentos de Ingeniería de Software
# Obligatorio 2
___Versión 1.0___

**N4A, Docente: Gerardo Quintana, Martín D'Uva**

**Integrantes: Cristian Palma, Valeria Vera, Federico Alonso.**

23 de noviembre de 2020

**URL del repositorio: https://github.com/ORT-FIS-202008/ob2-ort-fis-obl2-alonso-palma-vera**

# ÍNDICE

### 1. [PREFACIO](#I1)
### 2. [GLOSARIO](#I2)
### 3. [PROCESO DE BUILD](#I3)
- ### 3.1. [Clonar el Repositorio](#I31)
- ### 3.2. [Instalar la Aplicación](#I32)
### 4. [CALIDAD DE CÓDIGO](#I4)
- ### 4.1. [Código en JavaScript](I41)
- ### 4.2. [Código en HTML y CSS](I42)
### 5. [PRUEBAS UNITARIAS](#I5)

# 1. PREFACIO <a name="I1"></a>

El presente repositorio cuenta con la aplicación solicitada por el obligatorio, así como con el estudio de funcionalidad, usabilidad, testig e interfaz de usuario desarrollado a partir de la misma.

Se compone de una estructura de carpetas, en las que se encuentra todo lo necesario para implementar la misma, se desarrolla el procedimiento en la sección [Proceso de build](#I3). Como pasos previos para el mismo se debe tener instalado en el ordenador nodejs, visual studio code y git.

# 2. GLOSARIO <a name="I2"></a>

Se especifíca la terminología utilizada a lo largo del documento:

- *Software:* Conjunto de programas que permiten a la computadora realizar determinadas tareas
- *Usuario*: Persona que utiliza el sistema.
- *Responsive*: Diseño de página web que se adapta de forma automática a la resolución de la pantalla donde está siendo visualizado y a diferentes tipos de dispositivos.
- *Plataforma:* Sistema que permite la ejecución de diversas aplicaciones bajo un mismo entorno, dando a los usuarios la posibilidad de acceder a ellas a través de Internet.
- *Caso de uso:* Secuencia de transacciones que son desarrolladas por un sistema en respuesta a un evento que inicia un actor sobre el propio sistema.
- *Diagrama de casos de uso:* Diagrama que muestra la relación entre los actores y los casos de uso en un sistema.
- *Requerimiento:* Condición o capacidad de un sistema requerida por el usuario para resolver un problema o alcanzar un objetivo.

# 3. PROCESO DE BUILD <a name="I3"></a>

A continuación se detallan los pasos a seguir para ejecutar la aplicación en un entorno local.

## 3.1. Clonar el Repositorio <a name="I31"></a>

Acceder en el navegador a la [Ruta del Repositorio] (https://github.com/ORT-FIS-202008/ob2-ort-fis-obl2-alonso-palma-vera).

![Imágen acceso a ruta](assets/build1.png)

Copiar la ruta para clonar el mismo.

![Imágen copiar la ruta](assets/build2.png)

En una nueva carpeta en el ordenador personal, hacer click derecho con el mouse y seleccionar "Git Bash Here".

![Abrir la consola de git en una carpeta](assets/build3.png)

Introducir el comando:

    - git clone https://github.com/ORT-FIS-202008/ob2-ort-fis-obl2-alonso-palma-vera

![Clonar el repositorio](assets/build4.png)

Acceder a la carpeta creada con el siguiente comando:

    - cd ob2-ort-fis-obl2-alonso-palma-vera

![Acceder a la carpeta del repositorio](assets/build5.png)

## 3.2. Instalar la Aplicación <a name="I32"></a>

Una vez posicionados en la carpeta se debe correr el comando:

    - npm install

Se entiende que ya se tiene instalado nodejs en el ordenador, de lo contrario se debe realizar con anterioridad, por más información visitar [el sitio oficial de nodejs](https://nodejs.org/es/).

![Instalar la aplicación](assets/build6.png)

Luego de la instalación de dependencias, se procede con la actualización de los archivos .js. 

Este proceso sirva para que la aplicación funcione con normalidad sin necesidad de levantarla desde un servidor, además de no tener la necesidad de utilizar archivos de clase distintos para correr las pruebas jest. 

Se debe aplicar el siguiente comando:

    - npm run start

![Actualizar archivos javascript](assets/build7.png)

Después se aplica webpack para minificar los archivos, por lo que mejorará el rendimiento de la aplicación, se debe aplicar el siguiente comando:

    - npm run build

![Webpack](assets/build8.png)

Para finalizar se accede a la carpeta y se hace doble click sobre el index.html

![Abrir en el Navegador](assets/build9.png)

# 4. CALIDAD DE CÓDIGO <a name="4"></a>

El equipo estableció que el estándar de codificación sea el de Google:

[Estandar de google](http://google.github.io/styleguide/), tanto para HTML/ CSS, como para JavaScript.

De esta manera, facilitó el trabajo en equipo, ya que se hizo más fácil leer el código de todos los integrantes del grupo.

Una de las técnicas utilizadas para mejorar la calidad del código consistió en la revisión de código, por cuestiones de tiempo el primer objetivo deseado fue tener la estructura de la página funcionando en detrimento de la calidad del código, pero de esta forma pudimos dividirnos mejor el trabajo, lo cual nos permitió trabajar en paralelo en el testing exploratorio, y la revisión de código y así asegurar el cumplimento de los estándares antes mencionados, para los cuales según la tecnología de desarrollo se encaró de distintas maneras:

## 4.1. Código en JavaScript<a name="I41"></a>

Además, concordamos en utilizar las siguientes herramientas que nos fueron de ayuda para aplicar estos estándares:

- Plugin de VsCode: [JSHint](https://jshint.com/docs/options/)
- Para mejorar el Formateo, vimos que la documentación de Google recomendaba [clang-format](http://clang.llvm.org/docs/ClangFormatStyleOptions.html)

El plugin clang-format nos ayudó a detectar bastantes errores como por ejemplo:

- Indentación.
- Sangría.
- Wspacios en blanco.
- Mal uso de “var” para variables, sugiriendo usar “let” y “const” para los casos que la variable no tenía ninguna reasignación del valor.
- Uso de comillas simples para String.
- Estructuras de control, abertura y clausura.

Cabe aclarar, que fue ignorada la recomendación que sugería eliminar el punto y coma al final de cada sentencia, pero que si era recomendado por el plugin JsHint.

![Calidad de codigo 1](assets/calidad1.png)

## 4.2. Código en HTML y CSS <a name="I42"></a>

Además, concordamos en utilizar las siguientes herramientas que nos fueron de ayuda para aplicar estos estándares:

Como herramienta para la validación del código HTML y CSS, subimos nuestro código al siguiente sitio [validador](https://validator.w3.org/#validate_by_upload), obteniendo los siguientes resultados:

- en la página crearLecciones.html

![Calidad de codigo 2](assets/calidad2.png)

- en la página realizarLección.html

![Calidad de codigo 3](assets/calidad3.png)

- en la página verLecciones.html 

![Calidad de codigo 4](assets/calidad4.png)

- Validación del css en [jigsaw.w3.org](https://jigsaw.w3.org/css-validator/)

![Calidad de codigo 5](assets/calidad5.png)

- En el archivo stylesConfig.css

![Calidad de codigo 6](assets/calidad6.png)

Para mejorar aún más la calidad del código, y la compresión de todos los miembros del equipo, pusimos especial énfasis en la documentación del código cuando la complejidad ameritaba, para lo cual utilizamos los estándares recomendados por JSDoc.

# 5. PRUEBAS UNITARIAS

Se configuran pruebas unitarias para el proceso de detección de errores en el dominio del sistema creado. La herramienta utilizada para el procedimiento es jestjs (para mayor información visitar su [sitio oficial](https://jestjs.io/)).

El detalle de lo realizado con la aplicación de la herramienta se encuentra en el [estudio de pruebas unitarias](src/tests/README.md).

Para correr las prebas unitarias sobre el sistema, se debe aplicar el comando:

    - npm run test

El resultado del mismo es una cobertura del 100% de las funciones. y un 100% de las líneas de código.

![Captura de pruebas luego de la solucionar la reestructuración](src/tests/assets/pruebas3.png)

Como aprendizaje se obtuvo que es más fiable contar con la herramienta, se verifica que al momento de realizar cambios en la aplicación o reestructura de código, se tiene el respaldo de las pruebas para corroborar que el código sigue funcionando como corresponde, por lo que el trabajo realizado una única vez ahorra tiempo de pruebas a futuro.

# 6. INTERFAZ DE USUARIO

## 6.1 Análisis de las Heurísticas de Nielsen

## 6.2 Análisis de Usabilidad

## 6.3 Análisis de Accesibilidad

# 7. TESTING FUNCIONAL

# 8. REPORTE DE DEFECTOS

# 9. TRABAJO DEL EQUIPO

# 10. REFLEXIÓN
