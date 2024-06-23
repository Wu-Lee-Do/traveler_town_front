/** @jsxImportSource @emotion/react */
import { useQuery } from "react-query";
import * as s from "./style";
import { countryAlertRequest } from "../../../apis/country/alretApi";
import { useState } from "react";

function AlertComponent(props) {
    const [countryAlertData, setCountryAlertData] = useState();
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
                                <div css={s.countryNameBox}>
                                    <h3>{data.country_nm}</h3>
                                </div>
                                <div css={s.category}>
                                    <h3>{data.ctgy_nm}</h3>
                                </div>
                            </div>
                            <h3 css={s.content}>{data.title}</h3>
                            <p>{data.wrt_dt}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AlertComponent;
