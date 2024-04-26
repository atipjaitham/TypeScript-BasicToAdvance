//OOP
//class
// class Company{
//     public static companyName:string = "JIN COMPANY"
//     public static founder:string = "BOSS"
//     public static employeeList:Employee[] =[]

//     static showData(){
//         console.log(`Details of Employee in ${this.companyName}`)
//         for(const person of this.employeeList){
//             person.showDetail()
//         }
//     }
// }
interface Ireport{
    income:number;
    reportIncome():void

}
abstract class Employee{
//Property
    
//constructor
    constructor(private name:string,private department: string,private salary: number){}
    public showDetail(){
        console.log(`Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary} Baht`)
    }
    //setter
    set Salary(newSalary:number){
        this.salary = newSalary;
    }
    //getter
    get Salary():number{
        return this.salary
    }
    abstract info():void
}
class QA extends Employee implements Ireport{
    income: number;
    constructor(name:string, salary:number){
        super(name,"QA",salary);
        this.income = salary
    }
    info():void{
        console.log(`Responsibility is Testing `)
    }
    reportIncome(): void {
        console.log(`Annual Salary : ${this.income*12}`)
    }
}
class DEV extends Employee implements Ireport{
    income: number;
    constructor(name:string, salary:number){
        super(name,"DEV",salary);
        this.income = salary
    }
    info():void{
        console.log(`Responsibility is Developing`)
    }
    reportIncome(): void {
        console.log(`Annual Salary : ${this.income*12}`)  
    }
}
// //object

const emp1=new QA("GOLF",37500)
console.log(emp1)
emp1.info()
emp1.reportIncome()
const emp2=new DEV("KAO",39000)
console.log(emp2)
emp2.info()
emp2.reportIncome()
// const employee1= new QA("GOLF",37500)
// console.log(employee1)
// employee1.showDetail()
// const employee2 =new DEV("WIN",45000)
// console.log(employee2)
// employee2.showDetail()

// // const company = new Company();  //It is not necessary to set the object first when assigning a class as static.
// console.log(Company.companyName)
// console.log(Company.founder)

// const emp1 = new QA("JUMP",30000)
// const emp2 = new DEV("UP", 34000)
// Company.employeeList.push(emp1)
// Company.employeeList.push(emp2)
// console.log(Company.employeeList)

// Company.showData()