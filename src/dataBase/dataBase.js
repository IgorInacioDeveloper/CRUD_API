/* eslint-disable new-cap */
import neo4j from 'neo4j-driver'
import { env } from '../env/index.js'

let session

export async function runDB() {
  const driver = new neo4j.driver(
    'neo4j://localhost:7687',
    neo4j.auth.basic(`${env.USER}`, `${env.PASSWORD}`),
  )

  session = driver.session({
    database: `${env.DB}`,
  })

  console.log('DataBase ON')
}

export { session }
