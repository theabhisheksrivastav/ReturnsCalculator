const oneTimeButton = document.querySelector(".oneTimeInvest button");

oneTimeButton.addEventListener("click", calculateOneTimeInvestment);

function calculateOneTimeInvestment(e) {
    e.preventDefault();
    try {
        let principal = parseFloat(document.getElementById("principal").value);
        const rate = parseFloat(document.getElementById("rate").value);
        const time = parseFloat(document.getElementById("time").value);

        const result = principal * Math.pow((1 + rate / 100), time);

        document.getElementById("oneTimeResult").innerText = `Result: ${result.toFixed(2)}`;
    } catch (error) {
        console.error("Error in one-time investment calculation: ", error);
    }
}

const recButton = document.querySelector(".recurringInvest button");

recButton.addEventListener("click", calculateRecurringInvestment);

function calculateRecurringInvestment(e) {
    e.preventDefault();
    try {
        let principalRec = parseFloat(document.getElementById("principalRec").value);
        const rateRec = parseFloat(document.getElementById("rateRec").value);
        const timeRec = parseFloat(document.getElementById("timeRec").value);
        const resultRec = principalRec * (((1 + rateRec / 100) ** timeRec - 1) / (rateRec / 100));

        document.getElementById("recurringResult").innerText = `Result: ${resultRec.toFixed(2)}`;
    } catch (error) {
        console.error("Error in recurring investment calculation: ", error);
    }
}

function alertUser() {
    alert("This feature is not yet available");
}