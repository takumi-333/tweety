import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: "/",
                permanant: false,
            }
        }
    }

    return {
        props: {
            session
        }
    }
}

const Notifications = () => {
    return ( 
        <>
            <Header label="Notifications" showBackArrow/>
            <NotificationsFeed/>
        </>
     );
}
 
export default Notifications;