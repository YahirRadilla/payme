import '../../../shared/components/card.css'
import { Card } from '../../../shared/components/card.js';
import { AddCardForm } from '../../../shared/components/card-form.js';
import { AddCardServices } from '../../../shared/components/card-services.js';
import { EmptyCard } from '../../../shared/components/empty-card.js';
import { HandleApi } from '../../../shared/utils/api.js'
import { monitorUserSession } from '../../../shared/utils/helpers/verify-token.js'
import { formatToCardExpiration, formatToYearMonthDay } from '../../../shared/utils/helpers/format-date.js';
import { formatCardNumber } from '../../../shared/utils/helpers/format-card-number.js'
import { modalListener } from '../../../shared/utils/modal-listener.js';
import { notyf } from '../../../shared/components/toast.js';



const cardFormEventListener = async ({ user }) => {
    const cardForm = document.getElementById('card-form')
    cardForm.addEventListener('submit', async e => {
        e.preventDefault()

        const cardData = Object.fromEntries(
            new FormData(e.target)
        )


        if (cardData.cvv.length !== 3) {
            notyf.error('cvv must be 3 numbers')
            return
        }

        if (cardData.card_number.length !== 16) {
            notyf.error('the number of the card must be 16 numbers')
            return
        }



        const { data } = await HandleApi.postCard({ id: user[0].id, cardNumber: cardData.card_number, expirationDate: cardData.expiry_date, cvv: cardData.cvv, balance: cardData.balance })


        if (data.status === 200) {
            notyf.success('The card has been created')
            setTimeout(() => {
                location.reload()
            }, 500);

            return
        }

    })
}

export const getCards = async () => {

    await monitorUserSession()
    const encodedId = localStorage.getItem('userId');
    const userId = atob(encodedId);
    const { data: user } = await HandleApi.getUser({ id: userId })
    const { data: cards } = await HandleApi.getCards({ id: userId })

    await modalListener({ cards, user })

    console.log(cards)

    let countCard = 0;
    cards.forEach(element => {
        if (countCard < 3) {
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
    if (cards.length === 2) {
        EmptyCard()
    } else if (cards.length === 1) {
        EmptyCard()
        EmptyCard()
    }


    AddCardForm()
    AddCardServices()
    cardFormEventListener({ user })




};  