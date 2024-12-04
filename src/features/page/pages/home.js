import '../../../shared/components/card.css'
import './home.css'
import { Card } from '../../../shared/components/card.js';
import { formatToCardExpiration, formatToYearMonthDay } from '../../../shared/utils/helpers/format-date.js';
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

    const { data: transactions } = await HandleApi.getTransactions({ id: userId })
    const { data: cards } = await HandleApi.getCards({ id: userId })
    const { data: user } = await HandleApi.getUser({ id: userId })



    Title('Yahir')
    AddCardServices()


    console.log(user)
    cards.forEach(element => {
        Card({
            cardNumber: element.card_number,
            expiredDate: formatToCardExpiration(element.expiration_date),
            cvv: element.cvv,
            balance: element.balance,
            cardName: user[0].first_name
        })
    });
    if (cards.length === 1) {
        EmptyCard()
    }


    transactions.forEach(element => {
        const description = element.message.length === 0 ? element.type : element.message
        console.log(description)
        AddTransactionPreview({
            description: description,
            date: formatToYearMonthDay(element.created_at),
            type: element.type,
            amount: element.amount
        })
    });


}