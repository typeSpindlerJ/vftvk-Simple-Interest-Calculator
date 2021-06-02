function compute() {  

    let principal = document.getElementById("principal").value;
    let interest = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
       
    if (principal == "") {
        alert("Please enter an amount");
        document.getElementById("principal").focus();    
    } else if (principal == 0) {
        alert("Please enter a postive number");
        document.getElementById("principal").focus();
    } else if (principal < 0) {
        alert("This is Negative, Please enter a postive number");
        document.getElementById("principal").focus();
    } else {
          
       total = principal * interest * years / 100 ;
       let currentYear = 2021;
       let totalyears = parseInt(years) + currentYear;
    
        document.getElementById("output").innerHTML = `If you deposit $<mark>${principal}</mark>, <br/> at an interest rate of <mark>${interest}%</mark>. <br/> You will receive an amount of $<mark>${total}</mark>, <br/> in the year <mark>${totalyears}</mark>`;
    };
};