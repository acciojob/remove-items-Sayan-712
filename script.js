//your JS code here. If required.
const dropDown=document.querySelector("#colorSelect");
const btn=document.getElementByTagName("input")[0];
btn.addEventListener("click",() =>
	{
		let option=document.getElementByTagName("option");
		for(let i=0;i<option.length;i++)
			if(option[i].innerText===dropDown.value)
				return dropDown.removeChild(option[i])
	});
