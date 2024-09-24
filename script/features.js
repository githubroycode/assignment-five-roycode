// For btn One
document.getElementById('donate-btn-one')
    .addEventListener('click', function () {


        const donationMoney = getInputFieldById('addedDonation-one');

        if (typeof donationMoney === 'number' && !isNaN(donationMoney) && donationMoney >= 0) {
            const balance = getTextFieldById('account-balance');
            const newBalance = balance - donationMoney;

            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            alert("Invalid number.")
        }
    })

// For btn Two

document.getElementById('donate-btn-two')
    .addEventListener('click', function () {

        const donationMoney = getInputFieldById('neBalance');

        if (typeof donationMoney === 'number' && !isNaN(donationMoney) && donationMoney >= 0) {
            const balance = getTextFieldById('account-balance');
            const newBalance = balance - donationMoney;

            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            alert("Invalid number.")
        }

    })

// For btn Three

document.getElementById('donate-btn-three')
    .addEventListener('click', function () {


        const donationMoney = getInputFieldById('addedDonation-three');

        if (typeof donationMoney === 'number' && !isNaN(donationMoney) && donationMoney >= 0) {
            const balance = getTextFieldById('account-balance');
            const newBalance = balance - donationMoney;

            document.getElementById('account-balance').innerText = newBalance;

        }
        else {
            alert("Invalid number.")
        }
    })

    
// switchable buttons
document.getElementById('donationBtn')
    .addEventListener('click', function () {
        showSectionById('donationId');
    })

//historyBtn
document.getElementById('historyBtn')
    .addEventListener('click', function () {
        showSectionById('historyId');
    })


// History Time
const p = document.createElement('p');

const bangladeshTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

p.innerText = `Bangladesh Time: ${bangladeshTime}`;

document.getElementById('bdTime').appendChild(p);