let bill = {
    billValue: null,
    billType: null,
    description: null,
}

let allBills = []

function registerBill(){
    let inputValue = document.getElementById("billValue")
    let inputType = document.getElementById("registerType")
    let inputDescription = document.getElementById("description")

    let registeredBill = {
        ...bill,
        billValue: parseInt(inputValue.value),
        billType: inputType.value,
        description: inputDescription.value
    }

    if(inputValue.value.length === 0 && inputType.value === "empty" && inputDescription.value.length === 0){
        alert("Todos os campos estao vazios.")
    }else{
        allBills.push(registeredBill)
        totalCost()
        addBills()
        document.getElementById("billValue").value = ""
        document.getElementById("registerType").value = ""
        document.getElementById("description").value = ""
    }  
}

function totalCost(){
    let total = 0
    allBills.forEach((bill, index, array)=>{
        total += bill.billValue
    })

    document.getElementById("total").innerHTML = total
}

function addBills(){
    let mensagem = ""
    allBills.forEach((bill, index, array)=>{
        mensagem += `Valor: ${bill.billValue}<br>Tipo: ${bill.billType}<br>Descrição: ${bill.description}<br><br>`
    })
    document.getElementById("allBills").innerHTML = mensagem
}

function filterBills(){

    let minVal = parseInt(document.getElementById("minVal").value)
    let maxVal = parseInt(document.getElementById("maxVal").value)
    let billType = document.getElementById("filterType").value

    let filteredBills = allBills.filter((bill, index, array)=>{
        if((billType === bill.billType || billType === "empty") && bill.billValue >= minVal && bill.billValue <= maxVal){
            return true
        }
        return false
    })

    mensagem = ""
    filteredBills.forEach((bill, index, array)=>{
        mensagem += `Valor: ${bill.billValue} <br>Tipo: ${bill.billType}<br> Descrição: ${bill.description}`
    })

    document.getElementById("filteredBills").innerHTML = mensagem
}

function reset(){
    document.getElementById("minVal").value = ""
    document.getElementById("maxVal").value = ""
    document.getElementById("filterType").value = "empty"
}