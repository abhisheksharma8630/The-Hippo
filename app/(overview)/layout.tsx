import { Header } from "./header"

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Header/>
        <main>
            {children}
        </main>
    </div>
  )
}
