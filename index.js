const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'app',
  password: 'root',
});
// let q = "INSERT INTO user (id , username , email , password) VALUES (? , ? , ? , ?)";
// let user = ["123" , "123_newuser" , "abc@gmail.com" , "abc"];

// if we store the multiple user data;

// let q = "INSERT INTO user (id , username , email , password) VALUES ?";
// let users = [
//   ["124" , "123_newuserb" , "abc@gmail.comb" , "abcb"],
//   ["125" , "123_newuserc" , "abc@gmail.comc" , "abcc"],
// ]

//insert bulk data using faker

let createRandomUser = () => {
  return [ 
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password(),
  ];
};

let q = "INSERT INTO user (id , username , email , password) VALUES ?";
let data = [];
for(let i = 1; i < 100; i++){
  data.push(createRandomUser());
}

try{ connection.query(q , [data] , (err , result) =>{
  if(err) throw err;
  console.log(result);
  console.log(result.length);
});
}catch(err){
  console.log(err);
}

 
  console.log(createRandomUser());  