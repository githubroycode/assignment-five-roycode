document.getElementById('donate-btn-one')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationMoney = getInputFieldById('addedDonation-one');
        console.log('One add money inside add: ', donationMoney);
    })

document.getElementById('donate-btn-two')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationMoney = getInputFieldById('addedDonation-two');
        console.log('Two add money inside add: ', donationMoney);
    })

document.getElementById('donate-btn-three')
    .addEventListener('click', function(event){
        event.preventDefault();

        const donationMoney = getInputFieldById('addedDonation-three');
        console.log('Three add money inside add: ', donationMoney);
    })