# Truck Departure Management System

## 1. Overview

This platform is a modern, interactive solution for real-time management of truck departures from a logistics warehouse. The project was designed to digitize and centralize the shipping schedule, replacing error-prone manual processes with an efficient and intuitive interface.

The main objective is to reduce administrative tasks, minimize human error, and provide a single source of truth for logistics staff, drivers, and managers, thereby improving the operational workflow.

## 2. Components and Functionalities

The application is structured into three key components, each with a specific role in the logistics ecosystem.

### A. Admin Dashboard (Main Page `/`)
This is the command center where logistics personnel perform daily operations.

*   **Centralized Departures Management:**
    *   **Add (`Add Departure`):** Allows for the quick addition of a new departure with all necessary details (carrier, destination, trailer, time, etc.).
    *   **Edit:** Allows for the modification of any detail of an existing departure.
    *   **Delete:** Removes a departure from the system, with a confirmation dialog to prevent accidental deletions.

*   **Bulk Operations (Import / Export):**
    *   **`Import`:** Uploads a complete departure schedule from an **Excel file**, automatically populating the table and saving valuable time.
    *   **`Export`:** Downloads the current view of departures into an Excel file for archiving, reporting, or offline analysis.

*   **Intelligent Features (AI-Powered):**
    *   **Automated Status Updates:** The system monitors departures and automatically updates the status to `Delayed` if the scheduled time is exceeded, according to predefined rules (e.g., +10 min for `Waiting` status).
    *   **Route Hazard Check (`TrafficCone` icon):** An essential feature that, with one click, uses AI to analyze the planned route and report real-time hazards such as accidents, road closures, or severe congestion.

*   **Navigation and Utilities:**
    *   **`Public Display`:** Opens the public display panel (`/display`) in a new tab to check the view intended for drivers.
    *   **`Route Optimizer`:** Navigates to the page dedicated to route optimization.
    *   **`Clear All`:** A reset function that allows for the complete deletion of all data from local storage (with confirmation).

### B. Public Display Panel (`/display`)
Designed as a "Kiosk" mode for large monitors located in driver waiting areas or the warehouse.

*   **Maximum Visibility:** Displays a clear, chronologically sorted list with essential information: carrier, destination, time, bay, and status.
*   **Real-Time Updates:** The screen automatically refreshes with any changes made in the admin panel, ensuring perfect data synchronization. It includes an auto-scroll feature for long lists.
*   **Visual Coding:** The status of each departure is marked with a distinct color, according to the legend in the footer, allowing for quick identification of the current state.

### C. Route Optimizer (`/optimize`)
An advanced, AI-based tool that assists in strategic route planning.

*   **Intelligent Route Suggestions:** The user inputs the starting point, destination, and any stops, and the AI system analyzes the data (including traffic) to suggest the optimal route, estimated travel time, and the reasoning behind the decision.

## 3. Architecture and Technologies

The project utilizes a modern technology stack focused on performance, scalability, and a top-tier user experience.

*   **Framework:** **Next.js** (React) - For a fast web interface with Server-Side Rendering (SSR) and modern features.
*   **Data Storage:** **LocalStorage (Client-Side)** - To ensure a fast experience and offline functionality, data is persisted directly in the user's browser. This approach eliminates the dependency on an external database for the current scenario, guaranteeing data persistence on page reload.
*   **Artificial Intelligence:** **Genkit (Google AI)** - The Genkit platform, powered by the Gemini model, drives the advanced route optimization and traffic analysis functionalities.
*   **UI & Styling:**
    *   **Tailwind CSS:** A utility-first CSS framework for rapid and consistent styling.
    *   **shadcn/ui:** A collection of reusable React components, built on top of Tailwind CSS, for a professional and accessible design.

## 4. Installation and Startup Guide

To run the project in your local environment, follow the steps below.

### Prerequisites
*   **Node.js** (version 18 or later)
*   **npm** or **yarn**

### Installation Steps

1.  **Clone the Repository (if applicable) and Navigate into the Directory:**
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install Dependencies:**
    Run the command below to install all necessary packages.
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    To enable AI-based functionalities, you need to provide a Google API key.

    *   Create a new file in the project root named `.env.local`.
    *   Add the following line to the file, replacing `YOUR_API_KEY_HERE` with the key obtained from [Google AI Studio](https://aistudio.google.com/):

    ```
    GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```

4.  **Start the Development Server:**
    Run the command below to start the application.
    ```bash
    npm run dev
    ```

5.  **Access the Application:**
    Open your browser and navigate to `http://localhost:9002` to view the Admin Dashboard.
