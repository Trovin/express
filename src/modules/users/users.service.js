const mockUsers = [
    {
        id: 1,
        name: "Jon"
    },
    {
        id: 2,
        name: "Wex"
    }
]

export const getAll = () => {
    return mockUsers;
}

export const getById = (id) => {
    return mockUsers.find(u => u.id === id);
}