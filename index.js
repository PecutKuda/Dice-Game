let random1, random2;
while (true)
{
    random1 = Math.floor(Math.random()*6+1);
    if(random1 != 0) break;
}
while(true)
{
    random2 = Math.floor(Math.random()*6+1);
    if (random2 != 0) break;
}

if (random1 == 1)
{
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if (random1 == 2)
{
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (random1 == 3)
{
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (random1 == 4)
{
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (random1 == 5)
{
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else if (random1 == 6)
{
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

if (random2 == 1)
{
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if (random2 == 2)
{
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (random2 == 3)
{
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (random2 == 4)
{
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (random2 == 5)
{
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else if (random2 == 6)
{
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

//set winner
if (random1 > random2) document.querySelector(".container h1").textContent = "Player 1 Wins!";
else if (random2 > random1) document.querySelector(".container h1").textContent = "Player 2 Wins!";
else document.querySelector(".container h1").textContent = "Draw";