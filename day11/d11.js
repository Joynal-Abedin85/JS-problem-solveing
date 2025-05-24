let s = "middle-Outz";
let k = 2;

k = k % 26

let result = "";

for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    // ছোট হাতের অক্ষর
    if (ch >= 'a' && ch <= 'z') {
        let code = ch.charCodeAt(0); // ASCII মান
        let shifted = ((code - 97 + k) % 26) + 97;
        result += String.fromCharCode(shifted);
    }

    // বড় হাতের অক্ষর
    else if (ch >= 'A' && ch <= 'Z') {
        let code = ch.charCodeAt(0);
        let shifted = ((code - 65 + k) % 26) + 65;
        result += String.fromCharCode(shifted);
    }

    // অক্ষর ছাড়া অন্য কিছু হলে যেমন আছে তেমনই রাখো
    else {
        result += ch;
    }
}

console.log(result)
