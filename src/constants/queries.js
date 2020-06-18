export const last5Words = `
{
    words(sortField:"lastAccess",sortOrder:-1,limit:5){
    id
    name
    lastAccess
    }
}
`;
