import React from "react";
import { LuPlus, LuTrash2 } from "react-icons/lu";
import Input from "../../../components/Inputs/Input";

const CertificationInfoForm = ({
  certifications,
  updateArrayItem,
  addArrayItem,
  removeArrayItem,
}) => {
  return (
    <div className="px-5 pt-5">
      <h2 className="text-lg font-semibold text-gray-900">Certifications</h2>

      <div className="mt-4 flex flex-col gap-4 mb-3">
        {certifications.map((cert, index) => (
          <div
            className="border border-gray-200/80 p-4 rounded-lg relative"
            key={index}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                value={cert.title || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "title", target.value)
                }
                label="Certification Title"
                placeholder="Fullstack Web Developer"
                type="text"
              />

              <Input
                value={cert.issuer || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "issuer", target.value)
                }
                label="Issuer"
                placeholder="Coursera / Google / etc."
                type="text"
              />

              <Input
                value={cert.year || ""}
                onChange={({ target }) =>
                  updateArrayItem(index, "year", target.value)
                }
                placeholder="2024"
                label="Year"
                type="text"
              />
            </div>

            {certifications.length > 1 && (
              <button
                className="absolute top-3 right-3 text-sm text-red-600 hover:underline cursor-pointer"
                type="button"
                onClick={() => removeArrayItem(index)}
              >
                <LuTrash2 />
              </button>
            )}
          </div>
        ))}

        <button
          className="self-start flex items-center gap-2 px-4 py-2 rounded bg-purple-100 text-purple-800 text-sm font-medium hover:bg-purple-200 cursor-pointer"
          type="button"
          onClick={() =>
            addArrayItem({
              title: "",
              issuer: "",
              year: "",
            })
          }
        >
          <LuPlus /> Add Certification
        </button>
      </div>
    </div>
  );
};

export default CertificationInfoForm;
