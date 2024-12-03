import "./card-services.css";
export const AddCardServices = () => {
    const containerServices = document.getElementById('card-services-container');

    containerServices.innerHTML = `
    <div>
        <div class="services-card">
            <div class="services-list">
                <button class="service-item">
                    <span class="icon transfer"></span>
                    <span class="text">Transfer</span>
                </button>
                <button class="service-item">
                    <span class="icon payment"></span>
                    <span class="text">Payment of services</span>
                </button>
                <button class="service-item">
                    <span class="icon deposit"></span>
                    <span class="text">Deposit</span>
                </button>
                <button class="service-item">
                    <span class="icon withdrawal"></span>
                    <span class="text">Withdrawal</span>
                </button>
            </div>
        </div>
    </div>
    `;
};
