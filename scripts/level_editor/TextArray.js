function TextArray(txtarray){
	this.value = txtarray;
	this.dom = [];
}

TextArray.prototype.ExportDom = function(att_name){
	var value = "";
	for (var i = 0; i < this.value.length; i++){
		value += this.value[i];
		value += ";\n";
	}
	
	var txt = document.createElement("textarea");
	txt.value = value;
	this.dom = txt;
	
	return txt;
}

TextArray.prototype.UpdateFromDom = function(){
	this.value = [];
	var value = this.dom.value.split(";").map(x => x.trim());
	var offset = 0;
	for (var i = 0; i < value.length; i++){
		if (value[i].length <= 0 || value[i] === undefined){ 
			offset++;
			continue;
		}
		this.value[i-offset] = value[i];
	}
}