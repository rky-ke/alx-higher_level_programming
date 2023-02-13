#!/usr/bin/python3
"""Defines a function that reads a file and prints it to stdout"""
def read_file(filename=""):
    with open("read_file.txt", encoding="utf=8") as filename:
        print(filename.read())
