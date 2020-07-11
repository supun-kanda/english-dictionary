export const
lastWordsQuery = limit =>
`{
    words(sortField:"lastAccess",sortOrder:-1,limit:${limit}){
    id
    name
    lastAccess
    referCount
    }
}`,

paginateWords = (pageNumber, limit) =>
`{
    words(skip:${pageNumber >= 1 ? (pageNumber - 1) * limit : 0}, limit:${limit}){
    id
    name
    lastAccess
    referCount
    }
}`,

fetchSelectedWordQuery = id =>
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
}`,

countVocabulary = () =>
`{
    count
}`
