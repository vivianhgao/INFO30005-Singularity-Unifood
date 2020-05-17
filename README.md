## Set Up Environment for Unifood app
1. Open 2 terminal:
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
## Unifood Core Functionalities

- Account System
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
        
- Form Management
    - Create new form
    - Update form
    - Delete form
    - View all forms

- Notification System
    - Locate current user's location
    - Notify user if there is a nearby leftovers.

## Accessing the Core Functionalities

### Front End
 ##### Demo account:
 username: pbudiman
 <br> password: userpb

#####Home Page:
URL: https://unifood-app.herokuapp.com 
 <br> or access locally  http://localhost:3000
 
##### Login:
Click "Hungry User" button at the homepage or access:
 <br> https://unifood-app.herokuapp.com/userlogin 
 <br>
 or http://localhost:3000/userlogin locally.
 

 
 ##### User Dashboard
 
The user homepage should be and automatically accessed after the user successfully login.

URL: http://unifood-app.herokuapp.com/userdashboard
<br>or http://localhost:3000/userdashboard locally

This page contains:
 - all of the forms
 - The near leftovers notifications

To get notifications, user should click the "Share my location " button, allow the location access, and the notification will be sent real time.

#
### Back End

URL: http://localhost:5000


##### Form Routes
Form Index: https://unifood-app.herokuapp.com/forms
<br>
View All Forms: https://unifood-app.herokuapp.com/forms/formList
<br>
Post New Form: https://unifood-app.herokuapp.com/forms/createForm
<br>
Update Form: https://unifood-app.herokuapp.com/forms/updateForm
<br>
Delete Form: https://unifood-app.herokuapp.com/forms/deleteForm


##### User Routes
From the home page: https://unifood-app.herokuapp.com/
<br>
To log in: https://unifood-app.herokuapp.com/users/login
<br>
To sign up: https://unifood-app.herokuapp.com/users/signUp
<br>
To change user details after logging in: https://unifood-app.herokuapp.com/users/login/:username
<br>
User deleting their account after logging in: https://unifood-app.herokuapp.com/users/delete/:username 
<br>
  [where ':username' takes the user's username]
<br>
Demo account:
* Username: pbudiman
* Password: userpb

##### Organiser Routes
Login URL: https://unifood-app.herokuapp.com/organisers
<br>
Sign up URL: https://unifood-app.herokuapp.com/organisers/signup
<br>
Edit (update) account URL: https://unifood-app.herokuapp.com/organisers/update/:_id
<br>
Delete account URL: https://unifood-app.herokuapp.com/organisers/delete/:_id
<br>
Show all organisers URL: https://unifood-app.herokuapp.com/organisers/all
<br>
Update and delete account could be accessed after login as well.
<br>
<br>
To update and delete account could be access through passing their id (replace ":_id" with the actual id). 
<br>
The ids could be accessed through "Show All Organiser URL".

Demo account:
<br>
email: external@demo.com
<br>
password: demo
## Reference
1. INFO30005 lectures and workshops material Week 1-5

## Acknowledgement
This project is done by group 'Singularity': Vivian Gao (917035), Franklin Aldo Darmansa (1025392), Patricia Angelica Budiman (1012861)
