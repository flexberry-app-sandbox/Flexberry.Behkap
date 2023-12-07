docker build --no-cache -f SQL\Dockerfile.PostgreSql -t behkap-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t behkap-java/app ../../..
