const { response } = require("express");
const Employee = require("../models/Employee");

//Show the list of Employees
const index = (req, res, next) => {
  Employee.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

//show individual employee by id
const show = (req, res, next) => {
  let employeeID = req.body.employeeID;
  Employee.findById(employeeID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      message: "An error Ocured!";
    });
};

// add new employee
const store = (req, res, next) => {
  let employee = new Employee({
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  });
  employee
    .save()
    .then((response) => {
      res.json({
        message: "Employee Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

// updating an employee
let update = (req, res, next) => {
  let employeeID = req.body.employeeID;

  let updateData = {
    name: req.body.name,
    designation: req.body.designation,
    email: req.body.email,
    phone: req.body.phone,
    age: req.body.age,
  };
  Employee.findByIdAndUpdate(employeeID, {$set: updateData})
  .then(() => {
    res.json({
      message: "Employee updated successfully!"
    })
  })
  .catch(error =>{
    res.json({
      message: "An error occured!"
    })
  })
};


//Delete an Employee
const destroy = (req, res, next) =>{
  let employeeID = req.body.employeeID
  Employee.findByIdAndRemove(employeeID)
  .then(()=> {
res.json({
  message: "Employee deleted successfully!"
})
})
.catch(error =>{
  res.json({
    message: "An error occured!"
  })
})
}

module.exports = {
  index, show, store, update, destroy
}