// --- much code derived from Quinn Friebe's work at http://webp.svsu.edu/~qefriebe/cis255/as06/as06.html

// ===== GLOBAL VARIABLES =====

// Default values. Each line corresponds to each row of the chart. This will 
//be prefilled later 
let loans = [
    { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
    { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
]; 

// Declare the overall loan value
let loanWithInterest = 0;
let int = 0;


// ===== FUNCTIONS =====

// ----- Plain JavaScript -----

// -------------------------------------------------------
// Create a function that adds the appropriate comma for the number it is //called for.
function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// -------------------------------------------------------
// Create a function that ends a dollar sign to the number it is called for. 
//The first dollar sign in the string is the actual dollar sign. The second 
//indicates that the following is a template literal. This function also calls 
//the toComma function.
let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`; 
}

// -------------------------------------------------------
// Create a function that saves the data in local storage so even if the 
//browser is closed the data is not deleted. 
let saveForm = () => {
  localStorage.setItem(`as06`, JSON.stringify(loans));
}

// -------------------------------------------------------
// Create a function that checks to see if there is data saved in the local 
//storage. If there is not, display an error message. If there is then 
//retrieve the data. 
let loadForm = () => {
  if(localStorage.getItem(`as06`) != null){
     loans = JSON.parse(localStorage.getItem(`as06`));
     updateForm();
  } else {
     alert(`Error: no saved values`);
  }
}

// ----- JQUERY -----

// -------------------------------------------------------
// display the entry form
function loadDoc() {
    
  // pre-fill defaults for first loan year
  // Create a variable with function scope for the first year. Initialize it 
  //to the object's (loans[0]) year (.loan_year)
  var defaultYear = loans[0].loan_year;
  $("#loan_year0" + 1).val(defaultYear++);
   // Create a variable with function scope for the first loan amount. 
  //Initialize it to the object's (loans[0]) loan amount (.loan_amount)
  var defaultLoanAmount = loans[0].loan_amount;
  $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));
   // Create a variable with function scope for the first interest rate. 
  //Initialize it to the object's (loans[0]) intrest rate (.loan_int_rate)
  var defaultInterestRate = loans[0].loan_int_rate;
  $("#loan_int0" + 1).val(defaultInterestRate);
   // Create a variable with function scope for the first total amount. 
  // calculate the total of the loan with interest and add the appropriate 
  //comma and dollar sign by calling the toMoney function
  var loanWithInterest 
    = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toMoney(loanWithInterest));
    
  // pre-fill defaults for other loan years
  // Create a for loop to select the remaining four years (or four rows) of 
  //data. 
  for(var i=2; i<6; i++) {
    // Add a year to the selected row and increment the default year counter
    $(`#loan_year0${i}`).val(defaultYear++);
    // Set the attribute for the selected year to disable the users ability to 
    //type the year.
    $(`#loan_year0${i}`).attr("disabled","true");
    // Set the color of the disabled box to grey.
    $(`#loan_year0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    
    
    $(`#loan_amt0${i}`).val(defaultLoanAmount.toFixed(2));
    $(`#loan_int0${i}`).val(defaultInterestRate);
    
    // Disable and set the box to grey for the interest rates as well
    $(`#loan_int0${i}`).attr("disabled","true");
    $(`#loan_int0${i}`).css({
      "backgroundColor":"grey","color":"white"
    });
    
    // Create a global variable to start a running total to update the total 
    //value.
    loanWithInterest 
      = (loanWithInterest + defaultLoanAmount) 
      * (1 + defaultInterestRate);
    
    // Set the number up with the proper comma and dollar sign
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  } // end: "for" loop
    
  // all input fields: select contents on focus
  // Set the user's selected box to yellow and set the others to "blurred" with a 
  //white background
  $("input[type=text]").focus(function() {
    $(this).select();
    $(this).css("background-color", "yellow");
  }); 
  $("input[type=text]").blur(function() {
    $(this).css("background-color", "white");
    updateLoansArray();
  });

} // end: function loadDoc()

// -------------------------------------------------------
// update loans data with user-entered values
// regex tester web site: https://www.regexpal.com/
function updateLoansArray() {
  let valid = true;
  // Make sure the user's year is inbetween 1900 and 2099 using a regular 
  //expression
  let yearP = /^(19|20)\d{2}$/;
  // Ensure the amount entered by user is greater than 0 and has no more than two 
  //decimal places 
  let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
   // Ensure the amount entered by user is less than 1 and no more than 5 places 
  //after the decimal
  let intP = /^(0|)+(.[0-9]{1,5})?$/;

  // Check users input year against the regular expression set above. If year is 
  //not valid, set valid to false, and set background red
  if(!yearP.test($(`#loan_year01`).val())){
    valid = false;
    $(`#loan_year01`).css("background-color", "red");
  }
  
  // Check users input amount against the regular expression set above. If year 
  //is not valid, set valid to false, and set background red
  for (i = 1; i < 6; i++) {
    if(!amtP.test($(`#loan_amt0${i}`).val())) {
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red");
    } 
  }

  // Check users input intrest against the regular expression set above. If year 
  //is not valid, set valid to false, and set background red
  if(!intP.test($(`#loan_int01`).val())) {
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }

  // if all user-entered data is okay, then update loans variable and form
  if(valid) {
    // Check and set the years
    loans[0].loan_year = parseInt($("#loan_year01").val());
    for(var i=1; i<5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
    }
    // Create and set the amounts variable
    for(i = 1; i<6; i++){
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
      loans[i-1].loan_amount = amt;
    }
    // Create and set the rate variable
    let rate = parseFloat($("#loan_int01").val());
    for(i=0; i<5; i++){
      loans[i].loan_int_rate = rate;
    }
    
    // Update the form with the new values. The form will only be updated if the 
    //values are valid
    updateForm();
  } // end: if
  
} // end: function updateLoansArray()

// -------------------------------------------------------
// display the data entry form with updated user-entered values
let updateForm = () => {
  loanWithInterest = 0;
  let totalAmt = 0;
  for(i = 1; i < 6; i++) {
    // Take the loan information from the array
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
    // Create variable for amount and set it 
    let amt = loans[i - 1].loan_amount;
    // Put the amount in correct field on chart
    $(`#loan_amt0${i}`).val(amt);
    // Add amount to total amount
    totalAmt += parseFloat(amt);
    // Set intrest rate field
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
    // Calculate the YE balance
    loanWithInterest 
      = (loanWithInterest + parseFloat(amt)) 
      * (1 + loans[0].loan_int_rate);
    // Set the year end balcance on chart with proper commas 
    //and dollar sign
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  }
  // Calculate total intrest
  int = loanWithInterest - totalAmt;
  // Set the intrest accrued at end of chart
  $(`#loan_int_accrued`).text(toMoney(int));
  
} // end: function updateForm()
  

// ----- ANGULAR -----
// Create an app object
var app = angular.module('myApp', []);
// Create a controller that takes the original amount from the 
//YE Balance and calculates the payment amount.
app.controller('myCtrl', function($scope) {
  // Create payments array
  $scope.payments =[];
  // Populate the payments array
  $scope.populate = function () {
    updateForm();
    // Create new variables for this function with data from 
    //previous chart
    let total = loanWithInterest;
    let iRate = loans[0].loan_int_rate;
    let r = iRate / 12;
    let n = 11;
    // Create the loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    let pay = 12 * (total / ((((1+r)**(n*12))-1)/(r *(1+r)**(n*12))));
    // Create a for loop to go through calculating the payments for 10 years 
    //keeping a running total of intrest and YE balance
    for (let i = 0; i < 10; i++) {
      total -= pay //6500
      let int = total * (iRate); 
      $scope.payments[i] = {
        "year":loans[4].loan_year + i + 1,
        "payment": toMoney(pay), //toMoney(6500),
        "amt": toMoney(int),
        "ye": toMoney(total += int)
      }
    }
    $scope.payments[10] = {
      "year":loans[4].loan_year + 11,
      "payment": toMoney(total),
      "amt": toMoney(0),
      "ye":toMoney(0)
    }
   
  }
});
