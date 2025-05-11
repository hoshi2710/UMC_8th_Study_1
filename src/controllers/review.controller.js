import { StatusCodes } from "http-status-codes";
import {
  bodyToMyReviewList,
  bodyToReview,
  bodyToReviewList,
} from "../dtos/review.dto.js";
import {
  uploadReview,
  getStoreReviews,
  getMyReviews,
} from "../services/review.service.js";

export const handleUploadReview = async (req, res, next) => {
  console.log("새로운 리뷰가 작성되었습니다!");
  console.log("body: ", req.body);
  const review = await uploadReview(bodyToReview(req.body, req.params));
  res.status(StatusCodes.CREATED).success(review);
};

export const handleListStoreReviews = async (req, res, next) => {
  console.log("리뷰 로딩 요청이 발생하였습니다!");
  console.log("body: ", req.body);
  const review = await getStoreReviews(bodyToReviewList(req.params, req.query));
  res.status(StatusCodes.OK).success(review);
};

export const handleListMyReviews = async (req, res, next) => {
  console.log("내가 작성한 리뷰 로딩 요청이 발생하였습니다!");
  console.log("body: ", req.body);
  const review = await getMyReviews(bodyToMyReviewList(req.body, req.query));
  res.status(StatusCodes.OK).success(review);
};
