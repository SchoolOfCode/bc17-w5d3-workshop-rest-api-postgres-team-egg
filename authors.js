// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAuthors() {
  // Query the database and return all authors

  // Define the SQL query to fetch all authors from the 'authors' table 
  const eggQueryTest = "SELECT * FROM authors";

  // Use pool object to send query to database 
  const eggResult = await pool.query(eggQueryTest);

// rows property of the result object contains the retrieved records 
return eggResult.rows; 
}

export async function getAuthorById(id) {
  // Query the database and return the author with a matching id or null

  const eggQueryText = "SELECT * FROM authors WHERE id = $1";

  const friedResult = await pool.query(eggQueryText, [id])

  return friedResult.rows[0] || null

}

export async function createAuthor(author) {
  // Query the database to create an author and return the newly created author

  //split data from body into two vars to they can be insterted into two seperate columns
  //read json from body
  //convert ti js
  //split into two objects ??? array

//   {
//     "first_name": "Eggbert",
//     "last_name": "Sandwich"
// }

  
  //assign these to two variables
  eggLastname = 
  eggFirstname = 

  const eggQueryText = "INSERT INTO authors (first_name, last_name) VALUES ($1, $2)"

  const friedResult = await pool.query(eggQueryText, [eggFirstname] [eggLastname])
}

export async function updateAuthorById(id, updates) {
  // Query the database to update an author and return the newly updated author or null
}

export async function deleteAuthorById(id) {
  // Query the database to delete an author and return the deleted author or null
}
