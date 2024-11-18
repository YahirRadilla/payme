import { initializeDynamicContent } from '../../../main.js'
import { createHeader } from '../../components/header.js';


const route = (event) => {
    event = event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    404: "/src/shared/components/404.html",
    "/login": "/src/features/auth/login.html",
    "/register": "/src/features/auth/register.html",
    "/": "/src/features/page/pages/home.html",
    "/transactions": "/src/features/page/pages/transactions.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;


    initializeDynamicContent()
};


window.onpopstate = handleLocation;
window.route = route;

handleLocation();