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
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   GITHUB_ID=your_github_oauth_id
   GITHUB_SECRET=your_github_oauth_secret
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_IMGBB_API_KEY=your_imgbb_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Then visit http://localhost:3000.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## ✅ Features
- Secure auth-gated dashboard using NextAuth
- Add Product form with validation (React Hook Form)
- Image upload to ImgBB (client) and product persistence (API route)
- Responsive UI with Tailwind CSS
- Product list, detail view, and protected dashboard navigation

## 📦 Project Scripts
- `dev` – Start development server
- `build` – Build for production
- `start` – Start production server
- `lint` – Lint the project (if configured)

## 🗺️ Folder Structure (example)
```
/app or /pages
  /api
    products (route.js or products.js)
  /dashboard
    page.jsx
    /add-product
      page.jsx
  /products
    page.jsx
    [id]
      page.jsx
/components
  Navbar.jsx
  ProductCard.jsx
  AddProductForm.jsx
/lib
  db.js (MongoDB connection)
public
styles
```

## 📝 Notes
- If you call ImgBB from the client, expose your key with `NEXT_PUBLIC_IMGBB_API_KEY`.
- In `next.config.js`, allow remote images (e.g., `i.ibb.co`) via `images.remotePatterns`.
- Use relative API calls from the client: `fetch('/api/products')`.

---


