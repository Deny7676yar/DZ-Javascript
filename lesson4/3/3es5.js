'use strict'

function Post(author, text, date){
    this.author = author;
    this.text = text;
    this.date = date;

}

Post.prototype.edit = function() {
    this.text = "text2";
}

function AttachedPost(author, text, date, highlighted){
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let postNew = new AttachedPost("Вася", "текст от Васи", 15);
postNew.edit('text2');
postNew.makeTextHighlighted();
console.log(postNew);