#!/usr/bin/env bash

case "$1" in
    (jpeg|jpg)
        echo "It is jpeg."
    ;;
    (gif)
        echo "It is gif."
    ;;
    (png)
        echo "It is png."
    ;;
    (*)
        echo "$1 is not an image!"
    ;;
esac
