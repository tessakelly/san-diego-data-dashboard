# San Diego Data Dashboard

This project exists to provide interactive visualizations of data published by the city of San Diego.

## Components
- `api/`: Node.js (Express) API providing methods to access the data in a PostgreSQL database
- `client/`: React UI

## Running locally

### Database
*Instructions will be added after migration is set up*

### Server
```
cd api
npm install
```
Create `secret-config.json` file (see `secret-config.example.json`)
```
set DEBUG=myapp:* & npm run dev
```

### UI
```
cd client
npm install
npm start
```

## Future Plans
- Add migrations for database setup
- Add additional data sources and visualizations and navigation
- Set up daily automated data imports
- Deploy
