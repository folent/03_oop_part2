import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
    pages: Pages;
    author: string;
    artist: string;
    title: string;

    constructor(title: string, artist: string, author: string, pages: Pages) {
        super();
        this.pages = pages;
        this.author = author;
        this.title = title;
        this.artist = artist;
    }

    getPages(): Pages {
        return this.pages;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages?.pages.length}`;
    }
}