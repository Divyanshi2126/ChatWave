import React from "react";

const contacts = [
  { id: 1, name: "Riya Sharma", msg: "See you tomorrow", time: "2:30 PM" },
  { id: 2, name: "Aman Singh", msg: "Working on project", time: "1:15 PM" },
  { id: 3, name: "Rahul Kumar", msg: "Ok done 👍", time: "Yesterday" },
];

const ContactBar = () => {
  return (
    <div className="h-full overflow-y-auto">

      <div className="p-4 border-b border-base-300">
        <h2 className="text-xl font-bold">Chats</h2>
      </div>

      {contacts.map((user) => (
        <div
          key={user.id}
          className="flex items-center gap-3 p-4 hover:bg-base-200 cursor-pointer border-b border-base-200"
        >
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-10">
              <span>{user.name[0]}</span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">{user.name}</h3>
            <p className="text-sm opacity-70">{user.msg}</p>
          </div>

          <span className="text-xs opacity-60">{user.time}</span>
        </div>
      ))}

    </div>
  );
};

export default ContactBar;