import { resend } from "@/lib/resend";
import VerificationEmail from "../../email/verificationEmail";
import { ApiResponce } from "@/types/Apiresponce"; 


export async function  sendVerificationEmail(email:string,
    username : string,
    verifyCode :string
):Promise<ApiResponce> {
   try {

    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'verification code mistry-message',
        react: VerificationEmail({username, otp: verifyCode}) ,
      });
    
    
    return {success : true , message : "verification email sent successFully", statusCode: 200}
   } catch (emailError) {
    console.error("error sending verification email",
        emailError
    )

    return {success : false , message : "Failed to send verification email ", statusCode: 400}
    
   }
}
