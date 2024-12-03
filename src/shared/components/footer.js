

export const createFooter = () => {

    const footer = document.getElementById('footer');

    footer.innerHTML = `
        <footer style="border-top: 1px solid #ddd;">
            <div class="container">
                <nav class="navbar">
                    <div class="navbar-left">
                        <img src="logo.svg" alt="Logo" class="logo">
                    </div>
                    <div class="navbar-right">
                        <span>Copyrigth ©2024 all rights reserved</span>
                    </div>
                </nav>
            </div>
        </footer>
    `;
};