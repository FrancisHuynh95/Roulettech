# Roulettech

## Overview

Roulettech is a simple website built as a full-stack application with React.js for the frontend and Django for the backend. The application showcases basic web development skills with the following features:

- **Frontend**: A web page developed using React.js. This component-based UI demonstrates the ability to create interactive and dynamic web pages.
- **Backend**: A Django-based backend providing at least two API endpoints to support the frontend. These endpoints facilitate CRUD operations for managing posts.

This project is designed to illustrate how React and Django can work together to create a functional web application with a straightforward and practical approach.

## Features

- **Create, Read, Update, Delete (CRUD) Posts**: Manage posts via a RESTful API.
- **Responsive UI**: Built with React for a dynamic user experience.

## Getting Started

### Prerequisites

- Python 3.9 or higher
- Node.js 14.x or higher
- npm or yarn (for managing JavaScript packages)

### Backend Setup (Django)

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/FrancisHuynh95/Roulettech.git
   cd Roulettech
2. **Navigate to Backend:**
   ```bash
   cd myproject
3. **Starting the Virtual Environment:**
    ***On Windows:***
   ```bash
   python -m venv ../myenv
   ```
    ***On Mac/Linux:***
     ```bash
      source ../myenv/bin/activate
     ```
5. **Install Required Packages:**
   ```bash
   pip install -r requirements.txt
6. **Apply Migrations**
   ```bash
   python manage.py migrate
7. **Create a Superuser(optional)**
    ```bash
    python manage.py createsuperuser

8. **Starting the Server**
   ```bash
   python manage.py runserver

  **The Django backend should now be running on http://localhost:8000


### Frontend Setup (React)  
   
1. **Navigate to the Frontend**
   ```bash
   cd ../frontend
   
2. **Installing Necessary Dependencies:**
      **If using npm:**
      ```bash
        npm install
      ```
    **If using yarn:**
    ```bash
    yarn install
    ```

3. **Starting the Development Server:**
  ****Using npm****
   ```bash
   npm start
   ```
   ***using yarn***
   ```bash
   yarn start

**The React frontend should now be running at http://localhost:3000.**



