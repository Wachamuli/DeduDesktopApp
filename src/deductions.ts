export class Deductions {
  private salary = 0;


  constructor(salary: number) {
    this.salary = salary;
  }

  sfs(): number {
    return this.salary * 0.0304;
  }

  afp(): number {
    return this.salary * 0.0287;
  }

  isr(): number {
    let deductedSalary = this.salary - (this.afp() + this.sfs());
    let anualSalary = deductedSalary * 12;
    let surplusSalary: number;
    let isr: number;

    if (anualSalary >= 416220.01 && anualSalary <= 624329.0) {
      isr = ((anualSalary - 416220.01) * 0.15) / 12;
    } else if (anualSalary >= 624329.01 && anualSalary <= 867123.0) {
      surplusSalary = (anualSalary - 624329.01) * 0.2;
      isr = (surplusSalary + 31216.0) / 12;
    } else if (anualSalary >= 867123.01) {
      surplusSalary = (anualSalary - 867123.01) * 0.25;
      isr = (surplusSalary + 79776) / 12;
    } else {
      isr = 0;
    }

    return isr;
  }

  deductedSalary(): string {
    let deductedSalary = this.salary - (this.sfs() + this.afp() + this.isr());
    return deductedSalary.toFixed(2);
  }
}
