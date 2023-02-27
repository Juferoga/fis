---
title: Fase de análisis
author: Juferoga
date: 2023-02-01
category: Jekyll
layout: post
---

Una de las etapas fundamentales y más importante para el desarrollo de software. Es la etapa en la cual se analiza el proyecto, es en la cual podemos obtener los fundamentos en los que se basara el proyecto que se cree.


## Situación problema
--- 

La situación problema consiste en el diseño e implementación de un sistema de compra en línea para la empresa Cine Distrito, que permita a los usuarios comprar boletas y snacks desde puntos ágiles cercanos a los multiplex o dentro de ellos en Latinoamérica. Este sistema debe ser capaz de mostrar la disponibilidad de sillas y salas en los multiplex, así como permitir el pago en línea para reservar las sillas para los clientes que hayan pagado. También debe tener un sistema de puntos para que los clientes acumulen puntos con cada compra, que luego pueden canjear por boletas gratuitas. La empresa también necesita una base de datos centralizada para registrar la información personal y laboral de sus empleados y debe tener la capacidad de generar reportes estadísticos sobre las operaciones mensuales. Por último, el sistema debe garantizar la seguridad de la información y tener un control de acceso y autenticación adecuado.

<!-- ## Problemáticas empresariales
--- 

Draft
## Métodos de recolección de la información
--- 
-->

Draft

## Definición de objetivos
--- 

*Diseñar e implementar una interfaz de usuario amigable e intuitiva que permita a los clientes seleccionar el multiplex, la película y la silla que desean reservar.

*  Desarrollar un sistema de pago en línea seguro que permita a los clientes realizar sus transacciones de forma rápida y sencilla.

*  Crear un sistema de puntos para que los clientes acumulen puntos con cada compra y puedan canjearlos por boletas gratuitas.

*  Implementar una base de datos centralizada para registrar la información personal y laboral de los empleados de Cine Distrito.

*  Garantizar la seguridad de la información almacenada y tener un control de acceso y autenticación adecuado para proteger la privacidad de los clientes y empleados.

*  Generar reportes estadísticos mensuales que permitan a la empresa analizar sus operaciones y tomar decisiones informadas para mejorar su rendimiento.

*  Realizar pruebas rigurosas para garantizar la calidad y el rendimiento del sistema antes de su implementación en los diferentes multiplex de Latinoamérica.


## Requerimientos funcionales y no funcionales
--- 



### Requerimientos NO funcionales - criterios de aceptación
---

#### Disponibilidad

| ID     | Rol     | Característica | Resultado | Criterio de Aceptación |
|:------ | :------:  | -------------- | --------  | ---------------------- |
| 1      | roles   | Consultas en la plataforma  | Se obtendrá una información por parte del api  | **Dado** cualquier usuario que desee obtener alguna información y lo tenga permitido, **cuando** se realice la petición **entonces** el sistema tiene que retornar la información en menos de 0.5 seg mínimo. |
| 1      | roles   | Consultas en la plataforma  | Se obtendrá una información por parte del api  | **Dado** cualquier usuario que desee obtener alguna información y lo tenga permitido, **cuando** se realice la petición **entonces** el sistema tiene que retornar la información en menos de 0.5 seg mínimo. |
#### Mantenibilidad
| ID | Rol | Característica | Resultado | Criterio de Aceptación |
| -- | --- | -------------- | --------- | ---------------------- |
| 1 | Programador | Necesito conocer la manera en que funciona el sistema en la actualidad | Con la finalidad de optimizar y mejorar los sistemas actuales |  |  |  |
| 2 | 
%% **Como** programador **quiero** analizar el código existente **para** mejorar y/o mantener el mismo |  |  |  |
Presentar un código que no tenga antipatrones y cuente con buenas practicas de programación como SOLID.
#### Seguridad
- Condicionar a las políticas de seguridad del dominio.

| ID     | Rol     | Característica                   | Resultado | Criterio de Aceptación |
| ------ | ------  | ----                             | ------    | ------                 |
| 1      | Usuario | Necesito recuperar mi contraseña | Conocer o cambiar mi contraseña | **Dado** un usuario sin loguear **cuando** desea ingresar a la plataforma **entonces** no puede ya que desconoce la contraseña.  |
| 2      | Usuario | Necesito recuperar mi usuario | Conocer o cambiar mi usuario | **Dado** un usuario sin loguear **cuando** desea ingresar a la plataforma **entonces** no puede ya que desconoce el usuario.
| 3      | Usuario | Necesito pagar por los servicios de la plataforma| Pago de los servicios | **Dado** un usuario con una tarjeta validad **cuando** desea pagar por algun servicio de la plataforma **entonces**  


## Definición de actores y privilegios por actor
--- 

    * **Administrador del sistema:** Este rol tendría acceso completo al sistema, incluyendo la capacidad de agregar y eliminar usuarios, crear y modificar roles y privilegios, y tener acceso a todas las funciones del sistema. Solo un pequeño número de personas tendría este rol para garantizar la seguridad del sistema.

    * **Empleados de Cine Distrito:** Este rol tendría acceso a la información personal y laboral de cada empleado y solo podrían modificar la información que esté relacionada con su propio perfil. También tendrían acceso a información sobre la disponibilidad de sillas y salas en los diferentes multiplex para poder ayudar a los clientes a tomar decisiones informadas.

    * **Clientes:** Este rol tendría acceso limitado al sistema, solo a la información relevante para su compra en línea. Podrían ver la disponibilidad de sillas y salas, comprar boletas y snacks, y ver el historial de sus compras y puntos acumulados.

    * **Administrador de estadísticas:** Este rol tendría acceso a información estadística, como la movilidad de los empleados y las ventas mensuales. Sería responsable de crear reportes y presentar la información de una manera fácil de entender para los gerentes de Cine Distrito.

    * **Puntos ágiles:** Este rol tendría acceso limitado al sistema solo para realizar transacciones de venta de boletas y snacks en línea, pero no tendrían acceso a la información personal de los empleados o la información de los clientes.