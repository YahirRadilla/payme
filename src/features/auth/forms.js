import { Notyf } from 'notyf'
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    dismissible: true,


});

export const getForm = () => {
    const path = window.location.pathname;
    if (path === '/register' || path === '/login') {
        const form = document.getElementById('form')
        form.addEventListener('submit', e => {
            e.preventDefault()
            const data = Object.fromEntries(
                new FormData(e.target)
            )
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


            notyf.success('You have successfully logged in')
            window.location.href = '/'
            console.log(JSON.stringify(data))

        })

    }
}



