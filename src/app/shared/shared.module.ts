import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent]
})
export class SharedModule {
}
