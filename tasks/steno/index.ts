import * as fs from "fs";
import { decrypt, encrypt } from "./utils";

export const encryptExample = (secret?: string, password?: string) => {
  const original = fs.readFileSync("./tasks/steno/assets/image.png");
  const secretMessage = secret || "secret";
  const imageWithSecret = encrypt(password || "admin")(original, secretMessage);
  fs.writeFileSync("./tasks/steno/assets/imageSecret.png", imageWithSecret);
};
export const decryptExample = (password?: string) => {
  const imageWithSecret = fs.readFileSync(
    "./tasks/steno/assets/imageSecret.png",
  );
  console.log(decrypt(password)(imageWithSecret).toString());
};
