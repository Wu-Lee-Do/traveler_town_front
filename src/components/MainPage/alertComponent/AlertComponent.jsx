/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { countryAlertRequest } from "../../../apis/country/alretApi";
import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

function AlertComponent(props) {
    const [countryAlertData, setCountryAlertData] = useState();
    const [imgUrls, setImgUrls] = useState([]);
    const countryAlertQuery = useQuery(
        ["countryAlertQuery"],
        countryAlertRequest,
        {
            onSuccess: (response) => {
                response.json().then((result) => {
                    setCountryAlertData(result.data);
                    console.log(result.data);
                });
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    useEffect(() => {
        const storage = getStorage();

        if (countryAlertData && countryAlertData.length > 0) {
            const promises = countryAlertData.map((data) => {
                if (data) {
                    return getDownloadURL(
                        ref(storage, `country/${data.country_iso_alp2}.gif`)
                    )
                        .then((url) => url)
                        .catch((error) => {
                            return null; // 에러 발생 시 null 반환
                        });
                } else {
                    return Promise.resolve(null); // data가 null인 경우 즉시 null 반환
                }
            });

            Promise.all(promises)
                .then((results) => {
                    setImgUrls(results);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [countryAlertData]);

    return (
        <div css={s.layout}>
            <div css={s.newAlertPost}>
                <h1>최신 여행 경보</h1>
            </div>
            <div css={s.postBox}>
                <ul>
                    {countryAlertData?.map((data, index) => (
                        <li key={index} css={s.post}>
                            <div>
                                <div css={s.imgBox}>
                                    <img src={imgUrls[index]} alt="" />
                                </div>
                                <div css={s.countryNameBox}>
                                    <h3>{data.country_nm}</h3>
                                </div>
                                <div css={s.category(data.ctgy_nm)}>
                                    <h3>
                                        {data.ctgy_nm === null
                                            ? ""
                                            : `[${data.ctgy_nm}]`}
                                    </h3>
                                </div>
                            </div>
                            <a
                                href={`https://www.0404.go.kr/dev/newest_view.mofa?id=${data?.sfty_notice_id}`}
                                target="__blanck"
                            >
                                <h3 css={s.content}>{data.title}</h3>
                            </a>

                            <p>{data.wrt_dt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AlertComponent;
