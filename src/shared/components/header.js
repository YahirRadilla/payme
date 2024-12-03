import './header.css'

export const createHeader = () => {

    const header = document.getElementById('header')
    header.innerHTML = `
        <div class="container">
            <nav class="navbar">
                <div class="navbar-left">
                    <img src="logo.svg" alt="Logo" class="logo">
                    <ul class="nav-links">
                        <li><a href="/" class="nav-link">Home</a></li>
                        <li><a href="/transactions" class="nav-link">Transactions</a></li>
                        <li><a href="/cards" class="nav-link">Cards</a></li>
                    </ul>
                </div>
                <div class="navbar-right">
                    <span>John Doe</span>
                    <a href="#"><img src="UserIcon.svg" alt="User" class="user-icon"></a>
                </div>
            </nav>
        </div>
    `;
};