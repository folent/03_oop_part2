export class Page {
    pageNumber: number;
    pageType: string; // should be type
    pageMaterial: string;// should be type

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial;
    }

    toString() {
        return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
    }
}