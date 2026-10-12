"use server"

import {  SignUpInput, SignUpSchema,  } from "../schemas/authSchema"
import { authService } from "../services/AuthService"

export async function signUpAction(input : SignUpInput){
    
     const data = SignUpSchema.safeParse(input)

        if(!data.success) {
        return  {
            error: "Error en la validación de los datos",
            success: " "
            }
        }

        await authService.register(data.data)
    }
    
