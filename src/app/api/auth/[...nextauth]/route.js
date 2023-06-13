import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs"

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET 
        }),
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials){

                await connect()

                try {
                    const user = await User.findOne({email: credentials.email})
                    if(user){
                        //check pw
                        const isPWCorrect =await bcrypt.compare(credentials.password, user.password)
                        if(isPWCorrect){
                            return user
                        }else {
                            throw new Error("Wrong credentials")
                        }
                    }else{
                        throw new Error("User not found")
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],
    pages: {
        error: "/dashboard/login"
    }
})

export {handler as GET, handler as POST}