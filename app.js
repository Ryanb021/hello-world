let newFunction = function (){
	console.log("Hi from the new function");
  }	
	function howmanyfist() {
    let numFist = prompt('Guess how many fist you will see here? Choose between 1 to 5')
    while (numFist > 5 || numFist <= 0) {
        numFist = prompt('I said between 1 to 5!!!)')
    };

    for (let i = 0; i < numFist; i++){
        document.write("<img width='30px' height='30px' src='https://raw.githubusercontent.com/jamesCodes808/hello-world/main/campfire.png'/>");
    };