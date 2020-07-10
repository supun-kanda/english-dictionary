export const
last5WordsQuery =
`{
    words(sortField:"lastAccess",sortOrder:-1,limit:5){
    id
    name
    lastAccess
    referCount
    }
}`,

fetchSelectedWordQuery = (id) =>
`{
    word(id: ${id}) {
        id
        name
        lastAccess
        referCount
        creator {
          userName
        }
    }
}`;
