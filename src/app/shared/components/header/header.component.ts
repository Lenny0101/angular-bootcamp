import {Component, Input} from '@angular/core';
import {User} from '../../DTO/user.model';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'bc-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Input() user: User;

    constructor(private userService: UserService) {
    }

    logout() {
        this.userService.logout();
    }
}
