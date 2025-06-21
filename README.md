# Flight and Search service
A simple microservice for handling flight CRUD 

## Project setup 
- Clone the project on your local.
- Execute `npm install` on the same path as root directory.
- Create a `.env` file in root directory and add the following environment variable
```
    PORT = 3000
```
- Inside `src/config` create a new file `config.json` and then add the following piece of json 
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Search_DB_local",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once added db config as listed above, execute in src folder from terminal to execute
```
npx sequalize db:create
```

## 📁 Folder Structure

```
/root
├── src/
│   ├── index.js           # Entry point of the application
│   ├── models/            # Database models
│   ├── controllers/       # Request handlers
│   ├── middlewares/       # Express middleware functions
│   ├── services/          # Business logic and reusable functions
│   ├── utils/             # Utility/helper functions
│   ├── config/            # Configuration files (e.g., DB, env)
│   └── repositary/        # Data access layer
│
└── test/                  # (Planned) Unit and integration tests
```