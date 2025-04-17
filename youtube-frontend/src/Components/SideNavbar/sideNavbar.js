import React from "react";
import "./sideNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import SwitchVideoIcon from "@mui/icons-material/SwitchVideo";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";

const SideNavbar = ({ sideNavbar }) => {
  return (
    <div className={sideNavbar ? "home-sideNavbar" : "homeSideNavbarHide"}>
      {/* Top Section */}
      <div className="home_sideNavbarTop">
        <div className={`home_sideNavbarTopOption`}>
          <HomeIcon />
          <div className="home_sideNavbarTopOptionTitle">Home</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <VideocamIcon />
          <div className="home_sideNavbarTopOptionTitle">Shorts</div>
        </div>

        <div className={`home_sideNavbarTopOption`}>
          <SubscriptionsIcon />
          <div className="home_sideNavbarTopOptionTitle">Subscriptions</div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="home_sideNavbarMiddle">
        <div className={`home_sideNavbarTopOption`}>
          <div className="home_sideNavbarTopOptionTitle">You</div>
          <ChevronRightIcon />
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <RecentActorsIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Channel</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <HistoryIcon />
          <div className="home_sideNavbarTopOptionTitle">History</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <PlaylistAddIcon />
          <div className="home_sideNavbarTopOptionTitle">Playlists</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <SwitchVideoIcon />
          <div className="home_sideNavbarTopOptionTitle">Your Videos</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <WatchLaterOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Watch later</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <ThumbUpAltOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Liked videos</div>
        </div>
        <div className={`home_sideNavbarTopOption`}>
          <ContentCutOutlinedIcon />
          <div className="home_sideNavbarTopOptionTitle">Your clips</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="home_sideNavbarMiddle">
        <div className="home_sideNavbarTopOption">
          <div className="home_sideNavbarTopOptionTitleHeader">
            Subscriptions
          </div>
        </div>
      </div>
      {/* First Chanel */}
      <div className="home_sideNavbarTopOption">
        <img
          className="home_sideNavbar_ImgLogo"
          src="https://yt3.googleusercontent.com/ytc/AIdro_m1WLxquYeEO9VgyA7-cYFrn_hd2dSaNtmL8-NIHMCQIuPQ=s176-c-k-c0x00ffffff-no-rj-mo"
          alt="logo"
        />
        <div className="home_sideNavbarTopOptionTitle">Aaj Tak</div>
      </div>

      {/* Second Chanel */}
      <div className="home_sideNavbarTopOption">
        <img
          className="home_sideNavbar_ImgLogo"
          src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
          alt="logo"
        />
        <div className="home_sideNavbarTopOptionTitle">Bhajan Marg</div>
      </div>
    </div>
  );
};

export default SideNavbar;
