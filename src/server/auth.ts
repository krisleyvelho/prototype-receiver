import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "meusegredo";

export function gerarToken(id: string) {
  return jwt.sign({ id, admin: true }, JWT_SECRET, { expiresIn: "1h" });
}

export async function hashSenha(senha: string) {
  return bcrypt.hash(senha, 10);
}

export async function verificarSenha(senha: string, hash: string) {
  return bcrypt.compare(senha, hash);
}
