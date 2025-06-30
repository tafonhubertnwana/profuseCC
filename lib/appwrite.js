// 🔧 File: lib/appwrite.js
import { Client, Databases, Storage, Query, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
  

const databases = new Databases(client);
const storage = new Storage(client);

const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_TEAM_MEMBERS_ID;

export const getTeamMembers = async () => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [Query.limit(100)]
    );
    return response.documents;
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

export const getTeamMemberById = async (id) => {
  try {
    if (!id) throw new Error('No ID provided');

    const response = await databases.getDocument(
      DATABASE_ID,
      COLLECTION_ID,
      id
    );

    if (!response) throw new Error('Document not found');

    // Parse skills string to object if needed
    const parsedSkills = typeof response.skills === 'string'
      ? JSON.parse(response.skills)
      : response.skills;

    return { ...response, skills: parsedSkills };
  } catch (error) {
    console.error('Error in getTeamMemberById:', error);
    return null;
  }
};

export { Query, ID, databases, storage };
