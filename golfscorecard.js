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

// you don't have to define the function before you use it! 
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}

function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
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
