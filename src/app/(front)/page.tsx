import Image from "next/image";
import ProducItems from "../components/products/ProducItems";
import data from "../../../lib/models/data";

export default function Home() {
  return (
    <>
      <h2 className=" text-2xl py-2 ">Lastest Products</h2>
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {
          data.products.map((product) => <ProducItems key={product.slug} product={product} />)
        }
      </div>


    </>
  );
}
