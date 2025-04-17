import React, { useState } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
  const [userPic, setUserPic] = useState(
    "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
  );
  const [navbarModal, setNavbarModal] = useState(false);
  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };
  // const sideNavbarFunc = () => {
  //   setSideNavbarFunc(!sideNavbar);
  // };
  return (
    <div className="navbar">
      {/* Navbar Left Section */}
      <div className="navbar-left">
        <div className="navbarHamberger">
          <MenuIcon sx={{ color: "white" }} />
        </div>
        <div className="navbar_youtubeImg">
          <YouTubeIcon
            sx={{ fontSize: "34px" }}
            className="navbar_youtubeImage"
          />
          <div className="navbar_utubeTitle">Youtube</div>
        </div>
      </div>

      {/* Navbar Middle Section */}
      <div className="navbar-middle">
        {/* Navbar Search Box */}
        <div className="navbar_searchBox">
          <input
            type="text"
            placeholder="Search"
            className="navbar_searchBoxInput"
          />
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>

        {/* Navbar Voice Search */}
        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ fontSize: "28px", color: "white" }} />
        </div>
      </div>

      {/* Navbar Right Section */}
      <div className="navbar-right">
        <VideoCallIcon
          sx={{ fontSize: "30px", color: "white", cursor: "pointer" }}
        />
        <NotificationsIcon
          sx={{ fontSize: "30px", color: "white", cursor: "pointer" }}
        />
        <img
          className="navbar-right-logo"
          src={userPic}
          alt="Logo"
          onClick={handleClickModal}
        />

        {navbarModal && (
          <div className="navbar-modal">
            <div className="navbar-modal-option">Profile</div>
            <div className="navbar-modal-option">Login</div>
            <div className="navbar-modal-option">Logout</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
