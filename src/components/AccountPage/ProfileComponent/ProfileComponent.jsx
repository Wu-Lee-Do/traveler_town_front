/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import * as s from "./style";
import { useMutation, useQuery } from "react-query";
import { getBoardsByUserId } from "../../../apis/board/boardApi";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import InfoComponent from "../InfoComponent/InfoComponent";
import MainContentComponent from "../MainContentComponent/MainContentComponent";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import { editImgRequest } from "../../../apis/account/accountApi";
import EditPasswordComponent from "../EditPasswordComponent/EditPasswordComponent";

function ProfileComponent({ principalData }) {
    const navigate = useNavigate();
    const newImgRef = useRef();
    const location = useLocation();
    const [boardData, setBoardData] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

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

    const handleAccountSettingClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
        navigate("/account/mypage/info");
    };

    const handleEditPasswordClick = () => {
        setIsDropdownVisible(!isDropdownVisible);
        navigate("/account/mypage/editPassword");
    };

    const getBoardsByUserIdQuery = useQuery(
        ["getBoardsByUserIdQuery"],
        async () =>
            await getBoardsByUserId({
                userId: principalData?.data.userId,
            }),
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setBoardData(
                    response.data.sort(
                        (a, b) =>
                            new Date(b.createDate) - new Date(a.createDate)
                    )
                );
                console.log(response);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div css={s.infoLayout}>
            <div css={s.infoBox}>
                <div>
                    <div css={s.profileBox}>
                        <div css={s.profileImgBox}>
                            <img src={principalData?.data.profileImg} alt="" />
                            <input
                                type="file"
                                ref={newImgRef}
                                style={{ display: "none" }}
                                onChange={handleImgChange}
                            />
                        </div>
                        {location.pathname === "/account/mypage/info" ? (
                            <div
                                css={s.imgSettingIcon}
                                onClick={() => newImgRef.current.click()}
                            >
                                <MdOutlineEdit />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div css={s.profileInfo}>
                        <div css={s.profileNickname}>
                            {principalData?.data.nickname}
                        </div>
                        <div>
                            <div>
                                <div>{boardData.length}</div>
                                <div>게시물</div>
                            </div>
                            <div>
                                <div>623</div>
                                <div>팔로워</div>
                            </div>
                            <div>
                                <div>523</div>
                                <div>팔로잉</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.settingButtonBox} ref={dropdownRef}>
                    <button onClick={toggleDropdown}>
                        <IoMdSettings />
                    </button>
                    <ul css={s.dropdownMenu(isDropdownVisible)}>
                        <li onClick={handleAccountSettingClick}>계정설정</li>
                        <li onClick={handleEditPasswordClick}>비밀번호 변경</li>
                    </ul>
                </div>
            </div>
            <div css={s.mainBox}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainContentComponent
                                boardData={boardData}
                                principalData={principalData}
                            />
                        }
                    />
                    <Route
                        path="/info"
                        element={<InfoComponent profileData={principalData} />}
                    />
                    <Route
                        path="/editPassword"
                        element={<EditPasswordComponent />}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default ProfileComponent;
