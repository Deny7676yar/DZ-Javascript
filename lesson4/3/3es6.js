'use strict'

class Post{
    constructor(author, text, date){
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit() {
        this.text = "text2";
    }
}

class AttachedPost extends Post{
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = false;

    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let postNew = new AttachedPost("Вася", "текст от Васи", 15);
postNew.edit('text2');
postNew.makeTextHighlighted();
console.log(postNew);