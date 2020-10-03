# Map-Reduce

MapReduce is a programming model for processing and generating big data sets with a parallel, distributed algorithm on a cluster.

![alt text](https://github.com/roylee0704/system-designs/blob/master/map-reduce/assets/map-reduce.png?raw=true)



## Getting Started

Generate latency file for each host (host1, host2).

```sh
$ make bootstrap
```

Run map step. It processes latencies.txt from each host, and split out intermediate key value pairs in the form of file, where key is represented as filename, value is represented as 1. 

In this example, two keys are being chosen to aggregate latencies: `under_10_seconds` and `over_10_seconds`. 

```sh
$ make map
```


Run shuffle step.

```sh
$ make shuffle
```



Run reduce step.

```sh
$ make reduce
```


Run every steps.
```sh
make run
```
