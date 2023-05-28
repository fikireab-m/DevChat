// import AgoraUIKit from "agora-react-uikit";
// import { useState } from "react";
// export default function VideoScreen() {
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
//     {videoCall ? (
//       <div style={{ display: "flex", width: "calc(100vw/2.1)", height: "360px" }}>
//         <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
//       </div>
//     ) : (
//       <button onClick={() => setVideoCall(true)}>Join</button>
//     )}
//   </div>
//     // <main>
//     //   <div className="h-[calc(100vh-80px)] bg-gray-300  flex flex-col mx-auto p-4">
//     //     <div className="flex items-center justify-center self-center">
//     //       <button>Button 1</button>
//     //       <button>Button 1</button>
//     //       <button>Button 1</button>
//     //       <button>Button 1</button>
//     //     </div> 
//     //   </div>
//     // </main>
//   );
// }


import { useEffect, useRef } from 'react';
import AgoraRTC from 'agora-rtc-sdk';

const VideoChat = () => {
  const agoraVideoPlayerRef = useRef(null);

  useEffect(() => {
    // Join the video chat channel
    // Replace <CHANNEL_NAME> with your desired channel name
    const joinChannel = async () => {
      // Create an AgoraRTC client
      const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      // Initialize the AgoraRTC client
      await client.init('4f79278a28834b9982933591d900ff81');

      // Join the AgoraRTC channel
      await client.join(null, 'Fikir', null, '0001');

      // Set up the video player to display remote video streams
      const videoPlayer = AgoraRTC.createPlayer();
      videoPlayer.init();

      // Subscribe to remote streams
      client.on('stream-added', ({ stream }) => {
        client.subscribe(stream);
      });

      client.on('stream-subscribed', ({ stream }) => {
        videoPlayer.play(stream.getId());
      });

      // Publish the local stream
      const localStream = AgoraRTC.createStream({
        audio: false,
        video: true,
      });

      await localStream.init();
      await client.publish(localStream);

      // Set up the video player to display the local stream
      localStream.play(agoraVideoPlayerRef.current);
    };

    joinChannel();

    return () => {
      // Leave the video chat channel
      const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });
      client.leave();

      // Stop playing the video stream
      const videoPlayer = AgoraRTC.createPlayer();
      videoPlayer.stop();
    };
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-1/2 h-screen" ref={agoraVideoPlayerRef}></div>
      {/* Additional UI elements can be added here */}
    </div>
  );
};

export default VideoChat;
