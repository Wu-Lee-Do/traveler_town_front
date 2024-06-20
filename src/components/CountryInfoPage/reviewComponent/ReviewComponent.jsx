/** @jsxImportSource @emotion/react */
import * as s from "./style";

import profileImg from "../../../assets/defaultImg.webp";
import StarRatingComponent from "../StarRatingComponent/StarRatingComponent";

function ReviewComponent({ reviews }) {
    console.log(reviews);
    return (
        <div css={s.layout}>
            <h2 css={s.title}>리뷰({reviews?.length})</h2>
            {reviews?.map((review, index) => (
                <div key={index} css={s.reviewLayout}>
                    <div css={s.profileBox}>
                        <div>
                            <img
                                src={review.authorAttribution.photoUri}
                                alt=""
                            />
                            <div css={s.profileDisplayName}>
                                {review.authorAttribution.displayName}
                            </div>
                            <div css={s.profileText}>
                                {review.relativePublishTimeDescription}
                            </div>
                        </div>
                        <div css={s.rating}>
                            <StarRatingComponent avrRate={review.rating} />
                        </div>
                        <div css={s.reviewText}>{review.text.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewComponent;
