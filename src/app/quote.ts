export class Quote {
    showQuotes: boolean;
    constructor(public author: string, public theirQuotes: string) {
        this.showQuotes = false;
    }
}
