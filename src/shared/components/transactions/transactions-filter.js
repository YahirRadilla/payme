import "./transactions-filter.css";

export const AddFilters = () => {
    const filterContainer = document.getElementById('filter-container');

    filterContainer.innerHTML = `
        <div class="filter-container">
            <div class="filter-input">
                <input type="date">
                <select>
                    <option disabled selected>Select a type</option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>
            <button class="filter-button">Filter</button>
        </div>
    `;
};
