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
    subscription = {};

    constructor(private feedService: FeedService,
                private router: Router,) {
    }

    ngOnInit(): void {
        this.getFeed();
        this.subscribeRouterEvents();

    }

    private getFeed(): void {
        this.feedService.getFeed().subscribe(
            (response) => {
                this.items = response.payload.reverse();
            }
        )
    }

    private subscribeRouterEvents(): void {
        this.subscription['routerEvents'] = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.getFeed();
            }
        });
    }

}
