

# Komplette Neugestaltung der Oberkogler Alm Landing Page

## Ziel
Eine elegante, moderne Landing Page im Stil der Arlberghospiz-Alm mit scroll-basierten Animationen, Parallax-Effekten und sanften Übergängen.

---

## Animationen (Arlberghospiz-Style)

Die folgenden Animationen werden implementiert:

| Animation | Beschreibung |
|-----------|-------------|
| **Fade-In on Scroll** | Elemente erscheinen sanft beim Scrollen ins Sichtfeld |
| **Slide-Up** | Text und Karten gleiten von unten nach oben |
| **Parallax Hero** | Hintergrundbilder bewegen sich langsamer als Vordergrund |
| **Scale on Hover** | Karten und Bilder vergrößern sich beim Hover |
| **Stagger Animation** | Karten erscheinen nacheinander mit Verzögerung |
| **Text Reveal** | Überschriften erscheinen buchstabenweise |

---

## Neue Seitenstruktur

### 1. Hero Section (verbessert)
- Fullscreen Video/Bild mit Ken-Burns-Effekt
- Sanfter Scroll-Indikator unten
- Parallax-Overlay

### 2. Willkommen-Sektion
- Großes Bild links, Text rechts (zweispaltig)
- Fade-In Animation beim Scrollen
- Instagram-Video integriert

### 3. Unser Team (5 Personen)

| Name | Rolle |
|------|-------|
| Max | Chef & Gastgeber |
| Christa | Seniorchefin & Köchin |
| Hubert | Seniorchef |
| Petra | Service & Küche |
| Ina | Praktikantin |

Mit Stagger-Animation: Karten erscheinen nacheinander

### 4. Unsere Tiere (NEU)
Drei animierte Karten mit:
- **Frida & Bertl** - Berner Sennenhündin & Labrador
- **Dexter-Rinder** - Robuste Almrinder
- **Ginger & Fantasie** - Mini-Shetland-Ponys

Wichtiger Hinweis: Fütterungsregeln für Gäste

### 5. Kulinarische Highlights (NEU)
Preview der Speisekarte mit Feature-Gerichten:
- Kasnockerl mit Krautsalat
- Steirerkäsnockerl
- Bratlbrot
- Hausgemachte Suppen

Parallax-Hintergrundbild

### 6. Hofladen-Preview (NEU)
Produkt-Highlights aus dem Shop:
- Ringelblumensalbe (6,00€)
- Johanniskrautöl (8,50€)
- Hausgemachte Marmeladen (3,00€)
- Honig-Sortiment (6,50€ - 16,50€)
- Hartwürstl (4,50€)

### 7. 3D Tour & Social Media (bleibt)
### 8. Galerie (bleibt, mit neuen Hover-Effekten)
### 9. Kontakt (bleibt)

---

## Technische Umsetzung

### Neue Animationen in `tailwind.config.ts`:

```text
keyframes:
  fade-in-up    - opacity 0->1, translateY 30px->0
  fade-in-left  - opacity 0->1, translateX -30px->0
  fade-in-right - opacity 0->1, translateX 30px->0
  scale-in      - scale 0.95->1, opacity 0->1
  parallax      - für Hintergrund-Effekte
```

### Custom Hook `useScrollAnimation`:
- IntersectionObserver-basiert
- Triggert Animationen beim Scrollen
- Stagger-Delay für Kartengruppen

### Dateien zu erstellen/bearbeiten:

1. **src/hooks/useScrollAnimation.tsx** (NEU)
   - Custom Hook für Scroll-Animationen

2. **tailwind.config.ts**
   - Neue Keyframes und Animationen

3. **src/index.css**
   - Zusätzliche Utility-Klassen

4. **src/pages/Index.tsx**
   - Komplette Neustrukturierung
   - Alle neuen Sektionen

5. **src/contexts/LanguageContext.tsx**
   - Übersetzungen für:
     - 5 Teammitglieder
     - 3 Tiergruppen
     - Kulinarik-Preview
     - Hofladen-Preview

6. **src/pages/Menu.tsx**
   - Update mit echten Menüdaten

---

## Erwartetes Ergebnis

Eine professionelle Website mit:
- Sanften Scroll-Animationen wie Arlberghospiz
- Vollständiger Teamvorstellung (5 Personen)
- Interaktiver Tier-Sektion
- Kulinarik- und Shop-Preview
- Konsistentem DE/EN Content
- Eleganter, rustikaler Ästhetik

