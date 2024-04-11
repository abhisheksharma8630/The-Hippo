import NavLinks from "../ui/posts/nav-links"

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div className="p-4">
        <NavLinks/>
        <div>{children}</div>
    </div>
  )
}
