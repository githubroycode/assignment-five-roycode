document.getElementById('donate-btn-one')
    .addEventListener('click', function () {


        const donationMoney = getInputFieldById('addedDonation-one');

        if (typeof donationMoney === 'number' && !isNaN(donationMoney) && donationMoney >= 0) {
            const balance = getTextFieldById('account-balance');
            const newBalance = balance - donationMoney;

            document.getElementById('account-balance').innerText = newBalance;

        }
        else{
            alert("Invalid number.")
        }



    })

document.getElementById('donate-btn-two')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationMoney = getInputFieldById('addedDonation-two');
        console.log('Two add money inside add: ', donationMoney);
    })

document.getElementById('donate-btn-three')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const donationMoney = getInputFieldById('addedDonation-three');
        console.log('Three add money inside add: ', donationMoney);
    })