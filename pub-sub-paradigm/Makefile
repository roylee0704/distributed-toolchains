pubsub_server:
	node pubsub-server.js

subscriber:
	TOPIC_ID=stock_prices node subscriber.js

publisher:
	(for i in `seq 1 10000`; do sleep 1; echo New Stock Price; done) | NAME=STOCK_BROKER TOPIC_ID=stock_prices node publisher.js