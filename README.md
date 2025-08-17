# Tasbee7e Application

A simple and modern web application that allows users to add, view, and count **azkar (remembrances)**.

## 🌐 Live Demo

You can try the application here: [Tasbee7e on Vercel](https://tasbee7.vercel.app)

## 🚀 Features

- Add new azkar with a name and description.
- Display azkar as cards with details.
- Navigate to a zikr details page showing its name, description, and counter.
- Increment zikr count with a counter button.
- Reset zikr count to start again.
- Welcome message displayed if no azkar are added yet.
- Data (azkar, descriptions, counters) stored in **Local Storage** for persistence.
- Simple and clean UI with responsive design.

## 🛠️ Built With

- **React** – Component-based frontend library.
- **TypeScript** – For type safety and better developer experience.
- **Tailwind CSS** – For modern and responsive styling.
- **React Router** – For smooth navigation between pages.
- **Vite** – For fast development and build tooling.

## 📂 Project Structure

├── public              # Static assets
├── src
│   ├── components      # Reusable components
│   ├── pages           # Application pages (Home, Add Zikr, Zikr Details)
│   ├── App.tsx         # Root component with routes
│   ├── main.tsx        # Entry point
│   └── assets          # Images, icons, and other static resources
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration


## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdalla-Elhagar/tasbee7e.git

   Navigate to the project folder:

2. Navigate to the project folder:

cd tasbee7e

3. Install dependencies:

npm install

4. Start the development server:
   npm run dev

## 📌 Future Improvements

Add authentication for personalized azkar lists.

Sync data with a backend (instead of Local Storage).

Dark mode support.

Sharing azkar directly via social media.
