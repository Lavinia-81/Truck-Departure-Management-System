# Sistem de Management al Plecărilor de Camioane

## 1. Prezentare Generală

Această platformă este o soluție modernă și interactivă pentru gestionarea în timp real a plecărilor de camioane dintr-un depozit logistic. Proiectul a fost conceput pentru a digitaliza și centraliza programul de expediere, înlocuind procesele manuale predispuse la erori cu o interfață eficientă și intuitivă.

Obiectivul principal este de a reduce sarcinile administrative, de a minimiza erorile umane și de a oferi o sursă unică de adevăr (single source of truth) pentru personalul logistic, șoferi și manageri, îmbunătățind astfel fluxul operațional.

## 2. Componente și Funcționalități

Aplicația este structurată în trei componente cheie, fiecare având un rol specific în ecosistemul logistic.

### A. Panoul de Administrare (Pagina Principală `/`)
Acesta este centrul de comandă, unde personalul logistic realizează operațiunile zilnice.

*   **Management Centralizat al Plecărilor:**
    *   **Adăugare (`Add Departure`):** Permite adăugarea rapidă a unei noi plecări cu toate detaliile necesare (transportator, destinație, trailer, oră, etc.).
    *   **Editare (`Edit`):** Permite modificarea oricărui detaliu al unei plecări existente.
    *   **Ștergere (`Delete`):** Elimină o plecare din sistem, cu o fereastră de confirmare pentru a preveni ștergerile accidentale.

*   **Operare în Masă (Import / Export):**
    *   **`Import`:** Încarcă un program complet de plecări dintr-un fișier **Excel**, populând automat tabelul și economisind timp prețios.
    *   **`Export`:** Descarcă vizualizarea curentă a plecărilor într-un fișier Excel pentru arhivare, raportare sau analiză offline.

*   **Funcționalități Inteligente (AI-Powered):**
    *   **Automatizarea Statusului:** Sistemul monitorizează plecările și actualizează automat statusul la `Delayed` dacă ora programată este depășită, conform unor reguli predefinite (ex: +10 min pentru statusul `Waiting`).
    *   **Verificare Pericole pe Rută (`TrafficCone`):** O funcție esențială care, la un click, utilizează AI pentru a analiza ruta planificată și a raporta în timp real pericole precum accidente, drumuri închise sau aglomerație severă.

*   **Navigație și Utilitare:**
    *   **`Public Display`:** Deschide panoul public (`/display`) într-un tab nou, pentru a verifica afișajul destinat șoferilor.
    *   **`Route Optimizer`:** Navighează către pagina dedicată optimizării rutelor.
    *   **`Clear All`:** O funcție de resetare care permite ștergerea completă a tuturor datelor din memoria locală (cu confirmare).

### B. Panoul Public de Afișaj (`/display`)
Proiectat ca un mod "Kiosk" pentru monitoare mari, amplasate în zonele de așteptare ale șoferilor sau în depozit.

*   **Vizibilitate Maximă:** Afișează o listă clară, sortată cronologic, cu informațiile esențiale: transportator, destinație, oră, poartă și status.
*   **Actualizări în Timp Real:** Ecranul se reîmprospătează automat la orice modificare făcută în panoul de administrare, asigurând sincronizarea perfectă a datelor. Include o funcție de derulare automată (auto-scroll) pentru listele lungi.
*   **Codificare Vizuală:** Statusul fiecărei plecări este marcat cu o culoare distinctă, conform legendei din subsol, permițând o identificare rapidă a stării curente.

### C. Optimizatorul de Rute (`/optimize`)
Un instrument avansat, bazat pe AI, care asistă la planificarea strategică a rutelor.

*   **Sugestii Inteligente de Rută:** Utilizatorul introduce punctul de plecare, destinația și eventualele opriri, iar sistemul AI analizează datele (inclusiv traficul) pentru a sugera ruta optimă, timpul estimat de parcurs și raționamentul din spatele deciziei.

## 3. Arhitectură și Tehnologii

Proiectul utilizează un stack tehnologic modern, axat pe performanță, scalabilitate și o experiență de utilizare de top.

*   **Framework:** **Next.js** (React) - Pentru o interfață web rapidă, cu redare pe server (SSR) și funcționalități moderne.
*   **Stocarea Datelor:** **LocalStorage (Client-Side)** - Pentru a asigura o experiență rapidă și funcționalitate offline, datele sunt persistate direct în browser-ul utilizatorului. Această abordare elimină dependența de o bază de date externă pentru scenariul curent, garantând persistența datelor la reîncărcarea paginii.
*   **Inteligență Artificială:** **Genkit (Google AI)** - Platforma Genkit, cu modelul Gemini, alimentează funcționalitățile avansate de optimizare a rutelor și analiză a traficului.
*   **UI & Styling:**
    *   **Tailwind CSS:** Un framework CSS de tip "utility-first" pentru o stilizare rapidă și consistentă.
    *   **shadcn/ui:** O colecție de componente React reutilizabile, create peste Tailwind CSS, pentru un design profesional și accesibil.

## 4. Ghid de Instalare și Pornire

Pentru a rula proiectul în mediul local, urmați pașii de mai jos.

### Cerințe Preliminare
*   **Node.js** (versiunea 18 sau mai recentă)
*   **npm** sau **yarn**

### Pași de Instalare

1.  **Clonați Repository-ul (dacă este cazul) și Navigați în Director:**
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Instalați Dependințele:**
    Executați comanda de mai jos pentru a instala toate pachetele necesare.
    ```bash
    npm install
    ```

3.  **Configurați Variabilele de Mediu:**
    Pentru a activa funcționalitățile bazate pe AI, este necesar să furnizați o cheie API de la Google.

    *   Creați un fișier nou în rădăcina proiectului, numit `.env.local`.
    *   Adăugați următoarea linie în fișier, înlocuind `CHEIA_DVS_API_AICI` cu cheia obținută de la [Google AI Studio](https://aistudio.google.com/):

    ```
    GEMINI_API_KEY=CHEIA_DVS_API_AICI
    ```

4.  **Porniți Serverul de Dezvoltare:**
    Executați comanda de mai jos pentru a porni aplicația.
    ```bash
    npm run dev
    ```

5.  **Accesați Aplicația:**
    Deschideți browser-ul și navigați la `http://localhost:9002` pentru a vizualiza Panoul de Administrare.
