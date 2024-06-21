/** @jsxImportSource @emotion/react */
import * as s from "./style";
import defaultImg from "../../../assets/스위스.jpeg";
import defaultProfileImg from "../../../assets/defaultImg.webp";
import { IoSearchOutline } from "react-icons/io5";

function MustGoRestaurantPage(props) {
    return (
        <div css={s.layout}>
            <div css={s.box}>
                <div css={s.titleBox}>
                    <h1>맛집</h1>
                    <div css={s.searchBox}>
                        <input
                            type="text"
                            placeholder="게시물 검색"
                            // value={searchCountry}
                            // onChange={handleSearchOnChange}
                            // onKeyDown={(e) => activeEnter(e)}
                        />
                        <button>
                            <IoSearchOutline />
                        </button>
                    </div>
                </div>
                <div css={s.listHeader}>
                    <div>최신</div>
                    <div>인기</div>
                </div>
                <div css={s.listLayout}>
                    <div css={s.listWrap}>
                        <div css={s.boardCard}>
                            <div css={s.imgBox}>
                                <img src={defaultImg} alt="" />
                            </div>
                            <div css={s.boardInfo}>
                                <div css={s.boardText}>
                                    <h3>스위스 맛집</h3>
                                    <div>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quod atque qui,
                                        molestiae non sapiente error quidem
                                        dolorem repellat veniam odio animi
                                        obcaecati voluptatem aperiam magnam cum
                                        tempore molestias provident esse.
                                    </div>
                                </div>
                                <div css={s.profileBox}>
                                    <img src={defaultProfileImg} alt="" />
                                    <div css={s.nickname}>nickname</div>
                                </div>
                            </div>
                        </div>
                        <div css={s.boardCard}>1</div>
                        <div css={s.boardCard}>1</div>
                        <div css={s.boardCard}>1</div>
                        <div css={s.boardCard}>1</div>
                        <div css={s.boardCard}>1</div>
                        <div css={s.boardCard}>1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MustGoRestaurantPage;
