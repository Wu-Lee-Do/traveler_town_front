/** @jsxImportSource @emotion/react */
import * as s from "./style";
import Select from "react-select";
import { useReactSelect } from "../../../hooks/useReactSelect";
import { useMutation } from "react-query";
import {
    editAgeRequest,
    editImgRequest,
    editSexRequest,
    sendMailRequest,
} from "../../../apis/account/accountApi";
import { useEffect, useRef } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import { FaCheckCircle } from "react-icons/fa";

function InfoComponent({ profileData }) {
    const newImgRef = useRef();
    console.log(profileData);

    const editProfileImgMutation = useMutation({
        mutationKey: "profileImgMutation",
        mutationFn: editImgRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("프로필 이미지가 변경 되었습니다.");
            window.location.replace("/account/mypage/info");
        },
        onError: (error) => {
            console.log(error);
        },
    });

    const handleImgChange = (e) => {
        const files = Array.from(e.target.files);
        console.log(e.target.value);

        if (files.length === 0) {
            e.target.value = "";
            return;
        }

        if (window.confirm("프로필 이미지를 변경 하시겠습니까?")) {
            const storageRef = ref(
                storage,
                `user/profile_img/${uuid()}_${files[0].name}`
            );
            const uploadTask = uploadBytesResumable(storageRef, files[0]);
            uploadTask.on(
                "state_changed",
                (snapshot) => {},
                (error) => {},
                () => {
                    getDownloadURL(storageRef).then((url) => {
                        editProfileImgMutation.mutate({
                            profileImg: url,
                        });
                    });
                }
            );
        }
    };

    const sendMailMutation = useMutation({
        mutationKey: "sendMailMutation",
        mutationFn: sendMailRequest,
        onSuccess: (response) => {
            console.log(response);
            alert("메일을 확인해 주세요");
        },
        onError: (error) => {
            console.log(error);
        },
    });

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

    const handleSaveClick = () => {
        if (
            (selectedSex.option.value === 0) |
            (selectedAge.option.value === 0)
        ) {
            alert("추가정보를 전부 기입해주세요");
            return;
        }
        editSexMutation.mutate({ sex: selectedSex?.option?.value });
        editAgeMutation.mutate({ age: selectedAge?.option?.value });
        alert("저장되었습니다");
    };

    const handleSendMailClick = () => {
        sendMailMutation.mutate();
    };

    useEffect(() => {
        selectedSex.setValue({
            value: profileData?.data.sex === 0 ? 0 : profileData?.data.sex,
            label:
                profileData?.data.sex === 1
                    ? "남"
                    : profileData?.data.sex === 2
                    ? "여"
                    : "선택",
        });
        selectedAge.setValue({
            value: profileData?.data.age === 0 ? 0 : profileData?.data.age,
            label:
                profileData?.data.age === 0
                    ? "선택"
                    : `${profileData?.data.age}대`,
        });
    }, [profileData]);

    return (
        <div css={s.infoLayout}>
            <h1>기본정보</h1>
            <div css={s.basicInfoBox}>
                <div css={s.profileBox}>
                    <input
                        type="file"
                        ref={newImgRef}
                        style={{ display: "none" }}
                        onChange={handleImgChange}
                    />
                    <img
                        src={profileData?.data.profileImg}
                        alt=""
                        onClick={() => newImgRef.current.click()}
                    />
                    {profileData?.data.nickname}
                </div>
                <div css={s.infoBox}>
                    <div>
                        <div>{profileData?.data.username}</div>
                        <div></div>
                    </div>
                    <div>
                        <div>{profileData?.data.email}</div>
                        {profileData?.data.authorities.filter(
                            (auth) => auth.authority === "ROLE_USER"
                        ).length === 0 ? (
                            <button onClick={handleSendMailClick}>
                                인증하기
                            </button>
                        ) : (
                            <div css={s.mailCheck}>
                                <FaCheckCircle />
                            </div>
                        )}
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
                <div>
                    <button onClick={handleSaveClick}>저장</button>
                </div>
            </div>
        </div>
    );
}

export default InfoComponent;
