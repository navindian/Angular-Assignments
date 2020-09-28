import { AccountDetails } from './accountDetails';

export interface Nominee extends AccountDetails{
    nomineeName:String;
    nomineeContactNo:Number;
}