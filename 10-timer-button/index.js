$(function(){
  var $btn = $('#btn');
  var num=6;
  var timer;
  timer = setInterval(function(){
    num--;
    if(num===0){
        clearInterval(timer);
        $btn.val('同意');
        $btn.removeAttr('disabled');
        $btn.click(function(){
          alert('好好学习，天天向上!')
        })
    }else{
        $btn.val('同意（'+num+'s)')
    }
  },1000) 

})