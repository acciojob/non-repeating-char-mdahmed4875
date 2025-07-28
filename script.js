function firstNonRepeatedChar(str) {
 // Write your code here
	let len=str.length;
	let freq={};
	for(let i=0;i<len;i++){
		freq[str.charAt(i)]=(freq[str.charAt(i)]||0)+1;
	}
	for(let i=0;i<len;i++){
		if(freq[str.charAt(i)]===1)return str.charAt(i);
	}
	return null;
	
} 
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
