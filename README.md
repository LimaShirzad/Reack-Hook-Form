# React Registration Form Project

This is a simple and modern registration form built with **React**, **React Hook Form**, and **Yup** for validation.  
It is designed for learning purposes and demonstrates how to create forms with validation in React.

---

## Features

- **Full Name**, **Email**, **Password**, and **Confirm Password** fields  
- **Terms & Conditions** checkbox  
- Validation using **React Hook Form + Yup**  
- Error messages displayed under each field  
- Success message on successful submission  
- Modern floating label design  
- Mobile responsive  

---

## Form Validation Rules

| Field               | Validation                                  |
|--------------------|--------------------------------------------|
| Full Name           | Required, minimum 3 characters             |
| Email               | Required, must be a valid email            |
| Password            | Required, minimum 8 characters, at least 1 number |
| Confirm Password    | Required, must match password              |
| Terms & Conditions  | Must be checked                             |

---

## Folder Structure
registration-form/
├─ public/
├─ src/
│ ├─ assets/ # Images, logos (optional)
│ ├─ components/
│ │ └─ RegisterForm.jsx
│ ├─ styles/
│ │ └─ register.css
│ ├─ App.jsx
│ └─ main.jsx
├─ package.json
└─ README.md


---

## How to Run the Project

1. **Clone the repository** (if using GitHub):
```bash
git clone https://github.com/LimaShirzad/registration-form.git
cd registration-form

npm install
npm run dev




