# Sistema de Gestión de Colas - Documento de Requerimientos del Producto (PRD)

## 1. Antecedentes
La Universidad Peruana Unión busca optimizar los procesos de atención a estudiantes, personal y visitantes mediante la implementación de un Sistema de Gestión de Colas (SGC) moderno, versátil y configurable con administración centralizada y acceso vía web.

## 2. Objetivo General
Implementar un sistema versátil, configurable y escalable que optimice la atención al usuario, mejore la experiencia del servicio y permita una gestión eficiente de recursos en las sedes de Lima, Tarapoto y Juliaca.

## 3. Objetivos Específicos
- Reducir los tiempos de espera y mejorar la organización en los puntos de atención.
- Facilitar la visualización en tiempo real del estado de las colas.
- Proporcionar herramientas para el control y gestión de operadores, turnos y colas.
- Permitir la integración con APIs institucionales y de servicios externos como RENIEC.
- Garantizar la sostenibilidad y escalabilidad de la solución en el tiempo.

## 4. Alcance y Módulos
El sistema deberá operar de forma simultánea en las tres sedes de la universidad y proveer los siguientes módulos principales:

### 4.1 Módulo de Monitores
- Visualización de colas en tiempo real.
- Plantillas personalizadas o editor visual para ajustar contenidos.
- Integración de videos, imágenes o mensajes institucionales.
- URLs dedicadas por monitor y configuración de qué colas mostrar.

### 4.2 Módulo Touch / Autogestión de Turnos
- Interfaz táctil para emisión de turnos.
- Identificación por DNI con integración a RENIEC (consulta de datos o validación facial).
- Emisión de turnos por alias o categorías.

### 4.3 Módulo de Operador
- Visualización de turnos atendidos y pendientes.
- Cambio de colas y derivación de usuarios.
- Soporte para operadores en turnos distintos y en paralelo.
- Notificación visual y/o sonora al llamar turnos.

### 4.4 Módulo de Administración
- Gestión de colas, operadores, áreas y plantillas de monitor.
- Configuración de puntos de atención y asignación de recursos.
- Control de estadísticas e indicadores de atención.

### 4.5 Servidor Centralizado y APIs
- Administración unificada para todas las sedes.
- Integración con APIs externas e internas.
- Autenticación y permisos de usuario.

## 5. Requerimientos Técnicos
- Acceso vía web desde cualquier dispositivo con navegador moderno.
- Arquitectura escalable y segura basada en estándares abiertos.
- APIs REST/JSON para integración con sistemas internos y externos (RENIEC).
- Compatibilidad con despliegue en servidores locales o en la nube.
- Base de datos relacional de alto rendimiento.
- Diseño responsive adaptable a diferentes resoluciones y dispositivos.
- Manejo de múltiples URLs para cada tipo de funcionalidad.
- Registro y auditoría de operaciones.

## 6. Requerimientos de Integración RENIEC
- Consulta de datos por número de DNI.
- Validación de identidad mediante biometría facial.
- Uso de APIs oficiales de RENIEC o servicios intermedios autorizados.

## 7. Entregables Esperados
- Sistema completo con todos los módulos en funcionamiento.
- Manual de usuario y manual técnico.
- Capacitación a administradores y operadores.
- Código fuente o documentación de APIs según corresponda.
- Garantía y plan de soporte técnico.

