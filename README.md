# Truck Departure Management System

## 1. Project Overview

This project is a modern, real-time truck departure management system designed to streamline logistics operations. It replaces manual, error-prone processes with a centralized, digital solution, providing complete visibility and control over truck dispatch schedules.

The primary goal is to reduce administrative overhead, minimize human error, and improve operational flow within the depot by offering a single source of truth for all stakeholders.

## 2. Core Features

The application is built around three key components:

### A. Admin Dashboard (`/`)
The central command center for logistics personnel.

*   **Centralized Schedule Management:** Add, edit, and delete departures through an intuitive interface. All changes are reflected in real-time.
*   **Intelligent Status Automation:** The system automatically updates a departure's status to `Delayed` if it has not departed within 10 minutes of its scheduled collection time, ensuring data accuracy.
*   **Bulk Data Import/Export:** Quickly populate schedules by importing data from an **Excel** file and export the current view for reporting and analysis.
*   **Real-Time Status Updates:** Instantly change a departure's status (e.g., from `Waiting` to `Loading`), ensuring all teams have up-to-the-minute information.
*   **Live Route Hazard Checks:** Before a truck departs, operators can click a button to get an instant, AI-powered analysis of the planned route, identifying accidents, road closures, or heavy congestion.

### B. Public Display Board (`/display`)
A "Kiosk" mode screen designed for large monitors in driver waiting areas or the warehouse.

*   **Clear, At-a-Glance Information:** Displays a chronologically sorted list of departures with essential details: carrier, destination, time, bay, and status.
*   **Automatic Real-Time Updates:** The screen refreshes automatically whenever data is changed in the Admin Dashboard, requiring no manual intervention. It also features an auto-scroll function for long lists.
*   **Visual Cues:** A color-coded legend helps in quickly identifying a truck's status, improving clarity and reducing repetitive questions.

### C. Route Optimizer (`/optimize`)
An advanced, AI-powered tool to assist in planning the most efficient routes.

*   **Intelligent Route Suggestions:** Based on the current location ("Sky Gate Derby DE74 2BB"), destination, and intermediate stops, the AI system suggests the optimal route, considering factors like traffic to reduce transit time and costs.

## 3. Technology Stack

The project is built on a modern, robust, and scalable technology foundation:

*   **Framework:** **Next.js** (React) - For a fast, server-rendered user interface.
*   **Database:** **Firebase Firestore** - For a real-time, serverless NoSQL database.
*   **Artificial Intelligence:** **Genkit (Google AI)** - Powers the route optimization feature.
*   **UI/Styling:** **Tailwind CSS** & **shadcn/ui** - For a professional, responsive, and modern design system.

## 4. Getting Started

To run the project locally, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Set up Environment Variables:**
    Create a `.env.local` file and add your Google AI API key:
    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

3.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.
