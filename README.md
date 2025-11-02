# Sistem de Management al Plecărilor de Camioane

## Prezentare Generală

Acesta este un sistem complet, în timp real, pentru gestionarea plecărilor de camioane, construit cu Next.js și Firebase. Oferă o soluție completă pentru depozitele logistice pentru a gestiona, urmări și afișa programele de plecare ale camioanelor. Aplicația constă într-un panou de administrare pentru managementul intern și un panou de afișare public pentru șoferi și personalul depozitului.

## Caracteristici Cheie

*   **Panou de Administrare (`/`):**
    *   **Operațiuni CRUD:** Adăugați, editați și ștergeți programele de plecare printr-o interfață intuitivă.
    *   **Management în Timp Real:** Toate modificările sunt reflectate instantaneu în baza de date și pe toate ecranele conectate.
    *   **Import/Export de Date:** Importați programe în masă dintr-un fișier Excel (`.xlsx`) și exportați datele curente pentru raportare.
    *   **Curățare Date:** Opțiune pentru a șterge toate înregistrările din baza de date.

*   **Panou Public de Afișare (`/display`):**
    *   **Vizualizare Kiosk-Style:** Un ecran optimizat pentru afișarea pe monitoare mari în depozit.
    *   **Derulare Automată:** Lista de plecări derulează automat dacă depășește spațiul ecranului.
    *   **Actualizări în Timp Real:** Afișează cele mai recente statusuri ale plecărilor (În așteptare, La încărcat, Plecat, Anulat, Întârziat) pe măsură ce acestea sunt actualizate în panoul de administrare.
    *   **Ceas și Legendă:** Include un ceas care afișează data și ora curentă și o legendă clară a culorilor pentru statusuri.

*   **Optimizator de Rute (`/optimize`):**
    *   **Sugestii AI:** Un instrument bazat pe inteligență artificială (utilizând Genkit) pentru a sugera rute optimizate pe baza locației curente, destinației, punctelor intermediare și datelor de trafic.
    *   **Analiză Detaliată:** Oferă ruta optimizată, timpul estimat și o justificare a sugestiei.

## Tehnologii Utilizate

*   **Framework:** [Next.js](https://nextjs.org/) (cu App Router)
*   **Limbaj:** [TypeScript](https://www.typescriptlang.org/)
*   **Bază de Date:** [Firebase Firestore](https://firebase.google.com/docs/firestore) pentru stocare de date în timp real și fără server.
*   **Stilizare:** [Tailwind CSS](https://tailwindcss.com/) și [shadcn/ui](https://ui.shadcn.com/) pentru o interfață modernă și responsivă.
*   **Inteligență Artificială:** [Genkit](https://firebase.google.com/docs/genkit) pentru funcționalitatea de optimizare a rutelor.
*   **Gestionare Formulare:** [React Hook Form](https://react-hook-form.com/) și [Zod](https://zod.dev/) pentru validare.
*   **Manipulare Excel:** [SheetJS (xlsx)](https://sheetjs.com/) pentru funcționalitățile de import/export.

## Structura Proiectului

*   `src/app/`: Conține paginile principale ale aplicației:
    *   `/page.tsx`: Panoul de administrare.
    *   `/display/page.tsx`: Panoul public de afișare.
    *   `/optimize/page.tsx`: Pagina optimizatorului de rute.
*   `src/components/`: Componente React reutilizabile, inclusiv dialoguri, formulare, tabele și elemente de interfață `shadcn/ui`.
*   `src/firebase/`: Configurația Firebase, provideri de context și hook-uri personalizate pentru interacțiunea cu Firestore (`useCollection`, `useDoc`).
*   `src/ai/`: Conține fluxurile Genkit pentru funcționalitățile AI.
    *   `flows/suggest-optimized-route.ts`: Logica pentru optimizarea rutei.
*   `src/lib/`: Conține tipuri TypeScript (`types.ts`), date de test (`data.ts`) și funcții utilitare.
*   `docs/backend.json`: O reprezentare a schemei de date utilizate în Firestore.
*   `firestore.rules`: Regulile de securitate pentru Firestore, care în acest prototip permit acces deschis pentru citire/scriere.
