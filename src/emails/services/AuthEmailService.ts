import { emailConfig } from "../config/config";
import { PasswordResetEmailData, VerificationEmailData } from "../types/email.types";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmail";
import { EmailService } from "./EmailService";
import { renderPasswordResetEmail } from "../templates/PasswordResetEmail";


export class AuthEmailService {
    static async sendVerificationEmail(data: VerificationEmailData) : Promise<void>{
        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            subject: 'Meeti-Panther - Confirma tu cuenta.',
            text: renderVerificationEmailText(data ),
            html: renderVerificationEmail(data),
        })
    }
     static async sendPasswordResetToken(data: PasswordResetEmailData) : Promise<void> {
        await EmailService.send({
            from: emailConfig.from.passwordReset,
            to: data.email,
            subject: 'Meeti-Panther - Restablese tu password',
            text: renderVerificationEmailText(data),
            html: renderPasswordResetEmail(data),
        })
    }
}
