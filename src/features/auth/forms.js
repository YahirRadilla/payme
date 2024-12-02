import { Notyf } from 'notyf'
import 'notyf/notyf.min.css';
import { HandleApi } from '../../shared/utils/api/api'


const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    dismissible: true,


});

export const getForm = async () => {
    const path = window.location.pathname;
    if (path === '/register' || path === '/login') {
        const verifyToken = await HandleApi.verifyToken()
        console.log(verifyToken)
        if (verifyToken.status === 200) {
            window.location.href = '/'
        }

        const form = document.getElementById('form')
        form.addEventListener('submit', async e => {
            e.preventDefault()

            const data = Object.fromEntries(
                new FormData(e.target)
            )
            console.log(data.email)
            if (path === '/register') {
                if (data.phone.length !== 10) {
                    notyf.error('Must be 10 numbers');
                    return;
                }
                if (data.password !== data.confirmPassword) {
                    notyf.error('Passwords doesn´t match');
                    return;
                }

                notyf.success('You have successfully registered')
                window.location.href = '/login'
                return;
            }

            const login = await HandleApi.login({ email: data.email, password: data.password })
            console.log(login)
            if (login.status === 200) {
                notyf.success(login.message)
                const verifyToken = await HandleApi.verifyToken()
                if (verifyToken.status === 200) {
                    const encodedId = btoa(login.data.id)
                    window.location.href = `/?user=${encodeURIComponent(encodedId)}`
                }
                return
            }
            if (login.status === 401) {
                console.log(login.data)
                notyf.error(login.message)
            }





            console.log(JSON.stringify(data))

        })

    }
}



