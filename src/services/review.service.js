import {
  responseFromReview,
  responseFromReviewList,
} from "../dtos/review.dto.js";
import { StoreNotFoundError, UserNotFoundError } from "../error.js";
import {
  addReview,
  getAllReviews,
  getReview,
  getAllMyReviews,
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
    throw new StoreNotFoundError("존재하지 않는 스토어 입니다.", data);
  }
  const review = await getReview(addedReviewId);
  return responseFromReview({ review });
};
export const getStoreReviews = async (data) => {
  const review = await getAllReviews(data);
  if (review == null) {
    throw new StoreNotFoundError("존재하지 않는 스토어 입니다.", data);
  }
  return responseFromReviewList({ review });
};
export const getMyReviews = async (data) => {
  const review = await getAllMyReviews(data);
  if (review == null) {
    throw new UserNotFoundError("존재하지 않는 사용자 입니다.", data);
  }
  return responseFromReviewList({ review });
};
