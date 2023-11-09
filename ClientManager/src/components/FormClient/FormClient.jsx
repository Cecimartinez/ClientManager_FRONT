export const FormClient = () => {
  return (
    <>
      <form className="my-5">
        <div className="mb-5">
        <input type="text" placeholder="Nombre" className="input input-bordered w-full max-w-xs mb-2" />
        <input type="text" placeholder="Apellido" className="input input-bordered w-full max-w-xs mb-2" />
        <input type="text" placeholder="Teléfono" className="input input-bordered w-full max-w-xs mb-2" />
        <input type="text" placeholder="Correo" className="input input-bordered w-full max-w-xs mb-2" />

        </div>

        <div>
          <button className="btn">Button</button>
        </div>
      </form>
    </>
  )
}