#!/bin/bash

# killing bundling for now until work out babel issue
# "Cannot find preset babel/env relative to directory public"
#./install_bundle_deps.sh

npm rebuild &> /dev/null 
cd zombie-lord 
npm i &> /dev/null  && npm rebuild &> /dev/null 
cd ../public/voodoo
npm i &> /dev/null  && npm rebuild &> /dev/null 
# cd ../../endbacker
# npm i &> /dev/null  && npm rebuild &> /dev/null 
cd ../../zombie-lord/custom-launcher
npm i &> /dev/null  && npm rebuild &> /dev/null 
cd ../../


