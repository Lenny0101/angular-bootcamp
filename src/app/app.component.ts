import {Component, OnInit} from '@angular/core';
import {User} from './shared/DTO/user.model';
import {UserService} from './shared/services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'bc-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'angular-bootcamp';
    user: User;
    loaderState: boolean;
    subscription = {};
    constructor(private userService: UserService,
                private router: Router,
                // private modalService: ModalService,
                // private
                ) {}

    ngOnInit(): void {
        // this.getLoaderState();
        this.getUser();
        // this.subscribeRouterEvents();
    }

    private getUser(): void {
        this.userService.user.subscribe(
            (response) => {
                this.user = response;
            },
            (error) => {
                this.router.navigate(['auth/login']);
            }
        );
    }

}
