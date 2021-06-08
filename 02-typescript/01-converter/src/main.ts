const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");

if(!(celciusInput instanceof HTMLInputElement)) {
	throw new Error("No input element with id 'celcius' found");
}
if(!(fahrenheitInput instanceof HTMLInputElement)) {
	throw new Error("No input element with id 'fahrenheit' found'");
}

function convert(value:number, unit:string="f"):number{
	if(unit === "f"){
		return (value-32) * 5 / 9;
	}
	else if(unit === "c"){
		return (value * 9 / 5 + 32);
	}
    else{
        return NaN;
    }	
}

celciusInput.addEventListener("input", () => {
	const result = convert(parseInt(celciusInput.value),"c")
	fahrenheitInput.value = result.toString();
})

fahrenheitInput.addEventListener("input", () => {
	console.log("New fahrenheit value: " + fahrenheitInput.value)
})
