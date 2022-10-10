const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
const scrollDetect = document.querySelector(".autocom-box");
const multiSelect = document.querySelector(".tagspace");

let userData = "";
let index = 0;
let count = 100;
let emptyArray = [];
let midArray = [];
let defArray = [];
let wholeArray = words;
wholeArray = [...new Set(wholeArray)];

multiSelect.addEventListener("click",clickfun);

function clickfun(){
    multiSelect.classList.add("act");
    document.getElementById("search").focus();
    midArray = deffilter(userData,count,index,midArray);
    count = count + 100;
}

scrollDetect.addEventListener("scroll",scrollfun);

function scrollfun(){
    if(scrollDetect.scrollTop > scrollDetect.scrollHeight/2){
        if(emptyArray.length>count){
            index = index + 100;
            midArray = filtering(userData,count,index,midArray);
            count = count+100;
        }
        else{
            scrollDetect.removeEventListener("scroll",scrollfun);
        }
    }
}

inputBox.onkeyup = (e)=>{
    userData = e.target.value;
    if(userData.length == 1){
        midArray = Wholefilter(userData,count,index,midArray);
    }
    else if(userData.length > 1){
        midArray = Existfilter(userData,count,index,midArray);
    }
    if(userData.length == 0){
        searchWrapper.classList.remove("active");
    }
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

function select(element){
    let selectData = element.textContent;
    var ind = wholeArray.indexOf(selectData);
    if (ind > -1) {
       wholeArray.splice(ind, 1);
    }

    var inde = midArray.indexOf(selectData);
    if (inde > -1) {
       midArray.splice(inde, 1);
    }

    var inde = emptyArray.indexOf(selectData);
    if (inde > -1) {
       emptyArray.splice(inde, 1);
    }
    inputBox.value = selectData;
    addTag(inputBox);
    midArray = filtering(userData,count,index,midArray); 
}

function addTag(tag) {
    let elem = tag.value;
    if(tag.value==undefined) return;
    var tags=document.getElementById("tags");
    var span=document.createElement("span");
    span.textContent=tag.value;
    span.setAttribute('id',tag.value);
    tag.value="";
    span.style.backgroundColor="lightblue";
    span.style.margin="2px";
    span.style.padding="5px";
    span.style.margin="10px";
    span.style.whiteSpace = "10px";
    span.addEventListener("click",fun);
    tags.append(span);
}

function fun(){
    a = this.id;
    this.remove();
    wholeArray.push(a);   
}

