class Scores{

    //function assumes that the scores are integers
    static create_score_bars(ai_score,human_score) {
        
        let element = document.getElementById(Constants.image_display_id);
        let element_container = Utilities.get_parent_above(element,2);
        let parent = Utilities.get_parent_above(element,3);
        
        // ensure that parent does not already have the elements
        if (!Utilities.hasDuplicateId(parent,Constants.ai_score_name) && !Utilities.hasDuplicateId(parent,Constants.human_score_name)){
            
            let element_width = element.offsetWidth

            let side_width = this.find_side_size(element_container.offsetWidth,element_width);

            var ai_progress = this.#create_progress_bar(Constants.ai_score_name,Constants.ai_score_bar_name);
            var human_progress = this.#create_progress_bar(Constants.human_score_name,Constants.human_score_bar_name);
            human_progress.style = `width:${element_width}`;

            // constructing the structure of the progress bar
            var ai_row = document.createElement("div");
            ai_row.appendChild(ai_progress);
            ai_row.style.paddingBottom = Constants.first_bar_bottom_padding;
            ai_row.style.paddingTop = Constants.first_bar_top_padding;
            ai_row.style.width = `${element_width}px`;
            ai_row.id = Constants.ai_row_id;

            var human_row = document.createElement("div");
            human_row.appendChild(human_progress);
            human_row.style.width = `${element_width}px`;
            human_row.id = Constants.human_row_id;
            human_row.style.paddingBottom = Constants.second_bar_bottom_padding;

            var scores_row = document.createElement("div");
            scores_row.appendChild(ai_row);
            scores_row.appendChild(human_row);
            scores_row.style.paddingLeft = `${side_width}px`;
            scores_row.id = Constants.score_container_id;

            parent.insertBefore(scores_row,parent.children[0]);

            $(`#${Constants.ai_score_bar_name}`).animate({ 
                width: `${ai_score}%`, 
            }, Constants.animation_time_bar);

            $(`#${Constants.human_score_bar_name}`).animate({ 
                width: `${human_score}%`, 
            }, Constants.animation_time_bar);

        }

    }

    // function assumes that progress is not in 0. format
    static #create_progress_bar(id,bar_id) {

        //creating wrapper for the progress bar
        var progress = document.createElement("div");
        progress.className = "progress progress-striped active";
        progress.id = id;

        //creating the bar itself
        var progress_bar = document.createElement("div");
        progress_bar.className = "progress-bar progress-bar-success";
        progress_bar.role = "progressbar";
        progress_bar.style = `width: 0%`;
        progress_bar.ariaValueMin = "0";
        progress_bar.ariaValueMax = "100";
        progress_bar.id = bar_id;

        progress.appendChild(progress_bar);

        return progress

    }

    // function to find the size of the side panels in pinterest
    static find_side_size(container_width,element_width){
        return Math.round((container_width-element_width)/2)
    }   

};




