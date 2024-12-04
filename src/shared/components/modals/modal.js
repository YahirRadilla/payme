import './modal.css'
import { transferContent } from './transfer-content'
import { withdrawalContent } from './withdrawal-content'
import { serviceContent } from './service-content'
import { depositContent } from './deposit-content'





export const Modal = ({ type }) => {

    const modal = document.getElementById('modal-content')

    switch (type) {
        case 'transfer':
            modal.innerHTML = `${transferContent()}`
            break;
        case 'payment':
            modal.innerHTML = `${serviceContent()}`
            break;
        case 'deposit':
            modal.innerHTML = `${depositContent()}`
            break;
        case 'withdrawal':
            modal.innerHTML = `${withdrawalContent()}`
            break;
    }


};
