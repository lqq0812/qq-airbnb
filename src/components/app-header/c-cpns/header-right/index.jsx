import IconAvatar from "@/assets/svg/icon-avator";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
    const [isPanelShow, setPanelShow] = useState(false);

    useEffect(() => {
        function windowHandleClick() {
            setPanelShow(false);
        }
        window.addEventListener("click", windowHandleClick, true);
        return () => {
            window.removeEventListener("click", windowHandleClick, true);
        };
    }, []);

    function profileClickHandle() {
        setPanelShow(!isPanelShow);
    }

    return (
        <RightWrapper>
            <div className="controls">
                <span className="item">登录</span>
                <span className="item">注册</span>
                <span className="item">
                    <IconGlobal />
                </span>
            </div>
            <div className="profile" onClick={profileClickHandle}>
                <IconMenu />
                <IconAvatar />
                {isPanelShow && (
                    <div className="panel">
                        <div className="top">
                            <div className="item">注册</div>
                            <div className="item">登录</div>
                        </div>
                        <div className="bottom">
                            <div className="item">来爱彼迎发布房源</div>
                            <div className="item">开展体验</div>
                            <div className="item">帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </RightWrapper>
    );
});

export default HeaderRight;
