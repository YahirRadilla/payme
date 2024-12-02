

const API_URL = import.meta.env.API_URL || 'http://localhost:3003'

export class HandleApi {
    // Login
    static async login({ email, password }) {
        try {
            console.log(`${API_URL}/login`)
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
            console.error(error.message)
            return data
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
            })

            const data = await response.json()
            if (response.ok) {
                return data
            } else {
                return data
            }
        } catch (error) {
            return data
        }
    }

    // Transferencias
    static async getTransfers() {
        try {
            const response = await fetch(`${API_URL}/transfers`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            })

            const data = await response.json()
            if (response.ok) {
                console.log('Transferencias obtenidas:', data)
                return data
            } else {
                throw new Error(data.message || 'Error al obtener transferencias')
            }
        } catch (error) {
            console.error('Error al obtener transferencias:', error)
            throw error
        }
    }

    // Pagos
    static async getPayments() {
        try {
            const response = await fetch(`${API_URL}/payments`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            })

            const data = await response.json()
            if (response.ok) {
                console.log('Pagos obtenidos:', data)
                return data
            } else {
                throw new Error(data.message || 'Error al obtener pagos')
            }
        } catch (error) {
            console.error('Error al obtener pagos:', error)
            throw error
        }
    }

    // Ingresos
    static async getIncomes() {
        try {
            const response = await fetch(`${API_URL}/incomes`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            })

            const data = await response.json()
            if (response.ok) {
                console.log('Ingresos obtenidos:', data)
                return data
            } else {
                throw new Error(data.message || 'Error al obtener ingresos')
            }
        } catch (error) {
            console.error('Error al obtener ingresos:', error)
            throw error
        }
    }

    // Retiros
    static async getWithdrawals() {
        try {
            const response = await fetch(`${API_URL}/withdrawal`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                },
            })

            const data = await response.json()
            if (response.ok) {
                console.log('Retiros obtenidos:', data)
                return data
            } else {
                throw new Error(data.message || 'Error al obtener retiros')
            }
        } catch (error) {
            console.error('Error al obtener retiros:', error)
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
