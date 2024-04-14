let ar;
const algo= document.querySelectorAll('.algorithems');
let size = document.getElementById('Array_size').value;
let arrayElements;

async function delay( x) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, x);
    });
}

function generateNewArray(){
    ar = [];
    arrayElements=document.querySelectorAll('.array_elements');
    for(let i=0 ; i <  arrayElements.length ; i++){
        arrayElements[i].remove();
    }
    size = document.getElementById('Array_size').value;
    for( let i=0; i <size ; ++i){
        const div= document.createElement('div');
        const width = Math.round(400/size);
        div.style.width = `${width}px`;
        div.style.backgroundColor = '#0aa93a';
        const height = Math.floor(Math.random()*250 + 20);
        ar.push(height);
        div.style.height=  `${height}px`;
        div.classList.add('array_elements');
        document.querySelector('.visual').appendChild(div);
    }
    arrayElements = document.querySelectorAll('.array_elements');
}

async function bubble_sort(){
    for(let i=0; i < size ; i++){
        for( let j=0 ; j < size-i-1 ; j++ ){
            if( ar[j] > ar[j+1]) {
                await swap ( j+1 , j );
            }
        }
        await delay(500);
    }
    await finalvisual();
    alert("Bubble sort finished");
}
async function finalvisual(){
    arrayElements.forEach( Element =>{
        Element.style.backgroundColor = "#7ee90b";
    })
    await delay(200);
    arrayElements.forEach( Element =>{
        Element.style.backgroundColor = "#0aa93a";
    })
}
async function swap( i , j ){
    let temp = ar[j];
    arrayElements[j].style.backgroundColor= "#ae4c31";
    arrayElements[i].style.backgroundColor= "#ae4c31";
    await delay(500);
    ar[j]= ar[i];
    arrayElements[j].style.height = `${ar[i]}px`;
    arrayElements[j].style.backgroundColor = "#0aa93a"
    await delay(500);
    ar[i] = temp;
    arrayElements[i].style.height = `${temp}px`;
    arrayElements[i].style.backgroundColor= "#45e475";
    await delay(500);
}
async function insertion_sort(){
    for( let i = 1 ; i < size ; i++){
        let j = i-1;
        let temp = ar[i];
        arrayElements[i].style.backgroundColor = "red";
        await delay(500);
        while( j >=0 && ar[j] >temp ){
            ar[j+1] = ar[j];
            arrayElements[j].style.backgroundColor = "red";
            await delay(500);
            arrayElements[j+1].style.height = `${ar[j]}px`;
            arrayElements[i].style.backgroundColor = "#0aa93a";
            await delay(500);
            j--;
        }
        ar[j+1] = temp;
        arrayElements[j+1].style.height = `${temp}px`;
        arrayElements[j+1].style.backgroundColor = "#0aa93a";
    }
    await finalvisual();
    alert("insertion sort finished");
}

async function selection_sort(){
    for( let i =0;  i < size-1 ; i++ ){
        let min = i ;
        for( let j = i+1 ;  j < size ; j++ ){
            if( ar[j]  < ar[min]){
                min = j;
            }
        }
         await swap(min , i);
    }
    await finalvisual();
    alert("selection sort finished");
}

async function halfsorted( left , right ){
    for( let i = left ; i <= right ;i++){
        arrayElements[i].style.backgroundColor= "yellow";
    }
}
async function half_color( left , right ){
    for( let i = left ; i <= right ;i++){
        arrayElements[i].style.backgroundColor= "#9052e2";
    }
}
async function quickssort( left , right ){
    if ( left < right ){
        arrayElements[left].style.backgroundColor= "red";
        arrayElements[right].style.backgroundColor= "red";
        await delay(1000);
        let pi= await pivate(left, right);
        arrayElements[right].style.backgroundColor= "yellow";
        await delay(1000);

        await half_color(left , pi-1);
        await half_color(pi+1 , right);
        await delay(3000);

        
        await quickssort( left , pi-1);
        await halfsorted(left , pi-1);
        await delay(1000);

        await quickssort( pi+1 , right);
        await halfsorted(pi+1 , right);
        await delay(1000);
    }
}

async function pivate(left , right ){
    let pi= ar[right];
    arrayElements[right].style.backgroundColor= "yellow";
    delay(500);
    let j= left-1;
    for( let i =left ; i < right ; i++ ) {
        if( ar[i] <= pi){
            swap( ++j , i);
        }
    }
    swap( ++j , right);
    arrayElements[j].style.backgroundColor= "#9052e2";
     return j;
}
async function quick_sort(){
    await quickssort(0, size-1);
    await finalvisual();
    alert("quick sort finished");
}

