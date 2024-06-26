/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BoardDetailComponent({
    boardTitle,
    boardContent,
    countryNameKor,
    updateDate,
}) {
    const test = `<p>	<img src="https://firebasestorage.googleapis.com/v0/b/traveler-town.appspot.com/o/images%2Fboard%2Fc80485f0-2af1-4a46-8999-710e6f1bdd87%2F1719312855037?alt=media&token=155e95d1-311b-47bb-98d1-6ad9f3072cbe"/></p>`;

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.boardInfo}>
                    <div>{boardTitle}</div>
                    <div css={s.boardDetailInfo}>
                        <div css={s.category}>{countryNameKor}</div>
                        <div css={s.date}>{updateDate}</div>
                    </div>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: boardContent,
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailComponent;
