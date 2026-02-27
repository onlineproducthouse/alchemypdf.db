# AlcheMyPDF NodeJS Sequelize Database Project

This project is responsible for maintaining the AlcheMyPDF database.

## Dependencies

A running instance of PostreSQL is required

## Installation

```bash
# clone repository
mkdir alchemypdf
cd alchemypdf
git clone https://github.com/onlineproducthouse/alchemypdf.db.git .

# install dependencies
npm i

# build project
npm run build
```

## Usage

```bash
# set to either: local, test, qa, prod
export ENVIRONMENT_NAME=local

# set environment variables for the postgres database instance
export ALCHEMYPDF_DB_HOST=127.0.0.1
export ALCHEMYPDF_DB_NAME=alchemypdf
export ALCHEMYPDF_DB_PASSWORD=password
export ALCHEMYPDF_DB_PORT=5432
export ALCHEMYPDF_DB_PROTOCOL=postgres
export ALCHEMYPDF_DB_USERNAME=root

# run the database migration
npm run db:up
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
