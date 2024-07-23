let sum = 0;
onmessage= (e)=>{
    for(let i = 1 ; i <= e.data; i++)
    {
        sum+=i;
        postMessage(sum)
    }
    postMessage("done");
}



