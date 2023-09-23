export const serverHost = "https://f712-84-54-72-144.ngrok-free.app"

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
}


export default new Server(serverHost)