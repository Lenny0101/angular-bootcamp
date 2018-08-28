import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'bc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
       email: new FormControl('', [
         Validators.required
       ]),
       password: new FormControl('',[
         Validators.required
       ]),
    },
  );

  }
login() {
  console.log(this.form.value);
  if(this.form.invalid) {
    return;
  }
  
  this.authenticationService.login(this.form.value).subscribe(
    
    (response) => {}
  );
}
}
