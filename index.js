function formatMoney(value) {
    value = Math.ceil(value*100)/100 //Macete para arredondar as casas depois da virgula
    value = value.toFixed(2)
    return '$ ' + value
}

function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
}

function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tip = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    //document.getElementById('tipPercent').innerHTML = tip
    document.getElementById('tipPercent').innerHTML = document.getElementById('tipInput').value + ' %'
    //document.getElementById('splitValue').innerHTML = split
    //document.getElementById('splitValue').innerHTML = 'Will be divided by ' + (document.getElementById('splitInput').value)
    document.getElementById('splitValue').innerHTML = formatSplit(split)

    let totalTip = bill * (tip/100)
    let totalBill = bill + totalTip
    let totalEach = totalBill / split

    document.getElementById('tipValue').innerHTML = formatMoney(totalTip)
    document.getElementById('totalWithTip').innerHTML = formatMoney(totalBill)
    document.getElementById('billEach').innerHTML = formatMoney(totalEach)
}

