class Scores{

    //function assumes that the scores are integers
    static create_score_bars(ai_score,human_score) {
        
        let element = document.getElementById("gradient");
        let parent = Utilities.get_parent_above(element,3);
        
        // ensure that parent does not already have the elements
        if (!Utilities.hasDuplicateId(parent,"ai_score") && !Utilities.hasDuplicateId(parent,"human_score")){
            
            var ai_progress = this.create_progress_bar("ai_score","ai_bar");

            var human_progress = this.create_progress_bar("human_score","human_bar");

            // constructing the structure of the 
            var ai_row = document.createElement("div");
            ai_row.appendChild(ai_progress);
            ai_row.style = "padding-bottom:10px";
            var human_row = document.createElement("div");
            human_row.appendChild(human_progress);

            parent.insertBefore(human_row,parent.children[0]);
            parent.insertBefore(ai_row,human_row);

            $("#ai_bar").animate({ 
                width: `${ai_score}%`, 
            }, 1500);

            $("#human_bar").animate({ 
                width: `${human_score}%`, 
            }, 1500);

        }

    }

    // function assumes that progress is not in 0. format
    static create_progress_bar(id,bar_id) {

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

};




