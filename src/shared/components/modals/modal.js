import './modal.css'
import { transferContent } from './transfer-content'
import { withdrawalContent } from './withdrawal-content'
import { serviceContent } from './service-content'
import { depositContent } from './deposit-content'





export const Modal = () => {



    const Modal = document.getElementById('modal-container');

    Modal.innerHTML = `
    <div class="modal micromodal-slide modal-none" id="modal-1" aria-hidden="true">
        <div class="modal__overlay" tabindex="-1" data-micromodal-close>
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                ${transferContent()}
            </div>
        </div>
    </div>
    `;
};
