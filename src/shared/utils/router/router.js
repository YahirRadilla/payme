
import '../../../../style.css'
import '../../../shared/components/404.css'
import '../../../features/page/pages/user-settings.css'
import { getAuth } from '../../../features/auth/getAuth.js'
import { getUser } from '../../../features/page/pages/home.js'
import { HandleApi } from '../api.js'
import { createHeader } from '../../components/header.js'
import { UserSettings } from '../../../features/page/pages/user-settings.js'


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
    "/user-settings": "/src/features/page/pages/user-settings.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    try {
        const response = await fetch(route);
        if (!response.ok) throw new Error("Failed to load page");
        const html = await response.text();
        document.getElementById("main-page").innerHTML = html;
        document.title = path.slice(1) || 'Home'

        switch (path) {
            case '/':
                createHeader()
                getUser();
                break
            case '/transactions':
                createHeader()
                getUser();
                break
            case '/register':
                getAuth();
                break
            case '/login':
                getAuth()
                break
            case '/user-settings':
                createHeader()
                UserSettings()
                getUser()
                break
        }



    } catch (error) {
        console.error("Error loading route:", error);
        document.getElementById("main-page").innerHTML = "<h1>Error loading page</h1>";
    }
};


window.onpopstate = handleLocation;
window.route = route;

handleLocation();