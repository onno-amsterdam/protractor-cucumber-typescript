import { Header, MenuLeft, MenuRight, AreaCenter, Footer } from "./homepage";

export class HomePage {
    public readonly header = new Header();
    public readonly menuLeft = new MenuLeft();  
    public readonly menuRight = new MenuRight();
    public readonly areaCenter = new AreaCenter();
    public readonly footer = new Footer(); 
}

