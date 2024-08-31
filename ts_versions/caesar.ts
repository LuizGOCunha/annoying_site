class Caesar{
    key: number
    ascii_chars: Array<string>
    constructor (key: number){
        this.key = key
        this.ascii_chars = [
        " ",
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "[",
        "\\",
        "]",
        "^",
        "_",
        "`",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "{",
        "|",
        "}",
        "~",
        ]
    }

    encrypt(string){
        let encrypted_string = ""
        console.log("Encrypting with this key:" + this.key)
        // for char in string:
        for (let i = 0; i < string.length; i++){
            let char = string[i]
    //     if char not in self.ascii_chars:
    //         raise ValueError("String contains incompatible char")
            if (string.includes(char) === false){
                throw ReferenceError("String contains incompatible char")
            }
        
    //     index_on_list = self.ascii_chars.index(char)
    //     encrypted_index = index_on_list + self.key
            let index_on_list = this.ascii_chars.indexOf(char)
            let encrypted_index = index_on_list + this.key
    //     while encrypted_index > len(self.ascii_chars) or encrypted_index < 0:
            while ((encrypted_index >= this.ascii_chars.length) || (encrypted_index < 0)){
    //         if encrypted_index > len(self.ascii_chars):
    //             encrypted_index = encrypted_index - len(self.ascii_chars)
                if (encrypted_index > this.ascii_chars.length){
                    encrypted_index = encrypted_index - this.ascii_chars.length
                }
    //         elif encrypted_index < 0:
    //             encrypted_index = encrypted_index + len(self.ascii_chars)
                else if (encrypted_index < 0){
                    encrypted_index = encrypted_index + this.ascii_chars.length
                }
            }
            encrypted_string += this.ascii_chars[encrypted_index]
            
            //     encrypted_string += self.ascii_chars[encrypted_index]
            // return encrypted_string
        }

    return encrypted_string
    }

    reverseKey(){
        this.key *= -1
    }

}

export default Caesar;