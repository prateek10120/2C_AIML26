class Employee {
    int id;
    String name;
    double basicSalary;

    Employee(int id, String name, double basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    double calculateSalary() {
        return basicSalary;
    }
}

class Manager extends Employee {
    double incentive;

    Manager(int id, String name, double basicSalary, double incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

   @override
    double calculateSalary() {
        return basicSalary + incentive;
    }
}

public class Main {
    public static void main(String[] args) {

        Employee e = new Employee(101, "Rahul", 30000);
        Manager m = new Manager(102, "Amit", 50000, 10000);

        System.out.println("Employee Salary: " + e.calculateSalary());
        System.out.println("Manager Salary: " + m.calculateSalary());
    }
}