#!/usr/bin/env bash

my_func () {
    local indent=1 # define indent is equal one space
    local x="$1"
    while [[ $x -lt $2 ]]; do # range of number
        if [[ $(($x % 2)) == 0 ]]; then # print only even number
            for (( i = 0; i < indent; i++ )); do
              echo -n " " # print spaces in the amount equal to our indentation, flag -n with echo to output something on the same line
            done
            echo "$x" # print number
            indent=$(( $indent + 1 )) # update indent only if number is even
        fi
        x=$(( $x + 1 ))
    done
    return 0
}

main () {
    echo "$FUNCNAME" # print current function name
    my_func "$@" # call function my_func and pass all parameters
    return 0
}

main "$@"
