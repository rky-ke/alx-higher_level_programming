#!/usr/bin/python3
"""Defines a function is_same_class"""
def is_same_class(obj, a_class):
    """Checks type of obj"""
    if type(obj) == a_class:
        return (True)
    else:
        return (False)
