import sql from '$lib/server/database';

export async function load() {
    try {
        // Fetch data from the database
        const containers = await sql`
        SELECT
            containerNumber,
            nameOfShip,
            containerSize,
            dateContainerShipped
        FROM
            containers`;

        // Return the data
        return { containers };
    } catch (error) {
        // Log the error and return a meaningful response
        console.error('Database query failed:', error);

        return {
            status: 500,
            error: 'Failed to load container data.'
        };
    }
}
