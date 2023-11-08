import { ClientsTable } from "./components/ClientsTable"

export const Clients = () => {
  return (
    <>
      <h1 className="text-2xl">Client Table</h1>
      <div className="px-10 py-10">
        <ClientsTable />
      </div>
    </>
  )
}