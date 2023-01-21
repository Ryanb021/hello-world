let choice = confirm("You have to punch someone when entering this site");
    if (choice == false) {
        window.location.assign('https://xkcd.com/');}

    let choose = confirm("You also need to kick someone in the bajewels when entering this site");
    if (choose == false) {
      window.location.assign('https://theoatmeal.com/blog/justdoitlater');}

//var fist = "5";
//var response;
//while(response !=fist){
//response = window.prompt("Guess how many fists are in this page? Choose between 1 to 5.");
//}

let userNum = prompt("How many fists do you want to see in this page? Choose between 1 to 5.")
for (let i = 0; i < userNum; i++) {
    document.write("<img src='\Ryanb021\hello-world\blob\main\fist-png-32947.png' alt='fist'>" + (i + 1))
}

var ask = "Y";
var response;
while(response !=ask){
    response = window.prompt("So... are you going to punch someone today? Y/N?");
}
alert("Have fun punching that person!");