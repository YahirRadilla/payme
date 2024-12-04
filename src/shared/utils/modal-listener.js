export const modalListener = () => {

    document.addEventListener("click", (event) => {
        const modal = document.getElementById('modal-1')
        const classList = event.target.classList
        if (classList.contains('modal__btn') || classList.contains('modal__close')) {
            modal.classList.add('modal-none')
            modal.classList.remove('micromodal-slide.is-open')
        }


        if (classList.contains('transfer-item')) {
            modal.classList.add('micromodal-slide.is-open', 'transfer')
            modal.classList.remove('modal-none')
        }

        if (classList.contains('payment-item')) {
            modal.classList.add('micromodal-slide.is-open', 'payment')
            modal.classList.remove('modal-none')
        }

        if (classList.contains('deposit-item')) {
            modal.classList.add('micromodal-slide.is-open', 'deposit')
            modal.classList.remove('modal-none')
        }

        if (classList.contains('withdrawal-item')) {
            modal.classList.add('micromodal-slide.is-open', 'withdrawal')
            modal.classList.remove('modal-none')
        }

    })
}