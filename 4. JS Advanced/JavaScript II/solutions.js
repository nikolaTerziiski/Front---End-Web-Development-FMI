task1();
task2();
task3();
task4();
task5();
task6();
task8();

function task1() {
    var person = {
        _salary: 1000,
        getSecretSalaryInfo: function (){
            return this._salary;
        }
    };

    var stoleSalaryInfo = person.getSecretSalaryInfo();

    console.log(person.getSecretSalaryInfo); //принтира 1000
    console.log(stoleSalaryInfo); //принтира undefined
}


function task2() {
    class Person {
        constructor(name) {
            this.name = name,
            this.planet = "Земя"
        }
        print() { return `Здравей ${this.name} от планетата ${this.planet}`}
    }

    let p1 = new Person("Джон");
    let p2 = new Person("Уил");
    let p3 = new Person("Коко");
}

function task3() {
    class Item {
        constructor(name, discount){
            this.name =name,
            this.discount = discount;
            this.basePrice = 1000;
        }

        calculate() {
            return (this.basePrice - (this.basePrice * (this.discount / 100)));
        }
    }
}

function task4() {

    function Person(){
        var _salary = 1000;
        this.getSecretSalaryInfo = function() {
            return _salary;
        }
    }

    var p1 = new Person();
    p1._salary // gives undefined
    p1.getSecretSalaryInfo() // gives 1000
}


function task5() {

    function output(sColor1, sColor2) {
        let classCount = document.querySelectorAll(".headertitle");
        let parCount = document.querySelectorAll("p");
        document.title = `${parCount.length} параграфа, ${classCount.length} елемента с клас <headertitle>`

        document.querySelectorAll("p").forEach(x => x.style.background = sColor1)
        document.querySelectorAll(".headertitle").forEach(x => x.style.background = sColor2)

    }
}

function task6() {

}

function task8() {

        function PaymentMethod() {
            this.output = function() {
                return "Your amount in your account is: ";
            }
        }

        function CashMethod() {
            PaymentMethod.call(this);
            var _amount = 0;

            this.addToAmount = function(amount) {
                _amount += amount;
            } 
            this.reduceFromAmount = function(amount) {
                _amount -= amount;
            }
            getAmount = function() {
                return `${this.output()} ${_amount}`;
            }
        }

        function CreditMethod() {
            PaymentMethod.call(this);
            var _amount = 0;

            this.addToAmount = function(amount) {
                _amount += amount * 0.9;
            } 
            this.reduceFromAmount = function(amount) {
                _amount -= amount;
            }
            this.getAmount = function() {
                return `${this.output()} ${_amount}`;
            }
        }
}