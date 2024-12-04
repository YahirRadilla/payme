export const withdrawalContent = () => `
    <header class="modal__header">
                <h2 class="modal__title">
                    Withdrawal data
                </h2>
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
    </header>
    <div class="modal-content-content">
        <div class="modal__content">
            <form class="transfer-inputs">
                <label for="withdrawal-card-select" class="name">My Cards</label>
                <select required name="transfer-card-select">                    
                    <option disabled>Select a card</option>                
                    <option value="income">1234</option>
                    <option value="expense">1234</option>
                </select>  

                <div class="input-container">
                    <label for="amount" class="name">Amount</label>
                    <input required id="amount" name="amount" placeholder="$70,000" type="number"
                        class="input">
                </div>

                <input class="input" type="submit" value="Make Withdrawal">
            </form>
        </div>
    </div>`