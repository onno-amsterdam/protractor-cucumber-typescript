import { $, ElementArrayFinder, ElementFinder } from 'protractor';

export class MenuLeft {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
    public readonly table: ElementFinder = this.rootElement.$('table');
    public readonly menuItems: ElementArrayFinder = this.table.$$('td');
            
    constructor(public readonly rootElement = $('.menuLeftContainer')) {}

    public async getAllMenuItems(): Promise<ElementFinder[]> {
        return this.menuItems;
    }
}