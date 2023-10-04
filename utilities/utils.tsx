import path from "path";
import fs from "fs/promises";

export const getData = async () => {
  const filePath = path.join(process.cwd(), `data`, `dummy.json`);
  const jsonData = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data;
};
