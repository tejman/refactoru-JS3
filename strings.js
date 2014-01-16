// ********CHECK PHONE NUMBER*********
var phone = prompt("Enter your phone number in the format xxx-xxx-xxxx: ");
var numbers = phone.replace(/-/g, "");
var justnum = parseInt(numbers);
var justnumstr = justnum.toString();


if (phone.charAt(3)==="-" && phone.charAt(7)==="-" && isNaN(justnum)===false && justnumstr.length===10)  
{

	alert("Your phone number is valid!");
}
else 

{
	alert("Your phone number is NOT valid!");
}


// *******CHECK DATE OF BIRTH*********
var dob = prompt("Enter your DOB in the format xx/xx/xx: ");
var numbers = dob.replace(/\//g, "")
var justnum = parseInt(numbers)
var justnumstr = justnum.toString()


if (dob.charAt(2)==="/" && dob.charAt(5)==="/" && isNaN(justnum)===false && justnumstr.length===6)  
{
	alert("Your DOB is valid!");
}

else 
{
	alert("Your DOB is NOT valid!");
}

// ********CHECK POSTAL CODE*********

var postcode = prompt("Enter your postal code in the format xxxxx OR xxxxx-xxxx: ");
var numbers = postcode.replace(/-/g, "")
var justnum = parseInt(numbers)
var justnumstr = justnum.toString()


if (isNaN(justnum)===false && ((justnumstr.length===5 && postcode.length===5)  || (justnumstr.length===9 && postcode.charAt(5)==="-" ))) 
{
	alert("Your postal code is valid!");
}

else 
{
	alert("Your postal code is NOT valid!");
}


// **********CHECK STATE**********

var state = prompt("Enter the abbreviation for any state in the format XX: ");


if (state.length===2 && state.toUpperCase()===state && typeof state==="string") 
{
	alert("Your state abbreviation is valid!");
}

else 
{
	alert("Your state abbreviation is NOT valid!");
}

// *******CHECK FOR MARRIAGE***********
var single = prompt("Are you married? Yes or No: ");


if (single.toLowerCase()==="yes") 
{
	alert("You are married!");
}

else if (single.toLowerCase()==="no")
{
	alert("You are NOT married!!");
}

else 
{
	alert("What?")
}

