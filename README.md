# Resume Builder Web

A full-stack web application for creating, editing, and exporting beautiful resumes with live preview, customizable templates, and user authentication.

---

## Features

- **User Authentication:** Register, login, and manage your profile securely.
- **Resume Management:** Create, update, and delete multiple resumes per user.
- **Live Editing:** Instantly preview your resume as you edit each section.
- **Template Selection:** Choose from multiple modern resume templates.
- **Color Palettes:** Personalize your resume with a variety of color themes.
- **Image Uploads:** Add profile photos and resume thumbnails.
- **PDF Export:** Download your resume as a high-quality PDF (feature-ready).
- **Responsive UI:** Clean, modern, and mobile-friendly interface.
- **Tech Stack:** React, Node.js, Express, MongoDB, Tailwind CSS.

---

## Project Structure

```
Resume Builder Web/
│
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── config/
│   └── server.js
│
└── frontend/
    └── resume-builder/
        ├── public/
        ├── src/
        │   ├── assets/
        │   ├── components/
        │   ├── context/
        │   ├── pages/
        │   ├── utils/
        │   ├── App.jsx
        │   └── index.css
        └── tailwind.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js** (v16+ recommended)
- **MongoDB** (local or Atlas)
- **npm** or **yarn**

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resume-builder-web.git
cd resume-builder-web
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

- Create a `.env` file in the `backend` folder:

    ```
    PORT=8000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLIENT_URL=
    ```

- Start the backend server:

    ```bash
    npm run dev
    # or
    node server.js
    ```

---

### 3. Frontend Setup

```bash
cd frontend/resume-builder
npm install
```

- Start the frontend development server:

    ```bash
    npm run dev
    ```

- The app will be available at []()

---

## Usage

1. **Register** a new account or **login**.
2. **Create** a new resume from your dashboard.
3. **Edit** resume sections: personal info, contact, work experience, education, skills, projects, certifications, languages, and interests.
4. **Choose** a template and color palette.
5. **Preview** your resume live.
6. **Download** as PDF (if enabled) or share your resume.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Axios
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer (for file uploads), JWT
- **Other:** React Context API, moment.js, html2canvas (for image capture)

---

## Folder Highlights

- **backend/controllers/** – Express route controllers (auth, resume, image upload)
- **backend/models/** – Mongoose models for User and Resume
- **backend/routes/** – API route definitions
- **frontend/src/components/** – All React UI components (Cards, Inputs, Resume Sections, Templates, etc.)
- **frontend/src/pages/** – Page-level components (Dashboard, Edit Resume, Auth, Landing)
- **frontend/src/utils/** – API paths, Axios instance, helpers, dummy data

---

## Customization

- **Templates:** Add new templates in `frontend/src/components/ResumeTemplates/`.
- **Themes:** Add color palettes in `frontend/src/utils/data.js`.
- **Profile Images:** Uploaded images are stored in `backend/uploads/`.

---

## Environment Variables

**Backend `.env` example:**
```
PORT=8000
MONGO_URI=mongodb://localhost:27017/resume-builder
JWT_SECRET=your_jwt_secret
CLIENT_URL=
```

---

## License

This project is for educational and personal use.  
Feel free to fork and customize!

---

## Credits

- UI inspired by modern resume builders.
- Built with 💜 using React, Node.js, and Tailwind CSS.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Contact

For questions or feedback, open an issue or contact the maintainer.
