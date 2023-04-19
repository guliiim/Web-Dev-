export interface Company {
city: any;
    id:number;
    name:string;
    description:string;
    address:string;
  }
  
  export interface Vacancy {
    id:number;
    name:string;
    description:string;
    salary:number;
    company_id:number;
  }
 