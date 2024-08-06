class Utilities{

    // Assumes that the array only has 2 elements
    static check_alt_x(key_presses){

        if (key_presses[0] == Constants.alt_key_name && key_presses[1]==Constants.x_key_name){
            return true
        }else{
            return false
        }  

    }

    static get_parent_above(element,n_levels){
        let parent = element

        for(let i = 0;i<n_levels;i++){
            parent = parent.parentNode;
        }
        
        return parent
    }

    static multiplyBy100(number) {
        return Math.round(number * 100);
    }

    static extractNumbers(inputString) {
        const regex = /[\d.]+/g;
        let matches;
        const result = [];
    
        while ((matches = regex.exec(inputString)) !== null) {
            result.push(parseFloat(matches[0]));
        }
    
        return result;
    }

    // Function to check for duplicate elements by ID within the same parent
    static hasDuplicateId(parent, elementId) {
        return parent.querySelectorAll(`#${elementId}`).length >= 1;
    }

}