import { accountType } from "./accountType";

export interface AccountDetails{
    accountNumber:Number;
    accountHolder:String;
    type:accountType;
    balance:number;
    accountBranch?:String;  
}