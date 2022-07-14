export default function axiosHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    // console.log("user", user)
    if (user && user.token) {
        return { Authorization: user.token };
    } else {
        return {};
    }
}