import { useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const APP_ID = import.meta.env.VITE_APP_ID;
const VideoScreen = (props) => {
  const [videocall, setVideocall] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {videocall && (
        <div className="mt-2 flex flex-1 w-[calc(75vw)-100px] h-[calc(90vh)]">
          <div className="flex flex-col flex-1">
            <button
              style={{ position: "absolute", zIndex: "20" }}
              className="bg-blue-600 pointer rounded-md text-sm text-white p-2"
            >
              Change Layout
            </button>
            <AgoraUIKit
              rtcProps={{
                appId: APP_ID,
                channel: props.channelName,
                token: null, // add your token if using app in secured mode
                // role: isHost ? "host" : "audience",
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true,
              }}
              rtmProps={{
                username: props.username || "user",
                displayUsername: true,
              }}
              callbacks={{
                EndCall: () => {
                  setVideocall(false);
                  navigate("/");
                },
                ChageView: () => setPinned(!isPinned),
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
VideoScreen.propTypes = {
  username: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
};

export default VideoScreen;
