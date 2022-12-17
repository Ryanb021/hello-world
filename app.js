let newFunction = function (){
	console.log("Hi from the new function");
  }	
  newFunction()
   let choice = confirm("You have to punch someone when entering this site");
    if (choice == false) {
        window.location.assign('https://xkcd.com/');
		};
		    let choose = confirm("You also need to kick someone in the bajewels when entering this site");
    if (choose == false) {
      window.location.assign('https://theoatmeal.com/blog/justdoitlater');
	};
	function howmanyfist() {
    let numFist = prompt('Guess how many fist you will see here? Choose between 1 to 5')
    while (numFist > 5 || numFist <= 0) {
        numFist = prompt('I said between 1 to 5!!!)')
    };

    for (let i = 0; i < numFist; i++){
        document.write("<img width='30px' height='30px' src='https://raw.githubusercontent.com/jamesCodes808/hello-world/main/campfire.png'/>");
    };
	var ask = "Yes";
var response;
while(response !=ask){
    response = window.prompt("So... are you going to punch someone today? Yes or No");
}
alert("Have fun punching that person!");