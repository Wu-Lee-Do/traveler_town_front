/** @jsxImportSource @emotion/react */
import { useSearchParams } from "react-router-dom";
import * as s from "./style";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { selectedTouristAttractionState } from "../../../atoms/selectedTouristAttractionAtom";
import StarRatingComponent from "../../../components/CountryInfoPage/StarRatingComponent/StarRatingComponent";

function TouristAttractionInfoPage() {
    const [searchParam, setSearchParam] = useSearchParams();
    const [selectedTouristAttraction, setSelectedTouristAttraction] =
        useRecoilState(selectedTouristAttractionState);
    useEffect(() => {
        console.log(searchParam.get("search"));
        console.log(selectedTouristAttraction);
    }, []);
    return (
        <div css={s.layout}>
            <div css={s.infoLayout}>
                <div css={s.touristAttractionLayout}>
                    <h1>{selectedTouristAttraction?.displayName.text}</h1>
                    <div css={s.infoBox}>
                        <StarRatingComponent
                            avrRate={selectedTouristAttraction?.rating}
                        />
                    </div>
                    <div css={s.openInfo}>
                        {!!selectedTouristAttraction.regularOpeningHours ? (
                            <div
                                css={s.openInfo(
                                    selectedTouristAttraction
                                        .regularOpeningHours.openNow
                                )}
                            >
                                {selectedTouristAttraction.regularOpeningHours
                                    .openNow === true
                                    ? "영업 중"
                                    : "영업 시간 종료"}
                            </div>
                        ) : (
                            ""
                        )}
                        <ul css={s.openInfoDetail}>
                            {!!selectedTouristAttraction.regularOpeningHours
                                ? selectedTouristAttraction.regularOpeningHours.weekdayDescriptions.map(
                                      (data) => <li>{data}</li>
                                  )
                                : ""}
                        </ul>
                    </div>
                    <div css={s.mainBox}>
                        <div css={s.imgBox}>
                            {/* <img src={countryImgUrl} alt="" /> */}
                        </div>
                        <div css={s.infoBox}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TouristAttractionInfoPage;
