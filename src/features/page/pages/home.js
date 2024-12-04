import '../../../shared/components/card.css'
import './home.css'
import { Card } from '../../../shared/components/card.js';
import { formatToCardExpiration, formatToYearMonthDay } from '../../../shared/utils/helpers/format-date.js';
import { formatCardNumber } from '../../../shared/utils/helpers/format-card-number.js'
import { EmptyCard } from '../../../shared/components/empty-card.js';
import { Title } from '../../../shared/components/title.js';
import { HandleApi } from '../../../shared/utils/api.js'
import { monitorUserSession } from '../../../shared/utils/helpers/verify-token.js'
import { AddCardServices } from '../../../shared/components/card-services.js';
import { AddTransactionPreview } from '../../../shared/components/transactions-preview.js';
import { TransferModal } from '../../../shared/components/modals/transfer-modal.js'




export const getHome = async () => {
    TransferModal()

    document.addEventListener("click", (event) => {
        const modal = document.getElementById('modal-1')
        if (event.target.classList.contains('modal__btn')) {
            modal.classList.add('modal-none')
            modal.classList.remove('micromodal-slide.is-open')
            console.log('first')
        }

        if (event.target.classList.contains('transfer-item')) {
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
            console.log('first')
        }

        if (event.target.classList.contains('payment-item')) {
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
            console.log('first')
        }

        if (event.target.classList.contains('deposit-item')) {
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
            console.log('first')
        }

        if (event.target.classList.contains('withdrawal-item')) {
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
            console.log('first')
        }

    });





    const path = window.location.pathname;
    await monitorUserSession()
    const encodedId = localStorage.getItem('userId');
    const userId = atob(encodedId);

    const { data: transactions } = await HandleApi.getTransactions({ id: userId })
    const { data: cards } = await HandleApi.getCards({ id: userId })
    const { data: user } = await HandleApi.getUser({ id: userId })





    Title('Yahir')
    AddCardServices()


    let countCard = 0;
    cards.forEach(element => {
        if (countCard < 2) {
            Card({
                cardNumber: formatCardNumber(element.card_number),
                expiredDate: formatToCardExpiration(element.expiration_date),
                cvv: element.cvv,
                balance: element.balance,
                cardName: user[0].first_name
            })
            countCard++
        }
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