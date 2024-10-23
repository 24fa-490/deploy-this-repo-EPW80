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

        // Return the fetched data
        return { containers };
    } catch (error) {
        console.error('Error fetching data:', error);

        return {
            status: 500,
            error: 'Failed to load container data.'
        };
    }
}
