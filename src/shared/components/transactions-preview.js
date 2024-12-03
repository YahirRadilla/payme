import "./transactions-preview.css";
export const AddTransactionPreview = () => {
    const contentTransaction = document.getElementById('transactions-preview')
    const content = `
    <div class="transaction-card">
        <div class="icon-container">
            <img class="deposit-icon" src="deposit-icon.svg" title="deposit-icon">
        </div>
        <div class="transaction-details">
            <span>Lorem ipsum dolor</span>
            <p>14 nov 2024</p>
        </div>
        <div class="transaction-amount">
            <span>+$14.23</span>
        </div>
    </div>
    `;
    contentTransaction.innerHTML += content
};
