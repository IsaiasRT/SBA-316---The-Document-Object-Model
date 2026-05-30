# Azeroth Codex - SBA-316: The Document Object Model

## Introduction

Welcome to the **Azeroth Codex**, a World of Warcraft-themed single-page web application that demonstrates mastery over the Document Object Model (DOM). Step into the realm of web development sorcery where you can manipulate the very structure of the page, inspect arcane DOM properties, manage your quest log, and forge new heroes through a validated character creation form.

This project was built as the SBA-316 assessment, showcasing DOM manipulation, BOM interaction, event-driven programming, and form validation — all wrapped in a dark fantasy aesthetic inspired by the World of Warcraft universe.

## Objectives

- Use DOM properties, methods, and techniques to create a dynamic user experience.
- Use BOM properties, methods, and techniques to facilitate dynamic web application behavior.
- Demonstrate proficiency with event-driven programming and DOM events.
- Implement basic form validation using HTML validation attributes and DOM-event-driven JavaScript validation.

## Technologies Used

- HTML5 (including `<template>` for cloneNode demonstration)
- CSS3 (with CSS custom properties, animations, and responsive design)
- Vanilla JavaScript (ES6+)
- Google Fonts: Cinzel, Cinzel Decorative, Open Sans

## Project Structure

```
SBA-316 The-Document-Object-Model/
├── index.html    # Page structure with WoW-themed sections
├── style.css     # Dark fantasy aesthetic with gold/magic accents
├── script.js     # All DOM/BOM requirements with themed console output
└── README.md     # Project documentation
```

## Features

- **Inscribe Title:** Dynamically update the page header using DOM text manipulation.
- **Channel Aura:** Modify the page background color in real-time.
- **Quest Log:** Accept and abandon quests with smooth animations, demonstrating `createElement` and `appendChild`.
- **Legendary Toggle:** Toggle epic styling across quest items using `classList` and iteration.
- **Spell Tome Inspector:** Click any element to divine its DOM properties (tag name, ID, classes, parent, children, etc.).
- **Character Creation:** A fully validated form with both HTML5 and JavaScript validation to forge your hero.
- **Echo Quests:** Demonstrates `cloneNode` by spawning templated quest entries every third click.
- **BOM Chronicle:** Uses `navigator`, `window.location`, `window.localStorage`, and `window.alert` for browser interaction.

## How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Open the browser console (F12) to see BOM outputs and the Azeroth DOM Stronghold tree visualization.

---

## Requirements Mapping

| Requirement | Implementation | File |
|---|---|---|
| **Cache at least one element using `getElementById`** | 12 elements cached: `titleInput`, `mainTitle`, `dynamicList`, `contactForm`, `itemTemplate`, etc. | `script.js` lines 15-29 |
| **Cache at least one element using `querySelector` or `querySelectorAll`** | `body`, `allButtons`, `firstSection`, `allQuestItems`, `navLinks` | `script.js` lines 36-40 |
| **Use parent-child-sibling relationship to navigate between elements** | `parentNode`, `firstElementChild`, `lastElementChild`, `nextElementSibling`, `children` used on `dynamicList` | `script.js` lines 68-72 |
| **Iterate over a collection of elements to accomplish some task** | `forEach` used to iterate over quest items for legendary toggle and form inputs for validation | `script.js` lines 223, 408 |
| **Create at least one element using `createElement`** | New `<li>` quest items created; inner `<span>` elements created for structure; `<p>` elements for inspector details | `script.js` lines 142-161, 289 |
| **Use `appendChild` and/or `prepend` to add new elements to the DOM** | `appendChild` used to add quest items to list, inspector details to display, and cloned content to DOM | `script.js` lines 159-161, 172, 291, 321 |
| **Use `DocumentFragment` interface or HTML templating with `cloneNode`** | `cloneNode(true)` used to clone content from an HTML `<template>` element | `script.js` lines 306; `index.html` line 89 |
| **Modify HTML or text content in response to user interaction using `innerHTML`, `innerText`, or `textContent`** | `textContent` updates title, quest text, and button labels; `innerHTML` updates info box and inspector | `script.js` lines 99, 152, 235, 281, 284 |
| **Modify the style and/or CSS classes of an element in response to user interactions using `style` or `classList` properties** | `style.backgroundColor` changed via color picker; `classList.add/remove` used for legendary toggle and clicked elements; `style.color`, `style.textShadow` for visual feedback | `script.js` lines 103-108, 128, 225-231, 265, 391-401 |
| **Modify at least one attribute of an element in response to user interaction** | `setAttribute('data-quest-id', itemCounter)` and `setAttribute('data-difficulty', 'rare')` on new quest items | `script.js` lines 164-165 |
| **Register at least two different event listeners and create the associated event handler functions** | `click`, `input`, `keypress`, `submit`, `blur` event listeners registered throughout | `script.js` lines 95, 117, 127, 141, 190, 218, 245, 334, 350, 408, 421, 458 |
| **Use at least two Browser Object Model (BOM) properties or methods** | `navigator.userAgent`, `window.location.href`, `window.localStorage`, `window.alert` used | `script.js` lines 51, 54, 57-61, 206 |
| **Include at least one form and/or input with HTML attribute validation** | Character creation form inputs use `required`, `type="email"`, `minlength`, `maxlength` attributes | `index.html` lines 67-74 |
| **Include at least one form and/or input with DOM event-based validation** | Custom JavaScript validation on form `submit` and real-time `blur`/`input` validation with colored borders | `script.js` lines 350-426 |
| **Ensure that the program runs without errors** | All code is tested and commented; no console errors on load | All files |
| **Commit frequently to the git repository** | Commits made after each major feature implementation | Git history |
| **Include a README file that contains a description of your application** | This file | `README.md` |

