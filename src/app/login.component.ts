import { Component } from '@angular/core';

@Component({
  selector: 'app-login-web',
  template: `
      <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="card shadow">
          <div class="card-title text-center border-bottom">
            <h2 class="p-3">Login</h2>
          </div>
          <div class="card-body">
            <!-- onSubmit không cần gắt Submit dưới button -->
            <!-- ngForm thu thập dữ liệu của form tự động thay vì gắn cho từng biến -->
            <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">
              <div class="mb-4">
                <label for="username" class="form-label">Username/Email</label>
                <input type="text" class="form-control" placeholder="Email" ngModel #txtEmail="ngModel" name="email" required />
                <p *ngIf="txtEmail.touched && txtEmail.errors?.required">
                    Email không được để trống
                </p>
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" ngModel #txtpassword="ngModel" name="password" required/>
                <p *ngIf="txtpassword.touched && txtpassword.errors?.required">
                    Password không được để trống
                </p>
              </div>
              <div class="d-grid">
                <button type="submit" [disabled]="formSignIn.invalid" (click)="show_loading = true;" class="btn text-light main-bg">Login</button>
                <div class="login-loading" *ngIf="show_loading"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class loginComponent {
  title = 'login demo test';
  show_loading = false;
   email = '';
   password = '';
    onSubmit(formSignIn) {
        console.log(formSignIn);
        //alert('Đăng nhập thành công');
    }
}
