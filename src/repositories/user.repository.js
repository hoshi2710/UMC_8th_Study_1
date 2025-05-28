import {prisma} from "../db.config.js";

// User 데이터 삽입
export const addUser = async (data) => {
  try {
    const user = await prisma.members.findFirst({
      where: {email: data.email},
    });
    if (user) return null;
    const created = await prisma.members.create({data: data});
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

export const modifyUser = async (data) => {
  try {
    const isExists = await prisma.members.findFirst({
      where: {
        id: data.id
      }
    })
    if (!isExists) return null;
    const user = await prisma.members.update({
      where: {
        id: data.id,
      },
      data: {
        email: data.email,
        name: data.name,
        gender: data.gender,
        birth: data.birth,
        address: data.address,
        phoneNumber: data.phoneNumber,
      }
    });
    return user;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
}

// 음식 선호 카테고리 매핑
export const setPreference = async (userId, foodCategoryId) => {
  try {
    await prisma.membersFoodType.create({
      data: {
        deletedAt: null,
        members: {
          connect: {id: userId}
        },
        foodType: {
          connect: {id: foodCategoryId}
        }
      },
    });

    return;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};
export const updatePreference = async (userId, preferences) => {
  try {
    const today = new Date();
    const dateString = today.toISOString().slice(0, 10);
    await prisma.membersFoodType.updateMany({
      where: {
        userId
      },
      data: {
        deletedAt: dateString
      }
    });
    for (const preference of preferences) {
      await setPreference(userId, preference);
    }
    return await getUserPreferencesByUserId(userId);
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
}

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
        deletedAt: null
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
