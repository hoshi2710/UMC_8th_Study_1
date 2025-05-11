import { prisma } from "../db.config.js";

export const addStore = async (data) => {
  try {
    const confirm1 = await prisma.store.findFirst({
      select: {
        id: true,
      },
      where: {
        name: data.name,
      },
    });
    if (confirm1 != null) return -1;
    const confirm2 = await prisma.foodType.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.foodTypeId,
      },
    });
    if (confirm2 == null) return -2;
    const confirm3 = await prisma.locations.findFirst({
      select: {
        id: true,
      },
      where: {
        id: data.locationId,
      },
    });
    if (confirm3 == null) return -3;
    const store = await prisma.store.create({ data: data });
    const storeStatus = await prisma.storeStatus.create({
      data: {
        storeId: store.id,
        reviewsCount: 0,
        starTotal: 0,
      },
    });
    return store.id;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  }
};
export const getStore = async (storeId) => {
  const conn = await pool.getConnection();
  try {
    const store = await prisma.store.findFirst({
      select: {
        name: true,
        address: true,
        openTime: true,
        closeTime: true,
        foodType: {
          select: {
            storeTypeName: true,
          },
        },
        locations: {
          select: {
            name: true,
          },
        },
      },
      where: {
        id: storeId,
      },
    });
    return store;
  } catch (err) {
    throw new Error(
      `오류가 발생했어요. 요청 파라미터를 확인해주세요. (${err})`
    );
  } finally {
    conn.release();
  }
};
