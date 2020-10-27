function prime(){
    var n, i, flag = true; 
              
    // Getting the value form text 
    // field using DOM 
    n = prompt("Enter a No.",51); 
    n = parseInt(n) 
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
        flag = false; 
        break; 
        } 
                  
    // Check and display alert message 
        if (flag == true) 
            alert(n + " :is prime"); 
        else
            alert(n + " :is not prime"); 
}


function triangle(){
    var num1 = prompt("Enter value of Base",2);
    var num2 = prompt("Enter value of height",4);
    var area= (num1*num2)/2;
    alert(area);
 }

 function fibonacci(){
    var num = prompt("Enter length of fibonacci series",5);
    var num1=0;
    alert(num1);
    var num2=1; 
    var sum; 
    var i=0; 
   for (i = 0; i < num; i++)
   { 
       sum=num1+num2; 
       num1=num2; 
       num2=sum;
       alert(num2);
   } 
}

function kmtoMiles(){
    var num1 = prompt("Enter Value Of Km",5)
    num1=num1/1.609;
    alert(num1+": Miles");
}

function check_leapyear(){
    var year = prompt("Enter a Year",2000)
    //three conditions to find out the leap year
    if( ( year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) )
    {
        alert(year+" :is a leap year");  
    }
    else
    {
        alert(year+" :is not a leap year");  
    }
}

function oddEven(){
    var i = prompt("Enter a NO.",13)
    if(i%2==0){
        alert(i+":Even");
    }
    else{
        alert(i+":Odd");
    }
}

function palindrome(){
    var a = prompt("Enter a value",1223221);
    var aliasA =a;
    var b, sum = 0;
    var z = a;
    while(a > 0){
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }
    if(aliasA==sum){
      alert(aliasA+" :is Palindrome");
    }
    else{
      alert(aliasA+" :is Not Palindrome");
    }
}

function reverse(){
    var a = prompt("Enter a value",1234);
    var b, sum = 0;
    var z = a;
    while(a > 0){
      b = a % 10;
      sum = sum * 10 + b;
      a = parseInt(a / 10);
    }

alert(sum);
}

function squareOfNo(){
    var a = prompt("Enter a value",4);
    alert(a*a)
}

function swapWithTwoVariable(num2){
    var num1 = parseInt(prompt("Please enter First no.", "5"));
    var num2 = parseInt(prompt("Please enter Second no.", "7"));
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    alert(num1+":First NO"+" & " +num2+":Second No");
}

function ctof(){
    var num1 = prompt("Enter Celsius Value",5)
    num1=(num1 * 9/5) + 32;
    alert(num1+":Farenhiet");
}

function checkNo(){
    var num1 = prompt("Please enter any no.", 5);
    if(num1<0){
        alert(num1+":Negative");
    }
    else if(num1>0){
        alert(num1+":Positive");
    }
    else if(num1==0){
        alert(num1+":Zero");
    }
}
