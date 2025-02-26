# React E-Commerce App

## Description
This is a React-based e-commerce application that includes user authentication, product browsing, and user management functionalities. The app utilizes Redux for state management and React Router for navigation.

## Features
- **User Authentication**
  - The app starts with a login screen.
  - If valid credentials are entered, the user is redirected to the home page.
  - If credentials are incorrect, an alert message is shown.
  
- **Navigation Bar**
  - Includes links to Home, Products, Users, Contact Us, and a Logout button.
  - Clicking on Logout redirects the user back to the login screen.
  
- **Home Page**
  - Displays a welcome message and links to explore different categories.
  
- **Products Page**
  - Left panel: Displays product categories fetched from API.
  - Right panel: Displays product titles fetched from API.
  - Clicking on a category updates the right panel with respective products.
  - Clicking on a product title navigates to the Product Details page.
  
- **Product Details Page**
  - Displays full details of a selected product.
  - Product details are managed via Redux store.
  
- **Users Page**
  - Fetches and displays a list of users in a table format.
  - Provides filtering based on gender (All, Male, Female).
  - Implements Delete and Update functionality.
  - Clicking Update opens a form pre-filled with user details.
  
- **Contact Us Page**
  - Displays a simple contact form.

## APIs Used
- Categories: `https://fakestoreapi.com/products/categories`
- Electronics: `https://fakestoreapi.com/products/category/electronics`
- Jewellery: `https://fakestoreapi.com/products/category/jewelery`
- Men's Clothing: `https://fakestoreapi.com/products/category/men's clothing`
- Women's Clothing: `https://fakestoreapi.com/products/category/women's clothing`
- Users: `https://randomuser.me/api/?results=20`

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```
4. Live view:
   ```sh
   https://shopifyy-tawny.vercel.app/
   ```

## Technologies Used
- React
- Redux Toolkit
- React Router
- Axios (for API calls)
- Tailwind CSS (for styling)

## Folder Structure
```
📦 react-ecommerce-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Nav.js
 ┃ ┃ ┣ 📜 Home.js
 ┃ ┃ ┣ 📜 Products.js
 ┃ ┃ ┣ 📜 ProductDetails.js
 ┃ ┃ ┣ 📜 Users.js
 ┃ ┃ ┣ 📜 ContactUs.js
 ┃ ┃ ┣ 📜 Login.js
 ┃ ┃ ┣ 📜 categories
 ┃ ┃ ┃ ┣ 📜 Electronics.js
 ┃ ┃ ┃ ┣ 📜 Jewellery.js
 ┃ ┃ ┃ ┣ 📜 MensClothing.js
 ┃ ┃ ┃ ┣ 📜 WomensClothing.js
 ┃ ┣ 📂 redux
 ┃ ┃ ┣ 📜 store.js
 ┃ ┃ ┣ 📜 productsSlice.js
 ┃ ┃ ┣ 📜 usersSlice.js
 ┃ ┣ 📜 App.js
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## Future Enhancements
- Add a shopping cart feature.
- Implement product search functionality.
- Enhance UI with better styling.

## License
This project is open-source and available under the MIT License.

