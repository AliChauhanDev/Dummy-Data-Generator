 🛠️ Dummy Data Generator

A Node.js application that generates and manages dummy employee data using Express and MongoDB.

 ✨ Features

- **Random Data Generation**:Generates 10 random employee records with each button click
- **Database Management**:Clears existing data before each generation to maintain a clean dataset

 🚀 Getting Started

 📋 Prerequisites
- ode.js installed- MongoDB instance runng

 🛠️ Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AliChauhanDev/Dummy-Data-Generator.git
   cd Dummy-Data-Generator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
  - Create a `.env` file in the root directy.
  - Add the followg:
     ```
     PORT=3000
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Start the Application**:
   ```bash
   npm start
   ```   Access the app at `http://localhost:30`.

 🧩 Usage

- **Generate Dat**: Click the "Generate Data" button on the homepage to populate the database with 10 random employee recds.
- **Data Rese**: Each click clears the existing data and adds new records, ensuring the database always contains only the latest 10 entes.

 🛡️ Security

- **Data Integriy**: Ensures the database is refreshed with each operation to maintain consistentata.
