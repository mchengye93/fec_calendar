FROM mongo
COPY seed.json /seed.json
CMD mongoimport --host database --db airbnb-calendar --collection listings --type json --file /seed.json --jsonArray