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

https://drive.google.com/file/d/1Zw8re4G74JuwIVB-86sZPrxHyVvRXEzq/view