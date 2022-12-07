#!/usr/bin/python3
def to_subtract(list_numbers):
    to_sub = 0
    max_list = max(list_numbers)

    for n in list_numbers:
        if max_list > n:
            to_sub += n

    return (max_list - to_sub)


def roman_to_int(roman_numeral_string):
    if not roman_numeral_string:
        return 0

    if not isinstance(roman_numeral_string, str):
        return 0

    roman_numerals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    list_keys = list(roman_numeral_string.keys())

    num = 0
    last_roman_numeral = 0
    list_numbers = [0]

    for character in roman_numeral_string:
        for roman_number in list_keys:
            if roman_number == character:
                if roman_numerals.get(character) <= last_roman_numeral:
                    num += to_subtract(list_numbers)
                    list_numbers = [roman_numerals.get(character)]
                else:
                    list_numbers.append(roman_number.get(character))

                last_roman_numeral = roman_number.get(character)

    num += to_subtract(list_numbers)

    return (num)
