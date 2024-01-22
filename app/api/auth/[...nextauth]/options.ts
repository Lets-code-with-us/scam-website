import Github from "next-auth/providers/github";

export const option = {
    secret:process.env.NEXTAUTH_SECERT as string,
    providers: [
        Github({        
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ''
        })
    ],
    callbacks:{
    
        async session({session, token}: {session: any, token: any}) {
            if(session?.user){
                // session.user.auth="github"
                console.log(session)

            }
            return session

        }
    }
}