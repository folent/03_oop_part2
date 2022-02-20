import { Page } from './page';
import { Pages } from './pages';

export abstract class Item extends Page {
    pages: Pages | undefined;
    title: string;
    author: string | undefined;
    artist: string | undefined;
    constructor(title: string, author?: string | Pages);
    constructor(title: string, author: string, pages?: Pages);
    constructor(title: string, artist: string, author: string | Pages, pages?: Pages | string)
    constructor(title: string, artist?: string, author?: string | Pages, pages?: Pages | string) {
        super(5, '', '');

        this.title = title;
        if(pages instanceof Pages) {
            this.pages = pages;
        }

        if(typeof pages === 'string') {
            this.author = pages;
        }

        if(author instanceof Pages) {
            this.pages = author;
        }

        if(typeof author === 'string') {
            this.author = author;
        }
        if(artist) {
            this.artist = artist;
        }
    }
    get Title(): string {
        return this.title;
    }
    set Title(input: string) {
        this.title = input;
    }

    get Author(): string {
        return this.title;
    }
    set Author(input: string) {
        this.title = input;
    }

    get Artist(): string {
        return this.title;
    }
    set Artist(input: string) {
        this.title = input;
    }

    [Symbol.iterator]() {
        let index = -1;
        let data = this.pages?.pages ?? [];

        return {
            next: () => ({ value: data[++index], done: !(index in data) })
        }
    }
    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages?.pages.length}`;
    };
}