
// kilomiter to miter conversion Function

function kilomiterToMeter(x){
    var miter=x*1000;
    return miter;
}

var output=kilomiterToMeter(5);
console.log(output);


// // budget Calculator Function
function budgetCalculator(watch, phone, laptop){
     
     var watch=watch*50;
     var phone=phone*100;
     var laptop=laptop*500;
     var totalBudget=watch+phone+laptop;
     return totalBudget; 
}

var output=budgetCalculator(4,1,2);
   console.log(output);




// Hotel Cost Function Start //
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = firstPart + secondPart;
    } else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var totalCost = hotelCost(25);
  console.log(totalCost);


//megaFriend Function
function megaFriend(arr) {
  var word = "";
  for (var i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

var output=megaFriend(['boop', 'bloomburg', 'hello','AnwarHossain'])
console.log(output);

