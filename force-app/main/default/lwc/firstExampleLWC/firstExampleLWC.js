import { LightningElement,api,track } from 'lwc';
import methodname from '@salesforce/Schema/ApexclassName.methodname';

export default class FirstExampleLWC extends LightningElement {
    
    @api myfname;  
    @track mylname;
    fullname;

    
    handChange(event){
            
        if(event.target.name=='fname'){
            this.myfname= event.target.value;
        }
        if(event.target.name=='lname'){
            this.myfname= event.target.value;
            
        }


    }
}