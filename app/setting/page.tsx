import { redirect } from "next/navigation";

export default function Setting_redirect() {
    
    redirect('/setting/profile');
    return null;
}