import "./app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import DisplayPostPicture from "./components/displayPostPicture/DisplayPostPicture";
import Landing from "./pages/landing/Landing";
import { useState } from "react";
import Explore from "./components/explore/Explore";
import ProfileFriend from "./pages/profileFriend/ProfileFriend";
import UserPage from "./pages/userPage/UserPage";
import UserStory from "./pages/userStory/UserStory";
import Commerce from "./pages/commerce/Commerce";
import Video from "./pages/video/Video";
import FriendProfile from "./pages/friendProfile/FriendProfile";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Chat from "./pages/chat/Chat";
import Message from "./widgets/message/Message";

function App() {
  const currentUser = true;

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const [explore, setExplore] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        {currentUser && <Topbar setExplore={setExplore} explore={explore} />}
        {!explore && (
          <div className={currentUser && "section"}>
            <Routes>
              <Route path="/">
                <Route index element={!currentUser ?<Landing /> : <Navigate to="/home" />}></Route>
                <Route element={!currentUser ? <Login /> : <Navigate to="/home" />} path="login"></Route>
                <Route element={!currentUser ? <Register /> : <Navigate to="/home" />} path="register"></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                  path="home"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <DisplayPostPicture />
                    </ProtectedRoute>
                  }
                  path="home/:id"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <ProfileFriend />
                    </ProtectedRoute>
                  }
                  path="profile-friends"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <UserPage />
                    </ProtectedRoute>
                  }
                  path="page"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <UserStory />
                    </ProtectedRoute>
                  }
                  path="stories"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <Commerce />
                    </ProtectedRoute>
                  }
                  path="e-commerce"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <Video />
                    </ProtectedRoute>
                  }
                  path="videos"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <FriendProfile />
                    </ProtectedRoute>
                  }
                  path="profile"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  }
                  path="settings"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <Chat />
                    </ProtectedRoute>
                  }
                  path="chat"
                ></Route>
                <Route
                  element={
                    <ProtectedRoute>
                      <Message />
                    </ProtectedRoute>
                  }
                  path="message"
                ></Route>
              </Route>
            </Routes>
          </div>
        )}
        {explore && <Explore explore={explore} setExplore={setExplore} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
