# Sistem de Management al Plecărilor de Camioane

## 1. Prezentare Generală

Acest proiect este o platformă modernă, în timp real, pentru gestionarea plecărilor de camioane, concepută pentru a eficientiza operațiunile logistice. Acesta înlocuiește procesele manuale, predispuse la erori, cu o soluție digitală centralizată, oferind vizibilitate și control complet asupra programului de expediere.

Obiectivul principal este de a reduce sarcinile administrative, de a minimiza erorile umane și de a îmbunătăți fluxul operațional în depozit, oferind o singură sursă de adevăr pentru toate părțile implicate.

## 2. Componente și Funcționalități

Aplicația este construită în jurul a trei componente cheie:

### A. Panoul de Administrare (`/`)
Acesta este centrul de comandă pentru personalul logistic, unde se desfășoară majoritatea operațiunilor.

*   **Management Centralizat:**
    *   **Butonul `Add Departure`:** Deschide o fereastră pentru adăugarea manuală a unei noi plecări.
    *   **Butonul `Edit` (pictogramă creion):** Permite modificarea detaliilor unei plecări existente.
    *   **Butonul `Delete` (pictogramă coș de gunoi):** Șterge o plecare din sistem (necesită confirmare).

*   **Import / Export:**
    *   **Butonul `Import`:** Permite încărcarea rapidă a programului dintr-un fișier **Excel**, populând automat lista.
    *   **Butonul `Export`:** Descarcă vizualizarea curentă într-un fișier Excel pentru raportare și analiză.

*   **Funcționalități Inteligente:**
    *   **Automatizarea Statusului `Delayed`:** Sistemul actualizează automat statusul unei plecări la `Delayed` dacă aceasta nu a plecat și se află în una dintre următoarele situații:
        1.  Are statusul `Waiting` și a depășit cu 10 minute ora programată.
        2.  Are statusul `Loading` și a depășit ora programată.
    *   **Verificare Pericole pe Rută (Buton `TrafficCone`):** Înainte ca un camion să plece, operatorii pot apăsa acest buton pentru a obține o analiză instantanee, bazată pe AI, a rutei planificate. Sistemul identifică accidente, drumuri închise sau aglomerație mare.

*   **Navigație:**
    *   **Butonul `Public Display`:** Deschide panoul public într-o filă nouă.
    *   **Butonul `Route Optimizer`:** Navighează către pagina de optimizare a rutelor.

*   **Management General:**
    *   **Butonul `Clear All`:** Permite ștergerea completă a tuturor datelor din baza de date, pentru o resetare rapidă (necesită confirmare).

### B. Panoul Public de Afișaj (`/display`)
Un mod "Kiosk" proiectat pentru monitoare mari din zonele de așteptare ale șoferilor sau din depozit.

*   **Informații Clare, dintr-o Privire:** Afișează o listă sortată cronologic a plecărilor, cu detalii esențiale: transportator, destinație, oră, poartă și status.
*   **Actualizări Automate în Timp Real:** Ecranul se reîmprospătează automat la orice modificare în Panoul de Administrare, fără a necesita intervenție manuală. De asemenea, dispune de o funcție de derulare automată pentru listele lungi.
*   **Indicii Vizuale:** O legendă codificată pe culori ajută la identificarea rapidă a statusului unui camion.

### C. Optimizatorul de Rute (`/optimize`)
Un instrument avansat, bazat pe AI, pentru a asista la planificarea celor mai eficiente rute.

*   **Sugestii Inteligente de Rută:** Pe baza locației curente ("Sky Gate Derby DE74 2BB"), a destinației și a opririlor intermediare, sistemul AI sugerează ruta optimă, luând în considerare factori precum traficul pentru a reduce timpul de tranzit și costurile.
*   **Butonul `Optimize Route`:** Inițiază procesul de analiză AI și afișează rezultatele.

## 3. Tehnologii Utilizate

*   **Framework:** **Next.js** (React) - Pentru o interfață rapidă, redată pe server.
*   **Bază de date:** **Firebase Firestore** - Pentru o bază de date NoSQL serverless, în timp real.
*   **Inteligență Artificială:** **Genkit (Google AI)** - Alimentează optimizarea rutelor și verificarea pericolelor.
*   **Stilizare UI:** **Tailwind CSS** & **shadcn/ui** - Pentru un sistem de design modern, responsiv și profesional.

## 4. Pornirea Proiectului

Pentru a rula proiectul local, urmați acești pași:

1.  **Instalați Dependințele:**
    ```bash
    npm install
    ```

2.  **Configurați Variabilele de Mediu:**
    Creați un fișier `.env.local` și adăugați cheia API de la Google AI:
    ```
    GEMINI_API_KEY=CHEIA_DVS_API_AICI
    ```

3.  **Porniți Serverul de Dezvoltare:**
    ```bash
    npm run dev
    ```

Aplicația va fi disponibilă la `http://localhost:9002`.
