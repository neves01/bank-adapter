enum TRANSACTION_TYPES {
    DEBIT,
    CREDIT,
}

export class Transaction {
    static TRANSACTION_TYPES = TRANSACTION_TYPES;

    private amount: number;
    private type: TRANSACTION_TYPES;
    private text: string;

    constructor(amount: number, text: string, type: TRANSACTION_TYPES) {
        this.amount = amount;
        this.text = text;
        this.type = type;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getType(): TRANSACTION_TYPES {
        return this.type;
    }

    public getText(): string {
        return this.text;
    }

}