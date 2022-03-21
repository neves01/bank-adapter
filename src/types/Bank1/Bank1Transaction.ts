export class Bank1Transaction {

    static TYPE_CREDIT: number = 1;
    static TYPE_DEBIT: number = 2;

    private amount: number;
    private type: number;
    private text: string;

    constructor(amount: number, type: number, text: string) {
        this.amount = amount;
        this.type = type;
        this.text = text;
    }

    public getAmount(): number {
        return this.amount;
    }

    public getType(): number {
        return this.type;
    }

    public getText(): string {
        return this.text;
    }

}