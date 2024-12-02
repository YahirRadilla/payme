import { Notyf } from 'notyf'
import 'notyf/notyf.min.css';
import { HandleApi } from '../../shared/utils/api'

const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    dismissible: true,


});

export async function getLogged(data) {
    const login = await HandleApi.login({ email: data.email, password: data.password })
    console.log(login)
    if (login.status === 200) {
        notyf.success(login.message)
        const verifyToken = await HandleApi.verifyToken()
        if (verifyToken.status === 200) {
            console.log(login.data)
            const encodedId = btoa(login.data.id)
            window.location.href = `/?user=${encodeURIComponent(encodedId)}`
        }
        return
    }
    if (login.status === 404) {
        console.log(login.data)
        notyf.error(login.message)
    }
}
