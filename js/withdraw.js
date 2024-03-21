document.getElementById("btn-withdraw").addEventListener("click", function(){
    
    //withdraw amount
    const withdrawField = document.getElementById("withdraw-field");
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

     //step 7: clear the withdraw field
     withdrawField.value = '';

    if(isNaN(newWithDrawAmount)){
        alert("Please provide a valid number");
        return;
    }
    //withdraw total
    const withDrawTotalElement = document.getElementById("withdraw-total");

    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);

    //get the previous balance total
    const balanceTotalElement = document.getElementById("balance-total");

    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 7: clear the withdraw field
    withdrawField.value = '';

    if(newWithDrawAmount > previousBalanceTotal){
        alert("Your Balance is Empty!!!");
        return;
    }

    //calculate total withdraw amount -4
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;

    //set total withraw amount
    withDrawTotalElement.innerText = currentWithdrawTotal;

    //calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;
})