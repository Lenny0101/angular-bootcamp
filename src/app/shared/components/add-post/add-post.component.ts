import {Component, OnInit} from '@angular/core';
import {FeedService} from "../../services/feed.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";
import {FeedComponent} from "../../../feed/feed/feed.component";

@Component({
    selector: 'bc-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
    form: FormGroup;
    contentID: string;
    imageUrl: string;

    constructor(private feedService: FeedService,
                private fb: FormBuilder,
                public dialogRef: MatDialogRef<AddPostComponent>,
                private router: Router) {
    }


    addPost() {
        this.feedService.addPost({
            caption: this.form.controls.caption.value,
            contentId: this.contentID,
        }).subscribe(
            (response: any) => {
                this.dialogRef.close();
                this.router.navigate(['feed']);
            }
        );
    }
    handleAddImg = event => {
        const file = event.target.files[0];

        const fileReader = new FileReader();
        const formData = new FormData();

        formData.append("media", file);

        fileReader.onloadend = () => {
            this.feedService.postImg( formData ).subscribe(
                (response) => {
                    this.contentID = response.payload.contentId;
                    this.imageUrl = response.payload.path;
                }
            );
        };

        fileReader.readAsDataURL(file);
    };

    ngOnInit() {
        this.initForm()
    }

    private initForm() {
        this.form = this.fb.group(
            {
                caption: new FormControl('', [
                    Validators.required,
                ])
            }
        )
    }

}
