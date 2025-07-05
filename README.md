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
- Once DB is created we can have migrations to create models inside DB by executing
```
npx sequalize db:migrate
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


##  DB Design
- Airplane Table 
- Flight Table
- Airport Table
- City Table

- A flight belongs to an airplane but one airplane can be used in multiple flights.
- A city can have many airports, but one airport belongs to one city.
- One airport can have many flights, but one flight belongs to one airport.


## Tables 

### City -> id, name, createdAt, updatedAt
### Airport -> id, name, address, city_id, createdAt, updatedAt
    Relationship -> City can have many Airports, but one Airport can belong to one City (one-many relationship)
