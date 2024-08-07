var firstImage = document.getElementsByTagName("img")[0].src;

var press_pair = [];

document.onkeydown = function(e){
    var key_press = e.key;
    press_pair.push(key_press)

    if(press_pair.length == 2){

        if(Utilities.check_alt_x(press_pair)){
            $.post(
                Constants.post_port,
                {
                    image: firstImage
                },
                // This function is what happens on a successful post
                function(data, status){
                    console.log(data)
                    var ai_score = Utilities.getScoreByLabel(data,Constants.ai_label)
                    var human_score = Utilities.getScoreByLabel(data,Constants.human_label)
                    
                    var ai = Utilities.multiplyBy100(ai_score);
                    var human = Utilities.multiplyBy100(human_score);

                    Scores.create_score_bars(ai,human);
                }
            );
        }
        
        press_pair = []
    }

}

// function that resizes the score window when the window resizes
$(window).resize(function(){

    let scores = document.getElementById(Constants.score_container_id);
    let ai = document.getElementById(Constants.ai_row_id);
    let human = document.getElementById(Constants.human_row_id);

    // should really make the scores class have these elements accessible but... too lazy
    let element = document.getElementById(Constants.image_display_id);
    let element_width = element.offsetWidth;
    let element_container = Utilities.get_parent_above(element,2);

    let side_size = Scores.find_side_size(element_container.offsetWidth,element_width);

    scores.style.paddingLeft = `${side_size}px`;    
    ai.style.width = `${element_width}px`;
    human.style.width = `${element_width}px`;

});



