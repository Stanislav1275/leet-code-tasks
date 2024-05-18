import crypto from "crypto";
import { ENCRYPTION_METHOD } from "./defaults";

export const decrypt = (data: Buffer, password: string) => {
  const decipher = crypto.createDecipher(ENCRYPTION_METHOD, password);
  const chunk1 = decipher.update(data);
  const chunk2 = decipher.final();
  return Buffer.concat([chunk1, chunk2], chunk1.length + chunk2.length);
};

export const encrypt = (message: string, password: string) => {
  const cipher = crypto.createCipher(ENCRYPTION_METHOD, password);
  const chunk1 = cipher.update(message);
  const chunk2 = cipher.final();
  return Buffer.concat([chunk1, chunk2], chunk1.length + chunk2.length);
};

export const getShasumData = (message: string) =>
  crypto.createHash("sha256").update(message).digest();
