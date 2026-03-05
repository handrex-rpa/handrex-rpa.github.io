---
title: 'Modelo de Predicción de Volumen de Llamadas con Aprendizaje Automático'
description: Predicción de la demanda de llamadas entrantes en un centro de contacto mediante el uso de técnicas de aprendizaje automático.
publishDate: 'Jan 02 2024'
seo:
  image:
    src: '../../assets/images/project-1.jpg'
    alt: Project preview
---

![Project preview](../../assets/images/project-1.jpg)

**Nota:** 

**Descripción general del proyecto:**
La predicción de las llamadas entrantes en un centro de contacto es una herramienta que se utiliza para anticipar la demanda que se recibirá en un período determinado, al prever con precisión, se pueden planificar los recursos necesarios para atenderla de manera adecuada, ofreciendo un servicio de calidad y evitando tanto la escasez como el exceso de personal, lo que podría generar pérdidas financieras y una experiencia insatisfactoria para los clientes. Por esto, en el presente estudio se llevó a cabo un análisis de los datos históricos de las llamadas entrantes en un centro de contacto con el objetivo de identificar patrones y tendencias en la demanda; para ello, se utilizaron técnicas avanzadas de modelado de datos, incluyendo modelos de aprendizaje automático y series de tiempo. Para el modelado se propusieron modelos de regresión para predecir la cantidad de llamadas entrantes a los agentes según el día y el rango de tiempo. Luego comparamos el desempeño de varios modelos de aprendizaje automático utilizando múltiples métricas de evaluación, y finalmente seleccionamos el Gradient Boosting Regressor (GBR) demostrando tener el mejor desempeño del parámetro de evaluación MAPE (error medio porcentual) con un resultado del 23,35%. Se encontró que el día y el rango de tiempo eran los contribuyentes más significativos a la predicción. Se espera que estos resultados ayuden a la planificación de la demanda del centro de contacto, permitiendo una gestión eficaz de los recursos, optimizando las operaciones, reduciendo los costes y mejorando la experiencia del cliente.

## Introducción

Los Contact Centers o Centros de Contacto, son los que han permitido que las empresas
mantengan una comunicación constante con sus clientes a través de nuevos canales de
comunicación que van mucho más allá del contacto por medio de llamadas telefónicas
(Semana, 2022).
Los centros de contacto son un componente esencial de muchas empresas, ya que
ofrecen una manera eficaz de interactuar con los clientes y resolver sus necesidades y
problemas. Sin embargo, gestionar un centro de contacto eficientemente puede
presentar desafíos considerables. La gestión del volumen de llamadas, la calidad del
servicio, la eficiencia y la satisfacción del cliente son factores críticos que influyen en el
éxito del centro de llamadas.
Entre los principales problemas que afectan el desempeño del centro de contacto se
encuentran las llamadas abandonadas, la sobrecarga de trabajo de los agentes, la falta
de capacitación, los tiempos muertos y la baja satisfacción del cliente; para mitigar estos
problemas hay que controlar factores como, por ejemplo, los días de la semana de mayor
concentración de interacciones y los rangos de horas en los que se registran los mayores
volúmenes de llamadas. (Arevalo 2014) afirma que “para el buen funcionamiento de un
centro de contacto y solución, deben realizarse proyecciones acertadas del tráfico de las
llamadas que van a ingresar a las líneas telefónicas y de igual manera debe programarse
eficazmente al personal”. Una mala planificación puede llevar al exceso o escasez de
agentes, lo que se traduce en pérdidas para el negocio e insatisfacción en el caso de
servicio al cliente.
Para abordar estos desafíos, se han desarrollado herramientas y metodologías para el
dimensionamiento de los centros de contacto y la predicción de llamadas. El
dimensionamiento del centro de contacto se refiere al proceso de determinar el tamaño
óptimo de la operación, incluyendo el número de agentes necesarios para atender las
llamadas entrantes. Existen varias fórmulas para el dimensionamiento de centros de
contacto, pero en general, se basan en factores como el volumen de llamadas esperado,
el tiempo promedio de llamada, la tasa de llamadas abandonadas y la tasa de ocupación
del agente.
La predicción de llamadas se ha convertido en una herramienta valiosa para ayudar a
los centros de contacto a planificar y optimizar sus operaciones. El pronóstico implica
utilizar análisis de datos y modelos estadísticos para predecir la cantidad de llamadas
entrantes que se esperan en diferentes momentos del día o de la semana. Esta
información puede ayudar a los centros de contacto a planificar adecuadamente los
recursos, incluyendo el número de agentes y las horas de operación, y a ajustar la
programación en capacitaciones si se produce una disminución inesperada en el
volumen de llamadas.
Existen varias metodologías y herramientas para la predicción de llamadas, pero una de
las más utilizadas es la metodología de series de tiempo. La metodología de series de
tiempo implica el análisis de patrones y tendencias históricas en los datos de llamadas
entrantes, lo que permite predecir los patrones futuros en el volumen de llamadas. Los
modelos de series de tiempo pueden ser complejos y requieren conocimientos
especializados en análisis de datos y estadísticas, por lo que a menudo se utilizan
herramientas de software especializadas para la predicción de llamadas. 

