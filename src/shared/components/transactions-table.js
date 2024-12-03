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
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Transfer</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="negative-amount">-$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Income</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="positive-amount">+$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Service Payment</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="negative-amount">-$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Utilities</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="negative-amount">-$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Income</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="positive-amount">+$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Income</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="positive-amount">+$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Utilities</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="negative-amount">-$14.23</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum dolor</td>
                            <td>#1234567890</td>
                            <td>Income</td>
                            <td>1234 ****</td>
                            <td>14 Nov 2024, 4:43 PM</td>
                            <td class="positive-amount">+$14.23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
};
