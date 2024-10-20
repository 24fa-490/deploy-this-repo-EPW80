
import sql from '$lib/server/database';

export async function load() {
    // Await the result of the query
    const result = await sql`
      SELECT
          containerNumber,
          nameOfShip,
          containerSize,
          dateContainerShipped
      FROM
          containers
    `;
    
    // Return the rows as part of the response
    return {
      rows: result
    };
  }
