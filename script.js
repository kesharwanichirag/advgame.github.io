//elements
const dog = document.querySelector("#dog");
const gameover = document.querySelector("#gameover");
const lion = document.querySelector("#lion");
const score = document.querySelector("#score");
const playagain = document.querySelector("#playagain");
const timer = document.querySelector("#timer img");

let cross = true;
let myScore = 0;

document.addEventListener("keydown",(e)=>{
	
	if(e.keyCode==38){
		dog.classList.add("dogJump");

		setTimeout(()=>{
			dog.classList.remove("dogJump");
		},1500);
	}

	if(e.keyCode==39){
		dogx = parseInt(window.getComputedStyle(dog,null).getPropertyValue("left"));

		dog.style.left = dogx + 100 +"px";
	}
	if(e.keyCode==37){
		dogx = parseInt(window.getComputedStyle(dog,null).getPropertyValue("left"));

		dog.style.left = (dogx - 100) +"px";
	}
});

setInterval(()=>{
	dogx = parseInt(window.getComputedStyle(dog,null).getPropertyValue("left"));
	dogy = parseInt(window.getComputedStyle(dog,null).getPropertyValue("top"));

	lionx = parseInt(window.getComputedStyle(lion,null).getPropertyValue("left"));
	liony = parseInt(window.getComputedStyle(lion,null).getPropertyValue("top"));

	offsetX = Math.abs(dogx-lionx);
	offsetY = Math.abs(dogy-liony);

	if(offsetX<124 && offsetY<55){
		gameover.style.display = "block";
		playagain.style.display = "block";

		lion.classList.remove("lionAnimation");
		lion.style.opacity = "0";
		dog.style.opacity = "0";

	}else if(offsetX<110 && cross){
		myScore += 1;
		updateScore(myScore);

		cross = false;

		setTimeout(()=>{
			cross = true;
		},1000);

		setTimeout(()=>{
			lionSpeed = parseFloat(window.getComputedStyle(lion,null).getPropertyValue("animation-duration"));

			newLionSpeed = lionSpeed - 0.05;

			lion.style.animationDuration = newLionSpeed+"s";
		},500);
	}
},10);


const updateScore = (myScore) =>{
	score.innerHTML = `Score : ${myScore}`;	
};

playagain.addEventListener("click",(e)=>{
	window.location = "index.html";
});


window.addEventListener("load",(e)=>{
	timer.style.display = "block";


	setTimeout(()=>{
		timer.style.display = "none";
		lion.style.opacity = "1";
		dog.style.opacity = "1";
		lion.classList.add("lionAnimation");		
	},2000);
});

