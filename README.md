# SharePal Gaming Gadgets Rental

A responsive React + Vite recreation of the SharePal gaming gadgets rental page for Bangalore.

The project focuses on recreating the SharePal visual design, responsive layout, product browsing experience, category filtering, and interactive UI elements.

## Live Demo

[View Live Demo](https://sharepal-clone.vercel.app/)

## GitHub Repository

[View Source Code](https://github.com/parjani/sharepal-clone)

## Features

- Responsive SharePal-style navigation bar
- Bangalore location and rental date selection UI
- Gaming category navigation
- Gaming product listing
- Product category filtering
- Product cards with:
  - Product image
  - Product name
  - Rating
  - Booking count
  - Daily rental price
  - Wishlist interaction
  - Rent Now button
  - Out-of-stock state
- Gaming product dataset
- Responsive layout for desktop, tablet and mobile
- FAQ accordion
- Customer testimonials section
- Statistics section
- Related gaming categories
- Footer with navigation and support information
- Smooth scrolling and hover animations
- Mobile navigation menu

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Icons
- JavaScript (ES6+)

## Project Structure

```text
src/
├── assets/
│   ├── hero.png
│   └── logo.png
│
├── components/
│   ├── CategorySection.jsx
│   ├── CategoryTabs.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── RelatedCategories.jsx
│   ├── Stats.jsx
│   └── Testimonials.jsx
│
├── data/
│   └── products.json
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
├── favicon.svg
├── icons.svg
└── sharepalfavico.jpg
