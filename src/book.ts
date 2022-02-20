import { Item } from './item';
import { Pages } from './pages';
import { Page } from './page';

export class Book extends Item {

    constructor(title: string, author: string, pages: Pages) {
        super(title, author, pages);
        this.pages = pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages?.pages.length}`;
    }
}