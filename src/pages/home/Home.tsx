import GeneralLayout from "@layouts/GeneralLayout";
import { ReactElement } from "react";
import DesktopView from "@components/home-sections/DesktopView";
import MobileView from "@components/home-sections/MobileView";

type Props = {};

const Home = (props: Props): ReactElement => {
  return (
    <GeneralLayout>
      <div className="md:flex flex-col hidden bg-slate-100 min-h-screen">
        {/* <DesktopView /> */}
        sadfas
      </div>
      <div className="md:hidden relative flex flex-col z-0 w-full h-full bg-slate-100">
        {/* <MobileView /> */}
      </div>
    </GeneralLayout>
  );
};

export default Home;
