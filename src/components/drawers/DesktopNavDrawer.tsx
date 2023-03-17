import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { data } from "@utils/data";
import american_flag from "@assets/flag-america.svg";

type Props = {};

const DesktopNavDrawer = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [itemsToShow, setItemsToShow] = useState(3);

  const showmore = () => {
    setItemsToShow(data.categories.length);
  };

  const showless = () => {
    setItemsToShow(3);
  };

  return (
    <>
      <div onClick={onOpen} className="flex flex-row items-center space-x-2 cursor-pointer">
        <Bars3Icon height={24} width={24} />
        <p className="text-sm font-semibold">All</p>
      </div>
      <Drawer size={"sm"} placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton variant={'light'} />

          <DrawerHeader
            borderBottomWidth="1px"
            className="bg-primary-light text-white font-semibold flex flex-row items-center space-x-4"
          >
            <UserCircleIcon height={28} width={28} />
            <p>Hello, sign in</p>
          </DrawerHeader>
          <DrawerBody className="flex flex-col space-y-8">
            <p className="text-lg font-semibold text-slate-900">
              Digital Content & Devices
            </p>
            <DrawerLink title={"Amazon Music"} />
            <DrawerLink title={"Kindle E-readers & Books"} />
            <DrawerLink title={"Amazon Appstore"} />
            <Divider color={"gray.900"} />
            <p className="text-lg font-semibold text-slate-900">
              Shop by department
            </p>
            {data.categories.slice(0, itemsToShow).map((item, index) => (
              <DrawerLink key={item._id} title={item.name} />
            ))}
            <div className="flex text-sm text-slate-700">
              {itemsToShow === 3 ? (
                <button
                  onClick={showmore}
                  className="flex flex-row items-center "
                >
                  Show More{" "}
                  <ChevronDownIcon
                    className="text-slate-500"
                    height={20}
                    width={20}
                  />
                </button>
              ) : (
                <button
                  className="flex flex-row items-center "
                  onClick={showless}
                >
                  Show Less{" "}
                  <ChevronUpIcon
                    className="text-slate-500"
                    height={20}
                    width={20}
                  />
                </button>
              )}
            </div>
            <Divider color={"gray.900"} />
            <p className="text-lg font-semibold text-slate-900">
              Help & Settings
            </p>
            <p>Your account</p>
            <div className="flex flex-row space-x-4 text-slate-700 items-center">
              <GlobeAltIcon height={20} width={20} />
              <p className="text-sm">English</p>
            </div>
            <div className="flex flex-row space-x-4 text-slate-700 items-center">
              <img src={american_flag} alt="american flag" className="w-6" />
              <p className="text-sm">United States</p>
            </div>
            <p>customer service</p>
            <p>Sign In</p>
            <div className="p-4"></div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface DrawerLinkProps {
  title: String;
}

const DrawerLink = (props: DrawerLinkProps) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="text-sm">{props.title}</p>
      <ChevronRightIcon height={20} width={20} />
    </div>
  );
};

export default DesktopNavDrawer;
