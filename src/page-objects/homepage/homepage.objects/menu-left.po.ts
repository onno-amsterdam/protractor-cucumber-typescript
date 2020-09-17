import { $, ElementFinder } from 'protractor';

export class MenuLeft {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
            
    constructor(public readonly rootElement = $('.menuLeftContainer')) {}
}