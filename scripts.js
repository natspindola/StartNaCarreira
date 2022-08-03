function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == "" | bill == 0) {
        alert("Por favor, preencha o valor da conta.")
        return;
    }

    if(numOfPeople == "" | numOfPeople <= 0) {
        alert("Por favor, preencha a quantidade de pessoas.")
        return;
    }
    
    let total = (bill * serviceQuality);
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

    let totalDiv = (bill * serviceQuality) / numOfPeople;
    totalDiv = totalDiv.toFixed(2);
    document.getElementById('tipDiv').innerHTML = totalDiv;
    document.getElementById('divididoTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('divididoTip').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);