import { Modal } from "../components/modals/modal"

export const modalListener = () => {

    document.addEventListener("click", (event) => {
        const modal = document.getElementById('modal-1')
        const classList = event.target.classList
        if (classList.contains('modal__btn') || classList.contains('modal__close')) {
            modal.classList.add('modal-none')
            modal.classList.remove('micromodal-slide.is-open')
        }


        if (classList.contains('transfer-item')) {
            Modal({ type: classList[0] })
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
        }

        if (classList.contains('payment-item')) {
            Modal({ type: classList[0] })
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
        }

        if (classList.contains('deposit-item')) {
            Modal({ type: classList[0] })
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
        }

        if (classList.contains('withdrawal-item')) {
            Modal({ type: classList[0] })
            modal.classList.add('micromodal-slide.is-open')
            modal.classList.remove('modal-none')
        }

    })
}