import gql from "graphql-tag";

const last5Words = gql`
{
    words(sortField:"lastAccess",sortOrder:-1,limit:5){
    id
    name
    lastAccess
    }
}
`;
