#!/usr/bin/env bash

x="$1"
while [[ $x -lt $2 ]]; do
    if [[ $(($x % 2)) == 0 ]]; then
        echo "$x"
    fi
    x=`expr $x + 1` # increase x
done

i=$1
    while [[ $i -lt $2 ]]; do
      [ ! $(( $i % 2 )) -eq 0 ] || echo $i
      i=$(( $i + 1 ))
    done

