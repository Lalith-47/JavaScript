function random() {
    let value=Math.random()*10;
    value=Math.round(value)
    let condition=Math.round(Math.random()*10)
    if(condition==0)
        console.log(value);    
    else if(condition>=5)
        console.log(value*-1);
    else
        console.log(value);
}
random();
