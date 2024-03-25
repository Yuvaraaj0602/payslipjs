let paylist = JSON.parse(localStorage.getItem('payslip')) || [];
let hra = 0; let da = 0; let travel = 0; let pf = 0; let grosspay = 0; let netpay = 0;
const displayValue = () => {
    let basicpay = Number(document.getElementById('basicpay').value);
    hra = (basicpay / 10);
    da = (basicpay / 20);
    travel = (basicpay * 15 / 100);
    pf = (basicpay * 15 / 100);
    grosspay = basicpay + hra + da + travel + pf;
    netpay = grosspay - pf;

    document.getElementById('hra').value = hra;
    document.getElementById('da').value = da;
    document.getElementById('travel').value = travel;
    document.getElementById('pf').value = pf;
    document.getElementById('grosspay').value = grosspay;
    document.getElementById('netpay').value = netpay;
}

document.getElementById('basicpay').addEventListener('keyup', displayValue);
document.getElementById('save').addEventListener('click', () => {
    let id = document.getElementById('emp-id').value;
    let ename = document.getElementById('emp-name').value;
    let des = document.getElementById('emp-des').value;
    let basicpay = Number(document.getElementById('basicpay').value);
    let pay = { 
        id: id,
        uname: ename,
        designation: des,
        basepay: basicpay,
        HRA: hra,
        DA: da,
        TRAVEL: travel,
        PF: pf,
        GPAY: grosspay,
        NPAY: netpay
    };
    paylist.push(pay); 
    localStorage.setItem('payslip', JSON.stringify(paylist));
});


const print = () => {
    let output = JSON.parse(localStorage.getItem('payslip'));
    document.getElementById('value').innerHTML = '';
    output.map(e => {
        document.getElementById('value').innerHTML += `<tr><td>${e.id}</td><td>${e.uname}</td><td>${e.designation}</td><td>${e.basepay}</td><td>${e.HRA}</td><td>${e.DA}</td><td>${e.TRAVEL}</td><td>${e.PF}</td><td>${e.GPAY}</td><td>${e.NPAY}</td></tr>`;
    });
}

document.getElementById('print').addEventListener('click', print);
