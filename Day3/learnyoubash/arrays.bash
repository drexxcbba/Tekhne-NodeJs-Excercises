#!/usr/bin/env bash
lista=($*)
lista=(I am ${lista[1]} ${lista[2]} and ${lista[3]})
echo ${lista[*]}
