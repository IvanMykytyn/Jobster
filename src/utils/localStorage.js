export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user')
}

export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
    return user;
}