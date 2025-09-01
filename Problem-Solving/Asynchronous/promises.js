const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data Fetching....")
            resolve("success");
        },3000);
        
    });
    
}
getData().then((res) => {
    return getData()
    }).then((res) => {
        return getData()
    }).then((res) => {
        console.log(res);
    });
