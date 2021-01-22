
// kilomiter to miter conversion Function

function kilomiterToMiter(x){
    var miter=x*1000;
 return miter;
}

var output=kilomiterToMiter(5);
console.log(output);


// budget Calculator Function
function budgetCalculator(watch, phone, laptop){
     
     var watch=watch*50;
     var phone=phone*100;
     var laptop=laptop*500;
     var totalBudget=watch+phone+laptop;
     return totalBudget; 
}

var output=budgetCalculator(1,1,1);
   console.log(output);

// Hotel Cost Calcolation Function


function hotelCost(day){
      if(day<=10){
          var totalCost=day*100;
      }else if(day<=20){
          var totalCost=day*80;
      }else{
          var totalCost=day*50;
      }

      return totalCost;

}

// megaFriend Function
function megaFriend(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

var output=megaFriend(['boop', 'bloomburg', 'hello','sdklgfasjldgjsdklgjsdgkljd'])
console.log(output);

