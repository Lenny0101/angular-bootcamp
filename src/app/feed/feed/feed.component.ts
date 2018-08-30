import {Component, OnInit} from '@angular/core';
import {FeedService} from "../../shared/services/feed.service";
import {FeedItem} from "../../shared/DTO/feedItem.model";

@Component({
    selector: 'bc-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    items: FeedItem[];

    constructor(private feedService: FeedService,) {
    }

    ngOnInit(): void {
        this.getFeed();
    }

    private getFeed(): void {
        this.feedService.getFeed().subscribe(
            (response) => {
                this.items = response.payload.reverse();
            }
        )
    }

}
