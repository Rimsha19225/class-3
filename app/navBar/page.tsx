import Link from "next/link"
const NavBar = () => {
  return (
    <div className="nav">
      <Link href="/" className="nav1">Home</Link>
      <Link href="/products" className="nav2">Products</Link>
    </div>
  )
}

export default NavBar
