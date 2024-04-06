import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'books_api',
    password: 'postgres',
    port: 5432,
});

export default pool;
