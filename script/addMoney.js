// For btn One
document.getElementById('donate-btn-one')
    .addEventListener('click', function () {


        const donationMoneyOne = getInputFieldById('addedDonation-one');

        if (typeof donationMoneyOne === 'number' && !isNaN(donationMoneyOne) && donationMoneyOne >= 0) {
            const balance = getTextFieldById('added-balance');
            const newBalanceOne = balance + donationMoneyOne;

            document.getElementById('added-balance').innerText = newBalanceOne;

        }
        else {
            alert("Invalid number.")
        }
    })


   // two

   document.getElementById('donate-btn-two')
.addEventListener('click', function () {
    const donationMoneyTwo = getInputFieldById('neBalance');

    if (typeof donationMoneyTwo === 'number' && !isNaN(donationMoneyTwo) && donationMoneyTwo >= 0) {
        const balance = getTextFieldById('oldBalance');
        const newBalanceTwo = balance + donationMoneyTwo;

        document.getElementById('oldBalance').innerText = newBalanceTwo;

    }
    else {
        alert("Invalid number.")
    }
})

// three

document.getElementById('donate-btn-three')
.addEventListener('click', function () {
    const donationMoneyThree = getInputFieldById('addedDonation-three');

    if (typeof donationMoneyThree === 'number' && !isNaN(donationMoneyThree) && donationMoneyThree >= 0) {
        const balance = getTextFieldById('oldBla');
        const newBalanceThree = balance + donationMoneyThree;

        document.getElementById('oldBla').innerText = newBalanceThree;

    }
    else {
        alert("Invalid number.")
    }
})