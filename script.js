
do {
    let input = prompt(`enter your choice (s for snake , w for water, g for gun) => `)

    let op = ["s", "w", "g"];
    let random = Math.floor(Math.random() * (2 - 0 + 1));
    console.log(random);

    let func = (player1, player2) => {

        if ((player1 === "s" && player2 === "w") || (player1 === "w" && player2 === "g") || (player1 === "g" && player2 === "s")) {
            console.log(player1);
            console.log(player2);
            return true;
        } else if (player1 === player2) {
            console.log(player1);
            console.log(player2);
            return "draw";
        } else {
            console.log(player1);
            console.log(player2);
            return false;
        }

    }

    let result = func(input, op[random]);

    if (result === true) {
        alert("you won !")
    } else if (result === "draw") {
        alert("draw");
    } else {
        alert("you lose !")
    }
}while(confirm("you want to play again?"));