## METODOLOGÍA 

1. **Datos:**

El presente estudio se basó en los datos de un Centro de Contacto inbound (llamadas
entrantes: los ciudadanos llaman para realizar solicitudes o preguntas referentes a las
opciones dadas en el IVR), correspondiente a llamadas entrantes que fueron
descargadas el del 1 enero de 2022 al 31 de octubre de 2022. La versión original de la
base de datos contaba con 485,211 registros de llamadas. Las fases para llevar a cabo
el presente estudio fueron: (i) preparación de los datos (ii) transformación de los datos
(iii) identificación de posibles modelos y la respectiva evaluación de su desempeño. En
este enlace se comparte el notebook con los desarrollos.
(https://colab.research.google.com/drive/1dFbPUwojwLBwtrMKP0dVqvOawTe9UTW-
?usp=sharing). 

2. **Preparación de los datos:**

Para la selección de los datos, se tuvieron en cuenta los objetivos del negocio y se depuró
la base de datos eliminando los registros sin información en las variables de interés,
como Ingreso_Agente y el Nivel_Atención. Además, se consideró esencial que los
registros correspondieran a días laborales, por lo que se excluyeron domingos y festivos,
ya que en estos días no se presta el servicio. También se eliminaron los registros de
rango fuera del horario normal de labores, establecido para este negocio desde las 7:00
hasta las 17:00. 


3. **Transformación de datos:**

Se extrajeron características relevantes de la columna de fecha y se agregaron como
características adicionales en el conjunto de datos, como lo son día de la semana,
semana del año y mes, también creamos un diccionario para mapear los rangos a valores
numéricos, todo con el objetivo de trabajar con las variables numéricas, dado que los
modelos de series de tiempo están diseñados para trabajar con secuencias de valores
numéricos que evolucionan en el tiempo. Y finalmente se creó la columna fecha_hora, la
cual se requiere al momento de graficar el modelo

4. **Modelado de los datos:**

