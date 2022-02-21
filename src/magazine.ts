import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
    pages: Pages;
    title: string;

    constructor(title: string, pages: Pages) {
        super();
        this.pages = pages;
        this.title = title;
    }

    getPages(): Pages {
        return this.pages;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages?.pages.length}`;
    }
}