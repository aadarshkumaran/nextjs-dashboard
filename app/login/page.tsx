import AcmeLogo from "../ui/acme-logo";
import LoginForm from "../ui/login-form";
import { lusitana } from '../ui/fonts';
import Link from "next/link";

export default function Login(){
    return<>
    <div className="flex items-center justify-center bg-black md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
            <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                <div className="w-32 text-white md:w-36"><Link href={'/'}><AcmeLogo/></Link></div>
            </div>
            <LoginForm/>
        </div>
    </div>
    </>
}