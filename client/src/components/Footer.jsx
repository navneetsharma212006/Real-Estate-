const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-950">E-State</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Reliable property services for sales, rentals, and buyer support.
          </p>
        </div>
        <div className="grid gap-1 text-sm leading-6 text-slate-600">
          <p>navneetsh21@gmail.com</p>
          <p>+91 6267502221</p>
          <p>Indore,India</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
