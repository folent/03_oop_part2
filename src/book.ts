import { Item } from './item';
import { Pages } from './pages';

export class Book extends Item {
    pages: Pages;
    author: string;
    title: string;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.pages = pages;
        this.author = author;
        this.title = title;
    }

    getPages(): Pages {
        return this.pages;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages?.pages.length}`;
    }
}