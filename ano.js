
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var score1 = document.getElementById("sc1");
var score2 = document.getElementById("sc2");
var reset =document.getElementById("reset");
var counter = document.querySelector("input");
var aim = document.querySelector("p span");
var pscore1 = 0;
var pscore2 = 0;
var limit = false;
var winning = 5;
p1.addEventListener("click", function(){
	if(!limit){
	pscore1++;
	if(pscore1===winning){
	score1.classList.add("green");
	limit=true;
}
score1.textContent =pscore1;
}});
p2.addEventListener("click", function(){
	if(!limit){
	pscore2++;
	if(pscore2===winning){
	score2.classList.add("green");
	limit=true;
}
	score2.textContent =pscore2;
}
});
reset.addEventListener("click",function(){ resetbtn()});
 function resetbtn(){
	pscore1 =0;
	pscore2 =0;
	score1.textContent =0;
	score2.textContent =0;
	score2.classList.remove("green");
	score1.classList.remove("green");
	limit= false;
}
counter.addEventListener("change", function(){
	aim.textContent = this.value;
	winning = Number(this.value);
	resetbtn();
})
