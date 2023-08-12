//your code here
let btn = document.getElementById("swap");
let main = document.getElementById("app");
btn.addEventListener("click" , function(){
	btn.className = "button_night";
	main.className="night";
})