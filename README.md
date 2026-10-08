# VÉRANO

**Premium Full-Stack E-Commerce Platform — Technology, Refined.**

A portfolio-ready commerce application built with React/Vite/Tailwind on the client and Node/Express/MongoDB on the server.

## Features
- Premium responsive storefront
- Product search, categories and sorting
- Product detail pages and related products
- JWT authentication + bcrypt password hashing
- Persistent cart and wishlist
- Saved user addresses
- Multi-step-style checkout with mock card/COD payment selection
- MongoDB orders and order tracking
- Coupon validation
- Admin dashboard and protected order management endpoints
- Loading/empty/error states and toast feedback
- Seeded demo catalog with 12 products

## Tech Stack
React, Vite, Tailwind CSS, React Router, Axios, Lucide React, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs.

## Project Structure
```text
verano-store/
├── client/
│   ├── src/{components,pages,layouts,context,services,utils,assets}
│   └── public/
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── config/
│   └── seed/
├── package.json
└── README.md
```

## Requirements
- Node.js 18+
- MongoDB running locally or a MongoDB Atlas connection

## Installation
```bash
npm install
npm run install-all
```

Copy `server/.env.example` to `server/.env` and set your MongoDB URI and JWT secret.

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/verano_store
JWT_SECRET=change_this_development_secret
CLIENT_URL=http://localhost:5173
```

## Seed database
```bash
npm run seed
```

Development:
```bash
npm run dev
```

Frontend: http://localhost:5173
API: http://localhost:5000/api/health

## Demo accounts
**Admin**
- Email: `admin@verano.store`
- Password: `ChangeMe123!`

**Customer**
- Email: `customer@verano.store`
- Password: `Customer123!`

These credentials are for local development only. Change them before any real deployment.

## Main Routes
- `/`
- `/shop`
- `/product/:slug`
- `/cart`
- `/login`
- `/register`
- `/profile`
- `/wishlist`
- `/checkout`
- `/orders`
- `/orders/:id`
- `/about`
- `/contact`
- `/admin`

## API Overview
Authentication: `/api/auth/*`
Products: `/api/products/*`
Categories: `/api/categories`
Cart: `/api/cart/*`
Wishlist: `/api/wishlist/*`
Addresses: `/api/addresses/*`
Orders: `/api/orders/*`
Coupons: `/api/coupons/validate`
Admin: `/api/admin/*`

## Notes
Product photography uses stable public Unsplash image URLs for this portfolio build. Payment is intentionally a mock/test flow; no real card data is collected or stored.

## Portfolio positioning
VÉRANO is intentionally structured as a realistic commerce product rather than a tutorial UI: the repository demonstrates frontend engineering, REST API design, MongoDB modeling, authentication, commerce state, checkout logic, responsive UX, and admin workflows.
