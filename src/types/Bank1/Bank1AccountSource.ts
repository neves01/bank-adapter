import { Bank1Transaction } from './Bank1Transaction';

export class Bank1AccountSource {
    public getAccountBalance(accountId: number): number {
        return 215.5;
    }

    public getAccountCurrency(accountId: number): string {
        return "USD";
    }

    public getTransactions(accountId: number, fromDate: Date, toDate: Date): Array<Bank1Transaction> {
        return new Array(
            new Bank1Transaction(100, Bank1Transaction.TYPE_CREDIT, "Check deposit"),
            new Bank1Transaction(25.5, Bank1Transaction.TYPE_DEBIT, "Debit card purchase"),
            new Bank1Transaction(100, Bank1Transaction.TYPE_DEBIT, "Rent payment")
        );
    }
}