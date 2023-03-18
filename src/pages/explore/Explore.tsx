import CheckItem from "@components/check-item/CheckItem";
import ProductComponent from "@components/product-component/ProductComponent";
import slugify from "@helpers/slugify";
import GeneralLayout from "@layouts/GeneralLayout";
import { data } from "@utils/data";
import { products } from "@utils/products";
import { useSearchParams } from "react-router-dom";

type Props = {};

const Explore = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <GeneralLayout>
      <div className="grid grid-cols-6 min-h-screen">
        <div className="col-span-1 md:flex hidden flex-col space-y-4 border-r border-slate-300 p-4">
          <div className="flex flex-col space-y-1 text-sm">
            <p className="text-blue-700 font-semibold">All deals</p>
            <p className="text-blue-700">Available</p>
            <p className="text-blue-700">Upcoming</p>
            <p className="text-blue-700">Watchlist</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-slate-700 font-semibold text-lg">
              Prime programs
            </p>
            <CheckItem
              checked={false}
              title={"Prime"}
              onClick={() => console.log("prime")}
            />
            <CheckItem
              checked={false}
              title={"prime early access deals"}
              onClick={() => console.log("prime early access deals")}
            />
            <CheckItem
              checked={false}
              title={"prime exclusive deals"}
              onClick={() => console.log("prime exclusive deals")}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <p className="text-slate-700 font-semibold text-lg">Departments</p>
            {data.categories.map((category, index) => (
              <CheckItem
                key={index}
                checked={slugify(category.name) === searchParams.get("cat")}
                title={category.name}
                onClick={() => {
                  searchParams.set("cat", slugify(category.name));
                  setSearchParams(searchParams);
                }}
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-5 col-span-6 lg:grid md:grid flex flex-col lg:grid-cols-5 md:grid-cols-3 gap-3 p-2">
          {products.map((item, index) => (
            <ProductComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Explore;
