const greet = function(name){
	return function(m){
	
		console.log(`Hi!! ${name}, ${m}`);
	}
}

const message = greet('ABC');
message("Welcome")