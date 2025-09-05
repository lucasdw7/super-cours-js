// Classe qui représente un employé d'une PME
class EmployeePME {
    constructor(paramEmployeeName, paramEmployeeAge, paramEmployeePay, paramEmployeeNumberPay, paramEmployeeCharges) {
        this.employeeName = paramEmployeeName;       // nom
        this.employeeAge = paramEmployeeAge;         // âge
        this.employeePay = paramEmployeePay;         // salaire (ex: mensuel)
        this.employeeNumberPay = paramEmployeeNumberPay; // nombre de paiements par an (ex: 12 mois)
        this.employeeCharges = paramEmployeeCharges; // charges (ex: 0.9 = 90%)
    }

    // Calcule le coût total annuel de l'employé (salaire + charges)
    yearPay() {
        return this.employeePay * this.employeeNumberPay * (1 + this.employeeCharges);
        // équivalent à salaireMensuel * nbMois + charges
        //équivaut à => this.salaireMensuel*this.nbrMois + this.salaireMensuel*this.nbrMois*this.charge;
    }
}

// Classe qui représente une PME
class PME {
    constructor(paramPmeName, paramPmeRev, paramPmeFf, paramPmeFa, paramPmeNumEmp) {
        this.pmeName = paramPmeName;   // nom de la PME
        this.pmeRev = paramPmeRev;     // revenus (ventes)
        this.pmeFf = paramPmeFf;       // frais fixes
        this.pmeFa = paramPmeFa;       // frais annexes
        this.pmeNumEmp = paramPmeNumEmp; // liste des employés
    }

    // Calcule le coût total annuel de tous les employés
    numEmployee() {
        let total = 0;
        for (let emp of this.pmeNumEmp) {
            total += emp.yearPay(); // ajoute le coût annuel de chaque employé
        }
        return total;
    }

    // Calcule le bilan = revenus - (frais fixes + frais annexes + salaires employés)
    bilan() {
        return this.pmeRev - (this.pmeFa + this.pmeFf + this.numEmployee());
    }

    // Affiche un résumé de la PME dans la console
    display() {
        console.log(`
-------------MA PME------------
${this.pmeName} - : Coût Initiale : ${this.pmeFf + this.pmeFa}
${this.pmeName} - : Coût total Equipe : ${this.numEmployee()}
${this.pmeName} - : VENTES : ${this.pmeRev}
${this.pmeName} - : BILAN : ${this.bilan()}
        `)
    }
}

// Création d'une liste contenant une PME avec 3 employés
let list = [
    new PME("PME de Lulu", 300000, 20000, 50000, [
        new EmployeePME("toto", 19, 2000, 12, 0.9),
        new EmployeePME("titi", 34, 4000, 12, 0.9),
        new EmployeePME("tata", 32, 3000, 12, 0.9)
    ])
];

// Affiche les infos de la PME dans la console
list[0].display();
