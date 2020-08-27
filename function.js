$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
       
        if(category=='all'){
            $('.card_item').addClass('hide');
            setTimeout(function(){
                $('.card_item').removeClass('hide');
            },500);
            

            }else{
                $('.card_item').addClass('hide');
                setTimeout(function(){
                    $('.'+ category).removeClass('hide');
                }, 500);
        }
    });
});