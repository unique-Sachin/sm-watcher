# sm-watch
sm-watch is  command-line tool that helps with the speedy development of Node. js applications. 
It monitors your project directory and automatically restarts your node application when it detects any changes. 
This means that you do not have to stop and restart your applications in order for your changes to take effect.
It works same as nodemon but I have removed unwanted consoles that occurs in nodemon.

## How to use this?
Well its very easy I have provided the steps.
### 1 First clone this repository
### 2 Run "npm install" in your terminal.
### 3 Run "npm link" to make your commmand executable anywhere in your file.
### 4 Now run "sm-watching filename.js" to start your server.
### Hurray! Enjoy your work hassle free

###  What if you want your custom command to run the server instead of "sachin-watching"?

### for example :-> if you want to run the server with your name command like "hanumat filename.js"
###  or if you want to run the server with the command like "express filename.js",
### or if you want to run the server with the command like "any-custom-name filename.js",
### Then Simply you can go to package.json and package-lock.json and where ever you see "sm-watching"  you can remove it and update with your customized new name like hanumat,express,any-name etc. After That just do "npm link" and everything is done.
### 
###   Now you can start the server by your new and updated command ! like "hanumat filename.js"
### Hurray! Enjoy your work hassle free with your NEW CUSTOMIZED COMMAND.




