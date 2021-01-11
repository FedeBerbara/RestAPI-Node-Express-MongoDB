# RestAPI template using NodeJS + Express + MongoDB

_Example to create RESTFul API for CRUD operations using MongoDB as Database with Mongoose as modeler. 

## ¿ What you can do with this examples ? 

_You will be able to test the differents endpoints that I wrote and make the classics request methods as GET, POST, PUT and DELETE operations._

## ¿ What knowledge do you need to understand this examples ? 🛠️

_You need to have basic knowledge of the technologies used in the creation. I use_ 

* [NodeJS](https://nodejs.org/es/) - As main language
* [Express](https://expressjs.com/es/) - To have our server
* [MongoDB](https://www.mongodb.com/es) - As database to store the data. 

_You can use the console to interact with the database or download [MongoDB Compass](https://www.mongodb.com/products/compass). A very useful graphic interface for MongoDB_

## Installation 

_Download the project and open it in your code editor. And put on the console_

```
npm install
```

_This command will install the necessary dependencies for the project._

_After that you need to create your **.env** file following the **.env.example** file that I left. You will need it for the connection to MySQL and then put in the console_

```
npm start
```

_If everything went well, you should see something like this on the console_

```
Server Running in Port xxxx
Database Connected
```

_In this point we are more than ready to make the tests!!_

## Endpoints ⚙️

_For test in my case I use [POSTMAN](https://www.postman.com/)_

_Main URL: localhost:xxxx/employees_ 

---
_This request will return the complete list of customers._
_GET method:_ **localhost:xxxx/employees**

_The answer will be something like:_ 
```
[
    {
        "id": "5ffa04909df1153394da3336",
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@examplemail.com",
        "age": 22,
        "role": "Admin"

    },
    {
        "id": "5ffa04909df1153394da3338",
        "first_name": "John",
        "last_name": "Doe",
        "email": "johnd@examplemail.com",
        "age": 25,
        "role": "Developer"
    }
]
```

---
_This request will return only 1 customer._
_GET by ID method:_ **localhost:xxxx/employees/id/:id**

_The answer will be something like:_ 
```
{
    "id": "5ffa04909df1153394da3336",
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@examplemail.com",
    "age": 22,
    "role": "Admin
}
```

---
_This request will create a customer._
_POST method:_ **localhost:xxxx/employees/add**

_The customer information you enter on Postman should look something like:_ 
```
{
    "first_name": "You new customer name",
    "last_name": "customer last name",
    "email": "customer@examplemail.com",
    "age": The customer age as number value,
    "role": "Role in the company"
}
```

---
_This request will be able to update the data of a specific customer._
_PUT method:_ **localhost:xxxx/employees/update/:id**

_You can change the data of a specific customer for example:_ 
```
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@examplemail.com",
    "age": 40,
    "role": "CTO"
}
```

_to_:
```
{
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@gmail.com",
    "age": 20,
    "role": "CEO"
}
```

---
_This request will be able to search all the employees with a specific role._
_GET method:_ **localhost:xxxx/employees/role**

_The answer will be something like:_ 
```
[
    {
        "id": "5ffa04909df1153394da3336",
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@examplemail.com",
        "age": 22,
        "role": "Admin"

    },
    {
        "id": "5ffa04909df1153394da3338",
        "first_name": "John",
        "last_name": "Doe",
        "email": "johnd@examplemail.com",
        "age": 25,
        "role": "Admin"
    }
]
```

---
_This request will remove a specific customer._
_DELETE by ID method:_ **localhost:xxxx/employees/delete/:id**

---

####  I hope this example is helpful to you. Feel free to use it or modify it to your liking. I will update it over time

##### © Federico Berbara 2020