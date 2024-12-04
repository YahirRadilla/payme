import "./transactions-table.css";

export const AddTransactions = () => {
    const containerTransactions = document.getElementById("transactions-container");

    containerTransactions.innerHTML = `
        <div class="transactions-card">
    <div class="transactions-scroll">
        <table class="transactions-table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Folio</th>
                    <th>Type</th>
                    <th>Card</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Transfer</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="negative-amount">-$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Income</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="positive-amount">+$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Service Payment</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="negative-amount">-$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Utilities</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="negative-amount">-$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Income</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="positive-amount">+$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Income</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="positive-amount">+$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Utilities</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="negative-amount">-$14.23</td>
                </tr>
                <tr>
                    <td data-label="Description">Lorem ipsum dolor</td>
                    <td data-label="Folio">#1234567890</td>
                    <td data-label="Type">Income</td>
                    <td data-label="Card">1234 ****</td>
                    <td data-label="Date">14 Nov 2024, 4:43 PM</td>
                    <td data-label="Amount" class="positive-amount">+$14.23</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    `;
};
