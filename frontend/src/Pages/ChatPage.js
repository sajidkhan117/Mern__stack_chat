
import { Box } from '@chakra-ui/react';
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import MyChats from "../Components/MyChats";
import ChatBox from "../Components/ChatBox";
import { ChatState } from "../Context/ChatProvider";
import { useState } from 'react';


const ChatPage = () => {

    const { user } = ChatState()
    const [fetchAgain, setFetchAgain] = useState(false)
    return (
        <div style={{ width: "100%", color: "white" }}>
            {!user && <SideDrawer />}

            <Box
                d='flex'
                justifyContent="space-between"
                w="100%"
                h="91.5vh"
                p="10px"

            >
                {user && <MyChats fetchAgain={fetchAgain} />}
                {user && <ChatBox
                    fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}
                />}

            </Box>
        </div>


    )
}

export default ChatPage;