var fan = document.getElementById('fan');
		function btn_on(){
			fan.classList.add("fan-on");
			console.log("fan on");
		}
		function btn_off(){
			fan.classList.remove("fan-on");
			console.log("fan off");
		}