import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Accelerate-Task";
  isAuthenticated: boolean;
  submitted: boolean = false;

  colorName: string = "blue";
  fontWeight: string = "bold";
  isBordered: boolean = true;
  showme = false;
  showmsg = false;
  show() {
    this.title = "i am visible";
    this.showmsg = true;
  }
  hide() {
    this.showmsg = false;
  }
  headers = ["orderId", "productName", "quantity", "billAmount", "transaction"];
  Order = [
    {
      orderId: 2001,
      productName: "iphone 11 pro",
      quantity: 1,
      billAmount: 1850,
      transaction: "completed",
    },
    {
      orderId: 2002,
      productName: "iphone 10",
      quantity: 1,
      billAmount: 990,
      transaction: "pending",
    },
    {
      orderId: 2003,
      productName: "Samsung Galaxy S10",
      quantity: 2,
      billAmount: 1980,
      transaction: "completed",
    },
    {
      orderId: 2004,
      productName: "Motorolla Edge+",
      quantity: 1,
      billAmount: 980,
      transaction: "pending",
    },
  ];
  showmee() {
    this.showme = true;
  }
}
