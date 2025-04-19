import React from "react";
import "./homePage.css";
const HomePage = ({ sideNavbar }) => {
  const options = [
    "All",
    "Music",
    "Mixes",
    "Podcasts",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Learning",
    "Fashion & Beauty",
    "Spotlight",
    "Watched",
    "Shorts",
    "Shopping",
    "Movies",
    "Shows",
    "Documentaries",
    "360° Videos",
    "VR180",
    "YouTube Kids",
    "YouTube Premium",
    "YouTube Originals",
  ];

  return (
    <div className={sideNavbar ? "homePage" : "fullHomePage"}>
      {/* HomePage Top & Options Section  */}
      <div className="homePage_options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homePage_option">
              {item}
            </div>
          );
        })}
      </div>
      {/* HomePage Main Section */}
      <div className={sideNavbar?'home_mainPage':'home_mainPageWithoutLink'}>

        {/* First Video */}
        <div className="youtube_video">
          {/* Thumbnail Box */}
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/dzozBpaFgMM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeLtyk6gAiVPjd0Yffd5yGV7qV7w"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />

            <div className="youtube_timingThumbnail">10:05</div>
          </div>

          {/* Video Title */}
          <div className="youtube_TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
                alt="ProfileImage"
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                #882 Ekantik Vartalaap & Darshan Shri{" "}
              </div>
              <div className="youtube_channelName">Bhajan Marg</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </div>
        {/* Second Video */}
        <div className="youtube_video">
          {/* Thumbnail Box */}
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/dzozBpaFgMM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeLtyk6gAiVPjd0Yffd5yGV7qV7w"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />

            <div className="youtube_timingThumbnail">10:05</div>
          </div>

          {/* Video Title */}
          <div className="youtube_TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
                alt="ProfileImage"
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                #882 Ekantik Vartalaap & Darshan Shri{" "}
              </div>
              <div className="youtube_channelName">Bhajan Marg</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </div>
        {/* Third Video */}
        <div className="youtube_video">
          {/* Thumbnail Box */}
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/dzozBpaFgMM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeLtyk6gAiVPjd0Yffd5yGV7qV7w"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />

            <div className="youtube_timingThumbnail">10:05</div>
          </div>

          {/* Video Title */}
          <div className="youtube_TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
                alt="ProfileImage"
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                #882 Ekantik Vartalaap & Darshan Shri{" "}
              </div>
              <div className="youtube_channelName">Bhajan Marg</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </div>
        {/* Fourth Video */}
        <div className="youtube_video">
          {/* Thumbnail Box */}
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/dzozBpaFgMM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeLtyk6gAiVPjd0Yffd5yGV7qV7w"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />

            <div className="youtube_timingThumbnail">10:05</div>
          </div>

          {/* Video Title */}
          <div className="youtube_TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
                alt="ProfileImage"
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                #882 Ekantik Vartalaap & Darshan Shri{" "}
              </div>
              <div className="youtube_channelName">Bhajan Marg</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </div>
        {/* Fifth Video */}
        <div className="youtube_video">
          {/* Thumbnail Box */}
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/dzozBpaFgMM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeLtyk6gAiVPjd0Yffd5yGV7qV7w"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />

            <div className="youtube_timingThumbnail">10:05</div>
          </div>

          {/* Video Title */}
          <div className="youtube_TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
                alt="ProfileImage"
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                #882 Ekantik Vartalaap & Darshan Shri{" "}
              </div>
              <div className="youtube_channelName">Bhajan Marg</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </div>
        {/* Sixth Video */}
        <div className="youtube_video">
          {/* Thumbnail Box */}
          <div className="youtube_thumbnailBox">
            <img
              src="https://i.ytimg.com/vi/dzozBpaFgMM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBeLtyk6gAiVPjd0Yffd5yGV7qV7w"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />

            <div className="youtube_timingThumbnail">10:05</div>
          </div>

          {/* Video Title */}
          <div className="youtube_TitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_nO1B8INmga5h8aM6pKJ19cjg43jx-ytAPdFasDldXP2sQ=s160-c-k-c0x00ffffff-no-rj"
                alt="ProfileImage"
                className="youtube_thumbnail_Profile"
              />
            </div>

            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">
                #882 Ekantik Vartalaap & Darshan Shri{" "}
              </div>
              <div className="youtube_channelName">Bhajan Marg</div>
              <div className="youtubeVideo_views">3 likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
