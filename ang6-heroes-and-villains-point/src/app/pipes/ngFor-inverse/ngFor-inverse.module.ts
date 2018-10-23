import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './ngFor-inverse.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ReversePipe
    ],
    exports: [
        ReversePipe
    ],
    providers: [],
})
export class ReverseModule {}
