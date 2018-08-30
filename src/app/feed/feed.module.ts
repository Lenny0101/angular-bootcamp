import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  declarations: [FeedComponent, PostComponent]
})
export class FeedModule { }
