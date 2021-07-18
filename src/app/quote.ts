export class Quote {
    showQuotes: boolean;
    constructor(public author: string, public image: string, public theirQuotes: string, public name: string) {
        this.showQuotes = false;
    }
}
