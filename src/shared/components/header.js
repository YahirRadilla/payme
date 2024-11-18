export const createHeader = () => {

    const header = document.getElementById('header')
    header.innerHTML = `
        <nav>
            <ul style="display: flex; justify-content: space-around; list-style: none; padding: 0;">
                <li><a href="/" onclick="route(event)">Home</a></li>
                <li><a href="/about" onclick="route(event)">About</a></li>
                <li><a href="/contact" onclick="route(event)">Contact</a></li>
            </ul>
        </nav>
    `;
};