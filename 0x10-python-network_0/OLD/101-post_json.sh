#!/bin/bash

# Check if the URL and filename arguments are provided
if [ $# -lt 2 ]; then
    echo "Usage: $0 <URL> <filename>"
    exit 1
fi

url=$1
filename=$2

# Check if the file exists
if [ ! -f "$filename" ]; then
    echo "File '$filename' not found."
    exit 1
fi

# Check if the file contains valid JSON
if ! jq . "$filename" >/dev/null 2>&1; then
    echo "Not a valid JSON"
    exit 1
fi

# Send the POST request and display the response body
response=$(curl -s -X POST -H "Content-Type: application/json" --data-binary "@$filename" "$url")
echo "$response"
