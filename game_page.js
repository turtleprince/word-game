player_1_name = localStorage.getItem("player1_name");
console.log(player_1_name);

player_2_name = localStorage.getItem("player2_name");
console.log(player_2_name);

player_1_score = 0;
console.log(player_1_score);

player_2_score = 0;
console.log(player_2_score);




document.getElementById("p1_name").innerHTML = player_1_name;

document.getElementById("p1_score").innerHTML = player_1_score;

document.getElementById("p2_name").innerHTML = player_2_name;
document.getElementById("p2_score").innerHTML = player_2_score;
