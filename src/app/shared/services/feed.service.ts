import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HelpersService} from "./helpers.service";
import {Observable} from "rxjs/index";
import {environment} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {Response} from "../DTO/response.model";
import {FeedItem} from "../DTO/feedItem.model";
import {AddPost} from "../DTO/add.post.model";
import {Form} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(private http: HttpClient,
                private helpersService: HelpersService) {
    }


    getFeed(): Observable<Response<FeedItem[]>> {
        return this.http.get<Response<FeedItem[]>>(environment.getFeedUrl)
            .pipe(
                catchError(this.helpersService.handleError('getFeed'))
            );
    };

    getPostById(id): Observable<Response<FeedItem>> {
        return this.http.get<Response<FeedItem>>(environment.getFeedUrl+'/'+id)
            .pipe(
                catchError(this.helpersService.handleError('getPostById'))
            )
    }


    addPost(payload): Observable<Response<any>>{
        return this.http.post<Response<any>>(environment.getFeedUrl, payload)
            .pipe(
                catchError(this.helpersService.handleError('addPost'))
            )
    }
    postImg(payload):Observable<Response<AddPost>> {
        return this.http.post<Response<AddPost>>(environment.getFeedUrl+'/content/image',payload)
            .pipe(
                catchError(this.helpersService.handleError('sendImage'))
            )
    }

}
