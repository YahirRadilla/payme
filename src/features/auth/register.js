import { notyf } from '../../shared/components/toast.js'
import 'notyf/notyf.min.css';
import { HandleApi } from '../../shared/utils/api'


export async function getRegistered(data) {
    const register = await HandleApi.register({ firstName: data.firstName, firtsLastname: data.lastName, email: data.email, phone: data.phone, password: data.password })
    if (register.success) {
        notyf.success(register.message)
        window.location.href = `/login`
        return
    }
    notyf.error(register.message)

}