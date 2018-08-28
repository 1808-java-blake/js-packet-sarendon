function sumElements(){

    let element1 =document.getElementById("num1").value;

    console.log ("This is element 1 : " + element1);
    let element2 =document.getElementById("num2").value;
    console.log ("This is element 2 : " + element2);
    let result =parseInt(element1)+parseInt(element2);

        console.log(result);

    document.getElementById("sum").value = result;

    
}