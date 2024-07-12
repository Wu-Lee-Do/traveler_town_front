/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { FaPencilAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

import { useNavigate } from "react-router-dom";
import BoardSearchComponent from "../BoardSearchComponent/BoardSearchComponent";
import BoardCardComponent from "../BoardCardComponent/BoardCardComponent";
import {
    getBoardsAll,
    getBoardsAllBySearch,
} from "../../../apis/board/boardApi";

function BoardListPageComponent({
    listTitle,
    boardCategoryId,
    writeUrl,
    detailUrl,
}) {
    const [boardDataList, setBoardDataList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchState, setSearchState] = useState(false);
    const [categoryState, setCategoryState] = useState(1);
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const navigate = useNavigate();

    const searchKeyDown = (e) => {
        if (e.key === "Enter") {
            if (searchText.length === 0) {
                alert("검색어를 입력해주세요.");
                return;
            }
            setSearchState(true);
        }
    };

    const boardsAllQuery = useQuery(
        ["boardsAllQuery"],
        async () =>
            await getBoardsAll({
                boardCategoryId: boardCategoryId,
            }),
        {
            enabled: categoryState === 1,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setCategoryState(1);
                setBoardDataList(
                    response.data.sort(
                        (a, b) =>
                            new Date(b.createDate) - new Date(a.createDate)
                    )
                );
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const boardsAllBySearchQuery = useQuery(
        ["boardsAllBySearchQuery"],
        async () =>
            await getBoardsAllBySearch({
                boardCategoryId: boardCategoryId,
                searchText: searchText,
            }),
        {
            enabled: searchState === true,
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                setSearchState(false);
                setCategoryState(3);
                setBoardDataList(
                    response.data.sort(
                        (a, b) =>
                            new Date(b.createDate) - new Date(a.createDate)
                    )
                );
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    useEffect(() => {
        setCategoryState(1);
    }, []);

    const handleCategoryClick = (category) => {
        setCategoryState(category);
        if (category === 2) {
            setBoardDataList((prevList) =>
                [...prevList].sort(
                    (a, b) => b.boardLikeCount - a.boardLikeCount
                )
            );
        }
    };

    const handleResetClick = () => {
        setSearchText("");
        boardsAllQuery.refetch();
    };

    const handleWriteClick = () => {
        if (
            principalData?.data.authorities.filter(
                (auth) => auth.authority === "ROLE_USER"
            ).length === 1
        ) {
            if (boardCategoryId === 1 || boardCategoryId === 2) {
                navigate(`/board/${writeUrl}/write`);
            } else if (boardCategoryId === 3) {
                if (
                    principalData?.data.age === 0 ||
                    principalData?.data.sex === 0
                ) {
                    alert(
                        "동행 게시물은 추가 정보 입력을 해야 작성하실 수 있습니다."
                    );
                    window.location.replace("/account/mypage/info");
                } else {
                    navigate(`/board/${writeUrl}/write`);
                }
            }
        } else {
            alert("게시물을 작성하기 위해서는 이메일 인증이 필요합니다.");
            window.location.replace("/account/mypage/info");
        }
    };

    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>{listTitle}</h1>
                    <div>
                        <button onClick={handleResetClick}>
                            <GrPowerReset />
                        </button>
                        <div css={s.searchBox}>
                            <BoardSearchComponent
                                searchText={searchText}
                                setSearchText={setSearchText}
                                onKeyDown={searchKeyDown}
                                placeholder={"게시물 검색"}
                                onClick={() => setSearchState(true)}
                            />
                        </div>
                    </div>
                </div>
                <div css={s.listHeader(categoryState)}>
                    <div>
                        <div onClick={() => handleCategoryClick(1)}>최신</div>
                        <div onClick={() => handleCategoryClick(2)}>인기</div>
                    </div>
                    <button onClick={handleWriteClick}>
                        <FaPencilAlt />
                    </button>
                </div>
                <div css={s.listLayout}>
                    <div css={s.listWrap}>
                        {boardDataList.map((data) => (
                            <BoardCardComponent
                                key={data.boardId}
                                boardId={data.boardId}
                                boardTitle={data.boardTitle}
                                boardContent={data.boardContent}
                                createDate={data.createDate}
                                updateDate={data.updateDate}
                                profileImg={data.profileImg}
                                nickname={data.nickname}
                                countryNameKor={data.countryNameKor}
                                boardBookmarkCount={data.boardBookmarkCount}
                                boardCommentCount={data.boardCommentCount}
                                boardLikeCount={data.boardLikeCount}
                                detailUrl={detailUrl}
                                sex={boardCategoryId === 3 ? data.sex : ""}
                                age={boardCategoryId === 3 ? data.age : ""}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardListPageComponent;
