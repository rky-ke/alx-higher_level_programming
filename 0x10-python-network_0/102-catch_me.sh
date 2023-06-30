#!/bin/bash

# Make the request and save the response headers to a file
curl -s -X PUT 0.0.0.0:5000/catch_me --output /dev/null --write-out "You got me!"

