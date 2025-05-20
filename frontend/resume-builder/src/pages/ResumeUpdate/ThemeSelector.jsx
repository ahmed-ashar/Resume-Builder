import React, { useEffect, useRef, useState } from "react";
import {
  DUMMY_RESUME_DATA,
  resumeTemplates,
  themeColorPalatte,
} from "../../utils/data";
import { LuCircleCheckBig } from "react-icons/lu";
import Tabs from "../../components/Tabs";
import TemplateCard from "../../components/Cards/TemplateCard";
import RenderResume from "../../components/ResumeTemplates/RenderResume";

const TAB_DATA = [{ label: "Templates" }, { label: "Color Palettes" }];
console.log(TAB_DATA);

const ThemeSelector = ({
  selectedTheme,
  setSelectedTheme,
  resumeData,
  onClose,
}) => {
  const resumeRef = useRef(null);
  const [baseWidth, setBaseWidth] = useState(800);

  const [tabValue, setTabValue] = useState("Templates");
  const [selectedColorPalatte, setSelectedColorPalatte] = useState({
    colors: selectedTheme?.colorPalatte,
    index: -1,
  });
  const [selectedTemplate, setSelectedTemplate] = useState({
    theme: selectedTheme?.theme || "",
    index: -1,
  });

  // Handle Theme Change
  const handleThemeSelection = () => {
    setSelectedTheme({
      colorPalatte: selectedColorPalatte?.colors,
      theme: selectedTemplate?.theme,
    });
    onClose();
  };

  const updateBaseWidth = () => {
    if (resumeRef.current) {
      setBaseWidth(resumeRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateBaseWidth();
    window.addEventListener("resize", updateBaseWidth);

    return () => {
      window.removeEventListener("resize", updateBaseWidth);
    };
  }, []);
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="flex items-center justify-between mb-5 mt-2">
        <Tabs tabs={TAB_DATA} activeTab={tabValue} setActiveTab={setTabValue} />

        <button
          className="btn-small-light"
          onClick={() => handleThemeSelection()}
        >
          <LuCircleCheckBig className="text-[16px]" />
          Done
        </button>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5 bg-white">
          <div className="grid grid-cols-2 gap-5 max-h-[80vh] overflow-scroll custom-scrollbar md:pr-5">
            {tabValue === "Templates" &&
              resumeTemplates.map((template, index) => (
                <TemplateCard
                  key={`templates_${index}`}
                  thumbnailImg={template.thumbnailImg}
                  isSelected={selectedTemplate?.index === index}
                  onSelect={() =>
                    setSelectedTemplate({ theme: template.id, index })
                  }
                />
              ))}

            {tabValue === "Color Palettes" &&
              themeColorPalatte.themeOne.map((colors, index) => (
                <ColorPalatte
                  key={`palette_${index}`}
                  colors={colors}
                  isSelected={selectedColorPalatte?.index === index}
                  onSelect={() => setSelectedColorPalatte({ colors, index })}
                />
              ))}
          </div>
        </div>
        <div
          className="col-span-12 md:col-span-7 bg-white -mt-3"
          ref={resumeRef}
        >
          <RenderResume
            templateId={selectedTemplate?.theme || ""}
            resumeData={resumeData || DUMMY_RESUME_DATA}
            containerWidth={baseWidth}
            colorPalatte={selectedColorPalatte?.colors || []}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

const ColorPalatte = ({ colors, isSelected, onSelect }) => {
  return (
    <div
      className={`h-28 bg-purple-50 flex rounded-lg overflow-hidden border-2 ${
        isSelected ? "border-purple-500" : "border-none"
      }`}
      onClick={onSelect}
    >
      {colors.map((color, index) => (
        <div
          className="flex-1"
          key={`color_${index}`}
          style={{ backgroundColor: color }}
        ></div>
      ))}
    </div>
  );
};

