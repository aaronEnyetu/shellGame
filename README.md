## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
 - I will need a <header></header>.
 - I will need a <main></main>.
- I will need a <body></body>.
I will need a <div class="">.
- I will need a <section></section>.
-I will need a <footer></footer>.
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
-Guess buttons: to track the user guesses.
-Shells: to display the ball.
-Wins: to show how many times the user has won.
-Loses: to show how many times the user has lost.
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
- I need the <header></header> to display the logo of the app.
- I need the <main></main> element  to indicate the primary (main) content of a page.
-I need the <div class=""> </div> element to separate out data into classes. 
- I need the <body></body> element to contain all the contents of my HTML Document, such as the heading, shell image, and buttons.
- I need the <section></section> element to represent a group of related content, for example: shell class <div class="shell-1">, result class <div class="result"> and reveal class.
- I need the <footer></footer> element to contain copyright year and my authorship information.
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
#HTML elements 
*shell image, ball, button for each image.
*spans for win count, loss count and total.
#State
-Wins
-Loses
-Total (derived from the state)
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
#Events
-onClick of button
*generate a random number between 1 and 3 to decide which shell the ball is under.
*Grab the shell with that number and add the reveal class to it. 
*If random number === 1, //the user has won!
          increment wins
     else
          increment loses
 *Update the wins/loses/total spans              
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
