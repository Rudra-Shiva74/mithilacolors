export const isUserLogin = () => {
    const data = localStorage.getItem("user");
    return JSON.parse(data);
}
export const isAdminLogin = () => {
    const data = localStorage.getItem("admin");
    return JSON.parse(data);
}
