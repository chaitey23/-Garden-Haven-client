# 🌿 Garden Haven - Gardening Community & Resource Hub (Client)

🔗 **Live Site URL:** [https://your-client-site-url.netlify.app](https://your-client-site-url.netlify.app)

## 🚀 Features
- 🔐 Firebase Authentication with Email/Password and Google Sign-In
- 🌱 Users can Share, Update & Delete Gardening Tips (CRUD)
- 🌟 Show Featured Gardeners and Trending Tips on Home Page
- 🌘 Light/Dark Theme Toggle from Navbar
- 🧠 Browse Tips with Filtering (by Difficulty Level)
- ❤️ Like system to increase tip popularity
- 🔍 Explore Gardeners section with tip count and details

## 📜 Project Description
**Garden Haven** is a platform for gardening enthusiasts to connect, share plant care tips, explore local gardener profiles, and discover new gardening ideas. It supports user authentication, tip management, and dynamic filtering — all with a responsive, modern design.

## 📱 Responsiveness
- Fully responsive on Desktop and Mobile
- Tablet support is optional, but design adapts accordingly

## 🛠️ Technologies Used
- React 19 + Vite
- Firebase Authentication
- Tailwind CSS
- Axios
- React Router
- Lottie / Typewriter / Tooltip (2 integrations)

## 📁 Environment Variables
Ensure the following variables are in your `.env` file (Do NOT commit them):
```env
VITE_API_URL=http://localhost:3000
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

## 📌 Pages & Routes
- `/` - Home (Banner, Featured Gardeners, Trending Tips, Extra Sections)
- `/explore-gardeners` - List of All Gardeners
- `/browse-tips` - All Public Tips with Filter
- `/share-tip` - Private Route: Add New Tip
- `/my-tips` - Private Route: View, Edit, Delete own Tips
- `/tip/:id` - Private Route: Tip Details with Like
- `/login` & `/register` - Auth Pages
- `*` - Custom 404 Page

## 🔒 Private Routes
- Share Tip
- Tip Details
- My Tips
- Update Tip