var tody= new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow>18){
    greeting='good evening!';
    
}
else if (hourNow>12){
    greeting='good aftarnoon';

}else if(hourNow>0){
greeting='good moorning';}

else{
    greeting='welcome';}

    document.write('<h3>'+greeting+'</h3>');
