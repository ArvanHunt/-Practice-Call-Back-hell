function getData(firstValue) {
    
    if (firstValue === 0) {
        console.log("Happy birthday");
        return;
    }
    console.log(firstValue);
    const myTimeout = setTimeout(() => {
        getData(firstValue -1);
    }, 1000);
}

getData(5, 4);
