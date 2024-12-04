import './modal.css'
import { transferContent } from './transfer-content'
import { withdrawalContent } from './withdrawal-content'
import { serviceContent } from './service-content'
import { depositContent } from './deposit-content'
import { Notyf } from 'notyf'
import { HandleApi } from '../../utils/api'


const notyf = new Notyf({
    position: {
        x: 'right',
        y: 'top',
    },
    dismissible: true,


});

const depositFormEventListener = async ({ user }) => {
    const depositForm = document.getElementById('deposit-form')
    depositForm.addEventListener('submit', async e => {
        e.preventDefault()

        const depositData = Object.fromEntries(
            new FormData(e.target)
        )



        if (depositData.depositSourceCard === depositData.depositDestinationCard) {
            notyf.error('You can not deposit to the same card')
            return
        }

        const { data } = await HandleApi.postDeposit({ id: user[0].id, sourceCard: depositData.depositSourceCard, destinationCard: depositData.depositDestinationCard, amount: depositData.amount })
        console.log(data)

        if (data.status === 200) {
            notyf.success('The deposit has been a success')
            setTimeout(() => {
                location.reload()
            }, 500);

            return
        }

    })
}

const transferFormEventListener = async ({ user }) => {
    const transferForm = document.getElementById('transfer-form')
    transferForm.addEventListener('submit', async e => {
        e.preventDefault()

        const transferData = Object.fromEntries(
            new FormData(e.target)
        )

        const { data } = await HandleApi.postTransfer({ id: user[0].id, recipientEmail: transferData.email, sourceCard: transferData.transfer_card_select, amount: transferData.amount, message: transferData.message })
        console.log(data)

        if (data.status === 200) {
            notyf.success('The transfer has been a success')
            setTimeout(() => {
                location.reload()
            }, 500);

            return
        }

    })
}



export const Modal = async ({ type, cards, user }) => {



    const modal = document.getElementById('modal-content')

    switch (type) {
        case 'transfer':
            modal.innerHTML = `${transferContent({ cards })}`
            await transferFormEventListener({ user })
            break;
        case 'payment':
            modal.innerHTML = `${serviceContent({ cards })}`
            break;
        case 'deposit':
            modal.innerHTML = `${depositContent({ cards })}`
            await depositFormEventListener({ user })
            break;
        case 'withdrawal':
            modal.innerHTML = `${withdrawalContent({ cards })}`
            break;
    }


};
