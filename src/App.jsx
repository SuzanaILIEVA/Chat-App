import { useState } from "react";
import LoginPage from "./Pages/LoginPage";
import RoomPage from "./Pages/RoomPage";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);
  console.log(room);

  // kullanicinin yetkisi yoksa LoginPage git
  if (!isAuth) {
    return <LoginPage setIsAuth={setIsAuth} />;
  }

  // kullanicinin yetkisi varsa
  return (
    <div className="container">
      
      {room ? (
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
