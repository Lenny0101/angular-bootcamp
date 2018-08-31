import {Component, OnInit} from '@angular/core';
import {FeedService} from "../../shared/services/feed.service";
import {FeedItem} from "../../shared/DTO/feedItem.model";
import {NavigationEnd, Router, RouterEvent} from "@angular/router";

@Component({
    selector: 'bc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    items: FeedItem[];

    constructor(private feedService: FeedService,
                private router: Router,
                private routerEvents: RouterEvent) {
    }

    ngOnInit(): void {
        this.getFeed();
        // this.subscription[‘routerEvents’] = this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         this.getFeed();
        //     }
        // });
    }

    private getFeed(): void {
        this.feedService.getFeed().subscribe(
            (response) => {
                this.items = response.payload.reverse();
            }
        )
    }

}
