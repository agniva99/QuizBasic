const vals=[];

function qinput(){
    //Question 1
    var val1=document.getElementById('q1b1');
    var val2=document.getElementById('q1b2');
    var val3=document.getElementById('q1b3');
    var val4=document.getElementById('q1b4');

    if(val1.checked==true){
        var ans=val1.value;

    }
    else if(val2.checked==true){
        var ans=val2.value;
    }
    else if(val3.checked==true){
        var ans=val3.value;
    }
    else{
        var ans=val4.value;
    }
    vals.push(ans)

    //Question 2

    var val1=document.getElementById('q2b1');
    var val2=document.getElementById('q2b2');
    var val3=document.getElementById('q2b3');
    var val4=document.getElementById('q2b4');

    if(val1.checked==true){
        var ans=val1.value;

    }
    else if(val2.checked==true){
        var ans=val2.value;
    }
    else if(val3.checked==true){
        var ans=val3.value;
    }
    else{
        var ans=val4.value;
    }
    vals.push(ans);

    //Question 3
    var val1=document.getElementById('q3b1');
    var val2=document.getElementById('q3b2');
    var val3=document.getElementById('q3b3');
    var val4=document.getElementById('q3b4');
    if(val1.checked==true){
        var ans=val1.value;

    }
    else if(val2.checked==true){
        var ans=val2.value;
    }
    else if(val3.checked==true){
        var ans=val3.value;
    }
    else{
        var ans=val4.value;
    }
    vals.push(ans);


    
    //Question 4
    var val1=document.getElementById('q4b1');
    var val2=document.getElementById('q4b2');
    var val3=document.getElementById('q4b3');
    var val4=document.getElementById('q4b4');

    if(val1.checked==true){
        var ans=val1.value;

    }
    else if(val2.checked==true){
        var ans=val2.value;
    }
    else if(val3.checked==true){
        var ans=val3.value;
    }
    else{
        var ans=val4.value;
    }
    vals.push(ans);

    //Question 5
    var val1=document.getElementById('q5b1');
    var val2=document.getElementById('q5b2');
    var val3=document.getElementById('q5b3');
    var val4=document.getElementById('q5b4');

    if(val1.checked==true){
        var ans=val1.value;

    }
    else if(val2.checked==true){
        var ans=val2.value;
    }
    else if(val3.checked==true){
        var ans=val3.value;
    }
    else{
        var ans=val4.value;
    }
    vals.push(ans);


    //Computing number of correct answers
    var count=0;
    if(vals[0]=='silver'){
        count+=1
    }
    if(vals[1]=='aspirin'){
        count+=1
    }
    if(vals[2]=='3'){
        count+=1

    
    }
    if(vals[3]=='ring'){
        count++;

    }
    if(vals[4]=='phenolpthalein'){
        count++;
    }
    console.log(vals);
    document.getElementById("textbox").innerHTML=('Number of correct answers given by you are '+count);
    return count;


    //console.log(vals);
    
    //alert('You selected '+ans);


}
