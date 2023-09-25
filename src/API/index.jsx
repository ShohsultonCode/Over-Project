export const serverHost = "http://localhost:7000/api"
class Server {
    constructor(host) {
        this.serverHost = host
    }

    async fetch(path, option = {}) {
        const respons = await fetch(`${this.serverHost}${path}`, { method: "GET", credentials: "include", ...option })
        return await respons.json()
    }


    async overSearch(value) {
        const data = await this.fetch("/filter/search", { method: "POST", body: JSON.stringify({ value }), headers: { 'Content-Type': 'application/json' } })
        return data
    }

    async register(value) {
        const data = await this.fetch("/auth/register", { method: "POST", body: JSON.stringify(value), headers: { 'Content-Type': 'application/json' } })
        return data
    }
    async login(value) {
        const data = await this.fetch("/auth/login", { method: "POST", body: JSON.stringify({ value }), headers: { 'Content-Type': 'application/json' } })
        return data
    }
    async getPosts(value) {
        const data = await this.fetch("/blogs", { method: "GET", headers: { 'Content-Type': 'application/json' } })
        return data
    }
}


export default new Server(serverHost)