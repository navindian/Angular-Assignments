import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-acc-form",
  templateUrl: "./acc-form.component.html",
  styleUrls: ["./acc-form.component.css"],
})
export class AccFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dob: [],
      natreg: [],
      pob: [],
      status: ["", [Validators.required]],
      pp: [],
      street: [],
      house: [],
      boxno: [],
      email: [],
      phno: [],
    });
  }
}
