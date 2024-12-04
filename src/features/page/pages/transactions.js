import '../../../shared/components/transactions-stats.css'
import '../../../shared/components/transactions-table.css'
import '../../../shared/components/transactions-filter.css'
import './transactions.css'
import { AddStatsCard } from '../../../shared/components/transactions-stats.js'
import { monitorUserSession } from '../../../shared/utils/helpers/verify-token.js'
import { AddTransactions } from '../../../shared/components/transactions-table.js';
import { AddFilters } from '../../../shared/components/transactions-filter.js';
import { HandleApi } from '../../../shared/utils/api.js'

export const getTransactions = async () => {

    await monitorUserSession()
    const encodedId = localStorage.getItem('userId');
    const userId = atob(encodedId);
    const { data: totalTransfers } = await HandleApi.getTotalTransfers({ id: userId })
    const { data: totalIncomes } = await HandleApi.getTotalIncomes({ id: userId })
    const { data: totalWithdrawal } = await HandleApi.getTotalWithdrawal({ id: userId })
    const { data: transactions } = await HandleApi.getTransactions({ id: userId })
    console.log(transactions)

    AddStatsCard({ totalTransfers: totalTransfers.totalTransfers, totalIncomes: totalIncomes.totalIncomes, totalWithdrawal: totalWithdrawal.totalWithdrawal });
    AddTransactions({ transactions });
    AddFilters();

};