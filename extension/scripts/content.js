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
                // assumes that data first index is ai score and second is human score
                function(data, status){
                    let scores = Utilities.extractNumbers(data);

                    var ai = Utilities.multiplyBy100(scores[0]);
                    var human = Utilities.multiplyBy100(scores[1]);

                    Scores.create_score_bars(ai,human);
                }
            );
        }
        
        press_pair = []
    }

}


