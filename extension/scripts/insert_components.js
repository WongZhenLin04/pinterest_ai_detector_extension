class Scores{

    //function assumes that the scores are integers
    static create_score_bars(ai_score,human_score) {

        var ai_progress = this.create_progress_bar("ai_score",ai_score)

        var human_progress = this.create_progress_bar("ai_score",human_score)

        let element = document.getElementById("gradient");
        let parent = Utilities.get_parent_above(element,3);
        
        parent.insertBefore(human_progress,parent.children[0]);
        parent.insertBefore(ai_progress,human_progress)

    }

    // function assumes that progress is not in 0. format
    static create_progress_bar(id,progression) {

        //creating wrapper for the progress bar
        var progress = document.createElement("div");
        progress.className = "progress";
        progress.id = id;

        //creating the bar itself
        var progress_bar = document.createElement("div");
        progress_bar.className = "progress-bar";
        progress_bar.role = "progressbar";
        progress_bar.style = `width: ${progression}%`;
        progress_bar.ariaValueNow = `${progression}`;
        progress_bar.ariaValueMin = "0";
        progress_bar.ariaValueMax = "100";

        progress.appendChild(progress_bar);

        return progress

    }

};




