import "./transactions-preview.css";
export const AddTransactionPreview = (description, date, type, amount) => {
    let iconSrc;
    let styleIcon;
    switch (type) {
        case 'transfer':
            iconSrc = 'transfer-icon.svg';
            styleIcon = 'transfer-icon';
            break;
        case 'payment':
            iconSrc = 'payment-sheet-icon.svg';
            styleIcon = 'payment-icon';
            break;
        case 'income':
            iconSrc = 'income-icon.svg';
            styleIcon = 'deposit-icon';
            break;

        case 'withdrawal':
            iconSrc = 'withdrawal-icon.svg';
            styleIcon = 'withdrawal-icon';
            break;
        default:
            iconSrc = 'income-icon.svg';
            styleIcon = 'deposit-icon';
            break;
    }

    const contentTransaction = document.getElementById('transactions-preview')
    const content = `
    <div class="transaction-card">
        <div class="icon-container">
            <img id="transaction-icon" class="${styleIcon}" src="${iconSrc}" title="${type}">
        </div>
        <div class="transaction-details">
            <span>${description}</span>
            <p>${date}</p>
        </div>
        <div class="transaction-amount">
            <span>${amount}</span>
        </div>
    </div>
    `;
    contentTransaction.innerHTML += content
};
