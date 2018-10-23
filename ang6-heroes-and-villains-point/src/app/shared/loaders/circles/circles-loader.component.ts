import { Component, Input } from '@angular/core';

@Component({
    selector: 'circles-loader',
    templateUrl: './circles-loader.component.html',
    styleUrls: ['./circles-loader.component.scss'],
    host: {
        '[class.primary]': 'color === "primary"',
        '[class.accent]': 'color === "accent"',
        '[class.warn]': 'color === "warn"'
    }
})

export class CirclesLoaderComponent {

    @Input() label: string;
    @Input() color: 'primary' | 'accent' | 'warn' | null;

}
