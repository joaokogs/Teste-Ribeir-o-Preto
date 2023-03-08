function reverter(str) {
    let stringReversa = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringReversa += str[i];
    }
    console.log(stringReversa)

}
reverter('Reverso');