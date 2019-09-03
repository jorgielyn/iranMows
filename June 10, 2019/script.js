function calculate() {
    var mo = document.getElementById("newCalc-myMonth").value;
    var da = document.getElementById("newCalc-myDay").value;
    var ye = document.getElementById("newCalc-myYear").value;

  
    if(mo===""&& da===""&&ye==="")
        alert("Select Your Date of Birth");
    else
    {
        
        var result1 = mo.split('/');
        var result2 = da.split('/');
        var result3 = ye.split('/');
        var m = result1.join('');
        var d = result2.join('');
        var y = result3.join('');
        
        // get the dates mm/dd/yyyy format
        var x = parseInt(m[0])+parseInt(m[1])+"/"+parseInt(d[0])+parseInt(d[1])+"/"+parseInt(y[0])+parseInt(y[1])+parseInt(y[2])+parseInt(y[3]);
        document.getElementById("dates").innerHTML = x;
        //
        var sum = parseInt(m[0])+parseInt(m[1])+parseInt(d[0])+parseInt(d[1])+
                  parseInt(y[0])+parseInt(y[1])+parseInt(y[2])+parseInt(y[3]);

        // get the month
        var mm =parseInt(result1);

        document.getElementById("mot").innerHTML = mm;
        document.getElementById("motd").innerHTML = mm;

        // get the day
        var dd =parseInt(result2);
        document.getElementById("dzay").innerHTML = dd;
        document.getElementById("dzayd").innerHTML = dd;

        // get the year
        var yy = result3;
        document.getElementById("yr").innerHTML = yy;
        var disres = parseInt(y[0])+"+"+parseInt(y[1])+"+"+parseInt(y[2])+"+"+parseInt(y[3]);
        document.getElementById("yrd").innerHTML = disres;

        var yrsubtotal = parseInt(y[0])+parseInt(y[1])+parseInt(y[2])+parseInt(y[3]);
        var yrtotal = parseInt(yrsubtotal);
        document.getElementById("yrdd").innerHTML = yrtotal;
        
        var total = document.getElementById("yrdd").innerText;
        var totalsplt = total.split('/');
        var totaljn = totalsplt.join('');

        var convint = parseInt(totaljn[0])+"+"+parseInt(totaljn[1]);
        document.getElementById("yrsplit").innerHTML = convint;

        var totalt = parseInt(totaljn[0])+parseInt(totaljn[1]);
        document.getElementById("ttl").innerHTML = totalt;

        var altotal = mm + "+" + dd + "+" + totalt;
        document.getElementById("alttl").innerHTML = altotal;

        var alltotal = mm + dd + totalt;
        var alltotals = parseInt(alltotal);
        document.getElementById("allttl").innerHTML = alltotals;

        var splttotal = document.getElementById("allttl").innerText;
        alert(splttotal);
        var totalsplt2 = splttotal.split('/');
        var totaljn2 = totalsplt2.join('');

        var totaljn3 = parseInt(totaljn2[0])+"+"+parseInt(totaljn2[1]);
        document.getElementById("alttlsplt").innerHTML = totaljn3;

        var totaljn4 = parseInt(totaljn2[0])+parseInt(totaljn2[1]);
        document.getElementById("allttlsplt").innerHTML = totaljn4;

        var num = parseInt(sum);
        var cal=0;
        while(num > 0) {
            var rem = num%10;
            cal += rem;
            num  = Math.floor(num / 10);
            if(cal > 9) {
                num = cal;
                cal = 0;
            }
        }
    }
    switch(cal) {
        case 1:
            hide('a');
            document.getElementsByClassName('a')[0].style.display = 'block';
            break;
        case 2:
            hide('b');
            document.getElementsByClassName('b')[0].style.display = 'block';
            break;
        case 3:
            hide('c');
            document.getElementsByClassName('c')[0].style.display = 'block';
            break;
        case 4:
            hide('d');
            document.getElementsByClassName('d')[0].style.display = 'block';
            break;
        case 5:
            hide('e');
            document.getElementsByClassName('e')[0].style.display = 'block';
            break;
        case 6:
            hide('f');
            document.getElementsByClassName('f')[0].style.display = 'block';
            break;
        case 7:
            hide('g');
            document.getElementsByClassName('g')[0].style.display = 'block';
            break;
        case 8:
            hide('h');
            document.getElementsByClassName('h')[0].style.display = 'block';
            break;
        case 9:
            hide('i');
            document.getElementsByClassName('i')[0].style.display = 'block';
            break;
        default:
            hide('x');
    }
}
function hide(clnm) {
    var arr = ['a','b','c','d','e','f','g','h','i'];
    for(i=0; i<arr.length; ++i) {
        if(arr[i] != clnm)
            document.getElementsByClassName(arr[i])[0].style.display = 'none';
    }
}