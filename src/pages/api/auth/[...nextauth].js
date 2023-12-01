import NextAuth from "next-auth/next";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { db } from "@/firebase/firebase";
import Google from "next-auth/providers/google";

export default NextAuth({
    adapter: FirestoreAdapter(db),
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    first_name: profile.given_name,
                    last_name: profile.family_name,
                    fav_pokemon: [],
                    
                };
            },
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        error: "/auth/error",
    },
    callbacks: {
        session: async ({ session, user, token }) => {
            session.user.role = user.role;
            session.user.first_name = user.first_name;
            session.user.last_name = user.last_name;
            session.user.hasPresentedDPI = user.hasPresentedDPI;
            session.user.fav_pokemon = user.fav_pokemon;
            return session;
        },
    },
});