bootstrap: clean
	HOST=host1 N=10 node gen-latencies
	HOST=host2 N=10 node gen-latencies

map:
	HOST=host1 node map
	HOST=host2 node map

shuffle:
	HOST=host1,host2 node shuffle

reduce:
	node reduce

clean: 
	@rm ./host1/*.txt 2> /dev/null || true
	@rm ./host1/map-results/*.txt 2> /dev/null  || true
	@rm ./host2/*.txt 2> /dev/null || true
	@rm ./host2/map-results/*.txt 2> /dev/null || true
	@rm ./map-results/*.txt 2> /dev/null || true
	@rm ./reduce-results/*.txt 2> /dev/null || true


run:
	sh run.sh