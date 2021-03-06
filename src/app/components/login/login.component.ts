﻿﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Service } from 'src/app/service';
import { UserLogin, AppState } from 'src/app/interface';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SET_USER_ID } from 'src/app/actions/cart.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private service: Service,
        private snackBar: MatSnackBar,
        private store: Store<AppState>
    ) { }

    openSnackBar(message: string,) {
        this.snackBar.open(message, null, {
          duration: 2000,
        });
      }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: [''],
            userId: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    navigateToRegister(){
        this.router.navigate(['/register']);
    }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        const user: UserLogin = {
           userId: this.f.userId.value,
           password: this.f.password.value
        }
        this.service.login(user)
            .pipe(first())
            .subscribe(
                (data: any) => {
                    if (data.statusMessage !== 'Invalid userId')
                    {
                        this.openSnackBar('Login Success');
                        const userId: string = user.userId
                        this.store.dispatch(SET_USER_ID({userId}))
                        this.router.navigate(['/shopping']);

                    }else{
                        this.openSnackBar('Login Failed, please try again');
                    }
                },
                error => {
                    console.log(error)
                    this.openSnackBar('Login Failed, please try again'+ error)
                });
    }
}