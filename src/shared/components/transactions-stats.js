import "./transactions-stats.css";

export const AddStatsCard = () => {
    const containerStats = document.getElementById("stats-card-container");

    containerStats.innerHTML = `
    <div class="stats-card">
        <div class="stat-item">
            <div class="icon-circle blue">
                <img src="transactions-icon.svg" alt="Transactions Icon">
            </div>
            <div class="stat-info">
                <p class="stat-title">Total Transactions</p>
                <p class="stat-value">70,000</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
            <div class="icon-circle green">
                <img src="income-icon.svg" alt="Income Icon">
            </div>
            <div class="stat-info">
                <p class="stat-title">Total Income</p>
                <p class="stat-value">70,000</p>
            </div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
            <div class="icon-circle red">
                <img src="expense-icon.svg" alt="Expense Icon">
            </div>
            <div class="stat-info">
                <p class="stat-title">Total Expense</p>
                <p class="stat-value">70,000</p>
            </div>
        </div>
    </div>
    `;
};