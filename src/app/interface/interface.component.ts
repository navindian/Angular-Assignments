import { Component, OnInit } from '@angular/core';
import { AccountDetails } from './accountDetails';
import { AccountFunctions } from './accountFunctions';
import { accountType } from './accountType';
import { Nominee } from './nominee';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit,AccountFunctions {

  account:AccountDetails;
 nominee:Nominee;
 show=false;

 message:String;
  constructor() { }

  ngOnInit(): void {

    this.account={
      accountNumber: 1100,
      accountHolder:'Infosys',
      type:accountType.savingsAccount,
      balance:500000,
    }

    this.nominee={
      accountNumber: 1100,
      accountHolder:'Infosys',
      type:accountType.savingsAccount,
      balance:500000,
      nomineeName:"Infosys LTD",
    nomineeContactNo:9458697785
    }
  }

  creditToAccount(value) {
    let amount:number=+value;
    this.message=null;
    this.account.balance=this.account.balance+amount;
    this.message="Amount Credited"
}

debitFromAccount(value) {
  let amount:number=+value;
  this.message=null;
  if(this.account.balance>=amount)
  {
    this.account.balance=(this.account.balance-amount);
    this.message="Amount Debited"
  }
  else{
    this.message="Balance is not enough";
  }
  
}

showNominee()
  {
    this.show=true;
  }


}
