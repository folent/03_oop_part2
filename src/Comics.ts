import { Item } from './item';
import { Pages } from './pages';

export class Comics extends Item {
    constructor(title: string,artist: string, author: string, pages: Pages) {
        super(title,artist, author, pages);
    }
}