
import Image from "next/image"
import laptop from "../image/laptop.png"
import camera from "../image/camera.png"
import printer from "../image/printer.png"
const Products = () => {
  return (
    <div className="body-product">
      <h1 className="product-head">Electronic Devices</h1>
      <ol className="product-list">
        <li>Laptop
          <Image
          className="img"
          src={laptop}
          alt="Laptop"
          />
        </li>
        <li>Camera
        <Image
          className="img"
          src={camera}
          alt="Laptop"
          />
        </li>
        <li>Printer
        <Image
          className="img"
          src={printer}
          alt="Laptop"
          />
        </li>
      </ol>
    </div>
  )
}

export default Products
