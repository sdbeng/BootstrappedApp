// var num = 10;

// while(num > 0){
// 	if(num % 2 == 0){
// 		console.log(num);
// 	}
// 	//OJO!!! the decrement must be outside of the if, otherwise it will hang the browser!
// 	num--;
// }

// var n = 1;
// while(n<=5){
// 	console.log(n);
// 	n++;
// }

// var numSheep = 4;
// var monthNumber = 1;
// var monthsToPrint = 12;

// while(monthNumber <= monthsToPrint){
// 	numSheep = numSheep *4;
//  console.log("There will be "+numSheep+" sheep after "+monthNumber+" month(s)!");
//  monthNumber++;
// }

// var numSheep = 4;
// var monthsToPrint = 12;
// for(monthNumber=1; monthNumber <= monthsToPrint; monthNumber++) {
//   numSheep*=4;
//   console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
// }

// var currentGen = 1;
// var totalGen = 19;
// var totalMW = 0;
// while(currentGen<=4){
// 	totalMW = totalMW + 62;
// 	console.log("Generator #"+currentGen+" is on, adding 62 MW, for a total of "+totalMW+" MW!");
// 	currentGen++;
// 	console.log("Just checking if I pass after 1st loop is over!");
// }

// console.log("END 1st block-");

// for(var newGen = currentGen; currentGen<=totalGen; newGen++){
// 	console.log("The value of currentGen inside 2nd loop is: "+currentGen);
// 	totalMW = totalMW + 124;
// 	console.log("Generator #"+currentGen+" is on, adding 124 MW, for a total of "+totalMW+" MW!");
// 	currentGen++;
// 	console.log("Passing through 2nd loop!");
// }

// var numSheep = 4;
// var monthsToPrint = 12;
// for(var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

//   //<population check should go here>
//   if(numSheep > 10000) {
//   	numSheep = numSheep / 2;
//   	console.log("Removing " + numSheep + " sheep from the population. Phew!");
//   } 
//   	numSheep*=4;
//   	console.log("There will be " + numSheep + " sheep after " + monthNumber + " month(s)!");
	
  
// }

// 
// var ageIsCorrect = false;
// while(ageIsCorrect == false){
//   var userAge = prompt("What's your age user?");
//   if(confirm("You entered "+userAge+". Is this correct?")){
//     alert("Great! Your age is logged as "+userAge+".");
//     ageIsCorrect = true;
//   }
// }

// function maxOf2 (a,b){
//   if(a > b){
//     return a;
//   }
//   else if (b > a){
//     return b;
//   }else{
//     return "They are equal: "+ b;
//   }
// }

//////////////////////////////////
// r = maxOf2(7,7)
// console.log(r)

// function mystery (x, y) {
 
//   return (4*x*y) + (3*y + 5) ;
// }
// r = mystery(3,3)
// console.log(r)

//////////////////////////////////
// function feedPerRanger (cps, npr) {
//   var totalFood = cps * 2;
//   var totalFoodPerRanger = totalFood / npr;
  
//   var feedAlert = alert("Each Park Ranger should load "+ totalFoodPerRanger +" lb(s) of feed into his/her BART today.");
	
//   return feedAlert;
// }

// feedPerRanger(100,2);
//////////////////////////////////
// function changePowerTotal(totalPowerGen,genID,status,powerProducedbyGen) {
//   //
 
//   if(status == "on"){
//   	totalPowerGen = totalPowerGen + powerProducedbyGen;
//     alert("Generator #"+genID+" is now on, adding "+powerProducedbyGen+" MW, for a total of "+totalPowerGen+" MW!");
//   }else {
//     totalPowerGen = totalPowerGen - powerProducedbyGen;
//     alert("Generator #" + genID +" is now off, removing "+powerProducedbyGen+" MW, for a total of "+totalPowerGen+" MW!");
//   }
//   return totalPowerGen;
  
// }

// changePowerTotal(62,2,"on",62)

////////////////////////////////////
// var list = [ 1, 2, 3, 7, 5, 6, 7, 8, 9];

// list[3] = 4;

// console.log(list)

// function numStrings(list) {
//   var stCount=0;
//   for(var i = 0;i<list.length;i++){
//     //counts all strings in the array list
//     if(typeof(list[i]) == "string"){
//     stCount++;
//     }
//   }
//   return stCount;
// }

// console.log (numStrings(["hello", "Yay", "Yo"]));

/////////////////////////////////////////////

// var runAway = function(){
//   var toAlert = "";
//   for(var i = 0; i<5; i++){
//     toAlert = toAlert + "Lions, Tigers, and Bears, Oh My!!\n";
//     //console.log(toAlert);
//   }
//   alert(toAlert);
// };

// runAway();

////////////////////////////////////////////
