import { Notyf } from 'notyf'
import 'notyf/notyf.min.css';
import { getLogged } from './login';
import { getRegistered } from './register';
import { HandleApi } from '../../shared/utils/api'


const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    dismissible: true,


});
const path = window.location.pathname;

const validateForm = (data) => {


    if (path === '/register') {
        console.log(data.data)
        if (data.data.phone.length !== 10) {
            notyf.error('Must be 10 numbers');
            return false
        }
        if (data.data.password !== data.data.confirmPassword) {
            notyf.error('Passwords doesn´t match');
            return false
        }


        return true
    }
    return true
}


const isLogged = async () => {
    const verifyToken = await HandleApi.verifyToken()

    console.log(verifyToken)
    if (verifyToken.status === 200) {
        window.location.href = '/'
    }
}

export const getAuth = async () => {

    await isLogged()


    const form = document.getElementById('form')
    form.addEventListener('submit', async e => {
        e.preventDefault()

        const data = Object.fromEntries(
            new FormData(e.target)
        )

        const isValid = validateForm({ data })
        console.log(isValid)
        if (!isValid) return

        if (path === '/login') await getLogged(data)

        if (path === '/register') await getRegistered(data)

    })


}



