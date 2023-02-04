# sm-watcher
repo link: https://github.com/unique-Sachin/sm-watcher
sm-watcher is  command-line tool that helps with the speedy development of Node. js applications. 
It monitors your project directory and automatically restarts your node application when it detects any changes. 
This means that you do not have to stop and restart your applications in order for your changes to take effect.
It works same as nodemon but I have removed unwanted consoles that occurs in nodemon.

## How to use this?
## Well there are two ways to use this, its very easy I have provided the steps.

## First way if you want to start your server on index.js file only or any fixed file.
### 1 First clone this repository
### 2 Run "npm install" in your terminal.
### 3 Run "npm link" to make your commmand executable anywhere in your system.
### 4 Now run "npm start" to start your server.

### NOTE:- At this moment npm start will work only for index.js file, and if you want to change file just goto package.json file and replace filename in "start":"sm-watcher index.js" to your updated filename and keep other command as it is.


## Second way is more dynamic and customizable, here you can set your command and start your server on any file as you want.

### Run sm-watcher filename.js to run the same command here you can type any filename that you want to run.

### What if you want your custom command to run the server instead of "sm-watcher"?
### For example :-> if you want to run the server with your name command like "hanumat filename.js"
### Or if you want to run the server with the command like "express filename.js",
### Or if you want to run the server with the command like "any-custom-name filename.js",
### Here simply you can go to package.json and update the "name":"sm-watchering" with your customized new name like hanumat,express,any-name etc. After That just do "npm link" again and everything is done.
### Now you can start the server by your new and updated command ! like "hanumat filename.js"
### Hurray! Enjoy your work hassle free with your NEWLY CUSTOMIZED COMMAND.




