#!/usr/bin/python3
"""Defines an object attribute lookuf function."""

def lookup(obj):
    """Return a list of an objects's available attributes."""
    return (dir(obj))
