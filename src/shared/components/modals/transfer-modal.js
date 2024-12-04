import './transfer-modal.css'

export const TransferModal = () => {
    const transferModal = document.getElementById('modal-container');

    transferModal.innerHTML = `
    <div class="modal micromodal-slide modal-none" id="modal-1" aria-hidden="true">
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
            <header class="modal__header">
                <h2 class="modal__title">
                    Micromodal
                </h2>
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <div class="modal-content-content">
                <div class="modal__content">
                    Modal content
                </div>
                <footer class="modal__footer">
                    <button class="modal__btn" data-micromodal-close
                        aria-label="Close this dialog window">Close</button>
                </footer>
            </div>
        </div>
    </div>
</div>
    `;
};
