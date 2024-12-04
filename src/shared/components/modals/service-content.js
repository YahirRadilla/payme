export const serviceContent = () => `
<header class="modal__header">
    <h2 class="modal__title">Payment of services</h2>
    <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
</header>
<div class="modal-content-content">
    <div class="modal__content">
        <form class="transfer-inputs">
            <div class="input-container">
                <label for="transfer-card-select" class="name">Source Card</label>
                <select required name="transfer-card-select" id="transfer-card-select">
                    <option disabled selected>**** 1234</option>
                    <!-- Agrega más opciones si es necesario -->
                </select>
            </div>

            <div class="input-container">
                <label for="service-select" class="name">Service</label>
                <select required name="service-select" id="service-select">
                    <option disabled selected>Electricity</option>
                    <!-- Agrega más opciones si es necesario -->
                </select>
            </div>

            <div class="input-container">
                <label for="reference" class="name">Reference</label>
                <input required id="reference" name="reference" value="012345678901" type="text" class="input" readonly>
            </div>

            <div class="input-container">
                <label for="amount" class="name">Amount to pay</label>
                <input required id="amount" name="amount" value="$70,000" type="text" class="input" readonly>
            </div>

            <input class="input" type="submit" value="Pay now">
        </form>
    </div>
</div>
`