"use strict";
const fs = require('fs')
class LoadWords {
    load(loadedCallback) {
        fs.readFile(__dirname+'/../resources/Railway-Children.txt', 'utf-8', function(err, data){
            if(err) {
                console.log(err)
            }
            else {
                //Remove punctuation, convert to lower case
                var sanitized = this.sanitizePunctuation(data).toLowerCase();
                //Split into array
                loadedCallback(sanitized.split(" "));
            }
        }.bind(this));
    }
    sanitizePunctuation(text) {
        //Strip any non alpha numeric characters ....
        //Will only work for English text as will srip out any special characters on words ....
        return text.replace(/[^\w\s]|_/g, "")
         .replace(/\s+/g, " ");
    }
}

module.exports = new LoadWords();