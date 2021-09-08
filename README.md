# Seedingfund (Backend)

This application is an application for projects funding, where you can create an account and simply then you can fill a form with information about your project, after that the company will return to you with a reply. 

<hr>

## URLs

[Deployed Version](https://seedingfund-bn.herokuapp.com/)

<hr>

## Endpoints

There are two main routes:

1- **Auth routes:**

| /auth     	| Signin/Sign up     	| Request Type       |
|---	|---	|---     |
| /signin  	| For signin   	| POST      |
| /sign up  	| For sign up   	| POST          |

2- **Projects routes:**

| /projects   	| For Projects   	| Request Type           |
|---	|---	|---        |
| /getAll  	| Get all projects in the database  	| GET      |
| /getAllById/:id  	| Get all projects from a certain user  	| Get       |
| /updateState/:id  	| Change project state  	| PUT      |
| /addProject  	| Adding projects  	| POST          |

## Dependencies Used

```
    "base-64": "^1.0.0",
    "bcrypt": "^5.0.1",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.0.4",
    "superagent": "^6.1.0"
```