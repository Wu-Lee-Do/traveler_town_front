/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BoardDetailComponent(props) {
    const test = `<p>	<img src="https://firebasestorage.googleapis.com/v0/b/traveler-town.appspot.com/o/images%2Fboard%2Fc80485f0-2af1-4a46-8999-710e6f1bdd87%2F1719312855037?alt=media&token=155e95d1-311b-47bb-98d1-6ad9f3072cbe"/></p>`;

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.boardInfo}>
                    <div>존나 아무거나 존나게 긴 엄청난 아무글 제목입니다</div>
                    <div css={s.boardDetailInfo}>
                        <div css={s.category}>나라</div>
                        <div css={s.date}>2024.06.25</div>
                    </div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: test,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailComponent;
