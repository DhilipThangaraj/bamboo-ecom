# **Bamboo Ecommerce App**

## **Description**

Bamboo Ecommerce App is a modern e-commerce project built using **Node.js**, **React.js**, and **TypeScript**, with a focus on clean design and efficient state management.

---

## **Getting Started**

Follow the steps below to set up the development environment:

### **Prerequisites**

Ensure you have the following tools installed on your machine:

- **Node.js** (>= 18)
- **React** (>= 18.3)
- **React Router DOM**
- **TypeScript**
- **Shadcn**
- **Tailwind CSS**
- **Zustand** (for state management)
- **pnpm** (for package management)

### **1. Install Dependencies**

To begin, install the required dependencies using **pnpm**. If **pnpm** is not already installed, you can install it globally by running:

```bash
npm install -g pnpm
```

Then, install the project dependencies:

```bash
pnpm install
```

### **2. Start the Server**

Start the development server with the following command:

```bash
pnpm run dev
```

The server runs on **port 4000** by default.

---

### **Features**

- **UI Header**:

  - Displays the app logo.
  - Includes a **non-functional search bar** for demonstration purposes.
  - Provides a **functional theme selector** for light/dark mode.
  - Includes options for **cart** and **sign-in**, which currently redirect to a "Page Not Found" placeholder.

- **Product Listing Screen**:
  - Fetches and displays a list of products using the **Faker API**.
  - Allows users to click on products to view their **details** on a dedicated product page.
  - This app is completely responsive.
