import React, { useState, useEffect } from 'react';
import './screenHome.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

// function Statusbar() {
//     const [time, setTime] = useState(new Date());

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setTime(new Date());
//         }, 1000);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     const hours = time.getHours();
//     const minutes = time.getMinutes();
//     // const seconds = time.getSeconds();

//     return (
//         <div className="statusbar">
//             <div id="clock">{`${hours}:${minutes}`}</div>
//             {/* <div id="clock">{`${hours}:${minutes}:${seconds}`}</div> */}
//         </div>
//     );
// }
function Statusbar() {
    const [timeString, setTimeString] = React.useState("");

    useEffect(() => {
        let rafId;
        let timerId;

        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            let amPm = "AM"; // 初始化为上午

            // 根据当前小时设置AM/PM
            if (hours >= 12) {
                amPm = "PM";
                hours -= 12;
            }
            if (hours === 0) {
                hours = 12;
            }

            // const timeString = hours + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0") + " " + amPm;
            const timeString = hours + ":" + minutes.toString().padStart(2, "0") + " " + amPm;
            setTimeString(timeString);
        };

        const intervalId = setInterval(updateClock, 1000);

        // 在组件卸载时清除定时器
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="statusbar">
            <div className='signal'>
                {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-signal-bars" style={{ color: "#fafafa", }} />
                <FontAwesomeIcon icon={solid("signal-bars")} style={{ color: "#ffffff", }} /> */}
                <img src="https://img.icons8.com/ios-filled/20/000000/high-connection.png" />
            </div>
            <div className='company'>CMCC </div>
            <div id="clock">{timeString}</div>
            <div className='battery'> 84% </div>
        </div>
    );
}


export default Statusbar;
