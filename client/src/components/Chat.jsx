// import React, { useState } from "react";

// export default function Chat(chats) {
//   const [chat, setChat] = useState(true);
//   return (
//     <div className="flex flex-col bg-fuchsia-50 p-4 sm:p-6 lg:p-10 h-auto lg:h-screen">
//       <div className="messages w-full h-full overflow-y-scroll cursor-pointer">
//         <h1 className="text-2xl font-semibold">Messages</h1>
//         <div className="flex flex-col gap-4 ">
//           <div className="message p-4 flex flex-1 gap-3 shadow-lg w-full bg-white mt-2 rounded-md">
//             <img
//               src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
//               alt=""
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <span className="font-bold">Joan Doe</span>
//             <p>Lorem ipsum dolor...</p>
//           </div>

//           <div className="message p-4 flex flex-1 gap-3 shadow-lg w-full bg-white mt-2 rounded-md">
//             <img
//               src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
//               alt=""
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <span className="font-bold">Joan Doe</span>
//             <p>Lorem ipsum dolor...</p>
//           </div>

//           <div className="message p-4 flex flex-1 gap-3 shadow-lg w-full bg-white mt-2 rounded-md">
//             <img
//               src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
//               alt=""
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <span className="font-bold">Joan Doe</span>
//             <p>Lorem ipsum dolor...</p>
//           </div>

//           <div className="message p-4 flex flex-1 shadow-lg gap-3 w-full bg-white mt-2 rounded-md">
//             <img
//               src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
//               alt=""
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <span className="font-bold">Joan Doe</span>
//             <p>Lorem ipsum dolor...</p>
//           </div>
//         </div>
//         {/* chatBox  */}
//         {/* TOP */}
//         {chat && (
//           <div className="chatBox m-4 bg-amber-50 rounded-lg shadow flex flex-col h-[70vh] lg:h-full">
//             <div className="top flex items-center justify-between p-4 border-b">
//               <div className="user flex items-center gap-3">
//                 <img
//                   src="/noavatar.jpg"
//                   alt=""
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <span className="font-semibold">John Doe</span>
//               </div>
//               <div className="close font-bold text-gray-400 ">
//                 <button
//                   className="cursor-pointer"
//                   onClick={() => setChat(false)}
//                 >
//                   X
//                 </button>
//               </div>
//             </div>

//             {/* center scrollable */}
//             <div className="center flex-1 overflow-y-auto p-4 space-y-3">
//               {/* own message */}
//               <div className="flex justify-end">
//                 <div className="chatMessage own  bg-green-200 p-3 rounded-lg max-w-[75%]">
//                   <p className="text-sm">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   </p>
//                   <span className="block text-xs text-right text-gray-600 mt-1">
//                     1 hour ago{" "}
//                   </span>
//                 </div>
//               </div>

//               {/* other message */}
//               <div className="flex justify-start">
//                 <div className="chatMessage bg-white p-3 rounded-lg shadow max-w-[75%]">
//                   <p className="text-sm">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   </p>
//                   <span className="block text-xs text-gray-500 mt-1">
//                     1 hour ago{" "}
//                   </span>
//                 </div>
//               </div>

//               {/* Repeat messages */}
//               <div className="flex justify-end">
//                 <div className="bg-green-200 p-3 rounded-lg max-w-[75%]">
//                   <p className="text-sm">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <span className="block text-xs text-right text-gray-600 mt-1">
//                     1 hour ago
//                   </span>
//                 </div>
//               </div>

//               {/* <div className="chatMessage own">
//               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//               <span>1 hour ago </span>
//             </div> */}
//               <div className="flex justify-start">
//                 <div className="bg-white p-3 rounded-lg shadow max-w-[75%]">
//                   <p className="text-sm">
//                     Lorem ipsum dolor sit amet consectetur.
//                   </p>
//                   <span className="block text-xs text-gray-500 mt-1">
//                     1 hour ago
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* bottom input */}
//             <div className="bottom p-4 border-t bg-amber-50">
//               <div className="flex gap-2">
//                 {/* <input
//                 type="text"
//                 placeholder="Type a Message"
//                 className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
//               /> */}
//                 <textarea
//                   rows={1}
//                   placeholder="Type a message..."
//                   className="flex-1 px-4 py-2 border rounded-xl focus:outline-none resize-none"
//                   onInput={(e) => {
//                     //auto expend textarea height
//                     e.target.style.height = "auto";
//                     e.target.height = e.target.scrollHeight + "px";
//                   }}
//                 />
//                 <button className="px-5 py-2 bg-amber-500  text-white rounded-full font-semibold">
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// -----------------------------
import { useContext, useEffect, useRef, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import apiRequest from "../lib/apiRequest";
import { format } from "timeago.js";
import { SocketContext } from "../context/SocketContext";
// import { useNotificationStore } from "../../lib/notificationStore";
import { useNotificationStore } from "../lib/notificationStore";

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { socket } = useContext(SocketContext);

  const messageEndRef = useRef();

  const decrease = useNotificationStore((state) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (id, receiver) => {
    try {
      const res = await apiRequest("/chats/" + id);
      if (!res.data.seenBy.includes(currentUser.id)) {
        decrease();
      }
      setChat({ ...res.data, receiver });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put("/chats/read/" + chat.id);
      } catch (err) {
        console.log(err);
      }
    };

    if (chat && socket) {
      socket.on("getMessage", (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, messages: [...prev.messages, data] }));
          read();
        }
      });
    }
    return () => {
      socket.off("getMessage");
    };
  }, [socket, chat]);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className="message"
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? "white"
                  : "#fecd514e",
            }}
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img src={c.receiver.avatar || "/noavatar.jpg"} alt="" />
            <span>{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={chat.receiver.avatar || "noavatar.jpg"} alt="" />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div
                className="chatMessage"
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser.id ? "right" : "left",
                }}
                key={message.id}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
