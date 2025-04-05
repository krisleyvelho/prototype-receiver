import { CondominioType } from "../types/client";

export default function mountHashReceiver(condominio: CondominioType) {
  // return `${condominio.id}_${new Date().getTime()}`;
  return `${condominio.id}`;
}