/** @jsxImportSource @emotion/react */
import * as s from "./style";

function BoardDetailComponent({
    boardTitle,
    boardContent,
    countryNameKor,
    updateDate,
}) {
    const handleCountryClick = () => {
        window.location.replace(`/country?search=${countryNameKor}`);
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.boardInfo}>
                    <div>{boardTitle}</div>
                    <div css={s.boardDetailInfo}>
                        <div css={s.category} onClick={handleCountryClick}>
                            {countryNameKor}
                        </div>
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
