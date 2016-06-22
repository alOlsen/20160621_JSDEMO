console.log("READY!");

var fn = "Disney";
var age 	= 21;
console.log( fn )

console.log( fn.length )

console.log( fn.indexOf("A") )

console.log( typeof( age ) )

var week = ['m','t','w','th','f','sat','sun'];

console.log( week.length )

console.log( week.length - 1 )

var arrCount = week.length;

//arrCount++ // arrCount = arrCount + 1
//arrCount-- // arrCount = arrCount - 1

console.log( week[ --arrCount ] )


console.log( typeof( arrCount ) )

console.log( isNaN( arrCount ) )

var zipCode = 12345;

console.log( isNaN( zipCode ) )


if( isNaN( zipCode ) ){
	console.log( "Sorry, this is not a valid zip code")
}else{
	console.log( "Thanks for providing your zip code")
}

console.log( typeof( zipCode.toString() ) )


var myArray = new Array();
console.log( "Before")
console.log( myArray );

for(var i = 0; i < 100; i++){
	if( i <= 1 ){
		myArray.push( "I drink " + i + " beer" );// concatenation
	}else{
		myArray.push( "I drink " + i + " beers" );// concatenation
	}
	
}
console.log( "After")
console.log( myArray )