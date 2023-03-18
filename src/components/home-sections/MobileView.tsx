import mobile_banner1 from "@assets/mobile_banner1.jpg";
import beauty_picks from "@assets/beauty_picks.jpg";
import iphone13 from "@assets/iphone_13.jpg";
import most_loved_easter from "@assets/most_loved_easter.jpg";
import oculus from "@assets/oculus.jpg";
import women_fashion from "@assets/women_fashion.jpg";
import shop_laptops from "@assets/shop_laptops.jpeg";

const mobile_carousel_images = [
    { image: most_loved_easter },
    { image: oculus },
    { image: women_fashion },
    { image: beauty_picks },
    { image: shop_laptops },
  ];
  


type Props = {}

const MobileView = (props: Props) => {
  return (
   <>
   <img
          src={mobile_banner1}
          alt=""
          className="w-full duration-700 ease-in-out absolute z-0 object-cover  top-0 right-0 left-0 bottom-0"
        />
        <div className="z-10 pt-60 flex overflow-x-auto space-x-4 px-2 w-full">
          {mobile_carousel_images.map((item, index) => (
            <section key={index} className="flex-shrink-0 ">
              <span>
                <img src={item.image} className=" h-40 rounded" alt="" />
              </span>
            </section>
          ))}
        </div>

        <div className="bg-white rounded p-4 my-2">
          <p>Sign in for the best experience</p>
          <div className="flex flex-col items-center p-2 bg-secondary-original rounded text-center text-sm">
            <p className="text-center">Sign in securely</p>
          </div>
        </div>

        <div className="flex flex-col bg-white p-2">
          <p>Popular Products in wireless international</p>
          {[1, 2, 3, 4].map((item, index) => (
            <MobileProductItem
              key={index}
              picture={iphone13}
              title={
                "iPhone 13 Pro Max, 256GB, Sierra Blue - Unlocked (Renewed Premium)"
              }
              price={"1,156"}
            />
          ))}
        </div>
   </>
  )
}

interface MobileProductItemProps {
    picture: any;
    title: string;
    price: string;
  }
  
  const MobileProductItem = (props: MobileProductItemProps) => {
    return (
      <div className="flex flex-row space-x-4 p-2">
        <img src={iphone13} alt="" className="h-20 w-20" />
        <div className="flex flex-col">
          <p className="text-sm">
            iPhone 13 Pro Max, 256GB, Sierra Blue - Unlocked (Renewed Premium)
          </p>
          <p>
            $1,156 <span className="font-features sups">00</span>
          </p>
        </div>
      </div>
    );
  };
  

export default MobileView