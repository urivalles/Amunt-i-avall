# Instruccions i Regles del Projecte: Amunt i Avall

Aquest fitxer defineix el context del projecte, les decisions de disseny i l'historial de canvis realitzats perquè qualsevol instància de l'assistent Antigravity conegui l'estat actual i els criteris establerts.

---

## Context del Projecte
- **Nom:** Amunt i Avall
- **Descripció:** Pàgina web per a una empresa de treballs verticals i d'altura.
- **Creador/Desenvolupador:** Uri Vallès (GitHub: `https://github.com/urivalles`)

---

## Regles i Preferències de Disseny
- **Escalat del Logo en Hover:** S'ha definit un zoom màxim d'impacte en hover per a la imatge del logo del `1.30` (inicialment era de 1.70, però s'ha rebaixat per a un comportament visualment més equilibrat).
  - Selector afectat: `.logo-img:hover` a [index.css](file:///c:/Users/titon/Desktop/Programaci%C3%B3/@Amunt-i-avall/index.css)
- **Posició del Botó Flotant de WhatsApp:** S'ha desplaçat cap amunt perquè no col·lideixi amb el crèdit de disseny de la web al footer en cap viewport.
  - Desktop: `bottom: 50px;` (abans `30px`)
  - Mòbil: `bottom: 40px;` (abans `20px`)
  - Selector afectat: `.whatsapp-float` a [index.css](file:///c:/Users/titon/Desktop/Programaci%C3%B3/@Amunt-i-avall/index.css)

---

## Dades Clau del Projecte
- **Correu electrònic de contacte principal:** `amuntiavallvertical@gmail.com`
- **Enllaç del footer (Creador):** Enllaçat al perfil de GitHub `https://github.com/urivalles` amb el text visible `Uri Vallès`.

---

## Historial de Peticions i Canvis

### 1. Canvi del Correu de Contacte
- **Instrucció de l'usuari:** *"amuntiavallvertical@gmail.com posa-li aquest email a contacte"*
- **Canvis aplicats:**
  - S'ha modificat el fitxer [index.html](file:///c:/Users/titon/Desktop/Programaci%C3%B3/@Amunt-i-avall/index.html) (línia ~322) per substituir `info@amuntiavall.cat` per `amuntiavallvertical@gmail.com` tant en l'enllaç `mailto:` com en el text visible de la targeta de contacte.

### 2. Canvi del Nom del Creador al Footer
- **Instrucció de l'usuari:** *"També al footer, canvia Oriol Vallès per Uri Vallès com a nom del creador de la web."*
- **Canvis aplicats:**
  - S'ha modificat el fitxer [index.html](file:///c:/Users/titon/Desktop/Programaci%C3%B3/@Amunt-i-avall/index.html) (línia ~422) per canviar el text visible de l'enllaç de GitHub de `Oriol Vallès` a `Uri Vallès`.

### 3. Reposicionament del Botó Flotant de WhatsApp
- **Instrucció de l'usuari:** *"El botó de watsapp un pel més amunt per no tapar Uri Vallès quan baixa la pàgina al final de tot"*
- **Canvis aplicats:**
  - S'ha modificat [index.css](file:///c:/Users/titon/Desktop/Programaci%C3%B3/@Amunt-i-avall/index.css) per elevar el botó `.whatsapp-float` a `50px` (desktop) i `40px` (mòbil), evitant que tapi el text del footer.
