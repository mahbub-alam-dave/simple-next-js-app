# Simple Next.js App  

A simple full-stack Next.js application with authentication, product showcase, and a dashboard for logged-in users.  

## 🚀 Project Summary  
This project demonstrates a small e-commerce style app built with **Next.js**.  
- Public users can browse products, view highlighted items on the landing page, and access product details.  
- Authentication is handled with **NextAuth.js**, allowing users to log in/out.  
- Logged-in users can access a **dashboard** where they can add new products.  
- Products are stored in a **MongoDB** database.  

## 🛠️ Tech Stack & Packages  
- [Next.js](https://nextjs.org/) – React framework  
- [NextAuth.js](https://next-auth.js.org/) – Authentication  
- [MongoDB](https://www.mongodb.com/) – Database  
- [Tailwind CSS](https://tailwindcss.com/) – Styling  
- [React Hook Form](https://react-hook-form.com/) – Form handling & validation  
- [React Icons](https://react-icons.github.io/react-icons/) – Icons  

## 📂 Routes Summary  
- `/` → Landing page with highlighted products  
- `/products` → Show all products with details  
- `/products/[id]` → Product details page  
- `/dashboard` → Dashboard (only for logged-in users)  
  - `/dashboard/add-product` → Form to add new product  
- `/api/products` → API endpoint for CRUD operations on products  

## 🔗 Links  
- **GitHub Repository:** [mahbub-alam-dave/simple-next-js-app](https://github.com/mahbub-alam-dave/simple-next-js-app)  
- **Live Link:** (Coming soon 🚀)  

## ⚙️ Setup & Installation  

1. **Clone the repo**  
   ```bash
   git clone https://github.com/mahbub-alam-dave/simple-next-js-app.git
   cd simple-next-js-app
Install dependencies

bash
Copy
Edit
npm install
# or
yarn install
Set up environment variables
Create a .env.local file in the root directory:

env
Copy
Edit
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_oauth_id
GITHUB_SECRET=your_github_oauth_secret
MONGODB_URI=your_mongodb_connection_string
IMGBB_API_KEY=your_imgbb_api_key
Run the development server

bash
Copy
Edit
npm run dev
Then visit http://localhost:3000.

Build for production

bash
Copy
Edit
npm run build
npm start