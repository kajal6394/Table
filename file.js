function addRowToTop()
{
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    
    var table=document.getElementsByTagName('table') [0];
    
    var newRow=table.insertRow(1);

    var cel1=newRow.insertCell(0);
    var cel2=newRow.insertCell(1);
    var cel3=newRow.insertCell(2);
    var cel4=newRow.insertCell(3);
    var cel5=newRow.insertCell(4);

    cel1.innerHTML=serial;
    cel2.innerHTML=fname;
    cel3.innerHTML=lname;
    cel4.innerHTML=city;
    cel5.innerHTML=country;
}

let btnAdd=document.getElementById('btn');
let table=document.querySelector('table');

let fnameInput=document.querySelector('#fname');
let lnameInput=document.querySelector('#lname');
let cityInput=document.querySelector('#city');
let countryInput=document.querySelector('#country');


btnAdd.addEventListener('click', () => {
    let fname=fnameInput.value;
    let lname=lnameInput.value;
    let city=cityInput.value;
    let country=countryInput.value;

    let template=`
                <tr>
                <td></td>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${city}</td>
                <td>${country}</td>
                </tr>
    `;
    table.innerHTML += template;
})