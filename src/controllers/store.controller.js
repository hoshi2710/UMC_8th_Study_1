import { StatusCodes } from "http-status-codes";
import { bodyToStore } from "../dtos/store.dto.js";
import { createStore } from "../services/store.service.js";

export const handleCreateStore = async (req, res, next) => {
  console.log("새로운 스토어가 추가되었습니다!");
  console.log("body:", req.body);
  const store = await createStore(bodyToStore(req.body));
  res.status(StatusCodes.CREATED).success(store);
};
