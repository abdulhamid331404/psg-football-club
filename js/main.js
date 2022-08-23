
// get Element to innerText
function getElementTextById(inputElementId) {
    const getElement = document.getElementById(inputElementId);
    const getElementString = getElement.innerText;
    const getElementNumber = parseInt(getElementString)
    return getElementNumber

}

// input field by get value
function getInputFieldById(input) {
    const getInputFuild = document.getElementById(input);
    const getInputFuildString = getInputFuild.value
    const getInputFuildNumber = parseInt(getInputFuildString);
    return getInputFuildNumber;
}

// set get element by id 
function setElementById(inputSetElementId, value) {
    const setElementValue = document.getElementById(inputSetElementId);
    setElementValue.innerText = value;

}

// select players  
function selectPlayer(playerId) {
    const orderlist = document.querySelectorAll("#select-list li")
    if (orderlist.length == 5) {
        alert("A maximum of 5 players can be taken")
    }
    else {
        const getPlayerName = playerId.parentNode.children[0].innerText
        const creaiteLiTage = document.createElement("li");
        creaiteLiTage.innerText = getPlayerName
        const getOlTage = document.getElementById("select-list")
        getOlTage.appendChild(creaiteLiTage)

    }
}

// calclulate player cost
document.getElementById("calculate-btn").addEventListener("click", function () {
    const getPerPlayerCost = getInputFieldById("per-player-cost")
    if (isNaN(getPerPlayerCost)) {
        alert("Please enter the number")
    }
    else {
        const orderlist = document.querySelectorAll("#select-list li").length
        const allPlayerTotalCost = getPerPlayerCost * orderlist
        setElementById("player-expenses", allPlayerTotalCost)
    }

})

// calclulate total players the cost 
document.getElementById("calculate-total").addEventListener("click", function () {
    const getTotalCost = getElementTextById("player-expenses");
    const getManagerfuildValue = getInputFieldById("manager-amount");
    const getCoachfuildValue = getInputFieldById("coach-amount");
    if (isNaN(getManagerfuildValue) || isNaN(getCoachfuildValue)) {
        alert("Please enter the valid number")
    }
    else {
        const totalAmount = getTotalCost + getManagerfuildValue + getCoachfuildValue;
        setElementById("Total-balance", totalAmount)
    }

})







