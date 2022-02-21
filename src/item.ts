import { Page } from './page';
import { Pages } from './pages';


// this class shouldn't contain all fields and all constructors. according to hometask - i'ts children should implement that stuff.
// we shouldn't have here even pages, just iterator.
export abstract class Item  {

    abstract getPages(): Pages;

    [Symbol.iterator]() {
        return this.getPages()[Symbol.iterator]();
    }

    abstract toString(): string;

}