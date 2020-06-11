function char_count(input) {

    let str = input[0],
        letter = input[1],
        letter_Count = 0;

    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    alert(letter_Count);
    return letter_Count;
}
char_count(['Hello', 'l']);
