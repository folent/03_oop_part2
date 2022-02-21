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
        return `Comics: Spider-Man by Stan Lee, the artist is , number of pages: ${this.pageNumber}, here is page with images # and it\'s material is ${this.pageMaterial}`;
    }
}