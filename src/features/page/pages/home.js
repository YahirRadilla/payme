import '../../../shared/components/card.css'
import './home.css'
import { Card } from '../../../shared/components/card.js';
import { Title } from '../../../shared/components/title.js';
import { HandleApi } from '../../../shared/utils/api.js'
import { monitorUserSession } from '../../../shared/utils/helpers/verify-token.js'

export const getHome = async () => {

    const path = window.location.pathname;



    await monitorUserSession()
    const encodedId = localStorage.getItem('userId');
    const userId = atob(encodedId);


    console.log(userId)

    Card()
    Title('Yahir')

}