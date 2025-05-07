function Timer(sec){
for(let i=0;i<=sec;i++)
    {
        setTimeout(()=>
            console.log(i),i*1000);
    }
}
Timer(10)