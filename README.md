# bamazon



# Requirements for Customer Bamazon
- Create a table in MySQL that holds an inventory table with populated information (product name, price, department name, total stock of item)
- Once table is created, you run the node application that displays all of the information as a table
- The user is then prompted with two questions..
 What is the product ID of the item you're searching? 
 How much of the product would you like to purchase?
 - Once the user has completed their purchase, they will be either notifed with a 'thank you' message and cost or a 'sorry' message alerting their inputed quanity may not be in stock 

 # Tech Used
 - Node.js
 - JavaScript
 - MySQL - MAMP

# How it works: 

 - The user is greeted with the inventory table. From that table the user is asked..

        'What is the product ID of the item you're searching?'



- Following the input of the product ID the user is asked..

        'How much of the product would you like to purchase?'



- If the user inputs a quantity amount within stock they're greeted with..

         'Thanks for shopping at bamazon! Your cost is $(products price * input quantity)'

         and are redirected to home

- If the user inputs a quantity higher than stock quantity they're greeted with..

         'Sorry we do not have enough in stock to fufill your order!'

         and are redirected to home


## Customer Demo 
https://drive.google.com/file/d/1QNU0cR3Dnnv0vJS2_c1WW56A83n8VuN9/view




# Requirements for Manager Bamazon
- If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
- If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
- If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.

 # Tech Used
 - Node.js
 - JavaScript
 - MySQL - MAMP

# How it works: 

 - The user is greeted with a raw list (from inquirer). User choses one of the follow options.. 

         1) View Products for Sale
         2) View Low Inventory
         3) Add to Inventory
         4) Exit



- Prompt 1 directs you to inventory table

- Prompt 2 directs you to inventory less than 500

- Prompt 3 allows you to choose product id and increase that unique id's total quantity

-Prompt 4 allows you to exit


## Manager Demo 
https://drive.google.com/file/d/110v_vigIilISWg7M09PqH6jDH4h1ZxND/view