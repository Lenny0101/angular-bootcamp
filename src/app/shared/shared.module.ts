import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {AddPostComponent} from './components/add-post/add-post.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
    ],
    exports: [HeaderComponent, AddPostComponent],
    declarations: [HeaderComponent, AddPostComponent],
    entryComponents: [AddPostComponent]
})
export class SharedModule {
}
