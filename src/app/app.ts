import {Widget, xproperty} from "@xcons/widget";

@Widget({
    widgetName: 'XCON App Widget',
    widgetDescription: 'A TypeScript widget for XCON platform',
    widgetVersion: '1.0.0',
    selector: 'simple-counter',
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    initMode: "auto",
    encapsulation: 'component'
})
export default class App {
    @xproperty()
    count: number = 0;

    increment(): void {
        this.count++;
    }

    decrement(): void {
        this.count--;
    }
}