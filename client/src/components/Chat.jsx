import React, { useState } from "react";

export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="flex flex-col bg-fuchsia-50 p-4 sm:p-6 lg:p-10 h-auto lg:h-screen">
      <div className="messages w-full h-full overflow-y-scroll cursor-pointer">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <div className="flex flex-col gap-4 ">
          <div className="message p-4 flex flex-1 gap-3 shadow-lg w-full bg-white mt-2 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">Joan Doe</span>
            <p>Lorem ipsum dolor...</p>
          </div>

          <div className="message p-4 flex flex-1 gap-3 shadow-lg w-full bg-white mt-2 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">Joan Doe</span>
            <p>Lorem ipsum dolor...</p>
          </div>

          <div className="message p-4 flex flex-1 gap-3 shadow-lg w-full bg-white mt-2 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">Joan Doe</span>
            <p>Lorem ipsum dolor...</p>
          </div>

          <div className="message p-4 flex flex-1 shadow-lg gap-3 w-full bg-white mt-2 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">Joan Doe</span>
            <p>Lorem ipsum dolor...</p>
          </div>
        </div>
        {/* chatBox  */}
        {/* TOP */}
        {chat && (
          <div className="chatBox m-4 bg-amber-50 rounded-lg shadow flex flex-col h-[70vh] lg:h-full">
            <div className="top flex items-center justify-between p-4 border-b">
              <div className="user flex items-center gap-3">
                <img
                  src="/noavatar.jpg"
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold">John Doe</span>
              </div>
              <div className="close font-bold text-gray-400 ">
                <button
                  className="cursor-pointer"
                  onClick={() => setChat(false)}
                >
                  X
                </button>
              </div>
            </div>

            {/* center scrollable */}
            <div className="center flex-1 overflow-y-auto p-4 space-y-3">
              {/* own message */}
              <div className="flex justify-end">
                <div className="chatMessage own  bg-green-200 p-3 rounded-lg max-w-[75%]">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="block text-xs text-right text-gray-600 mt-1">
                    1 hour ago{" "}
                  </span>
                </div>
              </div>

              {/* other message */}
              <div className="flex justify-start">
                <div className="chatMessage bg-white p-3 rounded-lg shadow max-w-[75%]">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <span className="block text-xs text-gray-500 mt-1">
                    1 hour ago{" "}
                  </span>
                </div>
              </div>

              {/* Repeat messages */}
              <div className="flex justify-end">
                <div className="bg-green-200 p-3 rounded-lg max-w-[75%]">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <span className="block text-xs text-right text-gray-600 mt-1">
                    1 hour ago
                  </span>
                </div>
              </div>

              {/* <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>1 hour ago </span>
            </div> */}
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-lg shadow max-w-[75%]">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <span className="block text-xs text-gray-500 mt-1">
                    1 hour ago
                  </span>
                </div>
              </div>
            </div>

            {/* bottom input */}
            <div className="bottom p-4 border-t bg-amber-50">
              <div className="flex gap-2">
                {/* <input
                type="text"
                placeholder="Type a Message"
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none"
              /> */}
                <textarea
                  rows={1}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-xl focus:outline-none resize-none"
                  onInput={(e) => {
                    //auto expend textarea height
                    e.target.style.height = "auto";
                    e.target.height = e.target.scrollHeight + "px";
                  }}
                />
                <button className="px-5 py-2 bg-amber-500  text-white rounded-full font-semibold">
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
