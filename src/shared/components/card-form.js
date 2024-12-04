import "./card-form.css";
export const AddCardForm = () => {
    const containerForm = document.getElementById('card-form-container');

    containerForm.innerHTML = `
        <div>
            <div class="card-container">
                <form>
                    <div class="form-group">
                        <div class="form-column">
                            <label for="card-type">Card Type</label>
                            <input type="text" id="card-type" placeholder="Classic">
                        </div>
                        <div class="form-column">
                            <label for="card-name">Name On Card</label>
                            <input type="text" id="card-name" placeholder="My Cards">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-column">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" placeholder="**** **** **** ****">
                        </div>
                        <div class="form-column">
                            <label for="expiry-date">Expiration Date</label>
                            <input type="text" id="expiry-date" placeholder="25 January 2025">
                        </div>
                    </div>
                    <button type="submit" class="btn">Add Card</button>
                </form>
            </div>
        </div>
    `;
};
