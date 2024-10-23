import postgres from 'postgres';
import { PGCONNECT } from '$env/static/private';

// Ensure the environment variable exists
if (!PGCONNECT) {
	throw new Error('Environment variable PGCONNECT is missing.');
}

// Initialize the PostgreSQL connection
const sql = postgres(PGCONNECT, {
	ssl: { rejectUnauthorized: false }
});

export default sql;
