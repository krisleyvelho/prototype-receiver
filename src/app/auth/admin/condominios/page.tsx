import { CondominioList } from "./components/CondominioList";
import { CreateCondominio } from "./components/CreateCondominio";

export default function CondominiosPage() {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <CreateCondominio />
      <CondominioList />
    </div>
  )
}