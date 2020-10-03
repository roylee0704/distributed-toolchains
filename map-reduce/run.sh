#! /bin/bash

rm -f host1/map-results/*.txt
rm -f host2/map-results/*.txt
rm -f map-results/*.txt
rm -f reduce-results/*.txt


HOST=host1 node map.js &
HOST=host2 node map.js & 

# wait for them to both be done
wait 


HOST=host1,host2 node shuffle.js


node reduce


cat reduce-results/results.txt