# Tata 1mg Clone

Welcome to **Tata 1mg Clone**, a full-stack e-commerce application designed to replicate the functionality of the Tata 1mg platform. This project utilizes React for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage. Experience seamless user authentication and cart management in this robust application.

![Homepage](https://github.com/user-attachments/assets/aad192cf-1bc9-47a0-b8d7-db430850124a)
![Product Page](https://github.com/user-attachments/assets/a05a5a8a-9141-4564-92c1-d9b2fac3fafd)
![Cart Page](https://github.com/user-attachments/assets/329c2077-12e6-48c0-872b-15b0e028e232)
![Checkout](https://github.com/user-attachments/assets/705174ef-54d9-4a4f-b954-34a01d43a1bb)
![User Profile](https://github.com/user-attachments/assets/2d2f13cd-f2a9-4e49-8c2b-3d24d0f4f2d2)
![Order Summary](https://github.com/user-attachments/assets/e11da9ae-fb31-440c-94cb-fad4c6094dc1)

## 🚀 Features

- **User Authentication**: Create accounts, log in, and log out with ease.
- **Secure Cart Access**: Only logged-in users can access and modify their cart.
- **Cart Management**: Add items to your cart seamlessly once logged in.

## 🛠 Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## 🏗 Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/imoamo/1mg_clone.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd 1mg_clone
    ```

3. **Install the dependencies:**
    ```bash
    npm install
    ```

4. **Run the application in development mode:**
    ```bash
    npm run dev
    ```

## 🌐 Usage

1. Ensure MongoDB is running and accessible.
2. Start the application using the provided development server commands.
3. Open your browser and navigate to `http://localhost:5173` to explore the application.

## 📡 API Endpoints

### Authentication Routes

#### Signup

- **URL**: `/api/user/signup`
- **Method**: POST
- **Description**: Register a new user account.
- **Request Body**: 
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
- **Response**: 
    ```json
    {
      "message": "User created successfully",
      "user": user
    }
    ```

#### Login

- **URL**: `/api/user/login`
- **Method**: POST
- **Description**: Authenticate a user and return a JWT token.
- **Request Body**: 
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
- **Response**: 
    ```json
    {
      "token": "JWT token"
    }
    ```

#### Logout

- **URL**: `/api/auth/logout`
- **Method**: POST
- **Description**: End the user session.
- **Response**: 
    ```json
    {
      "message": "User logged out successfully"
    }
    ```

### Product Routes

#### Add to Cart

- **URL**: `/api/product/create`
- **Method**: POST
- **Description**: Add a product to the cart.
- **Request Body**: 
    ```json
    {
      "productId": "string",
      "quantity": "number"
    }
    ```
- **Response**: 
    ```json
    {
      "message": "Product added to cart",
      "cart": cart
    }
    ```

#### Get Cart

- **URL**: `/api/product`
- **Method**: GET
- **Description**: Retrieve the user's cart.
- **Response**: 
    ```json
    {
      "cart": cart
    }
    ```

## 🤝 Contributing

We welcome contributions! Feel free to submit a pull request or open an issue for any changes or improvements.

---

Feel free to update the image paths and any other details as needed. If there’s anything else you need, just let me know!
