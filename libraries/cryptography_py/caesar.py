class Caesar:
    ascii_chars = [
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

    def __init__(self, key):
        self.key = key

    def encrypt(self, string):
        encrypted_string = ""
        for char in string:
            if char not in self.ascii_chars:
                raise ValueError("String contains incompatible char")

            index_on_list = self.ascii_chars.index(char)
            encrypted_index = index_on_list + self.key
            while encrypted_index > len(self.ascii_chars) or encrypted_index < 0:
                if encrypted_index > len(self.ascii_chars):
                    encrypted_index = encrypted_index - len(self.ascii_chars)
                elif encrypted_index < 0:
                    encrypted_index = encrypted_index + len(self.ascii_chars)
            encrypted_string += self.ascii_chars[encrypted_index]
        return encrypted_string

    def reverse_key(self):
        self.key *= -1


"""
Traceback (most recent call last):
  File "/home/luiz/annoying_site/app.py", line 18, in <module>
    encrypted_ydi_address = Caesar(key).encrypt(you_did_it_address)
                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  File "/home/luiz/annoying_site/libraries/cryptography_py/caesar.py", line 116, in encrypt
    encrypted_string += self.ascii_chars[encrypted_index]
                        ~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^
IndexError: list index out of range
"""


if __name__ == "__main__":
    c = Caesar(984984)
    m = "Hello World"
    e = c.encrypt("Hello World")
    print(e)
    c.reverse_key()
    d = c.encrypt(e)
    print(d)
