import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth

export const config = {
    //allowing us to filter middleware to run on specific paths
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - PNG files (image)
     */
    matcher : ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}