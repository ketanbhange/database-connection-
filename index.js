const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'app',
  password: 'root',
});
try{ connection.query("SHOW TABLES" , (err , result) =>{
  if(err) throw err;
  console.log(result);
});
}catch(err){
  console.log(err);
}

 let createRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  };
  console.log(createRandomUser());  