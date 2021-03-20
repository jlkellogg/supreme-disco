function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var tipPercentage = document.querySelectorAll('input[name="tip"]');
    if (billAmount === "") {
            alert("Please enter a bill amount.");
            return;
        }
    let selectedTip;
        
    for (const tip of tipPercentage){
        if (tip.checked) {
            selectedTip = tip.value;
            break;
        }
    }
        
    var tip = (billAmount * selectedTip);
    tip = tip.toFixed(2);
    document.getElementById("tipAmount").innerHTML=tip;

    var total = (parseFloat(billAmount) + parseFloat(tip));
    total = total.toFixed(2);
    document.getElementById("totalBillAmount").innerHTML=total;
}

document.getElementById("calculate").onclick = function() {
    calculateTip();
}