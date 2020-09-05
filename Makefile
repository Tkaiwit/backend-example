default: \
	greeting \
	start-test \
	start-app

greeting:
	echo "Loading . . . ."

start-test:
	npm run test

start-app:
	docker-compose -p cat-backend up -d
