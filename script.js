
function val(id){return +document.getElementById(id).value}

function loanCalc(){
let a=val('a'),r=val('r')/100/12,m=val('m')
let p=(a*r)/(1-Math.pow(1+r,-m))
res(p)
}

function bmiCalc(){
let w=val('w'),h=val('h')/100
res(w/(h*h))
}

function percentCalc(){res(val('v')*val('p')/100)}
function discountCalc(){let price=val('price'),d=val('disc');res(price-(price*d/100))}
function vatCalc(){let p=val('vatprice'),v=val('vat');res(p*(v/100))}
function ageCalc(){let b=new Date(document.getElementById('birth').value);let t=new Date();res(t.getFullYear()-b.getFullYear())}
function dateDiff(){let a=new Date(d1.value),b=new Date(d2.value);res((b-a)/(1000*60*60*24))}
function fuelCalc(){let d=val('dist'),c=val('cons'),p=val('fuelprice');res((d*c/100)*p)}
function tipCalc(){res(val('bill')*val('tip')/100)}
function compoundCalc(){let p=val('cp'),r=val('cr')/100,t=val('ct');res(p*Math.pow((1+r),t))}
function roiCalc(){let g=val('gain'),c=val('cost');res((g-c)/c*100)}
function markupCalc(){let c=val('cost2'),m=val('markup');res(c+(c*m/100))}
function marginCalc(){let rev=val('rev'),cost=val('cost3');res((rev-cost)/rev*100)}
function timeCalc(){res(val('hours')*60)}
function unitCalc(){res(val('km')*0.621371)}
function savingsCalc(){let m=val('savm'),y=val('savy');res(m*12*y)}
function caloriesCalc(){let w=val('cw'),h=val('ch'),age=val('ca');res((10*w)+(6.25*h)-(5*age)+5)}
function tripCalc(){let d=val('td'),c=val('tc'),p=val('tp');res((d*c/100)*p)}
function salaryCalc(){let s=val('sal');res(s*0.8)}
function mortgageCalc(){loanCalc()}

function res(v){document.getElementById('result').innerText="Результат: "+Number(v).toFixed(2)}
