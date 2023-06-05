import { createContext, useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ChatContext = createContext()

const ChatProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [selected, setSelected] = useState();
    const [chats, setchats] = useState([]);
    const [notification, setnotification] = useState([]);


    const history = useHistory();

    useEffect(() => {
        const UserInfo = JSON.parse(localStorage.getItem("userInfo"));
        return () => {

            setUser(UserInfo);

            if (!UserInfo) {
                history.pushState("/")
            }

        }
    }, [history])


    return <ChatContext.Provider value={{ user, setUser, selected, setSelected, chats, setchats, notification, setnotification }}>{children}</ChatContext.Provider>;

};

export const ChatState = () => {
    return useContext(ChatContext);
}



export default ChatProvider;