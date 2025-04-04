# E-Commerce Website (PHP & MongoDB)

This is an e-commerce website project using **PHP** for the backend and **MongoDB** as the database.

## Prerequisites
- Install **XAMPP** (Apache & PHP support)
- Install **MongoDB** and ensure it is running
- Configure XAMPP to connect with MongoDB

## Installation & Setup
1. **Clone/Download** this project and save it inside `xampp/htdocs`.
2. **Start XAMPP** and ensure the Apache server is running.
3. **Create a MongoDB database** named `olxlist`.
4. **Import collections** from the `import_collections_mongodb` folder provided in this project.
5. **Configure SMTP** in XAMPP to enable email functionalities.
6. **Update email settings**:
   - Replace `toshitpant0808@gmail.com` with your own email ID in the mail configuration file.

## User Authentication
- **User Login**: Sign up as a new user to access the platform.
- **Admin Login**: Credentials should be set up securely in the database (avoid hardcoding sensitive details).

## Features
- User authentication (signup & login)
- Product listing and management
- Email notifications for transactions
- Admin panel for managing users & listings

## Security Note
- Ensure environment variables or a configuration file is used to manage sensitive credentials instead of hardcoding them.
- Implement password hashing for secure authentication.

