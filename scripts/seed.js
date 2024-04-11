const { db } = require('@vercel/postgres');
const {
    users
} = require('../app/lib/placeholder-data');

console.log();
async function posts(client){
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS posts (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            date DATE NOT NULL
        );
        `;
        console.log('Created "posts" Table');

        // const insertedUsers = await Promise.all(
        //     users.map(async (user)=>{
        //         return client.sql`
        //         INSERT INTO teachers (id, name, email, password)
        //         VALUES (${user.id},${user.name},${user.email},${user.password})
        //         ON CONFLICT (id) DO NOTHING;
        //         `;
        //     }),
        // );

        // console.log(`seeded ${insertedUsers.length} users`);
        return{
            createTable,
            // users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error; 
    }
}

async function getTeacher(client){
try {
    const teacher = await client.sql`SELECT * FROM teachers;`
    console.log(teacher);
} catch (error) {
    console.error('Error seeding users:', error);
    throw error; 
}
}

async function main() {
    const client = await db.connect();
  
    await posts(client);
    console.log("done")
    // await seedCustomers(client);
    // await seedInvoices(client);
    await client.end();
}
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  