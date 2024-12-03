export const Card = () => {

    const card = document.getElementById('card-container')
    card.innerHTML = `
        <div class="card">
            <div class="foreground">
                <div class="credit-card-header">
                <div class="bank"><img src="visa_logo.svg" alt="User"></div>
            </div>
            <div class="credit-card-chip-container">
                <img src="chip.svg" alt="User">
                </div>
                <div class="info-container">
                <p class="serial">1264 3245 3322 1356</p>
                <div class="info-card">
                    <p class="expiration">01/30</p>     
                    <p class="cvv">ccv 560</p>  
                </div>
                <div class="info-card">
                    <p class="names">Owner name</p>     
                    <p class="balance">Balance $70,000</p>  
                </div>
                
            </div>
        </div>
    `;
};