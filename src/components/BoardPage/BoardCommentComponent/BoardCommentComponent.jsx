/** @jsxImportSource @emotion/react */
import * as s from "./style";

import defaultImg from "../../../assets/defaultImg.webp";
import { useEffect, useRef, useState } from "react";

function BoardCommentComponent(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);
    const updateScroll = () => {
        if (scrollRef.current) {
            setScrollPosition(scrollRef.current.scrollTop);
        }
    };

    useEffect(() => {
        const currentScrollRef = scrollRef.current;
        if (currentScrollRef) {
            currentScrollRef.addEventListener("scroll", updateScroll);
        }
        return () => {
            if (currentScrollRef) {
                currentScrollRef.removeEventListener("scroll", updateScroll);
            }
        };
    }, []);

    return (
        <div css={s.layout}>
            <div css={s.titled(scrollPosition)}>
                <h1>댓글(15)</h1>
            </div>
            <div ref={scrollRef} css={s.boxLayout}>
                <div css={s.box}>
                    <div css={s.info}>
                        <div>
                            <img src={defaultImg} alt="" />
                            <div>동윤잉</div>
                        </div>
                        <div>2024.06.24</div>
                    </div>
                    <div css={s.comment}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Modi illo eaque et enim rem consectetur vitae
                        quisquam velit, ullam laboriosam id voluptates amet
                        blanditiis voluptas aut corporis! Necessitatibus,
                        aliquid vero.
                    </div>
                </div>
                <div css={s.box}>
                    <div css={s.info}>
                        <div>
                            <img src={defaultImg} alt="" />
                            <div>동윤잉</div>
                        </div>
                        <div>2024.06.24</div>
                    </div>
                    <div css={s.comment}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatem, eius molestias similique vel est fugit
                        consectetur amet quisquam non quos doloribus natus id
                        veritatis consequatur dolore optio, odio, pariatur
                        culpa!
                    </div>
                </div>
                <div css={s.box}>
                    <div css={s.info}>
                        <div>
                            <img src={defaultImg} alt="" />
                            <div>동윤잉</div>
                        </div>
                        <div>2024.06.24</div>
                    </div>
                    <div css={s.comment}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Ipsam temporibus eos quo quos blanditiis numquam
                        cumque delectus officia suscipit, quasi veniam quam ea
                        cum ipsum excepturi optio dolor! Animi, provident.
                    </div>
                </div>
                <div css={s.box}>
                    <div css={s.info}>
                        <div>
                            <img src={defaultImg} alt="" />
                            <div>동윤잉</div>
                        </div>
                        <div>2024.06.24</div>
                    </div>
                    <div css={s.comment}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo eaque, quod reprehenderit non cum fugiat ad
                        voluptatum nam sint. Ipsa asperiores dolorem in
                        mollitia? Accusamus doloribus molestiae excepturi
                        similique asperiores!
                    </div>
                </div>
                <div css={s.box}>
                    <div css={s.info}>
                        <div>
                            <img src={defaultImg} alt="" />
                            <div>동윤잉</div>
                        </div>
                        <div>2024.06.24</div>
                    </div>
                    <div css={s.comment}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sapiente, harum architecto. Officia fuga architecto,
                        dolor deserunt magni modi. Commodi, distinctio ratione
                        aliquid consequatur nostrum fugit maxime tenetur ad
                        quasi accusantium.
                    </div>
                </div>
            </div>
            <div css={s.commentWriteBox}>
                <div css={s.profileBox}>
                    <img src={defaultImg} alt="" />
                    <div>동윤잉</div>
                </div>
                <div css={s.inputBox}>
                    <input type="text" />
                </div>
            </div>
        </div>
    );
}

export default BoardCommentComponent;
