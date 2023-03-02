function Book(){
    this.author=" "
    this.type=""

}
Book.prototype.name=function(){
    this.author="eeeee"
    return this
}
Book.prototype.types=function(){
    this.type="rrrr"
    return this
}
Book.prototype.result=function(){
    console.log(this.author,this.type)
    return this
}
var book =new Book()
book.result("sww","hh").name(),types()