import { Client, Account, Databases } from 'appwrite';

/*
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT
export const PROJECT_ID = import.meta.env.VITE_PROJECT_ID '64c9059c8ef2e6692618'
export const DATABASE_ID = import.meta.env.VITE_DATABASE_ID '64c90f8d49701e2c7f5c'
export const COLLECTION_ID_MESSAGES = import.meta.env.VITE_COLLECTION_ID_MESSAGES '64c90fa957144ca44cf5'
*/

export const PROJECT_ID = '64c9059c8ef2e6692618'
export const DATABASE_ID = '64c90f8d49701e2c7f5c'
export const COLLECTION_ID_MESSAGES = '64c90fa957144ca44cf5'

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64c9059c8ef2e6692618');  

export const account = new Account(client);
export const databases = new Databases(client)

export default client;