En la construcción de modelos de aprendizaje automático para predecir la demanda de
llamadas entrantes en centros de contacto, el uso de PyCaret se presenta como una
herramienta poderosa y eficiente. PyCaret automatiza gran parte del proceso de
modelado de datos, lo que ahorra tiempo y esfuerzo en comparación con otros enfoques
que requieren probar y comparar múltiples modelos manualmente. Además, PyCaret es
útil para el análisis de series de tiempo, ya que puede optimizar automáticamente los
hiperparámetros del modelo, mejorando la precisión de la predicción (PyCaret, 2021).
Asimismo, la herramienta puede realizar la selección de características de forma
automática, identificando las variables más importantes para predecir la demanda de
llamadas entrantes y descartando las variables menos importantes. Esto mejora la
precisión de la predicción y simplifica el modelo. La estrategia de series temporales de
PyCaret utiliza una técnica de validación cruzada denominada "Forward Chaining" o
"Desplazamiento hacia adelante". Esta técnica implica dividir los datos en conjuntos de
entrenamiento y validación basados en el tiempo, de modo que los datos más antiguos
se utilizan para entrenar el modelo y los datos más recientes se utilizan para validar el
modelo (PyCaret, 2021). La elección de esta estrategia es fundamental para obtener
resultados precisos y confiables, ya que ayuda a evitar el sobreajuste del modelo y
garantiza que el modelo tenga un buen rendimiento en datos nuevos.
Es importante señalar que para el modelo es necesario analizar cuáles variables son
más relevantes. Esto se puede determinar mediante la prueba y error, pero también se
toma en cuenta el conocimiento que se tiene sobre los datos y el problema que estamos
tratando de solucionar. En este caso, se quiere analizar la variable rango de hora para
determinar cuáles son los picos de llamadas entrantes durante el día y cuáles son los
días de mayor volumen en la semana, razón por la cual seleccionamos las variables "día
de la semana", "semana del año", "mes" y "Rango", como predictores y la variable
"in_Agente" como objetivo. En este caso, el tamaño del conjunto de entrenamiento se
estableció en 0.95 ya que el objetivo es predecir como máximo dos semanas adelante.
Además, se estableció una estrategia de validación cruzada con 10 pliegues. 

5. **Comparar Modelos:**

Es importante tener en cuenta que, en este trabajo para la comparación de modelos se
tomó como referencia el estudio realizado por (Osorio Hernández, 2019, p. 39). En este
estudio se utilizó el parámetro de evaluación MAPE (error medio porcentual) con un
umbral de 15% para evaluar la precisión del modelo en un servicio de atención de
llamadas en un sector de Call Center específico, utilizando la metodología Box-Jenkins.
Por lo tanto, consideramos que si el modelo logra obtener un MAPE < 15% utilizando los
datos de entrada, superaría las expectativas establecidas en el estudio de referencia.
7
Se evaluaron varios modelos y la herramienta devuelve una tabla que muestra los
resultados con las métricas de evaluación, MAE, MAPE, MSE, RMSE y R2. Se
seleccionó el mejor modelo basado en el rendimiento de la métrica especificada, “MAPE”
en este caso.
La tabla resultante (Tabla 1), que se muestra a continuación, presenta los resultados de
las diferentes métricas de evaluación para cada modelo. En este caso, se tomaron los
tres primeros modelos para realizar el análisis y las validaciones de las diferentes
métricas. Los modelos seleccionados en orden fueron: Gradient Boosting Regressor,
Light Gradient Boosting Machine y Random Forest Regressor. Los tres obtuvieron
resultados similares, sin embargo, se seleccionó el modelo Gradient Boosting Regressor
(GBR) de acuerdo con el parámetro de evaluación establecido previamente, además se
puede decir que es un modelo robusto y resistente al overfitting, lo que lo hace adecuado
para conjuntos de datos con ruido y errores, además puede manejar datos faltantes. Los
resultados obtenidos fueron un MAPE 23,35%, MAE de 13,2961 y un R2 del 45.13%. El
modelo se entrenó rápidamente, en solo 0.11 segundos. 

## RESULTADOS 

