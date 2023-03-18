import { Text } from "@chakra-ui/react";
import RatingComponent from "@components/rating-component/RatingComponent";
import { useNavigate } from "react-router-dom";

type Props = {
  item: any;
};

function ProductComponent(props: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/pd?p_id=${props.item._id}`)}
        className="md:flex hidden flex-col"
      >
        <div className="flex flex-col col-span-1 space-y-2 cursor-pointer border border-slate-200">
          <div className="h-72 bg-slate-100 grid items-center content-center justify-center">
            <img src={props.item.pictures[0]} alt="" className="h-60" />
          </div>
          <div className="p-2">
            <Text noOfLines={4}>{props.item.title}</Text>
            <div className="flex flex-row items-center space-x-2">
              <p className="text-sm">{props.item.avg_rating} </p>
              <span>
                <RatingComponent ratings={props.item.avg_rating} />
              </span>
            </div>
            <p className="text-lg font-semibold">{props.item.price}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => navigate(`/pd?p_id=${props.item._id}`)}
        className="md:hidden flex w-full"
      >
        <div className="grid grid-cols-6 space-x-4 p-2">
          <div className="h-20 bg-slate-100 col-span-1 grid items-center content-center">
            <img
              src={props.item.pictures[0]}
              alt=""
              className=" object-cover h-20"
            />
          </div>
          <div className="flex flex-col col-span-5">
            <Text noOfLines={3} className="text-sm">
              {props.item.title}
            </Text>
            <p>
              ${props.item.price} <span className="font-features sups">00</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
