const getData = (dataId, getdata2) => {
    setTimeout(() =>{
        console.log("data", dataId);
        if(getdata2){
            getdata2();
        }
    },3000);
}

getData(1,() => {
    getData(2, () => {
        getData(3, () => {
            getData(4, () => {
                console.log("thank you")
            })
        })
    });
})