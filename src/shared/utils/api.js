

const API_URL = import.meta.env.API_URL || 'http://localhost:3003'

export class HandleApi {
    // Login
    static async login({ email, password }) {
        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()

            if (response.ok) {
                return data
            } else {
                return data
            }
        } catch (error) {
            console.error(error.message)
            return data
        }
    }

    // Logout
    static async logout() {
        try {
            const response = await fetch(`${API_URL}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()

            if (response.ok) {
                return data
            } else {
                return data
            }
        } catch (error) {
            console.error(error.message)
            return data
        }
    }
    // Verificar token
    static async verifyToken() {
        try {
            console.log(`${API_URL}/login`)
            const response = await fetch(`${API_URL}/verify-token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()

            if (response.ok) {
                return { data: data, status: response.status }
            } else {
                return data
            }
        } catch (error) {
            return error
        }
    }

    // Registro
    static async register({ firstName, firtsLastname, phone, email, password }) {
        try {
            const response = await fetch(`${API_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, firtsLastname, phone, email, password }),
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                return data
            }
        } catch (error) {
            return error
        }
    }

    static async postDeposit({ id, sourceCard, destinationCard, amount }) {
        try {
            const response = await fetch(`${API_URL}/incomes/create/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sourceCard, destinationCard, amount }),
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()
            if (response.ok) {
                return { data, status: response.status }
            } else {
                return data
            }
        } catch (error) {
            return error
        }
    }

    static async getTransactions({ id }) {
        try {
            const response = await fetch(`${API_URL}/transactions/${id}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                return data
            }
        } catch (error) {
            return error
        }
    }

    static async getUser({ id }) {
        try {
            const response = await fetch(`${API_URL}/user/${id}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                return data
            }
        } catch (error) {
            return error
        }
    }

    static async getCards({ id }) {
        try {
            const response = await fetch(`${API_URL}/cards/${id}`, {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            })

            const data = await response.json()
            if (response.ok) {
                console.log('Cartas obtenidas:', data)
                return data
            } else {
                throw new Error(data.message || 'Error al obtener Cartas')
            }
        } catch (error) {
            console.error('Error al obtener Cartas:', error)
            throw error
        }
    }


    // Filtrar transacciones por fecha
    static async filterByDate({ dateTransaction }) {
        try {
            const response = await fetch(`${API_URL}/filterDate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
                body: JSON.stringify({ dateTransaction }),
            })

            const data = await response.json()
            if (response.ok) {
                console.log('Filtrado por fecha:', data)
                return data
            } else {
                throw new Error(data.message || 'Error al filtrar por fecha')
            }
        } catch (error) {
            console.error('Error al filtrar por fecha:', error)
            throw error
        }
    }
}
