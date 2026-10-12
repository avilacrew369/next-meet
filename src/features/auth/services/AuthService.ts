import { SignUpInput } from "../schemas/authSchema"

class AuthService {

    async register(credentials: SignUpInput) {
        
        // Implementation for user registration
        const { name, email, password } = credentials
    }

}

export const authService = new AuthService()