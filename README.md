# Guess the Number
A simple game made with HTML, CSS and JavaScript.

![Alt text](./images/guess-the-number.png?raw=true "Title")

After downloading, just run the `guessNumber.html` file in the same directory to view the project.

## How to play

The game is to guess which Pokedex number corresponds to a specific Pokemon. Your guess must be typed in the text box, and then you click on the "send" button.

* If you guess it right, a message will be displayed confirming that you made it. The Pokemon name and number will be displayed to you, then it is removed from the game and a new Pokemon is drawn.
* If the number is greater or less than the correct answer, the game will indicate this to you.
* Each time you guess a number correctly, your score goes up 100 points. However, each mistake will cause you to lose 10 points.

The game ends after you have guessed all 50 Pokemons available.

## But how can I make my own game?

The structure of this game is very simple. You need to:

* A space to position the image
* An input type "number" to write your answer
* A "send" button
* A "score" label

So let's create our html structure:

```
    <div class="image">
        <img src="" alt="some image here">
    </div>

    <div class="input">
        <input type="text">
    </div>

    <div class="buttons">
        <button>Send</button>
        <p>Your score: <span></span></p>
    </div>
```

![Alt text](./images/html-structure.png?raw=true "Title")

Well, the basics are ready. Now let's build our functions!

## Game functions

Our program will have 2 javascript files. The first will define the variables for each of the 50 Pokemons, and the second will be the logic of the game.

### Getting the images

We obtained 50 images of Pokemons to be used in the code. It is important that the images have a transparent background. Each Pokemon will be an object with 3 values:  the Pokemon's name, its Pokedex number, and the directory in which the image is located. Let's see an example: 

```
    var cubchoo = {
        name: "cubchoo",
        number: 613,
        source: "./pokemons/cubchoo.png"
    }   
```

With that in mind, let's ask our html to display the image and see if everything is ok.

```
    <div class="image">
        <img src="./pokemons/cubchoo.png" alt="some image here">
    </div>
```

![Alt text](./images/html-cubchoo.png?raw=true "Title")

However, our image has a fixed value to show only this Pokemon in our html. We need to create something that shows other Pokemon as well. So, go back to the `<img>` tag and leave the `src` attribute empty.

### Game functions

Now the fun part will start! Our little game will have some main functions:

* `randomNumber()`: will randomly choose one of our Pokemon objects;
* `choosePic()`: will change the `src` attribute in our html, displaying the chosen Pokemon
* `clearInput()`: just clear the current value of the `input` tag in our html
* `scoreUpdate()`: updates the score value
* `tryGuess()`: checks if the number entered by the user matches the displayed Pokemon

And, of course, we need some variables as well:

* An array to store all of our Pokemons
* A variable to store a random number
* A variable to store the score value (begins with value 100)

In addition, each time you update the html page, a new Pokemon must be randomly chosen. Your code will look like this:

```
    /* As soon as you initialize the page, choose a random image */
    window.onload = choosePic;
    var index;
    var score = 100;

    /* Array that receives all Pokemons in the game. You can greatly improve this array */
    var allPokemons = new Array(cubchoo, mudkip, lotad);

    function randomNumber() {}
    function choosePic() {}
    function clearInput() {}
    function updateScore() {}
    function tryGuess() {}
```

To choose a random number, we use the `Math.floor()` function. It will cycle through the array with all of our Pokémon and choose a random index value:

```
    function randomNumber() {
        let num = Math.floor(Math.random() * allPokemons.length);
        return num;
    }   
```

With that, we can now choose our Pokemon. From the object chosen in the array, the function obtains the image directory and changes the `src` attribute of the `<img>` tag in our html:

```
    function choosePic() {
        index = randomNumber();
        document.getElementById("pokemonImage").src = allPokemons[index].source;
    }
```

To clear the `input` field, just change its value to empty:

```
    function clearInput() {
        document.getElementById("guessInput").value = "";
    }
```

The function to update the score simply changes the score value in the html file.

```
    function updateScore() {
        document.getElementById("score").innerHTML = score;
    }
```

Finally, we have our function that checks whether the user is correct or not. For this function, we will create a conditional. First, it is necessary to compare whether the value entered by the user corresponds to the correct number of the Pokemon.

If so, the program will show that Pokemon's name and number for a few seconds. This Pokemon will be removed from the array, and the score will increase by 100 points. After that, the program checks if there are still Pokemons to be guessed. If not, it displays a victory message. Otherwise, a new Pokemon is chosen and the displayed name and number is cleared.

```
    function tryGuess() {
        let guess = document.getElementById("guessInput").value;

        if (guess == allPokemons[index].number) {

            document.getElementById("result").innerHTML = "Yeah! This pokemon is " + allPokemons[index].name +
            ", and its number is " + allPokemons[index].number;
            allPokemons.splice(index, 1);
            score = score + 100;

            if (allPokemons.length >= 1) {

                setTimeout(function () {
                    document.getElementById("result").innerHTML = "";
                    choosePic();
                }, 2500);

            } else {
                alert("You managed to guess all the Pokemons!");
                document.getElementById("title").innerHTML = "You win! Yay!";
            }
        }

    // [...]
```

If the number is not correct, the program indicates whether the correct answer is higher or lower than the chosen number. For each wrong attempt, the score is decreased by 10 points and the "input" field is cleared.

```
    // [...]

    else if (guess > allPokemons[index].number) {
        document.getElementById("result").innerHTML = "Hmmm no.. It's a lower number. Try again.";
        document.getElementById("lastGuess").innerHTML = "Your last guess was " +  guess;
        clearInput();
        score = score - 10;
        updateScore();
    }
    else if (guess < allPokemons[index].number) {
        document.getElementById("result").innerHTML = "Looks like it's a higher number. Try again.";
        document.getElementById("lastGuess").innerHTML = "Your last guess was " +  guess;
        clearInput();
        score = score - 10;
        updateScore();
    }
}
```

After that, the main structure of your game will be ready. From here, you can implement your css and leave your game the way you want!


## Next steps

The game does not contain maximum number of errors allowed, how many Pokemons are left in the game, a keyboard to input the user value... But these are simple things that you can improve in your code! There's a lot more. Be creative and try to implement your own game!

## Disclaimer

All the Pokémon names and images are copyrighted by Nintendo. Pokemon Conquest sprites obtained from Bulbapedia. This was a personal project developed just for learning.

## Contact

Carolina Abreu - [Linkedin](https://www.linkedin.com/in/ana-carolina-silva-abreu-80325a195/) - anacarolinaks19@gmail.com
