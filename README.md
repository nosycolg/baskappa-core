# baskappa-core

docker run --rm --name baskappa -e MYSQL_ROOT_PASSWORD=root -d -p 3306:3306 mysql:8.0

mysql --host=localhost --user=root --password=root --port 3306 --protocol=tcp -e "create schema baskappa;"
