// import { useState } from "react";
// import AgoraUIKit from "agora-react-uikit";

// const VideoScreen = () => {
//   const [videoCall, setVideoCall] = useState(true);
//   const rtcProps = {
//     appId: "4f79278a28834b9982933591d900ff81",
//     channel: "Test",
//     token: null,
//   };
//   const callbacks = {
//     EndCall: () => setVideoCall(false),
//   };
//   return (
//     <div className="m-auto">
//       {videoCall ? (
//         <div className="flex w-[calc(100vw/2.1)] h-[360px]">
//           <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
//         </div>
//       ) : (
//         <button onClick={() => setVideoCall(true)}>Join</button>
//       )}
//     </div>
//   );
// };

// export default VideoScreen;

import { useState } from "react";
import AgoraUIKit, { layout } from "agora-react-uikit";
import "agora-react-uikit/dist/index.css";

const VideoScreen = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-1 w-[calc(75vw)-100px] h-[calc(90vh)]">
      <div style={styles.videoContainer}>
        {videocall ? (
          <>
            <div style={styles.nav}>
              <p style={{ fontSize: 20, width: 200 }}>
                You are {isHost ? "a host" : "an audience"}
              </p>
              <p style={styles.btn} onClick={() => setHost(!isHost)}>
                Change Role
              </p>
              <p style={styles.btn} onClick={() => setPinned(!isPinned)}>
                Change Layout
              </p>
            </div>
            <AgoraUIKit
              rtcProps={{
                appId: "4f79278a28834b9982933591d900ff81",
                channel: "test",
                token: null, // add your token if using app in secured mode
                role: isHost ? "host" : "audience",
                layout: isPinned ? layout.pin : layout.grid,
                enableScreensharing: true,
                grid:2
              }}
              rtmProps={{ username: username || "user", displayUsername: true }}
              callbacks={{
                EndCall: () => setVideocall(false),
                ChageView:()=>setPinned(!isPinned),
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
  nav: { display: "flex", justifyContent: "space-around" },
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
