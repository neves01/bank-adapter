import { Bank2AccountBalance } from "./Bank2AccountBalance";
import { Bank2AccountTransaction } from "./Bank2AccountTransaction";

export class Bank2AccountSource {

    public getAccountBalance(accountId: number): Bank2AccountBalance {
        return new Bank2AccountBalance(512.5, "USD");
    }

    public getTransactions(accountId: number, fromDate: Date, toDate: Date): Array<Bank2AccountTransaction> {
        return new Array(
            new Bank2AccountTransaction(100, Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT, "Amazon.com"),
            new Bank2AccountTransaction(25.5, Bank2AccountTransaction.TRANSACTION_TYPES.DEBIT, "Car insurance"),
            new Bank2AccountTransaction(100, Bank2AccountTransaction.TRANSACTION_TYPES.CREDIT, "Salary")
        );
    }
}