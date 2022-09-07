import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query["slug"];

  if (!slug || typeof slug !== "string") {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "a slug is required" }));

    return;
  }
  const data = await prisma.linkShort.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "this slug was not found" }));

    return;
  }

  return res.redirect(data.url);
};
