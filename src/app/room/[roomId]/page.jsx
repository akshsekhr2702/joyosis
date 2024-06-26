"use client";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
export default function RoomPage({params}){
    const roomId = params.roomId;

    const myMeeting = async (element) => {
        const appId = 1481902801;
        const serverSecret = "494c1de534f188b0de3afbbb99239d33";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "Joyosis");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container : element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false, 
        })
    }

    return(
        <>
        <div>
            <div ref={myMeeting}/>
        </div>
        </>
    )
}