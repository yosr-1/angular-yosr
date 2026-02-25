import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, AfterViewInit {
  @ViewChild('signupform') signupform!: NgForm;

  username = '';
  mail = '';
  gender = '';
  isSubmitting = false;
  userId: number | null = null;
  user: User | null = null;
  private pendingUser: User | null = null;
  isEdit = false;

  constructor(
    private userservice: UserService,
    private router: Router,
    private act: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idParam = this.act.snapshot.params['id'];
    const id = Number(idParam);
    if (!Number.isNaN(id)) {
      this.userId = id;
      this.isEdit = true;
      this.userservice.getUserById(this.userId).subscribe((data) => {
        this.user = data;
        if (this.signupform?.form) {
          this.signupform.form.patchValue({
            username: this.user.name ?? '',
            mail: this.user.email ?? '',
            gender: this.user.gender ?? ''
          });
        } else {
          this.pendingUser = this.user;
        }
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.pendingUser && this.signupform?.form) {
      this.signupform.form.patchValue({
        username: this.pendingUser.name ?? '',
        mail: this.pendingUser.email ?? '',
        gender: this.pendingUser.gender ?? ''
      });
      this.pendingUser = null;
    }
  }

  onSubmit(): void {
    if (!this.signupform || this.signupform.invalid) {
      alert('Enter valid data');
      return;
    }

    this.isSubmitting = true;
    const userdata = this.signupform.value;

    if (this.isEdit && this.userId !== null) {
      this.userservice.updateuser(this.userId, userdata).subscribe({
        next: () => {
          alert('User updated successfully');
          this.signupform.resetForm();
          this.router.navigate(['/users']);
        },
        error: () => {
          this.isSubmitting = false;
        }
      });
      return;
    }

    this.userservice.adduser(userdata).subscribe({
      next: () => {
        alert('User added successfully');
        this.signupform.resetForm();
        this.router.navigate(['/users']);
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }
}
