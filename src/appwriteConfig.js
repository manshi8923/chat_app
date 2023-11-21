import { Client,Account ,Databases} from "appwrite";
const client = new Client();

export const PROJECT_IQ='6559f9aad9ddf8392ef7';
export const DATABASE_ID='6559fa8a51f3e5d2a610';
export const COLLECTION_ID_MESSAGES='6559fa9d4c1ce6f9fa7c';
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6559f9aad9ddf8392ef7');

export const account = new Account(client);
export const databases=new Databases(client);
export default client;
