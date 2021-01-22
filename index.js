function budgetCalculator(Watch,Phone,Laptop){
    if(Watch <= 0){
        return "invalid value";
    }
    if( Phone <= 0){
        return "invalid value";
    }
    if(Laptop <= 0){
        return "invalid value";
    }
        var watchBudget = Watch * 50;
        var phonebudget = Phone * 100;
        var laptopbudget = Laptop * 500;
    
        var totalbudget = watchBudget + phonebudget + laptopbudget;
        
        return totalbudget;  
}
var result = budgetCalculator(5,2,1)
console.log(result)
