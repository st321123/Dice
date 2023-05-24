document.getElementById("button").addEventListener("click", rev);
function rev(){var random1 = Math.floor(Math.random()*6)+1;
var image1 = "dimage/dice"+random1+".png";
var random2 = Math.floor(Math.random()*6)+1;
var image2 = "dimage/dice"+random2+".png";
document.querySelector(".img1").src = image1;
document.querySelector(".img2").src = image2;
if(random1>random2)
{
    document.querySelector("h1").innerHTML="Player 1 wins ....";
}
else if(random1<random2)
{
    document.querySelector("h1").innerHTML="Player 2 wins ....";
}
else{
    document.querySelector("h1").innerHTML="Draw.............";
}}