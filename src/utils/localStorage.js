export const getLocalUser = () => {
    const result = localStorage.getItem('user');
    const user = result ? JSON.parse(result) : null;
    return user;
}
export const saveLocalUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
}

export const removeLocalUser = (data) => {
    localStorage.removeItem('user');
}