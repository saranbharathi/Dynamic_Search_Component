function deffilter(userData,count,index,midArray){
    let defArray2 = [];
    for(let i=0;i<count;i++){
        defArray.push(wholeArray[i]);
    }
    defArray2 = defArray;
    defArray = defArray.map((data)=>{
        return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active");
    showSuggestions(defArray);
    
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
    return defArray2;
}

function Wholefilter(userData,count,index,midArray){
    let fullArray1 = [];
    let fullArray2 = [];

    emptyArray = wholeArray.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    for(let i=index;i<(index+count);i++){
        if(i<emptyArray.length){
        fullArray2.push(emptyArray[i]);
        }
        else{
            break;
        }
    }

    fullArray1 = fullArray2.map((data)=>{
        return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active");
    showSuggestions(fullArray1);

    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
    return fullArray2;
}

function Existfilter(userData,count,index,midArray){
    let exArray1 = [];
    let exArray2 = [];
    let exArray3 = [];
    let exArray4 = [];
    let subArray = [];
    
    exArray1 = midArray.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    exArray2 = wholeArray.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    /*exArray1 = exArray1.concat(exArray2);
    emptyArray = exArray1;*/
    //console.log(emptyArray);

    exArray1 = [...exArray1, ...exArray2];
    exArray1 = [...new Set(exArray1)];
    emptyArray = exArray1;

    for(let i=index;i<(index+count);i++){
        if(i<emptyArray.length){
        exArray3.push(emptyArray[i]);
        }
        else{
            break;
        }
    }

    subArray = exArray3;
    exArray4 = exArray3.map((data)=>{
        return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active");
    showSuggestions(exArray4);

    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
    return subArray;
}

function filtering(userData,count,index,midArray){
    let filArray1 = [];
    let filArray2 = [];

    for(let i=0;i<count;i++){
        if(i<midArray.length){
        filArray1.push(midArray[i]);
        }
        else{
            break;
        }
    }

    for(let j=index;j<(index+100);j++){
        if(j<emptyArray.length){
            filArray1.push(emptyArray[j]);
            }
            else{
                break;
            }
    }

    filArray1 = [...new Set(filArray1)];
    filArray2 = filArray1.map((data)=>{
        return data = `<li>${data}</li>`;
    });
    searchWrapper.classList.add("active");
    showSuggestions(filArray2);

    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
        allList[i].setAttribute("onclick", "select(this)");
    }
    return filArray1;
}





