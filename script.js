function calculateReturns() {
    const investmentAmount = parseFloat(document.getElementById('investment-amount').value);
    const investmentDuration = parseInt(document.getElementById('investment-duration').value);
    
    // Perform your investment calculation logic here
    // For simplicity, let's assume a fixed annual return rate of 5%
    const annualReturnRate = 0.05;
    const totalReturns = investmentAmount * Math.pow(1 + annualReturnRate, investmentDuration);

    document.getElementById('returns').textContent = `Estimated Returns: $${totalReturns.toFixed(2)}`;
}
