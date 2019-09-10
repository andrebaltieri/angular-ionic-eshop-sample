export class UserUtil {
    static get(): any {
        const data = localStorage.getItem('eshop.user');
        if (!data) return null;
        return JSON.parse(data);
    }

    static set(data) {
        localStorage.setItem('eshop.user', JSON.stringify(data));
    }

    static clear() {
        localStorage.removeItem('eshop.user');
    }
}