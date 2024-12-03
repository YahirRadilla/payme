import '../../../shared/components/transactions-stats.css'
import '../../../shared/components/transactions-table.css'
import '../../../shared/components/transactions-filter.css'
import { AddStatsCard } from '../../../shared/components/transactions-stats.js'
import { AddTransactions } from '../../../shared/components/transactions-table.js';
import { AddFilters } from '../../../shared/components/transactions-filter.js';

export const getTransactions = () => {

    AddStatsCard();
    AddTransactions();
    AddFilters();

};