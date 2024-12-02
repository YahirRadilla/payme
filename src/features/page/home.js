import { HandleApi } from '../../shared/utils/api/api.js'


export const getUser = async () => {

    const path = window.location.pathname;
    if (path === '/') {
        const verifyToken = await HandleApi.verifyToken()

        if (verifyToken.status !== 200) {
            window.location.reload()
            window.location.href = '/login'
        }
        const params = new URLSearchParams(window.location.search);
        const user = atob(params.get('user'));
        console.log(user)
    }
}