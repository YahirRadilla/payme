import { Card } from '../../shared/components/card.js';
import { HandleApi } from '../../shared/utils/api.js'
import { monitorUserSession } from '../../shared/utils/helpers/verify-token.js'
import '../../shared/components/card.css'

export const getUser = async () => {

    const path = window.location.pathname;


    await monitorUserSession()
    const params = new URLSearchParams(window.location.search);
    const user = atob(params.get('user'));
    console.log(user)

    Card()

}