import { Item } from './item';
import { Pages } from './pages';

export class Magazine extends Item {
    constructor(title: string, pages: Pages) {
        super(title, pages);
    }
}