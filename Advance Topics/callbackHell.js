//what is callBackHell
//how callbackHell problem is arised

//another name for callbackHell

function getData(dataId, getDataNext){
    setTimeout(() =>
            {
                console.log("DATA = ", dataId)
                if(getDataNext){   //explain what happens here and why it will show error if there is no if condition here
                getDataNext();
                }
            }, 2000)
}


//getData(1 , getData(2));  dont write like this as this will show error

getData(1, () =>{
    getData(2, () =>{
        getData(3, ()=>{        //This is known as callback hell
            getData(4);
        })
    })
});