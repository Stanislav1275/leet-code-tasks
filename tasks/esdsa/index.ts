export class ECDSA {
  public static =
    BigInt(6277101735386680763835789423207666416083908700390324961279n);
}

const crypto = require("crypto");

// Параметры кривой secp256k1
const p = BigInt(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F",
);
const a = BigInt(0);
const b = BigInt(7);
const Gx = BigInt(
  "0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798",
);
const Gy = BigInt(
  "0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",
);
const n = BigInt(
  "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141",
);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static add(p1, p2) {
    if (p1.isInfinity()) return p2;
    if (p2.isInfinity()) return p1;

    if (p1.x === p2.x && p1.y !== p2.y) return new Point(null, null);

    let m;
    if (p1.x === p2.x) {
      m = ((3n * p1.x * p1.x + a) * modInverse(2n * p1.y, p)) % p;
    } else {
      m = ((p2.y - p1.y) * modInverse(p2.x - p1.x, p)) % p;
    }

    const x3 = (m * m - p1.x - p2.x) % p;
    const y3 = (m * (p1.x - x3) - p1.y) % p;
    return new Point((x3 + p) % p, (y3 + p) % p);
  }

  static multiply(p, k) {
    let r = new Point(null, null);
    let addend = p;

    while (k > 0n) {
      if (k & 1n) {
        r = Point.add(r, addend);
      }
      addend = Point.add(addend, addend);
      k >>= 1n;
    }

    return r;
  }

  isInfinity() {
    return this.x === null && this.y === null;
  }
}

function modInverse(k, p) {
  if (k === 0n) {
    throw new Error("Division by zero");
  }
  if (k < 0n) {
    return p - modInverse(-k, p);
  }
  let [s, old_s] = [0n, 1n];
  let [t, old_t] = [1n, 0n];
  let [r, old_r] = [p, k];

  while (r !== 0n) {
    const quotient = old_r / r;
    [old_r, r] = [r, old_r - quotient * r];
    [old_s, s] = [s, old_s - quotient * s];
    [old_t, t] = [t, old_t - quotient * t];
  }

  return (old_t + p) % p;
}

function generateKeyPair() {
  const privateKey = BigInt("0x" + crypto.randomBytes(32).toString("hex")) % n;
  const publicKey = Point.multiply(new Point(Gx, Gy), privateKey);
  return { privateKey, publicKey };
}

function sha256(msg) {
  return BigInt("0x" + crypto.createHash("sha256").update(msg).digest("hex"));
}

function sign(privateKey, msg) {
  const z = sha256(msg);
  let r = 0n;
  let s = 0n;
  while (r === 0n || s === 0n) {
    const k = BigInt("0x" + crypto.randomBytes(32).toString("hex")) % n;
    const { x: x1 } = Point.multiply(new Point(Gx, Gy), k);
    r = x1 % n;
    s = (modInverse(k, n) * (z + r * privateKey)) % n;
  }
  return { r, s };
}

function verify(publicKey, msg, signature) {
  const { r, s } = signature;
  const z = sha256(msg);
  const w = modInverse(s, n);
  const u1 = (z * w) % n;
  const u2 = (r * w) % n;
  const { x: x1 } = Point.add(
    Point.multiply(new Point(Gx, Gy), u1),
    Point.multiply(publicKey, u2),
  );
  return r === x1 % n;
}

export const exaple_ecdsa = () => {
  // Пример использования
  const { privateKey, publicKey } = generateKeyPair();
  console.log("Private Key:", privateKey.toString(16));
  console.log(
    "Public Key:",
    `(${publicKey.x.toString(16)}, ${publicKey.y.toString(16)})`,
  );

  const msg = "Hello, ECDSA!";
  const signature = sign(privateKey, msg);
  console.log("Signature:", signature);

  const isValid = verify(publicKey, msg, signature);
  console.log("Signature valid:", isValid);
};
