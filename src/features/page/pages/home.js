import '../../../shared/components/card.css'
import './home.css'
import { Card } from '../../../shared/components/card.js';
import { Title } from '../../../shared/components/title.js';
import { HandleApi } from '../../../shared/utils/api.js'
import { monitorUserSession } from '../../../shared/utils/helpers/verify-token.js'

export const getHome = async () => {

    const path = window.location.pathname;

    Card()
    Title('Yahir')

    await monitorUserSession()
    const encodedId = localStorage.getItem('userId');
    const userId = atob(encodedId);


    //const si = await HandleApi.getTransactions({ id: userId })

    //console.log(si)

/*     Card()
    Title('Yahir')
 */
}