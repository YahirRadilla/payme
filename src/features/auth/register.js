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

export async function getRegistered(data) {
    const register = await HandleApi.register({ firstName: data.firstName, firtsLastname: data.lastName, email: data.email, phone: data.phone, password: data.password })
    if (register.status === 201) {
        notyf.success(register.message)
        window.location.href = `/login`
    }
    if (register.status === 409) {
        notyf.error(register.message)
    }
}