async function merge(left , mid , right){
    let n = mid-left+1;
    let m = right - mid ;
    let ar1=[];
    let ar2=[];
    for(let i =0 ; i < n; i++){
        ar1[i]= ar[left+i]; 
        arrayElements[left+i].style.backgroundColor = "#91d3ef";
        await delay(200);
    } 
    await delay(500);
    for( let i =0 ; i < m ; i++){
        ar2[i] = ar[ mid+i + 1];
        arrayElements[mid+i + 1].style.backgroundColor = "#91d3ef";
        await delay(200);
    }
    await delay(500);
    let i=0 , j =0 , k=left;
    while( i < n && j < m){
        if( ar1[i] < ar2[j]){
            ar[k] = ar1[i];
            arrayElements[k].style.height = `${ar1[i]}px`;
            arrayElements[k].style.backgroundColor = "green";
            await delay(200);
            arrayElements[k].style.backgroundColor = "#91d3ef";
            await delay(200);
            k++;
            i++;
        }
        else{
            ar[k]= ar2[j];
            arrayElements[k].style.height  =`${ar2[j]}px`;
            arrayElements[k].style.backgroundColor = "green";
            await delay(200);
            arrayElements[k].style.backgroundColor = "#91d3ef";
            await delay(200);
            k++;
            j++;
        }
    }
    while(i < n){
        ar[k] = ar1[i];
            arrayElements[k].style.height  = `${ar1[i]}px`;
            arrayElements[k].style.backgroundColor = "green";
            await delay(200);
            arrayElements[k].style.backgroundColor = "#91d3ef";
            await delay(200);
            k++;
            i++;
    }
    while(j < m ){
        ar[k]= ar2[j];
            arrayElements[k].style.height  = `${ar2[j]}px`;
            arrayElements[k].style.backgroundColor = "green";
            await delay(200);
            arrayElements[k].style.backgroundColor = "#91d3ef";
            await delay(200);
            k++;
            j++;
    }
}

async function merggesort( left , right){
    if(left < right){
        const mid = left +  Math.floor((right-left)/2);
        arrayElements[mid].style.backgroundColor = "red";
        await delay(1000);
        await half_color(left , mid);
        await half_color(mid+1 , right);
        await delay(2000);
        
        await halfsorted(left , mid);
        await delay(200);
        await half_color(left , mid);
        await delay(500);


        await merggesort(left, mid);
        await halfsorted(left , mid);
        await delay(1000);

        await halfsorted(mid+1 , right);
        await delay(200);
        await half_color(mid+1 , right);
        await delay(500);

        await merggesort(mid+1 , right);
        await halfsorted(mid+1 , right);
        await delay(1000);

        await halfsorted(left , right);
        await delay(200);
        await half_color(left , right);
        await delay(500);

        await merge(left , mid , right );
    }
}

async function merge_sort(){
    await merggesort(0 , size-1);
    await finalvisual();
    alert("quick sort finished");
}

async function sort(selected_algo){
    document.getElementById("Array_size").disabled = true;
    document.getElementById('regenerate').style.pointerEvents = "none";
    document.getElementById(selected_algo).classList.add('selected');
    algo.forEach(element => {
        element.style.pointerEvents= "none";
    });
    if(selected_algo === "bubble"){
        await bubble_sort();
    }
    else if(selected_algo === "insertion"){
        await insertion_sort();
    }
    else if(selected_algo === "selection"){
        await selection_sort();
    }
    else if(selected_algo === "quick"){
        await quick_sort();
    }
    else if(selected_algo === "merge"){
        await merge_sort();
    }
    algo.forEach(element => {
        element.style.pointerEvents= "initial";
    });
    document.getElementById("Array_size").disabled = false;
    document.getElementById('regenerate').style.pointerEvents = "initial";
    document.getElementById(selected_algo).classList.remove('selected');
}

function init(){
    generateNewArray();
    document.getElementById('regenerate').addEventListener("click", generateNewArray);
    document.getElementById('Array_size').addEventListener("change", generateNewArray);
    algo.forEach(algorithem => {
        algorithem.addEventListener('click', event => {
            sort(algorithem.id)
        });
    });
}
init();