function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const result = document.getElementById('result');

    if (amount === '') {
        alert('Please enter a valid amount.');
        return;
    }

    let rate;

    if (from === 'CAD' && to === 'USD') {
        rate = 0.75;
    } else if (from === 'USD' && to === 'CAD') {
        rate = 1.33;
    } else {
        alert('Please select valid currencies.');
        return;
    }

    const convertedAmount = amount * rate;
    result.textContent = `Converted Amount: ${convertedAmount.toFixed(3)} ${to}`;
}