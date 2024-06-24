/** @jsxImportSource @emotion/react */
import * as s from "./style";

function EmbassyComponent({ embassyData }) {
    return (
        <div css={s.layout}>
            <h1>재외 공관 정보</h1>
            <ul css={s.emBassyLayout}>
                <div>비상연락망</div>
                {embassyData.map((embassy) => (
                    <li css={s.embassyBox}>
                        <div css={s.displayBox}>
                            <div css={s.embassyName}>{embassy.embassyName}</div>
                            <div css={s.embassyType}>{embassy.type}</div>
                            <div css={s.embassyEmerNum}>
                                {embassy.emergencyNumber}
                            </div>
                        </div>
                        <div css={s.hiddenBox}>
                            <div>
                                <div css={s.embassyTitle}>일반 전화번호</div>
                                <div css={s.embassyTitle}>무료 전화번호</div>
                                <div css={s.embassyTitle}>영사 콜센터 번호</div>
                                <div css={s.embassyTitle}>주소</div>
                            </div>
                            <div>
                                <div css={s.embassyInfo}>
                                    {embassy.phoneNumber}
                                </div>
                                <div css={s.embassyInfo}>
                                    {embassy.freePhoneNumber}
                                </div>
                                <div css={s.embassyInfo}>
                                    {embassy.callCenterNumber}
                                </div>
                                <div css={s.embassyInfo}>{embassy.address}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmbassyComponent;

// address
// :
// "115 W Mercer St. Seattle, WA 98119,"
// callCenterNumber
// :
// "(82)2-3210-0404"
// concurrentPosition
// :
// "일반"
// countryCode
// :
// "US"
// countryNameKor
// :
// "미국"
// embassyId
// :
// 66
// embassyName
// :
// "주 시애틀 대한민국 총영사관"
// emergencyNumber
// :
// "(1)206-947-8293"
// freePhoneNumber
// :
// "080-020-0219"
// latitude
// :
// "47.614745"
// longitude
// :
// "-122.339339"
// phoneNumber
// :
// "(1)206-441-1011"
// type
// :
// "총영사관"