Los datos de prueba corresponden a 221 registros de las últimas semanas de octubre,
que se separaron para realizar las pruebas finales del modelo (Anexo 1).
Al analizar los datos, se observa que el pronóstico sigue en general el comportamiento
de la serie, pero se ubica por debajo de los valores observados. Se destaca un mejor
desempeño los viernes, y una disminución de la curva los sábados (Figura 1). Además,
se evidencia una mayor concentración de llamadas entre las 8:00 y las 11:00, lo que se
refleja en el gráfico de boxplot (Anexo 2).
Figura 1 Comparación de la Cantidad de llamadas versus la Predicción del modelo
en los datos de testeo (2 semanas).
Siguiendo con el análisis, cuando evaluamos el desempeño del modelo es claro que está
sobre ajustando, en el gráfico de Residuales (Figura 2) el valor de R2 en los datos de
entrenamiento sugiere que el modelo explica el 67,5% de la variabilidad en la variable
dependiente en los datos de entrenamiento. Sin embargo, el valor de R2 en los datos de
prueba es significativamente más bajo, lo que sugiere que el modelo no generaliza bien
a nuevos datos. Esto podría deberse a que el modelo ha aprendido a ajustarse
demasiado a los datos de entrenamiento y ha perdido la capacidad de generalizar a
nuevos datos.
Figura 2 Evaluación del Modelo: Residuales
Figura 3 Evaluación del Modelo: importancia de las variables explicativas
Existen varias razones por las cuales se puede estar presentando este sobreajuste,
disponer de pocos datos de entrenamiento, en este caso tenemos una base de datos
que corresponde a llamadas de enero a octubre de 2022; otra de las razones podría ser
incluir en el modelo variables que no están aportando valor, en este caso observamos
que de las variables predictoras la que menos importancia tiene es el mes (Figura 3). Por
lo tanto, hicimos un segundo modelo quitando esta variable, pero la diferencia en los
resultados no fue significativa (ver Anexo 3). Estas son solo algunas de las razones por
las cuales podría darse este sobreajuste y existen varias estrategias para mejorar el
ajuste del modelo, pero requieren de tiempo y acceso a los datos que hacen falta para
enriquecer el modelo, por lo tanto, el resultado obtenido a pesar de que no es el
esperado, es aceptable de acuerdo con los datos y el tiempo para el análisis con el que
contamos.
En cuanto a la aplicabilidad del modelo seleccionado, Gradient Boosting Regressor
(GBR) es un modelo de aprendizaje automático que ofrece una amplia gama de
características, beneficios y oportunidades para la predicción de series de tiempo,
además es robusto, preciso y fácil de interpretar, lo que lo hace ideal para diferentes
aplicaciones en diferentes contextos, es muy eficaz y puede ayudar a las empresas y
organizaciones a tomar decisiones informadas y estratégicas. 

## CONCLUSIONES 

PyCaret es una herramienta poderosa y eficiente para el modelado de datos, ya que
automatiza gran parte del proceso de modelado, lo que ahorra tiempo y esfuerzo en
comparación con otros enfoques que requieren probar y comparar múltiples modelos
manualmente.
La estrategia de validación cruzada "Forward Chaining" o "Desplazamiento hacia
adelante" es fundamental para obtener resultados precisos y confiables, ya que ayuda a
evitar el sobreajuste del modelo y garantiza que el modelo tenga un buen rendimiento en
datos nuevos.
Es importante seleccionar cuidadosamente las variables para el modelo y utilizar el
conocimiento previo para identificar las variables más relevantes para el problema que
se está tratando de solucionar. En este caso, se seleccionaron las variables "día de la
semana", "semana del año" y "rango de hora" como predictores y la variable "in_Agente"
como objetivo.
El modelo Gradient Boosting Regressor (GBR) fue seleccionado por su buen rendimiento
y robustez en la predicción de las llamadas entrantes en el centro de llamadas. Sin
embargo, aunque se obtuvo un MAPE de 23.35%, MAE de 13.2961 y un R2 del 45.13%,
el modelo no alcanzó el umbral esperado (MAPE < 15%). sin embargo, teniendo en
cuenta que es un modelo de regresión y solo se contaba con 10 meses de datos para
entrenar y pocas variables explicativas, entendemos que estas razones influyeron en su
capacidad de generalización. A pesar de esto, los resultados son aceptables y
proporcionan una base sólida para continuar mejorando el modelo con el objetivo de
obtener predicciones más precisas en el futuro.
En general, utilizar modelos de aprendizaje automático ofrece grandes ventajas para
predecir la demanda de llamadas entrantes en centros de contacto; en la medida que se
vaya afinando el modelo actual, su capacidad de procesar grandes cantidades de
información en tiempo real y proporcionar predicciones precisas y rápidas sobre la
cantidad de llamadas entrantes permitirá una gestión eficaz de los recursos, optimizando
las operaciones, reduciendo los costes y mejorando la experiencia del cliente. 

**Nota:** Caso Para implementar.
