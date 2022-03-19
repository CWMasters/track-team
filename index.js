const inquirer = require('inquirer');
const db = require('./db/connection');


// const questions = [];

db.connect(err => {
    if(err) throw err;
    console.log('Database connected.');
    promptInput();
});

function promptInput() {
    inquirer
    .prompt([
        {
          type: 'list',
          name: 'selection',
          message: 'Please make a selection',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role'
            
          ],
        },
    ])
    .then((response) => {
        console.log(response)
        switch (response.selection) {
            case 'View all departments':
                viewDepartment();
                break;
            
            case 'View all roles':
                viewAllRoles();
                break;

            case 'View all employees':
                viewAllEmployees();
                break;

            case 'Add a department':
                addDepartment();
                break;

            case 'Add a role':
                addRole();
                break;

            case 'Add an employee':
                addEmployee();
                break;

            case 'update an employee role':
                updateRole();
                break;

            case 'end':
                connect.end();
                break;
        }
    });
};

function viewDepartment() {
   db.promise().query('SELECT * FROM department')
    .then((response) => {
    console.table(response[0])
    });
}

function viewAllRoles() {
    db.promise().query('SELECT * FROM roles')
    .then((response) => {
    console.table(response[0])
    });
}

function viewAllEmployees() {
    db.promise().query('SELECT * FROM employee')
    .then((response) => {
    console.table(response[0])
    });
}

function addDepartment() {

}

function addRole () {}

function addEmployee () {}

function updateRole () {}




