import '../../../shared/components/card.css'
import { Card } from '../../../shared/components/card.js';
import { AddCardForm } from '../../../shared/components/card-form.js';
import { AddCardServices } from '../../../shared/components/card-services.js';

export const getCards = () => {

    Card(1234123412341234, '12/23', 123, 'John Doe', 1000);
    AddCardForm(1, '12/23', 123, 'John Doe', 1000);
    AddCardServices(1, '12/23', 123, 'John Doe', 1000);

};