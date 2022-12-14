import { useEffect, useState } from "react";
import ArrowIcon from "../../ui/ArrowIcon";
import OverviewContent from "./OverviewContent";
import { motion } from "framer-motion";
import companyTabs from "/data/companyTabs";
import Wrapper from "../../Wrapper";

const CompanyOverview = () => {
  const [activeTabContent, setActiveTabContent] = useState(companyTabs[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const MAX_MOBILE_WIDTH = 640;
      if (window.innerWidth >= MAX_MOBILE_WIDTH && !activeTabIndex) {
        setActiveTabContent(companyTabs[0]);
        setActiveTabIndex(0);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTabContent, activeTabIndex]);

  const onChangeActiveTab = (index, tab) => {
    setActiveTabIndex(index);
    setActiveTabContent(tab);
  };

  const onTabToggle = (index, tab) => {
    index === activeTabIndex
      ? setActiveTabIndex(null)
      : setActiveTabIndex(index);
    setActiveTabContent(tab);
  };

  return (
    <Wrapper>
      <div className="justify-end hidden mb-17.7 sm:mt-33 lg:mt-35.55 xl:mt-24 sm:flex">
        <div className="sm:w-full lg:w-189.25 xl:w-202.75">
          <ul className="flex gap-10.5 items-center py-5 relative">
            {companyTabs.map((item, index) => (
              <li className="relative space-y-5" key={index}>
                <button
                  className={`cursor-pointer text-2xl leading-extra_snug -tracking-tighter transition-all ease-in-out duration-300 ${
                    index === activeTabIndex
                      ? "text-purple"
                      : "text-primaryGray-300"
                  }`}
                  onClick={() => onChangeActiveTab(index, item)}
                  id={index}
                >
                  {item.title}
                </button>
                {index === activeTabIndex ? (
                  <motion.div
                    transition={{ duration: 0.3 }}
                    className="absolute mt-0 bottom-1 inset-x-0 h-0.2 bg-purple"
                    layoutId="underline"
                  />
                ) : null}
              </li>
            ))}
          </ul>
          <OverviewContent
            content={activeTabContent.content}
            linkContent={activeTabContent.linkContent}
            additionalContent={activeTabContent.additionalContent}
          />
        </div>
      </div>
      <div className="mt-20.25 mb-17.7 block sm:hidden">
        <ul className="space-y-5.1">
          {companyTabs.map((companyTab, index) => (
            <li className="space-y-4.5" key={index}>
              <div
                onClick={() => onTabToggle(index, companyTab)}
                className={`flex items-center justify-between border-b ${
                  activeTabIndex === index
                    ? "border-purple"
                    : "border-primaryGray-300"
                }`}
              >
                <p
                  className={`cursor-default text-xl -tracking-wider ${
                    activeTabIndex === index ? "text-purple" : ""
                  }`}
                >
                  {companyTab.title}
                </p>
                <div
                  className={`transition-all duration-300 ease-out ${
                    activeTabIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ArrowIcon
                    className={
                      activeTabIndex === index ? "text-purple" : "text-black"
                    }
                  />
                </div>
              </div>
              {activeTabIndex === index && (
                <div className="pb-8.4">
                  <OverviewContent
                    content={activeTabContent.content}
                    linkContent={activeTabContent.linkContent}
                    additionalContent={activeTabContent.additionalContent}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default CompanyOverview;
