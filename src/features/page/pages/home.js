import '../../../shared/components/card.css'
import './home.css'
import { Card } from '../../../shared/components/card.js';
import { EmptyCard } from '../../../shared/components/empty-card.js';
import { Title } from '../../../shared/components/title.js';
import { HandleApi } from '../../../shared/utils/api.js'
import { monitorUserSession } from '../../../shared/utils/helpers/verify-token.js'
import { AddCardServices } from '../../../shared/components/card-services.js';
import { AddTransactionPreview } from '../../../shared/components/transactions-preview.js';


export const getHome = async () => {

    const path = window.location.pathname;
    await monitorUserSession()
    const encodedId = localStorage.getItem('userId');
    const userId = atob(encodedId);

    const { data } = await HandleApi.getTransactions({ id: userId })


    Card()
    EmptyCard()
    Title('Yahir')
    AddCardServices()

    data.forEach(element => {
        console.log(element)
        AddTransactionPreview({
            description: element.message,
            date: element.created_at,
            type: element.type,
            amount: element.amount
        })
    });


}