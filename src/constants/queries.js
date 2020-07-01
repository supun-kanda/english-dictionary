export const
last5WordsQuery =
`{
    words(sortField:"lastAccess",sortOrder:-1,limit:5){
    id
    name
    lastAccess
    }
}`,

fetchSelectedWordQuery = (id) =>
`{
    word(id: ${id}) {
        name
        lastAccess
        creator {
          userName
        }
    }
}`;
