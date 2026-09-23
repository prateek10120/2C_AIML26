class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
        console.log("New Balance:", this.balance);
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal failed: Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
            console.log("Remaining Balance:", this.balance);
        }
    }
    displayBalance() {
        console.log("Account No:", this.accountNo);
        console.log("Holder Name:", this.holderName);
        console.log("Balance:", this.balance);
    }
    static bankInfo() {
        console.log("Bank Name: ABC Bank");
        console.log("General Information: Secure and reliable banking services.");
    }
}
BankAccount.bankInfo();
console.log("\n--- Account 1 ---");
let account1 = new BankAccount(101, "Prakhar Dubey", 10000);
account1.displayBalance();
account1.deposit(5000);
account1.withdraw(3000);
account1.displayBalance();
console.log("\n--- Account 2 ---");
let account2 = new BankAccount(102, "Prateek Singh Rajput", 8000);
account2.displayBalance();
account2.deposit(2000);
account2.withdraw(12000);   
account2.displayBalance();