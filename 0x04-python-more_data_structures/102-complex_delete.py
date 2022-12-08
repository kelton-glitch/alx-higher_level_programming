#!/usr/bin/python3
def complex_delete(a_dictionary, value):
    list_keys = list(a_dictionary.keys())

    for value_chosen in list_keys:
        if value == a_dictionary.get(value_chosen):
            del a_dictionary[value_chosen]

    return (a_dictionary)
