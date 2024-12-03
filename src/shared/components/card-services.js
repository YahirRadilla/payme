import "./card-services.css";
export const AddCardServices = () => {
    const containerServices = document.getElementById('card-services-container');

    containerServices.innerHTML = `
    <div>
        <div class="services-card">
            <ul class="services-list">
            <li class="service-item">
                <span class="icon transfer"></span>
                <span class="text">Transfer</span>
            </li>
            <li class="service-item">
                <span class="icon payment"></span>
                <span class="text">Payment of services</span>
            </li>
            <li class="service-item">
                <span class="icon deposit"></span>
                <span class="text">Deposit</span>
            </li>
            <li class="service-item">
                <span class="icon withdrawal"></span>
                <span class="text">Withdrawal</span>
            </li>
            </ul>
       </div>
    </div>
    `;
};
