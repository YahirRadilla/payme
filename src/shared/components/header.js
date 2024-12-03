export const createHeader = () => {

    const header = document.getElementById('header')
    header.innerHTML = `
        <div style= "max-width: 80%; margin: auto; ">
            <nav style="display: flex; justify-content: space-between; align-items: center; padding: 10px 20px;">
                <div style="display: flex; align-items: center; gap: 70px;">
                    <img src="logo.svg" alt="Logo" style="width: 110px; margin-right: 10px;">
                    <ul style="display: flex; gap: 20px; list-style: none; padding: 0; margin: 0;">
                        <li><a href="/" style="text-decoration: none; color: black;">Home</a></li>
                        <li><a href="/transactions" style="text-decoration: none; color: black;">Transactions</a></li>
                        <li><a href="/cards" style="text-decoration: none; color: black;">Cards</a></li>
                    </ul>
                </div>
                
                <div style="display: flex; align-items: center; gap: 10px; font-size: 1rem;">
                    <span>John Doe</span>
                    <a href="#"><img src="UserIcon.svg" alt="User" style="width: 30px; height: 30px; border-radius: 50%;"></a>
                </div>
            </nav>
        </div>
    `;
};