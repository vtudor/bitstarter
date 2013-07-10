#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";


function isPrime(n)
{
	for (var j=2; j<= Math.ceil(Math.sqrt(n)); j++)
	{
		if (n>j && n % j == 0)
			return false;
	}

	return true;
}


var primes = [];
for (var i=2; primes.length <100; i++)
{

	if (isPrime(i))
		primes.push(i);
}





var out = primes;
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
