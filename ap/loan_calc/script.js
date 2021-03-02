// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

// Calc Function
function calculateResults(e) {
    e.preventDefault();

    // ui variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    // Get figures
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute Monthly Payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
    } else {
        showError('Please Check Your Numbers')
    }

    console.log(principal)
}

function showError(error) {
    // create div
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error))

    card.insertBefore(errorDiv, heading);

    // clear error after 3sec

    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}