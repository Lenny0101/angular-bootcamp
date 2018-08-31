import {Component, Input} from '@angular/core';
import {User} from '../../DTO/user.model';
import {UserService} from '../../services/user.service';
import {MatDialog} from "@angular/material";
import {AddPostComponent} from "../add-post/add-post.component";

@Component({
    selector: 'bc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() user: User;

    constructor(private userService: UserService,
                private dialog: MatDialog) {
    }

    logout() {
        this.userService.logout();
    }

    createPost() {
        this.dialog.open(AddPostComponent);
    }
}
