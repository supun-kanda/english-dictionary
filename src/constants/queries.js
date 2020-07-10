export const
lastWordsQuery = (limit) =>
`{
    words(sortField:"lastAccess",sortOrder:-1,limit:${limit}){
    id
    name
    lastAccess
    referCount
    }
}`,

paginateWords = (cursor, limit) =>
`{
    words(index:"${cursor || ""}", limit:${limit}){
    id
    name
    lastAccess
    referCount
    }
}`,

fetchSelectedWordQuery = (id) =>
`{
    word(id: "${id}") {
        id
        name
        lastAccess
        referCount
        creator {
          userName
        }
    }
}`;
