document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()
    
const addMoney=getInputFieldValueById('input-add-money')
const pinNumber=getInputFieldValueById('input-pin-number')

if (isNaN(addMoney)){
    alert('Not a valid number')
    return
}
if(pinNumber===123){
    const balance=getTextFieldValueById('account-balance')
const newBalance=balance+addMoney;
document.getElementById('account-balance').innerText=newBalance

const p= document.createElement('p')
p.innerHTML=`Added: ${addMoney} Tk. New Balance: ${newBalance}`
document.getElementById('transaction-container').appendChild(p)
}
else{
    alert('Failed add to failed money')
}

})


