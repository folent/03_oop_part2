import { Page } from './page';
import { PagesIterable } from './PagesIterable';
//'Comics: Spider-Man by Stan Lee, the artist is , number of pages: 1, here is page with images # and it's material is glossy paper'
//'Magazine: G.Q with number of pages: 2, here is page with article #1 and it's material is glossy paper'
export class Pages {
    pages: Page[]
    constructor(pages: Page[]) {
        this.pages = pages;
    }

    [Symbol.iterator](prefix: string) {
        return PagesIterable(this.pages, prefix);
    }
    /*next() {
        pages
    }*/
    // here you had to fill the class with methods that help to iterate through the array.
    // you had to provide iterator ander the key [Symbol.iterator]
}