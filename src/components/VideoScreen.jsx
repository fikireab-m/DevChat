import { useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";

const APP_ID = import.meta.env.VITE_APP_ID;

const VideoScreen = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="mt-2 flex flex-1 w-[calc(75vw)-100px] h-[calc(90vh)]">
      <div style={styles.videoContainer}>
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p className="text-md text-white w-[calc(45vw)]">
                You are {isHost ? "a host" : "an audience"}
              </p>
              <button style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </button>
              <button style={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </button>
            </div>
            <AgoraUIKit
              rtcProps={{
                appId: APP_ID,
                channel: "TestChannel",
                token: null, // add your token if using app in secured mode
                role: isHost ? "host" : "audience",
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true,
              }}
              rtmProps={{ username: username || "user", displayUsername: true }}
              callbacks={{
                EndCall: () => setVideocall(false),
                ChageView: () => setPinned(!isPinned),
              }}
            />
          </>
        ) : (
          <div style={styles.nav}>
            <input
              style={styles.input}
              placeholder="nickname"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <h3 style={styles.btn} onClick={() => setVideocall(true)}>
              Start Call
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  videoContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  nav: {
    position: "absolute",
    top: "4rem",
    zIndex: "20",
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#007bff",
    cursor: "pointer",
    borderRadius: 5,
    padding: "4px 8px",
    color: "#ffffff",
    fontSize: 20,
  },
  input: { display: "flex", height: 24, alignSelf: "center" },
};

export default VideoScreen;
