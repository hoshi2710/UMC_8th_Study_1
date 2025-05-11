import { pool, prisma } from "../db.config.js";
export const addReview = async (data) => {
  const conn = await pool.getConnection();

  try {
    // const [confirm] = await pool.query(
    //   `SELECT EXISTS(SELECT 1 FROM store WHERE id = ?) as isExistStore;`,
    //   data.storeId
    // );
    const confirm = await prisma.store.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.storeId,
      },
    });
    if (confirm == null) {
      return null;
    }
    // const [review] = await pool.query(
    //   `INSERT INTO review (user_id,store_id,uploaded_at,star,contents) VALUES (?, ?, ?, ?, ?);`,
    //   [data.userId, data.storeId, data.uploadedAt, data.star, data.contents]
    // );
    const review = await prisma.review.create({ data: data });
    const storeStatus = await prisma.storeStatus.update({
      where: {
        id: data.storeId,
      },
      data: {
        reviewsCount: {
          increment: 1,
        },
        starTotal: {
          increment: data.star,
        },
      },
    });
    // const [storeStatus] = await pool.query(
    //   `update store_status set reviews_count = reviews_count + 1, star_total = star_total + ? where id = ?`,
    //   [data.star, data.storeId]
    // );
    return review.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

export const getReview = async (reviewId) => {
  const conn = await pool.getConnection();
  try {
    // const [review] = await pool.query(
    //   `select name,star,contents,uploaded_at from UMC1.store join UMC1.review on review.store_id = store.id where review.id = ?`,
    //   reviewId
    // );
    const review = await prisma.review.findFirst({
      select: {
        store: {
          select: {
            name: true,
          },
        },
        star: true,
        contents: true,
        uploadedAt: true,
      },
      where: {
        id: reviewId,
      },
    });
    return review;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};

export const getAllReviews = async (data) => {
  const review = await prisma.review.findMany({
    select: {
      id: true,
      userId: true,
      storeId: true,
      uploadedAt: true,
      star: true,
      contents: true,
      members: {
        select: {
          id: true,
          name: true,
          gender: true,
          birth: true,
          address: true,
          phoneNumber: true,
          email: true,
        },
      },
      store: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      storeId: data.storeId,
      id: {
        gt: data.cursor,
      },
    },
    orderBy: {
      id: "asc",
    },
    take: 5,
  });
  return review;
};

export const getAllMyReviews = async (data) => {
  const review = await prisma.review.findMany({
    select: {
      id: true,
      userId: true,
      storeId: true,
      uploadedAt: true,
      star: true,
      contents: true,
      members: {
        select: {
          id: true,
          name: true,
          gender: true,
          birth: true,
          address: true,
          phoneNumber: true,
          email: true,
        },
      },
      store: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    where: {
      userId: data.userId,
      id: {
        gt: data.cursor,
      },
    },
    orderBy: {
      id: "asc",
    },
    take: 5,
  });
  return review;
};
