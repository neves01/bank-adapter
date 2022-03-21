
import { BankController } from "../src/controller/BankController";
import { Transaction } from "../src/types/Bank/Transaction";

describe('BankController', () => {
    let bc: BankController;

    it('balance', () => {

        bc = new BankController();

        let returnOfPrintBalances: string = bc.printBalances(0, 0);

        expect(returnOfPrintBalances).toEqual('Bank1 Balance 215.5\n Bank2 Balance 512.5');

        let allTransactions: Array<Transaction> = bc.printTransactions(0, 0, new Date(), new Date());

        expect(allTransactions.length).toEqual(6);
    });

    it('transaction', () => {

        let allTransactions: Array<Transaction> = bc.printTransactions(0, 0, new Date(), new Date());

        expect(allTransactions.length).toEqual(6);
    });


});