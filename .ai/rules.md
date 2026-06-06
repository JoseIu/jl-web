# Arquitectura de Componentes Astro

## Organización obligatoria

Cada componente debe vivir en su propia carpeta.

Estructura obligatoria:

```text
src/
└── components/
    └── component-name/
        ├── ComponentName.astro
        └── styles.css
```

Ejemplo:

```text
src/
└── components/
    └── button/
        ├── Button.astro
        └── styles.css
```

---

## Componentes complejos

Si un componente tiene subcomponentes relacionados, deben agruparse en la misma carpeta.

Ejemplo:

```text
src/
└── components/
    └── faq/
        ├── Faq.astro
        ├── FaqItem.astro
        └── styles.css
```

Otro ejemplo:

```text
src/
└── components/
    └── pricing/
        ├── Pricing.astro
        ├── PricingCard.astro
        └── styles.css
```

---

## Prohibido

No crear componentes así:

```text
src/
├── Button.astro
├── Card.astro
├── Hero.astro
```

No dejar componentes sueltos en carpetas compartidas.

---

## CSS separado

Todos los estilos deben vivir en:

```text
styles.css
```

dentro de la carpeta del componente.

Ejemplo:

```text
button/
├── Button.astro
└── styles.css
```

y al importarlo en el componente se hace de esta forma, dentro de `---`.

```
---
import "./styles.css";
---

<button> Hola </button>

```

---

## Prohibido

No utilizar:

```astro
<style>
...
</style>
```

dentro de componentes Astro salvo casos excepcionales y justificados.

Priorizar siempre archivos CSS independientes.

---

# Sistema de Diseño

## Variables

No hardcodear colores.

Incorrecto:

```css
color: #fff;
background: #000;
border-color: #ccc;
```

Incorrecto:

```css
background-color: red;
color: blue;
```

---

## Obligatorio

Utilizar siempre variables existentes.

Por ejemplo:

```css
var(--sl-color-bg)
var(--sl-color-bg-nav)
var(--sl-color-bg-sidebar)

var(--sl-color-text)
var(--sl-color-text-accent)

var(--sl-color-gray-1)
var(--sl-color-gray-2)
var(--sl-color-gray-3)

var(--sl-color-accent)
```

o cualquier token ya definido en:

```text
src/styles/global.css
```

---

## Antes de crear estilos

Analizar:

```text
src/styles/global.css
```

y reutilizar las variables existentes.

No crear nuevas variables si ya existe una equivalente.

---

# BEM

Todos los estilos deben seguir metodología BEM.

---

## Bloque

```css
.card {
}
```

---

## Elemento

```css
.card__header {
}
.card__title {
}
.card__content {
}
.card__footer {
}
```

---

## Modificador

```css
.card--featured {
}
.card--large {
}
.card--active {
}
```

---

## Correcto

```css
.hero {
}

.hero__container {
}

.hero__title {
}

.hero__description {
}

.hero__actions {
}

.hero--dark {
}
```

---

## Incorrecto

```css
.heroTitle {
}

.hero-text {
}

.heroContainer {
}

.mainTitle {
}

.blueButton {
}
```

---

## Selectores

Evitar selectores genéricos:

```css
div {
}
section {
}
article {
}
```

Evitar:

```css
.hero div div div {
}
```

Preferir siempre clases BEM explícitas.

---

# Componentes Astro

## Responsabilidad única

Cada componente debe tener una única responsabilidad.

Si empieza a crecer demasiado:

- dividirlo
- extraer subcomponentes
- reutilizar componentes existentes

---

## Reutilización

Antes de crear un nuevo componente:

1. Buscar si ya existe uno similar.
2. Reutilizarlo si es posible.
3. Extenderlo mediante props si tiene sentido.

---

# Mantenibilidad

Priorizar siempre:

- claridad
- reutilización
- escalabilidad
- separación de responsabilidades

sobre soluciones rápidas.

La estructura generada debe poder mantenerse fácilmente en proyectos grandes.
