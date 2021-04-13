/* As soon as you initialize the page, choose a random image */
window.onload = choosePic;
var index;
var score = 100;

/* Array that receives all Pokemons in the game. You can greatly improve this array */
var allPokemons = new Array(charmander, charmeleon, charizard, beedrill, scyther, arbok, igglybuff, jigglypuff,
    wigglytuff, zubat, golbat, crobat, pichu, pikachu, raichu, meowth, persian, abra, kadabra, alakazam, groudon,
    dialga, arceus, pupitar, haunter, gengar, onix, starly, eevee, vaporeon, jolteon, flareon, espeon, umbreon,
    leafeon, glaceon, mewtwo, rhydon, magikarp, gyarados, articuno, treecko, minccino, kirlia, chimecho, sealeo,
    shinx, oshawott, zekrom, dragonair, wooper);

function randomNumber() {
    let num = Math.floor(Math.random() * allPokemons.length);
    return num;
}

/* Choose a random Pokemon */
function choosePic() {
    index = randomNumber();
    document.getElementById("canvas").src = allPokemons[index].source;
    document.getElementById("guessInput").value = "";
    updateScore();
}

function clearInput() {
    document.getElementById("guessInput").value = "";
}

function updateScore() {
    document.getElementById("score").innerHTML = score;
}

function tryGuess() {
    let guess = document.getElementById("guessInput").value;

    if (guess == allPokemons[index].number) {

        document.getElementById("result").innerHTML = "Yeah! This pokemon is " + allPokemons[index].name +
        ", and its number is " + allPokemons[index].number;
        allPokemons.splice(index, 1);
        document.getElementById("lastGuess").innerHTML = "";
        score = score + 100;

        if (allPokemons.length >= 1) {

            setTimeout(function () {
                document.getElementById("result").innerHTML = "";
                choosePic();
            }, 2500);

        } else {
            alert("You managed to guess all the Pokemons! You are awesome! Thanks for playing, I hope you had fun ^~^ ");
            document.getElementById("title").innerHTML = "You win! Yay!";
        }

    }
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