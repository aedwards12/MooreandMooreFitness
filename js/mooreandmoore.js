document.addEventListener('DOMContentLoaded', function(){
	
	var trainerDiv = document.querySelector("#trainers");
	var scheduleDiv = document.querySelector("#schedule");
	var contactDiv = document.querySelector("#contact");


	var navbar = document.querySelectorAll("li"); 

	trainerDiv.addEventListener("mouseover", function(event){
	  navbar[2].classList.add("active");
	});

	trainerDiv.addEventListener("mouseout", function(event){
	  navbar[2].classList.remove("active");
	});

	scheduleDiv.addEventListener("mouseover", function(event){
	  navbar[1].classList.add("active");
	});
	
	scheduleDiv.addEventListener("mouseout", function(event){
	  navbar[1].classList.remove("active");
	});

	contactDiv.addEventListener("mouseover", function(event){
	  navbar[4].classList.add("active");
	});
	
	contactDiv.addEventListener("mouseout", function(event){
	  navbar[4].classList.remove("active");
	})


  console.log(trainerDiv);
	window.addEventListener('scroll', function(e){
				var distanceY = window.pageYOffset || document.documentElement.scrollTop
				var hidetopbar = 672;
				var fitness_title_y = 693;
				var header = document.querySelector(".header-location");
					console.log(navbar)
					console.log(distanceY)
				if (distanceY > hidetopbar) {
					header.classList.add("hide");
				} else{
					if (header.classList.contains("hide")) {
						header.classList.remove("hide");
					}
				}
		});
});

var navbar = document.querySelectorAll("li")

function addActive(){
	console.log("inside active");
	navbar[2].classList.add("active");

}