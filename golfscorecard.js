// assign the table row for hole 1 to a variable
var elem
  = document.getElementById("1");
// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
console.log(elem.children[4].children[0]); 
// assign a function to the + button
elem.children[4].children[0].onclick 
  = function(){add1(elem);};
elem.children[4].children[1].onclick 
  = function(){subtract1(elem);};

// hole 2
var elem2
  = document.getElementById("2");

console.log(elem2.children[4].children[0]); 
// assign a function to the + button
elem2.children[4].children[0].onclick 
  = function(){add1(elem2);};
elem2.children[4].children[1].onclick 
  = function(){subtract1(elem2);};
// hole 3
var elem3
  = document.getElementById("3");

console.log(elem3.children[4].children[0]); 
// assign a function to the + button
elem3.children[4].children[0].onclick 
  = function(){add1(elem3);};
elem3.children[4].children[1].onclick 
  = function(){subtract1(elem3);};
// hole 4
var elem4
  = document.getElementById("4");

console.log(elem4.children[4].children[0]); 
// assign a function to the + button
elem4.children[4].children[0].onclick 
  = function(){add1(elem4);};
elem4.children[4].children[1].onclick 
  = function(){subtract1(elem4);};
// hole 5
var elem5
  = document.getElementById("5");

console.log(elem5.children[4].children[0]); 
// assign a function to the + button
elem5.children[4].children[0].onclick 
  = function(){add1(elem5);};
elem5.children[4].children[1].onclick 
  = function(){subtract1(elem5);};
// hole 6
var elem6
  = document.getElementById("6");

console.log(elem6.children[4].children[0]); 
// assign a function to the + button
elem6.children[4].children[0].onclick 
  = function(){add1(elem6);};
elem6.children[4].children[1].onclick 
  = function(){subtract1(elem6);};
// hole 7
var elem7
  = document.getElementById("7");

console.log(elem7.children[4].children[0]); 
// assign a function to the + button
elem7.children[4].children[0].onclick 
  = function(){add1(elem7);};
elem7.children[4].children[1].onclick 
  = function(){subtract1(elem7);};
// hole 8
var elem8
  = document.getElementById("8");

console.log(elem8.children[4].children[0]); 
// assign a function to the + button
elem8.children[4].children[0].onclick 
  = function(){add1(elem8);};
elem8.children[4].children[1].onclick 
  = function(){subtract1(elem8);};
// hole 9
var elem9
  = document.getElementById("9");

console.log(elem9.children[4].children[0]); 
// assign a function to the + button
elem9.children[4].children[0].onclick 
  = function(){add1(elem9);};
elem9.children[4].children[1].onclick 
  = function(){subtract1(elem9);};
// hole 10
var elem10
  = document.getElementById("10");

console.log(elem10.children[4].children[0]); 
// assign a function to the + button
elem10.children[4].children[0].onclick 
  = function(){add1(elem10);};
elem10.children[4].children[1].onclick 
  = function(){subtract1(elem10);};
// hole 11
var elem11
  = document.getElementById("11");

console.log(elem11.children[4].children[0]); 
// assign a function to the + button
elem11.children[4].children[0].onclick 
  = function(){add1(elem11);};
elem11.children[4].children[1].onclick 
  = function(){subtract1(elem11);};
// hole 12
var elem12
  = document.getElementById("12");

console.log(elem12.children[4].children[0]); 
// assign a function to the + button
elem12.children[4].children[0].onclick 
  = function(){add1(elem12);};
elem12.children[4].children[1].onclick 
  = function(){subtract1(elem12);};
// hole 13
var elem13
  = document.getElementById("13");

console.log(elem13.children[4].children[0]); 
// assign a function to the + button
elem13.children[4].children[0].onclick 
  = function(){add1(elem13);};
elem13.children[4].children[1].onclick 
  = function(){subtract1(elem13);};
// hole 14
var elem14
  = document.getElementById("14");

console.log(elem14.children[4].children[0]); 
// assign a function to the + button
elem14.children[4].children[0].onclick 
  = function(){add1(elem14);};
elem14.children[4].children[1].onclick 
  = function(){subtract1(elem14);};
// hole 15
var elem15
  = document.getElementById("15");

console.log(elem15.children[4].children[0]); 
// assign a function to the + button
elem15.children[4].children[0].onclick 
  = function(){add1(elem15);};
elem15.children[4].children[1].onclick 
  = function(){subtract1(elem15);};
// hole 16
var elem16
  = document.getElementById("16");

console.log(elem16.children[4].children[0]); 
// assign a function to the + button
elem16.children[4].children[0].onclick 
  = function(){add1(elem16);};
elem16.children[4].children[1].onclick 
  = function(){subtract1(elem16);};
// hole 17
var elem17
  = document.getElementById("17");

console.log(elem17.children[4].children[0]); 
// assign a function to the + button
elem17.children[4].children[0].onclick 
  = function(){add1(elem17);};
elem17.children[4].children[1].onclick 
  = function(){subtract1(elem17);};
// hole 18
var elem18
  = document.getElementById("18");

console.log(elem18.children[4].children[0]); 
// assign a function to the + button
elem18.children[4].children[0].onclick 
  = function(){add1(elem18);};
elem18.children[4].children[1].onclick 
  = function(){subtract1(elem18);};

// you don't have to define the function before you use it! 
function add1 (elem) {
  if(elem.children[2].innerHTML == "-"){elem.children[2].innerHTML = "1" 
  elem.children[3].innerHTML ="-3";} 
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    elem.children[3].innerHTML = elem.children[2].innerHTML-4;
  }
}

function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") {elem.children[2].innerHTML = "-1" 
  elem.children[3].innerHTML ="-5";}
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    elem.children[3].innerHTML = elem.children[2].innerHTML-4;
  }
}

/* your mission: 
1. make all the + buttons add 1 to the proper hole. 
2. make all the - buttons subtract 1 from the proper hole.
3. update the "Over" column to show the difference between par and score.
4. update row #19 with appropriate totals. Note: if a person has not finished a round, then Over/Under should apply only to holes that have been updated.
5. Add a new button, C, which clears the current score for a given hole
6. advanced: put circles around birdies and squares around bogeys!
*/
