var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon1"
});

connection.connect(function () {
    console.log(`Connected as id ${connection.threadId}`);
    startMenu();
});

function startMenu() {
    inquirer
        .prompt([
            {
                type: "rawlist",
                message: "What would you like to do?",
                choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Exit"],
                name: "managerChoice"
            }
        ]).then(function (answer) {
            switch (answer.managerChoice) {
                case "View Products for Sale":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add to Inventory":
                    addInventory();
                    break;
                default:
                     console.log("Thanks for shopping at Bamazon!")
                     connection.end();
            }
        });


}

function viewProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);

        startMenu();
    })
}

function viewLowInventory() {
    connection.query(" SELECT * FROM products WHERE quantity < 200", function (err, res){
        if (err) throw err; 
        console.table(res);

        startMenu();
    })
}

function addInventory() {
    connection.query("SELECT * FROM products", function (err,result) {
        if (err) throw err;

        console.table(result);

        inquirer
            .prompt([

                {
                    type: "input",
                    message: "Which product would you like to increase inventory? (choose the product's id #)",
                    name: "product_id"
                },
                
                {
                    type: "input",
                    message: "How much would you like to increase this product's inventory?",
                    name: "productAdd"
                },

            ])
            .then(function (userInput) {
                // console.log(userInput.product_id);

                connection.query("UPDATE products SET quantity = quantity + " + userInput.productAdd + " where product_id=" + userInput.product_id, function (err, addInv) {
                    if (err) throw err;

                    connection.query("SELECT * FROM products where product_id=" + userInput.product_id, function (err, updatedDb) {
                        if (err) throw err;

                        console.log("Thanks for adding inventory!");

                        startMenu();
                    });
                });
            });
    });
}

