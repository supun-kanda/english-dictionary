import { GraphQLClient } from 'graphql-request';
import { apiUrl, endPoints } from "../constants/appConstants";

const graphqlEndpoint = `${apiUrl}${endPoints.GRAPHQL}`,
    client = new GraphQLClient(graphqlEndpoint, { headers: {} })

export async function request(query) {
    return await client.request(query).then(data => data);
}