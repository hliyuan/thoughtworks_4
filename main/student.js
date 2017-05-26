let Person = require('./person')
// Write your code here
module.exports =function Student(name,age,kclass){
	Person.call(this,name,age);
	this.kclass = kclass;
	this.introduce=function(){
		return "My name is "+name+". I am "+age+" years old. I am a Student. I am at Class "+kclass+".";
	}
}

