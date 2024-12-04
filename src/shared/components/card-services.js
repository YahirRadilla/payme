import "./card-services.css";
export const AddCardServices = () => {
    const containerServices = document.getElementById('card-services-container');

    containerServices.innerHTML = `
    <div>
        <div class="services-card">
            <div class="services-list">
                <button class="service-item transfer-item">
                    <span class="icon transfer transfer-item"></span>
                    <span class="text transfer-item">Transfer</span>
                </button>
                <button class="service-item payment-item">
                    <span class="icon payment payment-item"></span>
                    <span class="text payment-item">Payment of services</span>
                </button>
                <button class="service-item deposit-item">
                    <span class="icon deposit deposit-item"></span>
                    <span class="text deposit-item">Deposit</span>
                </button>
                <button class="service-item withdrawal-item">
                    <span class="icon withdrawal withdrawal-item"></span>
                    <span class="text withdrawal-item">Withdrawal</span>
                </button>
            </div>
        </div>
    </div>
    `;
};
