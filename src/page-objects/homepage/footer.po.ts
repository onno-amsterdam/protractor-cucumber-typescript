import { $, ElementFinder } from 'protractor';

export class Footer {
    public readonly headerTitle: ElementFinder = this.rootElement.$('p');
            
    constructor(public readonly rootElement = $('.footerContainer')) {}
}