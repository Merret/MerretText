function indent(code) {
    var json = function() {
        var reg = /(\[|\]|\{|\}|\"|\')/g;
        var last = 0, tab = 0;
        while(code.indexOf(reg, last)!=-1) {
            var index = code.indexOf(reg, last);
            last = code.indexOf(reg, last)+1 < code.length ? code.indexOf(reg, last)+1 : code.length;
            var chr = code.charAt(code.indexOf(reg, last));
            if(chr == "[") {
                code.replace(index, )
                ++tab;
            } else if(chr == "{") {
                
                ++tab;
            } else if(chr == "]") {
                
                --tab;
            } else if(chr == "}") {
                
                --tab;
            } else if(chr == "\"" || chr == "\'") {
                
            }
        }
    };
    return {
        "json" : json
    };
}
