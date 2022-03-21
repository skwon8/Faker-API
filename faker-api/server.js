const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

app.get("/api/users", (req, res) => {
    let fakeUsers = new User();

    res.json({fakeUsers})
})

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = faker.address.city();
        this.street = faker.address.streetAddress;
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.countryCode();
    }
}

app.get("/api/company", (req, res) => {
    let fakeCompany = new Company();

    res.json({fakeCompany})
})


app.listen(port, () => console.log(`Listening on port: ${port}`));