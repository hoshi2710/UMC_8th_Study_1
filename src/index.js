import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { handleUserSignUp } from "./controllers/user.controller.js";
import {
  handleListStoreReviews,
  handleUploadReview,
  handleListMyReviews,
} from "./controllers/review.controller.js";
import {
  handleCreateMission,
  handleMissionAction,
  handleListStoreMissions,
  handleListMyOngoingMissions,
} from "./controllers/mission.controller.js";
import { handleCreateStore } from "./controllers/store.controller.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors()); // cors 방식 허용
app.use(express.static("public")); // 정적 파일 접근
app.use(express.json()); // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({ extended: false })); // 단순 객체 문자열 형태로 본문 데이터 해석

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", handleUserSignUp);
app.post("/stores/:storeId/reviews", handleUploadReview);
app.post("/stores/:storeId/missions", handleCreateMission);
app.get("/stores/:storeId/missions", handleListStoreMissions);
app.post("/missions/:missionId/action", handleMissionAction);
app.post("/stores", handleCreateStore);
app.get("/stores/:storeId/review", handleListStoreReviews);
app.get("/me/review", handleListMyReviews);
app.get("/me/missions/ongoing", handleListMyOngoingMissions);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
