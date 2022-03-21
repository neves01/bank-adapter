import { Bank1AccountSource } from '../Bank1/Bank1AccountSource';
import { Transaction } from './Transaction';
import { Bank1Transaction } from '../Bank1/Bank1Transaction';
import { Bank2AccountSource } from '../Bank2/Bank2AccountSource';
import { Bank2AccountTransaction } from '../Bank2/Bank2AccountTransaction';

export class BankAdapter {

    homeBank: Bank1AccountSource | Bank2AccountSource;

    constructor(homeBank: Bank1AccountSource | Bank2AccountSource) {
        this.homeBank = homeBank;
    }

    getBalance(accountID: number): number {
        if (this.homeBank instanceof Bank1AccountSource)
            return this.homeBank.getAccountBalance(accountID);

        return this.homeBank.getAccountBalance(accountID).getBalance();
    }

    getCurrency(accountID: number): string {
        if (this.homeBank instanceof Bank1AccountSource)
            return this.homeBank.getAccountCurrency(accountID);

        return this.homeBank.getAccountBalance(accountID).getCurrency();

    }

    getTransactions(accountID: number, startDate: Date, endDate: Date): Array<Transaction> {
        let transactions: Array<Transaction> = [];

        if (this.homeBank instanceof Bank1AccountSource) {

            this.homeBank.getTransactions(accountID, startDate, endDate).map((t => {
                if (t.getType() === Bank1Transaction.TYPE_DEBIT)
                    transactions.push(new Transaction(t.getAmount(), t.getText(), Transaction.TRANSACTION_TYPES.DEBIT));
                else if (t.getType() === Bank1Transaction.TYPE_CREDIT)
                    transactions.push(new Transaction(t.getAmount(), t.getText(), Transaction.TRANSACTION_TYPES.CREDIT));
            }));

        } else if (this.homeBank instanceof Bank2AccountSource) {
            this.homeBank.getTransactions(accountID, startDate, endDate).map((t => {
                if (t.getType() === Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT)
                    transactions.push(new Transaction(t.getAmount(), t.getText(), Transaction.TRANSACTION_TYPES.DEBIT));
                else if (t.getType() === Bank2AccountTransaction.TRANSACTION_TYPES.CREDIT)
                    transactions.push(new Transaction(t.getAmount(), t.getText(), Transaction.TRANSACTION_TYPES.CREDIT));
            }));
        }

        return transactions;
    }

}