---

## Detailed Feature Breakdown

### 1. Inscribe Title (Dynamic Title Update)
Type a legendary title into the input field and click "Inscribe" (or press Enter) to update the main heading. Uses `textContent` for safe text updates and `style.color`/`style.textShadow` for magical visual feedback that pulses in arcane blue.

### 2. Channel Aura (Background Color Picker)
The color input triggers the `input` event, dynamically updating the `body.style.backgroundColor` property. Demonstrates real-time style manipulation with smooth CSS transitions.

### 3. Quest Log (Dynamic List Management)
- **Accept Quest:** Creates a new quest item using `document.createElement('li')` with nested `<span>` elements for the icon, text, and difficulty. The item is animated in from the left using `opacity` and `transform` transitions before being appended to the quest log.
- **Abandon Quest:** Selects all quest items with `querySelectorAll`, animates the last item out, and removes it with `removeChild`.
- **Echo Quests (CloneNode):** Every third "Accept Quest" click clones the hidden HTML `<template>` using `cloneNode(true)`, modifies the text content, and appends it to demonstrate templated content creation.

### 4. Toggle Legendary (CSS Class Manipulation)
Clicking the "Toggle Legendary" button selects all quest items with `querySelectorAll`, iterates over them with `forEach`, and toggles the `legendary` CSS class via `classList.add()` and `classList.remove()`. Also applies a golden glow via inline styles.

### 5. Spell Tome Inspector (Element Inspector)
Clicking anywhere on the page (excluding interactive controls) highlights the clicked element with a pulsing gold dashed outline and displays its DOM information in the Spell Tome section. This uses `innerHTML` for the info box header and `createElement`/`appendChild` for each detail line. The inspector reveals: Tag Name, ID, Class List, Text Content, Parent Element, Child Count, Node Type, and Data Attributes.

### 6. Character Creation (Form Validation)
The hero creation form includes HTML5 validation attributes (`required`, `type="email"`, `minlength`, `maxlength`). JavaScript intercepts the `submit` event for custom validation:
- Name must be at least 2 characters
- Email must match a regex pattern
- Message must be at least 10 characters
Real-time `blur` and `input` events provide immediate visual feedback by changing border colors to red (invalid) or green (valid).

### 7. BOM Chronicle (Browser Object Model)
The application logs browser information using `navigator.userAgent`, displays the current realm URL with `window.location.href`, uses `window.localStorage` to persist and display visit counts across sessions, and alerts the user with `window.alert` when attempting to abandon from an empty quest log.

---

## Design Inspiration

This application draws visual inspiration from the official **World of Warcraft** website (worldofwarcraft.blizzard.com), featuring:
- Deep dark backgrounds (#0a0e13, #11141b)
- Gold/amber accent colors (#f8b700) with glowing text shadows
- Arcane blue highlights (#00ccff) for magical effects
- Cinzel and Cinzel Decorative fantasy fonts
- Ornate card borders with gradient top accents
- Responsive design that works on all devices

## Notes

- Keep the browser console open while using the application to see BOM outputs and the Azeroth DOM Stronghold tree visualization.
- The application is fully responsive and works on mobile devices.
- No external libraries or frameworks are used; all functionality is implemented with vanilla JavaScript.
- Visit count is persisted in `localStorage` and will increment each time the page is loaded.

## License

This project was created for educational purposes as part of the SBA-316 assessment.

*"For the Horde! For the Alliance! For the DOM!"*
