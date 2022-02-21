import { Page } from './page';

export function PagesIterable(pages: Page[] = [], prefix?: string) {
    let index = -1;

    return {
        next: () => {
            const page = pages[++index];
            const toString = () => `${prefix}, ${page.toString()}`;
            return ({ value: {...page, toString}, done: !(index in pages) });
        }
    }
}