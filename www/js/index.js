retrieve()
document.addEventListener('click',function(){
    Let input = document.getElementById('field_input').value;
    document.getElementById('field_input').value = "";
    if(input != ""){
        let count = (localStorage.getItem('count') == null)?0:localStorage.getItem,getItem('count');
        localStorage.setItem('count',(count*1)+1);
        console.log(count);
        localStorage.setItem(`input-${(count)}`,input);

        retrieve();

    }
    
});

function retrieve(){
    Let data = [];
    Let count = number(localStorage.getItem('count'));

    for(Let x = 0; x<count; x++){   
    data.push(localStorage.getItem(`input-${(x)};


    }
    list(data);

}
function  list(data){
    Let content = "";
    for(Let value of data){
        content += `<li>${value}</li>`;
    }
    document.getElementById('display_list').innerHTML = `<ol>${content}</ol>`;
}