# 03 JavaScript: Password Generator

## Description

Using the concepts we learned in JavaScript, I created functions to create a randomized password with a length between 8 to 128 characters. This utilizes the button and text display provided. 

I first asked the user if they would like to create a password to prevent the function from looping using window.confirm and the asked the user what length they would their password to be with window.prompt. Per the README.md, I set the minimum to 8 characters and max to 128 using an if statement.

For the character preference, I used prompts (s/o to Shawn for his input on this) that ask the user if they would like to include certain characters into their password. They are required to choose at least one of set of characters because of an if statement I put into the code.

I referred to Stack Overflow for direction on how to make a string from randomly picking from a set of characters. I used a for loop to pick randomly from the preferred characters and then add them to password string until the desired password length.

There are several console.log throughout the code to see what the values are throughout the process. This helped me realize some of the issues I was having with scope, since I decided to approach this by writing multiple functions.

![screenshot](/Assets/screenshot.png)

### Shout outs:

The class collab on Slack // Stack Overflow

