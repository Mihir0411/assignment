function budgetcalcolation(n1,n2,n3){
    if(totalbudget<=-1){
        return "not found"
    }
    var watchBudget = n1*50;
    var phonebudget = n2*100;
    var laptopbudget = n3*500;

    var totalbudget = watchBudget + phonebudget + laptopbudget;
   
    return totalbudget;
}
 console.log(budgetcalcolation(5,5,-1))


function kilotometer(n){
    var meter = n * 1000;
    if(meter<=-1){
           return "not found"
    }
    return meter;
    
    
}

// console.log(kilotometer(-2));





function hotelCost(rat){
    var hotel = 0;
    if(rat<=10){
        hotel = rat * 100
        if(rat===-1)
        return "amount cannot be negative"
    }
    else if(rat<= 20){
        var styFirst10Rat = 10 * 100;
        var prevRat = rat - 10;
        var stySecond20Rat = prevRat * 80;
        var styFirst10Rat = 10 * 100;
        hotel = styFirst10Rat + stySecond20Rat;
    } else{
        var styFirst10Rat = 10 * 100;
        var stySecond20Rat = 10 * 80;
        var prevRat = rat - 20;
        var styafter20rat = prevRat * 50;
        hotel = styFirst10Rat + stySecond20Rat + styafter20rat
    }
    return hotel;
}
var result = hotelCost(-20)

// console.log(result)





// (3.  assignment megaFriend)
var friendsList = [];
function megaFriend(friendsList){
        var bigName = friendsList[0]
        // var bigName1 = []
    for(i=0; i<friendsList.length; i++){
        var ele = friendsList[i];
      
        if(ele > bigName){
            bigName = ele;
        }
        if(friendsList.length <= -0){
             console.log('not foumd');
        }

    }
    return bigName
}
 var result = megaFriend(friendsList)
 //console.log('Big name is ',result);