import { pool, prisma } from "../db.config.js";

// User 데이터 삽입
export const addUser = async (data) => {
  const conn = await pool.getConnection();

  try {
    // 기존 쿼리문을 활용한 코드
    // const [confirm] = await pool.query(
    //   `SELECT EXISTS(SELECT 1 FROM members WHERE email = ?) as isExistEmail;`,
    //   data.email
    // );

    // if (confirm[0].isExistEmail) {
    //   return null;
    // }

    // const [result] = await pool.query(
    //   `INSERT INTO members (email, name, gender, birthday, address, phone_no) VALUES (?, ?, ?, ?, ?, ?);`,
    //   [
    //     data.email,
    //     data.name,
    //     data.gender,
    //     data.birth,
    //     data.address,
    //     data.phoneNumber,
    //   ]
    // );
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
  } finally {
    conn.release();
  }
};

// 사용자 정보 얻기
export const getUser = async (userId) => {
  const conn = await pool.getConnection();

  try {
    /*const [user] = await pool.query(
      `SELECT * FROM members WHERE id = ?;`,
      userId
    );
    if (user.length == 0) {
      return null;
    }*/
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
  } finally {
    conn.release();
  }
};

// 음식 선호 카테고리 매핑
export const setPreference = async (userId, foodCategoryId) => {
  const conn = await pool.getConnection();

  try {
    /*
    await pool.query(
      `INSERT INTO members_food_type (food_type_id, user_id) VALUES (?, ?);`,
      [foodCategoryId, userId]
    );*/
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
  } finally {
    conn.release();
  }
};

// 사용자 선호 카테고리 반환
export const getUserPreferencesByUserId = async (userId) => {
  const conn = await pool.getConnection();

  try {
    /*
    const [preferences] = await pool.query(
      "Select name from (select user_id, name from food_type right join members_food_type on food_type.id = members_food_type.food_type_id) as res where user_id = ?",
      userId
    );*/

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
  } finally {
    conn.release();
  }
};
