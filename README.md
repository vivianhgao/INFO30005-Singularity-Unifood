# Unifood
A web application designed to connect event organisers to students
across campus and reduce edible waste within The University of Melbourne.

https://unifood-app.herokuapp.com/

**Created by:** Team Singularity: Vivian Gao (917035), Franklin Aldo Darmansa (1025392), Patricia Angelica Budiman (1012861)

**Built with:** Node.JS, Express, MongoDB, React, Material-UI, React-Bootstrap

**Demo Accounts**  

| User Type | Login             | Password |
|-----------|-------------------|---------|
| User      | pbudiman          | userpb  |
| Organiser | external@demo.com | demo    |

# Table of Contents

1. [Set Up Environment](#set-up-environment)
2. [Core Functionalities](#core-functionalities)
3. [Front-End Client](#front-end-client)
4. [Back-End Server](#back-end-server)


## Set Up Environment
Please open 2 terminals
- Terminal 1 for backend:
```
npm install
```
```
npm start
```
- Terminal 2 for frontend:
```
cd client
```
```
npm install
```
```
npm start
```

## Core Functionalities
### Account System
User accounts are able to access their dashboard where all new event and food listings are available. On their dashboard, the user can share their current location and be notified of new events that are close to their proximity.
    
    - User Account
        - Login
        - Sign up
        - Update user
        - Delete user
        - View all users
        
    - Organiser Account
        - Login
        - Sign up
        - Update organiser
        - Delete organiser
        - View all organiser
        
### Form Management
Organiser accounts are able to post a new listing with their location to be advertised to all users. In addition, organisers are able to manage their forms by either updating the details or deleting a listing.

    - Create new form
    - Update form
    - Delete form
    - View all forms

### Location-Based Notification System
User accounts are able to access their dashboard where all new event and food listings are available. On their dashboard, the user can share their current location and be notified of new events that are close to their proximity.

    - Locate current user's location
    - Notify user if there is a nearby leftovers.

## Front-End Client

##### Demo account:
 username: pbudiman
 <br> password: userpb

##### Home Page:
URL: https://unifood-app.herokuapp.com 
 <br> or access locally  http://localhost:3000
 
##### Login:
Click "Hungry User" button at the homepage or access:
 <br> https://unifood-app.herokuapp.com/userlogin 
 <br>
 or http://localhost:3000/userlogin locally.
 
##### User Dashboard:
The user homepage should be and automatically accessed after the user successfully login.

URL: http://unifood-app.herokuapp.com/userdashboard
<br>or http://localhost:3000/userdashboard locally

This page contains:
 - all of the forms
 - The near leftovers notifications

To get notifications, user should click the "Share my location " button, allow the location access, and the notification will be sent real time.


## Back-End Server

URL: http://localhost:5000

#### User Routes
Demo account:
* Username: pbudiman
* Password: userpb

| NAME       | PATH                          | METHOD | FUNCTION                                 |
|------------|-------------------------------|--------|------------------------------------------|
| index      | /users                        | GET    | The root of the user management paths    |
| logIn      | /users/login                  | POST   | Allows a user to log in                  |
| addUser    | /users/signUp                 | POST   | Allows a user to sign up                 |
| getDetails | /users/login/:username        | GET    | Validates user login details by username |
| updateUser | /users/login/update/:username | POST   | Updates user details by username         |
| deleteUser | /users/delete/:username       | GET    | Deletes user by username                 |


#### Organiser Routes
Demo account:
<br>
email: external@demo.com
<br>
password: demo


| NAME             | PATH                   | METHOD | FUNCTION                                   |
|------------------|------------------------|--------|--------------------------------------------|
| index            | /organisers            | GET    | The root of the organiser management paths |
| loginOrganiser   | /organisers/logon      | POST   | Validates organiser logon details          |
| organiserPreview | /organisers/update/:id | GET    | Gets details of an organiser by id         |
| getOrganisers    | /organisers/all        | GET    | Gets all of the organisers                 |
| getOrganiserById | /organisers/:email     | GET    | Gets organiser details by email            |
| addOrganiser     | /organisers/signup     | POST   | Registers a new organiser account          |
| updateOrganiser  | /organisers/update/:id | POST   | Updates details of organiser by id         |
| deleteOrganiser  | /organisers/delete/:id | GET    | Deletes organiser account by id            |

#### Form Routes

|        NAME        |          PATH          | METHOD |                 FUNCTION                |
|:------------------:|:----------------------:|:------:|:---------------------------------------:|
| index              | /forms                 | GET    | The root of the form management paths   |
| createForm         | /forms/createForm      | POST   | Creates a new form/event listing        |
| updateForm         | /forms/updateForm      | POST   | Updates an existing form by form ID     |
| deleteForm         | /forms/deleteForm      | POSTS  | Deletes an existing form by form ID     |
| getAllForms        | /forms/formList        | GET    | Displays all forms                      |
| getAllFormsByEmail | /forms/formList/:email | GET    | Displays all forms with specified email |


#### Location Routes
| NAME        | PATH       | METHOD | FUNCTION                           |
|-------------|------------|--------|------------------------------------|
| index       | /location  | GET    | Retrieves the location coordinates |
| addLocation | /location  | POST   | Updates location coordinates       |


## Reference
1. INFO30005 lectures and workshops material Week 1-5

## Acknowledgement
This project is done by group 'Singularity': Vivian Gao (917035), Franklin Aldo Darmansa (1025392), Patricia Angelica Budiman (1012861)
