-- Updated PostgreSQL-compliant SQL schema

CREATE TABLE containers (
    containerNumber VARCHAR(10),  -- Adjusted length to match typical container numbers
    nameOfShip TEXT,              -- Use TEXT for variable-length names
    containerSize NUMERIC,        -- NUMERIC provides better precision for container sizes
    dateContainerShipped DATE     -- Use DATE for date types
);

-- Inserting sample data
INSERT INTO containers (containerNumber, nameOfShip, containerSize, dateContainerShipped)
VALUES
    ('123', 'COSCO Star', 50, '2024-01-01'),
    ('456J', 'MAERSK Rock', 25.6, '2024-03-08'),
    ('x1', 'Betty', 34, '2024-05-14');

-- Creating a unique index on the containerNumber
CREATE UNIQUE INDEX idx_containers_containerNumber ON containers (containerNumber);
