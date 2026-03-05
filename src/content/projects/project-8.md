---
title: 'Creación PDF Python'
description: Crear un numero de PDF con un archivo en excel
publishDate: 'Mar 05 2026'
seo:
  image:
    src: '../../assets/images/project-1.jpg'
    alt: Project preview
---

![Project preview](../../assets/images/project-1.jpg)

**Note:** Este caso de Estudio es Real Implementado en una Empresa de Centro America en el Departamento de Finanzas Nóminas - Proceso CxP Deducciones Nóminas

**Descripción del proyecto:**
El objetivo es generar Soportes en PDF para pago de Deducciones

## Objectivos

1. Leer un archivo CSV de deduciones y filtrar registros válidos.
2. Generar un PDF de comprobante por cada fila filtrada, con datos y formato predefinido.
3. Guardar automáticamente los comprobantes en una carpeta destino, listos para revisión o envío.

## Caracteristicas

1. Automatiza la creación de documentos en lote desde un CSV.
2. Convierte el importe a texto en español (número a palabras).
3. Formatea el PDF con secciones, bordes y celdas para lectura rápida.

## Tecnologia Utilizadas

- Python 3.x
- Pandas para lectura y tratamiento de CSV.
- FPDF / fpdf2 para crear PDFs.
- num2words para transformar números a palabras en español.
- Módulos estándar: os, random, string, datetime, pathlib, decimal.
- Librerías utilizadas:
    1.  Estándar: os, random, string, datetime, pathlib, decimal
    2.  Terceros: pandas, fpdf (o fpdf2), num2words

**Nota:** Si usas fpdf clásico, puede haber límites con caracteres Unicode (acentos). Con fpdf2 hay mejor soporte


## Resultados

-   Se crea (si no existe) una carpeta llamada Comprobante/.
-   Por cada fila filtrada del CSV, se genera un PDF con nombre:
        Comprobante_{Nombre}_{Soc}.pdf


**Nota:** El PDF incluye: encabezado con sociedad, proveedor, nombre, número de documento, usuario, concepto, fecha, valor numérico, valor en letras, clave aleatoria, y sección de Vo. Bo. con nombre de coordinador.

## Testimonio Cliente

>to excellence.

**Note:** Caso Real