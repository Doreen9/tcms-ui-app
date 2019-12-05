import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostuserService } from '../postuser.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private postService:PostuserService) { }
  
  profileForm = new FormGroup({
    client_name: new FormControl(''),
    client_address: new FormControl(''),
    client_telephone: new FormControl(''),
    client_email: new FormControl('')
  });
  
  msg: string = null;
  
  
  onSubmit() {
  if (this.profileForm.valid) {
    this.postService.createUser(this.profileForm.value)
      .subscribe(
        data => {
          console.log("user created!")
          console.log("Form Submitted!");
        }
      )
    this.profileForm.reset();
    this.msg = "Client successfully added!";
  }
}

  ngOnInit() {
  
  }

}
