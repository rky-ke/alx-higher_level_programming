#!/usr/bin/python3
"""Defines a function that tells if object is instance
of a specified class"""
def is_same_class(obj, a_class):
    """returns true if abj isinstance of a_class"""
    if type(obj) == a_class:
        return (True)
    else:
        return (False)

