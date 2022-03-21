
import { BankAdapter } from "../types/Bank/BankAdapter";
import { Transaction } from "../types/Bank/Transaction";
import { Bank1AccountSource } from "../types/Bank1/Bank1AccountSource";
import { Bank2AccountSource } from "../types/Bank2/Bank2AccountSource";

export class BankController {
    private bank1: BankAdapter;
    private bank2: BankAdapter;

    constructor() {
        this.bank1 = new BankAdapter(new Bank1AccountSource());
        this.bank2 = new BankAdapter(new Bank2AccountSource());
    }

    public printBalances(accountIdBank1: number, accountIdBank2: number): string {
        let output: string = 'Bank1 Balance ' + this.bank1.getBalance(accountIdBank1);
        output += '\n' + ' Bank2 Balance ' + this.bank2.getBalance(accountIdBank2);
        console.log(output)
        return output;
    }

    public printTransactions(accountIdBank1: number, accountIdBank2: number, startDate: Date, endDate: Date): Array<Transaction> {
        let allTransactions: Array<Transaction> = [];
        this.bank1.getTransactions(accountIdBank1, startDate, endDate).map((t) => {
            console.log('Type: ' + (t.getType() == 0 ? 'DEBIT' : 'CREDIT') + ' Text: ' + t.getText() + ' Amount: ' + t.getAmount());
            allTransactions.push(t);
        });

        this.bank2.getTransactions(accountIdBank2, startDate, endDate).map((t) => {
            console.log('Type: ' + (t.getType() == 0 ? 'DEBIT' : 'CREDIT') + ' Text: ' + t.getText() + ' Amount: ' + t.getAmount());
            allTransactions.push(t);
        });

        return allTransactions;
    }
}