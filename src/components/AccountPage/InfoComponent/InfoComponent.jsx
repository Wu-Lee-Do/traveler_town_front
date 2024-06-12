/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/defaultImg.webp";
import Select from "react-select";
import { useReactSelect } from "../../../hooks/useReactSelect";
import { useMutation } from "react-query";
import {
    editAgeRequest,
    editSexRequest,
} from "../../../apis/account/accountApi";
import { useEffect } from "react";

function InfoComponent({ profileData }) {
    const editSexMutation = useMutation({
        mutationKey: "editSexMutation",
        mutationFn: editSexRequest,
        retry: 0,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const editAgeMutation = useMutation({
        mutationKey: "editAgeMutation",
        mutationFn: editAgeRequest,
        retry: 0,
        onSuccess: (response) => {
            console.log(response);
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const sexOptions = [
        { value: 1, label: "남" },
        { value: 2, label: "여" },
    ];
    const ageOptions = [
        { value: 10, label: "10대" },
        { value: 20, label: "20대" },
        { value: 30, label: "30대" },
        { value: 40, label: "40대" },
        { value: 50, label: "50대" },
        { value: 60, label: "60대" },
        { value: 70, label: "70대" },
        { value: 80, label: "80대" },
        { value: 90, label: "90대" },
    ];

    const selectedSex = useReactSelect();
    const selectedAge = useReactSelect();

    console.log(selectedSex?.option?.value);

    useEffect(() => {
        editSexMutation.mutate({ sex: selectedSex?.option?.value });
    }, [selectedSex.option]);

    useEffect(() => {
        editAgeMutation.mutate({
            age: selectedAge?.option?.value,
        });
    }, [selectedAge.option]);

    return (
        <div css={s.infoLayout}>
            <h1>기본정보</h1>
            <div css={s.basicInfoBox}>
                <div css={s.profileBox}>
                    <img src={defaultImg} alt="" />
                    {profileData?.data.nickname}
                </div>
                <div css={s.infoBox}>
                    <div>
                        <div>{profileData?.data.username}</div>
                        <div></div>
                    </div>
                    <div>
                        <div>{profileData?.data.email}</div>
                        <button>인증하기</button>
                    </div>
                </div>
            </div>
            <h1>추가정보</h1>
            <div css={s.additionalInfoBox}>
                <div>
                    <div>
                        <div>성별</div>
                        <div>
                            <Select
                                placeholder="선택"
                                styles={{
                                    control: (baseStyles) => ({
                                        ...baseStyles,
                                        outline: "none",
                                        fontSize: "16px",
                                        border: "none",
                                        backgroundColor: "transparent",
                                    }),
                                }}
                                options={sexOptions}
                                value={selectedSex.option}
                                onChange={selectedSex.handleOnChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>나이</div>
                        <div>
                            <Select
                                placeholder="선택"
                                styles={{
                                    control: (baseStyles) => ({
                                        ...baseStyles,
                                        outline: "none",
                                        fontSize: "16px",
                                        border: "none",
                                        backgroundColor: "transparent",
                                    }),
                                }}
                                options={ageOptions}
                                value={selectedAge.option}
                                onChange={selectedAge.handleOnChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoComponent;
