var mysql = require("mysql");
var inquirer = require("inquirer");

var cost;


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon1"
});

connection.connect(function () {
  console.log(`Connected as id ${connection.threadId}`);
  showProducts();
});

function showProducts() {
  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    productSearch();
  });
}
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
function productSearch() {
  inquirer.prompt([{
    name: "product_id",
    type: "inputId",
    message: "What is the product ID of the item you're searching?",

  },
  {
    name: "quantity",
    type: "inputQuant",
    message: "How much of the product would you like to purchase?",

  }])



    // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

    // If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

    .then(function (answer) {
      // console.log("answer", answer);
      connection.query('SELECT * FROM products WHERE product_id = ?', [answer.product_id], function (err, res) {

        // console.log(res[0].inputQuant);
        // console.log(res);
        if (answer.quantity > res[0].quantity) {
          console.log("Sorry, we do not have enough in stock to fufill your order!");
          showProducts();
        }
        else {
          var newQuant = res[0].quantity - answer.quantity;
          connection.query('UPDATE products SET quantity = ? WHERE product_id = ?', [newQuant, answer.product_id], function (err, result) {
            // console.log(result);
            cost = res[0].price * answer.quantity;
            console.log("Thanks for your purchase! Your total cost is $ " + cost);
            showProducts();
          })

        }
      })


    })
}







  // However, if your store does have enough of the product, you should fulfill the customer's order.


  // This means updating the SQL database to reflect the remaining quantity.
  // Once the update goes through, show the customer the total cost of their purchase.






