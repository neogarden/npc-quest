var TextDropdown = (function () {
    function TextDropdown(arr, value) {
        this.value = value;
        this.arr = arr;
    }
    TextDropdown.prototype.ExportDom = function (att_name) {
        var select = document.createElement("select");
        for (var i = 0; i < this.arr.length; i++) {
            var option = document.createElement("option");
            option.value = this.arr[i].value;
            option.innerHTML = this.arr[i].name;
            select.appendChild(option);
        }
        this.dom = select;
        this.dom.value = this.value;
        return select;
    };
    TextDropdown.prototype.UpdateFromDom = function () {
        this.value = this.dom.options[this.dom.selectedIndex].value;
    };
    return TextDropdown;
}());
