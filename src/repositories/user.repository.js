import { prisma } from "../db.config.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    const user = await prisma.members.findFirst({
      where: { email: data.email },
    });
    if (user) return null;
    const created = await prisma.members.create({ data: data });
    return created.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  try {
    const user = await prisma.members.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) return null;
    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

// 음식 선호 카테고리 매핑
export const setPreference = async (userId, foodCategoryId) => {
  try {
    await prisma.membersFoodType.create({
      data: {
        userId: userId,
        foodTypeId: foodCategoryId,
      },
    });

    return;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId) => {
  try {
    const preferences = await prisma.membersFoodType.findMany({
      select: {
        userId: true,
        foodTypeId: true,
        foodType: {
          select: {
            name: true,
          },
        },
      },
      where: {
        userId: userId,
      },
      orderBy: {
        foodTypeId: "asc",
      },
    });
    return preferences;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};
