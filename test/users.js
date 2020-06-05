// const expect =  require('chai').expect;
const supertest= require ('supertest')
const chai = require('chai');
const expect = chai.expect;
require('../model/index')
const chaiHttp = require('chai-http');
// const should=chai.should();

chai.use(chaiHttp);

const {app}= require('../app');
const User= require("../model/user");


const new_user=
    {
        username: "testing_acc",
        email:"testingacc@yahoo.com",
        password:"testinguser",
        first_name:"testing",
        last_name:"user"
    } 

describe("Testing user functionality routes",function(){
    
    it("Signs up a new user (POST /users/signUp)",  (done)=>{
        chai.request(app)
            .post("/users/signUp")
            .send(new_user)
            .end((err,result)=>{
                // result.should.have.status(200)
                expect(result.body.success).to.be.equal(true)
            })
        done();
    })

    it("User logs in(POST /users/login)",(done)=>{          
        chai.request(app)
            .post("/users/login")
            .send({username:new_user.username,password:new_user.password})
            .then((res)=>{
                // console.log(res.body)
                // result=res.body.success;
                expect(res.body.success).to.deep.equal(true);
            })
        done();
    })

    it( "Updating user details (POST /users/login/update/:username)", (done)=>{
        chai.request(app)
            .post("/users/login/update/"+new_user.username)
            .send({first_name:"newFirstName", last_name:"newLastName"})
            .then((res)=>{
                expect(res.body.success).to.deep.equal(true)
            })
        done();

    })

    it("Deleting a user (GET /users/delete/:username)", (done)=>{
        chai.request(app)
            .get("/users/delete/"+new_user.username)
            .then((res)=>{
                expect(res.body.success).to.deep.equal(true);
            })
        done();
    })
})

   
    

