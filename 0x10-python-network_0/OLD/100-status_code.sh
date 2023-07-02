#!/bin/bash

# Check if the URL argument is provided
if [ -z "$1" ]; then
  echo "URL argument is missing."
  exit 1
fi

# Send a GET request to the URL and store the response in a variable
response=$(curl -s -o /dev/null -w "%{http_code}" "$1")

# Display the status code of the response
echo "$response"

