# Getting Started with Create React App

## What I've done throughout this project
### Add components and ready to start

First I removed all the files and that I wouldn't need in this project and replace'em with the components that I'm gonna use them throughout this projct.


### Add Dark and Light btn

I start with made a nice btn for toggle btween the dark and light mode easily.
The problem here was how to access the body element while you're using React however, I solved it by check first if the state of the dark mode is false or true and then but some taiwlind classes to the 'document.body'. 


### Add header to the page

Added header and make it stylish for both dark and light mode and responsive to fit in.


### Finish styling of Hero and Layout components

I made both Hero and Layout component stylish and responsive so I give a room to implementing the logic for both of them.


### Finish Styling of CoffeeForm component

One problem that I faced was switch btween the coffee btns when you click on Other Btn to make it not active it remove it but in the same time put the active in the last btn you'd chosen so I solve it by when you click on the Other btn it will make the data from the other btns null.


### Finish with styling and add fake data in Stats component

I've been trying to make the cards in that component dynamic as I can cuz they are repetitive so I make an object that contains the whole data about each card and render to the screen so the code is more organize.


### Finish with History component

One new thing I've learnt in this part was that I can display a massage when I hover over it by adding title attribute to the element. 
I made a dynamic coffee icons that changes its number according to the average amount of coffee you have.


### Start with Login and Signup

When you click on sign up btn it's gonna open to you a popup card to enter your informtion.
I started by adding new root to my html page so it would be independent compare to our root.


### Solve some bugs

I faced a problem which was I didn't make the show modal for sign up global so I couldn't know if it was true or false. however, I solved it by add the state inside the App component and passed it as a prop to the other components that need it instead of recall the modal component and add new state to every component needs it.


### add more functionality to Authentication component

I start with make differnce btween whether you have an account or don't by changing the text in the form depends on your situation.


### add regux to Authentication component

I needed to make sure that the user's gonna write a vaild email and is not gonna submit the form without data within. so, I made a function check on them.


### add firebase on the project

I was quite challenging cuz I'd worked before with firebase. So, I started by create the project on firebase website and put the config keys into my project.
I created a database to my data so whenever a user write its email and password it ends up there.


### Solve some bugs

I faced a lot of challenges in this part cuz I didn't grasp on the idea of how firebase works and how we handle the authentiactions. however I started with some tutorials and know I pretty mutch know the basics of it and made the page dynamic if you already have an accout it's gonna automatically login and show your history. 


### Solve some problem in the Authentication

I made the History and Stats components only display if I have data to that accout loged in if it doesn't then remove it.

There was a hug problem in the Authentication component and it was when the user login or signup there was condition on the userGlobal while this variable changed its value in async function so when the project run it was always null cuz its value didn't change immediately so I changed to be more reasonable value in the same component which is 'isRegistration'