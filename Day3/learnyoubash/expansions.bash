#!/usr/bin/env bash
RESULT=$(( $1*($2+$3) ))
echo project-$RESULT/{src/{index.js,util.js},dest/{index.js,util.js},test/{index.js,util.js}}
R=$(( ($3 + $2) * $1))
echo project-$R/{src,dest,test}/{index,util}.js

