# Bicycle Store Website

## Project Overview

This project is a full-stack **responsive bicycle store website** designed to provide a smooth user experience for browsing, purchasing bicycles, and managing orders. The website includes essential features like **user authentication**, **role-based access**, **product management**, **order management**, and **payment integration**. The application is built using modern technologies like **React**, **Redux**, **Node.js**, **Express**, and **MongoDB**, ensuring scalability and responsiveness across different devices.

### Key Features

#### **Frontend**

- **Navbar**: Provides navigation links to different sections of the site (Home, Products, About Us, etc.).
- **Header**: Displays the main heading and introductory information.
- **Our Services**: Highlights services offered by the platform.
- **Event Items**: Displays upcoming events or promotions.
- **Gallery**: Showcases images of bicycles and related content.
- **Pricing**: Displays pricing details for available products.
- **Review Section**: Section for user reviews and ratings.
- **Recent Events**: Displays the latest events on the platform.
- **Footer**: Contains links to privacy policy, terms and conditions, etc.
- **Public Pages**:
  - **Home Page**: Overview of the platform.
  - **All Products Page**: Shows all bicycles with filtering and sorting options.
  - **Product Details Page**: Provides detailed information about each bicycle.
  - **About Us Page**: Describes the platform/company.
- **Private Pages** (Requires authentication):
  - **Checkout Page**: Allows authenticated users to place orders.
  - **Dashboard**: Role-based dashboard where users can see order history and account details, and admins can manage products and orders.

#### **Backend**

- **User Authentication**: Allows user registration, login, and role-based authentication using JWT tokens.
- **Product Management**: CRUD operations (Create, Read, Update, Delete) for bicycle products in the inventory.
- **Order Management**: CRUD operations for managing orders, including stock level validation before order placement.
- **Payment Integration**: Supports payment processing using **SurjoPay**, **AmaarPay**, **SSLCommerz**, or **Stripe**.
- **Error Handling**: Implements consistent error messages for issues like invalid login attempts, out-of-stock products, etc.
- **API**:
  - **Pagination**: Supports pagination for product listings and order history.
  - **Authentication Middleware**: Protects private routes such as the checkout page and the user/admin dashboards.

## Technologies Used

- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **Redux**: For state management, using **Redux Toolkit (RTK Query)** for efficient data management.
  - **TypeScript**: For type safety and better developer experience.
- **Backend**:
  - **Node.js**: JavaScript runtime for building server-side applications.
  - **Express**: Web framework for Node.js to handle routing and API requests.
  - **MongoDB**: NoSQL database for storing user, product, and order information.
  - **JWT (JSON Web Tokens)**: For secure authentication and session management.
  - **Payment **Stripe\*\* for payment processing.

## Setup Instructions

Follow the steps below to run the project locally.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone <git@github.com:altaj1/bi-cycle-client.git>
```
