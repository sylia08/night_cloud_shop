# Projekt: Erstellung eines nachhaltigen Outdoor-Webshops "CampGreen"

**Ziel**: Aufbau eines einfachen, modernen Webshops für nachhaltige Outdoor-Produkte – komplett mit Startseite, Produktübersicht, Kontaktformular und ansprechender Benutzeroberfläche.

---

## Technologien

- **Frontend**: HTML, CSS, JavaScript ,(JSON)
- **Editor**: [Cursor](https://cursor.sh/) (VS Code mit KI-Unterstützung)
- **KI-Assistenz**: ChatGPT (für Design, HTML/CSS/JS-Snippets, Refactoring, Debugging)
- **Host/Test**: Live Server + GitHub Pages

---

## Wireframes
## Home
![alt text](<Screenshot 2025-07-08 071830.png>)
## Contact
![alt text](<Screenshot 2025-07-08 071818.png>)
## Shop
![alt text](<Screenshot 2025-07-08 071804.png>)
## Article
![alt text](<Screenshot 2025-07-08 071757.png>)

---

Hier ist ein kompakter, klar formulierter **Styleguide für dein CSS**, passend zu deinem Projekt „CampGreen“ – sachlich, ohne KI-Floskeln:

---

## CampGreen CSS Styleguide

### 1. **Schrift & Farben**

- **Font**: `"Segoe UI", sans-serif` – modern, gut lesbar
- **Grundfarbe Hintergrund**: `#f3f4f3` (helles Grau-Grün)
- **Primärfarbe**: `#264d36` (dunkles Grün – Header, Buttons)
- **Akzentfarbe**: `#2e4e2e` (Produktkarten, Karussell-Buttons)
- **Textfarbe**: `#333` (dunkles Grau auf hellem Hintergrund)
- **Highlight-Textfarbe**: `#ede8d0` (Kontrast auf dunklem Grün)

### 2. **Spacing & Abstände**

- **Standard-Padding**: `1rem`
- **Grid-Gap**: `1.5rem` (Produkte)
- **Button-Abstände**: `0.75rem` zwischen Kategorie-Buttons
- **Footer/Section-Spacing**: `1.5rem` oben/unten

### 3. **Ecken & Kanten**

- **Border-Radius**: `8px` bei Karten und Buttons
- **Karussell-Buttons**: `border-radius: 40px` (rund)

### 4. **Layoutprinzipien**

- **Flexbox**: Für Navigation, Kategorie-Buttons, Footer
- **Grid**: Für Produktübersicht (responsive `auto-fit`)
- **Responsives Verhalten**:

  - Breakpoint bei `max-width: 768px`
  - Navigation klappt um, Grid wird 1-spaltig

### 5. **Komponentenrichtlinien**

#### **Navigation**

- **Horizontal auf Desktop**, **vertikal & ein-/ausblendbar** auf Mobil
- `.nav-toggle` sichtbar nur unter 768px

#### **Produktkarten**

- Hintergrund: Dunkelgrün (`#2e4e2e`)
- Text: Weiß
- Struktur: Bild, Titel, Preis, Button (vertikal gestapelt)

#### **Warenkorb**

- Fixiert oben rechts (`position: fixed`)
- Seitenleiste ausfahrbar (`.cart-panel.open` via `translateX(0)`)

#### **Karussell**

- Zentriert
- Navigationspfeile links/rechts mit absoluten Positionen

### 6. **Interaktionen**

- **:hover** auf Buttons & Karten für kleine Animationen empfohlen (z. B. Schatten, Farbänderung)
- **Transition**-Effekte: z. B. für `transform`, `background-color` (nicht zwingend gesetzt, aber empfohlen)

### 7. **Zugänglichkeit**

- Gute Farbkontraste (weiß auf dunkelgrün)
- Große klickbare Flächen für Buttons
- Strukturierter Code für Screenreader durch semantisches HTML (nicht im CSS, aber wichtig fürs Projekt)

---

## Einsatz von KI – Dokumentation

### 1. **Projektplanung mit KI**

- **Frage an ChatGPT**: „Was für einen Webshop könnte ich als einfaches Lernprojekt erstellen ?“
  **Antwort**: „Was für einen Webshop könnte ich als einfaches Lernprojekt erstellen
- Ergebnis: Schnel Themen gefunden für der Inhalt der Website erhalten.

---

### 2. **Codegenerierung mit Cursor & ChatGPT**

#### Layoutidee (Startseite):

- Prompt: _„Erstelle ein modernes Layout für eine Outdoor-Webshop-Startseite mit großem Header, Button und 3 Produktvorschauen.“_
- Ergebnis: ChatGPT generierte direkt HTML & CSS mit responsivem Grid, passenden Farben und Struktur.

#### Produktsystem:

- Prompt: _„Wie erstelle ich eine einfache Produktkarte in HTML/CSS mit Bild, Name, Preis und Button?“_
- Ergebnis: Sofort einsatzbereiter Code, später durch KI weiter verbessert (Hover-Effekt, Schatten, etc.)

#### Warenkorb-Funktion (JavaScript):

- ChatGPT half bei:

  - Grundstruktur: `addToCart()`-Funktion
  - Fehlerbehebung bei EventListeners
  - Erklärung von `localStorage`-Lösungen für Zwischenspeicherung

---

### 3. **Layout & UI-Optimierung mit KI**

#### Style-Verbesserung:

- Prompt: _„Mache die Kontaktkarten runder, moderner und besser zentriert.“_
- Ergebnis: Verbesserte CSS mit `border-radius`, `flexbox`, Schatten, Animation

#### Responsive Design:

- Prompt: _„Passe mein Grid-Layout für Smartphones an. Maximal 1 Spalte auf kleinen Bildschirmen.“_
- Ergebnis: KI generierte Media Queries, die sofort funktionierten.

#### A/B Layout-Vergleich:

- KI schlug Alternativen für Navigationsleisten, Hero-Sektion und Footer-Design vor – diese wurden im Team evaluiert.

---

### 4. **Lernen mit KI – Weiterbildung**

#### Erklärung komplexer CSS-Konzepte:

- Fragen an ChatGPT wie:

- _„Was ist der Unterschied zwischen flexbox und grid?“_
- _„Wie funktioniert `z-index` genau mit Stack-Kontexten?“_

- Persönliches CSS-Verständnis deutlich verbessert.

#### Debugging-Unterstützung:

- KI half bei:

  - JavaScript-Fehlern
  - CSS-Selektoren, die nicht griffen
  - Live-Korrektur in Cursor mit Inline-KI-Tipps

---

## Screenshots / Beispiele (optional beifügen)

- Layout-Vergleich: Vorher-Nachher mit KI-Optimierung
- Cursor-KI-Chat mit generierten Snippets
- Beispielhafte Produktkarte mit Hover-Animation
- Chatverlauf, der einen JS-Fehler löst

---

## Fazit: Effizienter & intelligenter entwickeln mit KI

| Bereich            | Ohne KI                    | Mit KI (ChatGPT/Cursor)              |
| ------------------ | -------------------------- | ------------------------------------ |
| nhaltIplanung      | Manuell recherchieren      | Sofort Vorschläge                    |
| HTML/CSS Anpassung | Zeitaufwendig, Try & Error | Fertige Snippets, anpassbar          |
| JavaScript Fehler  | Suchen & Testen            | Live-Debugging, Code erklären lassen |
| UI verbessern      | Selbst gestalten, testen   | Vorschläge direkt ausprompten        |
| Lernen & Verstehen | Google, Dokus              | Chat-Fragen, interaktiv              |

---

## Schlusswort

Durch den gezielten Einsatz von KI-Werkzeugen wie **ChatGPT und Cursor** konnte ich nicht nur schneller und strukturierter arbeiten, sondern auch mein eigenes **technisches Verständnis verbessern**. Die KI hat nicht übernommen – sie hat **unterstützt, beschleunigt und erklärt**.

- Diese Dokumentation wurde mithilfe von KI sprachlich überarbeitet und korrigiert. Die inhaltlichen Texte stammen jedoch vollständig von mir selbst.
