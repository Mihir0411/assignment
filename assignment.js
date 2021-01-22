// https://github.com/Mihir0411/assignment

// ( assignment budgetCalcolator )

function budgetCalculator(Watch,Phone,Laptop){
    if(Watch < 0){
        return "invalid value";
    }
    if( Phone < 0){
        return "invalid value";
    }
    if(Laptop < 0){
        return "invalid value";
    }
        var watchBudget = Watch * 50;
        var phonebudget = Phone * 100;
        var laptopbudget = Laptop * 500;
    
        var totalbudget = watchBudget + phonebudget + laptopbudget;
        
        return totalbudget;  
}





// ( assignment kilometerToMeter )

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(meter <= 0){
        return "invalid value";
    }
    return meter;
}






// ( assignment megaFriend )

var friendsList = ['tomal', 'santono', 'yousuf momane', 'mahmudul hasan shaon']
function megaFriend(friendsList){
    if(friendsList.length== 0){
        return "friendsList is empty";
    }
        var bigName = friendsList[0]
    for(i=0; i<friendsList.length; i++){
        var friendName = friendsList[i];
        if(friendName.length > bigName.length){
            bigName = friendName;
        }
    }
    return bigName
}





// ( assignment hotelCost )

function hotelCost(day){
    var hotelday = 0;
    if(day <= 0){
        return "invalid value";
    }
    if(day <= 10){
        hotelday = day * 100
    }
    else if(day <= 20){
        var styFirst10day = 10 * 100;
        var previousday = day - 10;
        var stySecond20day = previousday * 80;
        var styFirst10day = 10 * 100;
        hotelday = styFirst10day + stySecond20day;
    } else{
        var styFirst10day = 10 * 100;
        var stySecond20day = 10 * 80;
        var previousday = day - 20;
        var styafter20day = previousday * 50;
        hotelday = styFirst10day + stySecond20day + styafter20day
    }
    return hotelday;
}
