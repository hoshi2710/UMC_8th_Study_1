import {
  responseFromReview,
  responseFromReviewList,
} from "../dtos/review.dto.js";
import {
  addReview,
  getAllReviews,
  getReview,
} from "../repositories/review.repository.js";

export const uploadReview = async (data) => {
  // console.log(data.storeId);
  const addedReviewId = await addReview({
    userId: data.userId,
    storeId: data.storeId,
    star: data.star,
    contents: data.contents,
    uploadedAt: data.uploadedAt,
  });
  if (addedReviewId == null) {
    throw new Error("존재하지 않은 매장 ID 입니다.");
  }
  const review = await getReview(addedReviewId);
  return responseFromReview({ review });
};
export const getStoreReviews = async (data) => {
  const review = await getAllReviews(data);
  // console.log(review);
  return responseFromReviewList({ review });
};
