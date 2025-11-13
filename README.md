<img width="1607" height="876" alt="Screenshot 2025-11-13 172817" src="https://github.com/user-attachments/assets/0cc956f6-3c0e-4499-aa01-a0ffb64d813a" /># 🌟 Portfolio Website - Abhishek Yadav

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dynamic GitHub project integration, smooth animations, and a beautiful UI.


<img width="1624" height="800" alt="Screenshot 2025-11-13 173252" src="https://github.com/user-attachments/assets/e74b7724-84d4-446d-a571-46730c469fba" />

## ✨ Features

- **Dynamic Projects Section** - Automatically fetches and displays GitHub repositories
- **Language Filtering** - Filter projects by JavaScript, TypeScript, or Other languages
- **Interactive Hover Effects** - Project cards with detailed modal overlays
- **Smooth Animations** - Powered by Framer Motion
- **Dark/Light Mode** - Theme toggle for better user experience
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Contact Form** - Easy way for visitors to get in touch
- **Education & Experience** - Dedicated sections with timeline animations
- **Skills Showcase** - Visual display of technical skills

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Type Safety:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Build Tool:** Vite
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository
git clone https://github.com/abhisekh9/portfolio.git
cd portfolio

text

2. Install dependencies
npm install

text

3. Run the development server
npm run dev

text

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Configuration

### Update Personal Information

1. **GitHub Integration:** Edit the username in `Projects.tsx`
const response = await fetch('https://api.github.com/users/YOUR_USERNAME/repos');

text

2. **Contact Information:** Update email and social links in `Contact.tsx`

3. **Education & Experience:** Modify content in `Education.tsx` and `Experience.tsx`

4. **Skills:** Update your tech stack in `Skills.tsx`

## 📁 Project Structure

portfolio/
├── src/
│ ├── components/
│ │ ├── Hero.tsx
│ │ ├── About.tsx
│ │ ├── Skills.tsx
│ │ ├── Projects.tsx
│ │ ├── Education.tsx
│ │ ├── Experience.tsx
│ │ ├── Contact.tsx
│ │ └── Footer.tsx
│ ├── App.tsx
│ └── main.tsx
├── public/
│ └── favicon.png
└── README.md

text

## 🎨 Customization

### Colors
Modify the Tailwind config to change the color scheme:
// tailwind.config.js
theme: {
extend: {
colors: {
primary: '#your-color',
secondary: '#your-color',
}
}
}

text

### Animations
Adjust animation speeds in Framer Motion components:
transition={{ duration: 0.6, delay: 0.2 }}

text

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy

### Manual Build

npm run build

text

The build output will be in the `dist/` folder.

## 📸 Screenshots

### Hero Section
<img width="1607" height="876" alt="Screenshot 2025-11-13 172817" src="https://github.com/user-attachments/assets/87388ef6-ee5c-4ed6-aa64-f55d94233034" />


<img width="1699" height="691" alt="Screenshot 2025-11-13 172831" src="https://github.com/user-attachments/assets/8f933fa6-2274-4bdf-a31c-dd95bf3ccbff" />


## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/abhisekh9/portfolio/issues).

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👤 Author

**Abhishek Yadav**

- GitHub: [@abhisekh9](https://github.com/abhisekh9)
- LinkedIn: [abhisekh9](https://linkedin.com/in/abhisekh9)
- Email: abhisekh.9902@gmail.com

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- GitHub API for project integration
- Framer Motion for smooth animations
- Tailwind CSS for rapid styling

---

⭐️ Star this repo if you found it helpful!
