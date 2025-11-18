# SENATI-TEAM
# Refactor del Header y Router

Hice una mejora importante. Ahora el header ya no está repetido en cada página.
Creé un componente llamado <nav-header> que se carga automáticamente desde JavaScript.
También organicé el router para que cargue las páginas de forma más limpia.

## Descripción
- Eliminé el header repetido en cada página HTML

- Creé un Web Component <nav-header> para centralizarlo

- Actualicé el router para cargar scripts específicos según la página

- Limpieza general del código para que sea más fácil de mantener

- No afecta al funcionamiento del main

## Cambios Realizados
Hice una mejora en el proyecto pero no afecta el main.
Creé una nueva rama llamada refactor/header-component.

Cambios principales:
- El header ya no está repetido en todas las páginas

- Ahora se usa un componente <nav-header>

- El router está más limpio y organizado

Para ver lo que cambié:
1. Entren al GitHub del proyecto

2. Arriba, cambien de main a la rama refactor/header-component

3. Y entren al Pull Request que creé (ahí verán los archivos modificados)

No toqué el main, está igual que antes.

## Cómo Ver el Refactor

```bash
git fetch
git checkout refactor/header-component