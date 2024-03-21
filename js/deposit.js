//step 1: add click event handler with the deposit button
document.getElementById("btn-deposit").addEventListener("click", function(){
    
    //step 2: get the deposit field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //Step 3: get the current deposit total
    const depositTotalElement = document.getElementById("deposit-total");
    const previousdepositTotalString = depositTotalElement.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    //step 4: add numbers to set the total deposit
    const currentDepositTotal = previousdepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step 5: get balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6: calculate the current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step 7: clear the deposit field
    depositField.value = '';
})