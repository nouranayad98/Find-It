# Find-It
Version 1.00.111.0

Our application allows the user to search for any piece of clothing and displays a list of all clothes that match the user's search from the top clothing stores .

*features
-The user can open the item's link to view all details if he chooses to click on the item name.
-The application searches for any new items everyday to stay up-to-date
-User can sort the list of wanted items according to the nearest store from his current location.

** The application needs to access the user's browser .
** The application needs to access the user's current location using google maps.

for more info on the application contact Nado Metwaly .

#Dependencies

[Node.js, express, dotenv]

Node.js is the environment that executes JavaScript code outside of a browser.
Express is a layer built on top the Node.js that helps manage a server and routes.
dotenv is the module used to create the .env file.

-for the Front_end
com.google.android.gms:play-services-maps : is used to display the earth on google maps .
com.google.android.gms:play-services-location : is used to get the device's current location .
volley

#env

In the .env file we write the data that should be hidden like the api key, the database username and any passwords .
Our .env for example contains the api_token that we use in webscraping , we dont have a database or any other variables that need to be hidden so we only have one variable in the .env file 
--
api_token=[xxxxxxxxxxxxxxxxxxxxxxxxx]
--

#Docker

The docker file in the backend copies the package.json file and runs npm i in order to download all the needed dependencies



#Docker-Compose
docker maps the backend port(3000) to port(4000)
docker-compose up --build 


#Android studio Front-end 

Git repo:
https://github.com/NadineMetwally/Find-it.git