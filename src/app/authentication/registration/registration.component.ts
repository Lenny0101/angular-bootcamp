import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'bc-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;
  message: string;

  constructor(private fb: FormBuilder,
             // private helpersService: HelpersService,
              private authenticationService: AuthenticationService
            ) { }

  ngOnInit() {
    this.initForm();
  }
  private initForm(){
  this.form = this.fb.group(
    {
      username: new FormControl ('', [
        Validators.required,
        //Validators.pattern(/^(?=^.{8,}$) [a-zA-Z][a-zA-Z0-9]/),
        ]),
       email: new FormControl(''),
       password: new FormControl(''),
       confirmPassword: new FormControl('')
    },
    //validator
  );

  }
register() {
  console.log(this.form.value);
  if(this.form.invalid) {
    return;
  }
  
  this.authenticationService.register(this.form.value).subscribe(
    (response) => {
      this.message = response.payload.message;
    }
  );
}
}
