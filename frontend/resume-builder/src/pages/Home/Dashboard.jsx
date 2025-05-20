import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PathS } from "../../utils/apiPaths";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { LuCirclePlus } from "react-icons/lu";
import moment from "moment";
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard";
import Modal from "../../components/Modal";
import CreateResumeForm from "./CreateResumeForm";

const Dashboard = () => {
  const navigate = useNavigate();

  // State to open/close the "Add New Resume" modal
  const [openCreateModal, setOpenCreateModal] = useState(false);
  // State to store all resumes fetched from API
  const [allResumes, setAllResumes] = useState([]);
  // Loading and error state for better UX
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch all resumes from the backend
  const fetchAllResumes = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(API_PathS.RESUME.GET_ALL);
      setAllResumes(response.data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
      setError("Failed to load resumes.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch resumes once component mounts
  useEffect(() => {
    fetchAllResumes();
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-7 pt-1 pb-6 px-4 md:px-0">
        {/* Button to open "Add New Resume" modal */}
        <button
          className="h-[300px] flex flex-col gap-5 items-center justify-center bg-white rounded-lg border border-purple-100 hover:border-purple-300 hover:bg-purple-50/5 cursor-pointer"
          onClick={() => setOpenCreateModal(true)}
          aria-label="Add New Resume"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-purple-200/60 rounded-2xl">
            <LuCirclePlus className="text-xl text-purple-500" />
          </div>
          <h3 className="font-medium text-gray-800">Add New Resume</h3>
        </button>

        {/* Loading and Error UI */}
        {loading && <p>Loading resumes...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Show message if no resumes */}
        {!loading && !error && allResumes.length === 0 && (
          <p>No resumes found.</p>
        )}

        {/* Map and render all resume cards */}
        {!loading &&
          !error &&
          allResumes.map((resume) => (
            <ResumeSummaryCard
              key={resume?._id}
              imgUrl={resume?.thumbnailLink}
              title={resume.title}
              lastUpload={
                resume?.updatedAt
                  ? moment(resume.updatedAt).format("Do MMM YYYY")
                  : ""
              }
              onSelect={() => navigate(`/resume/${resume?._id}`)}
            />
          ))}
      </div>

      {/* Modal for creating new resume */}
      <Modal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        hideHeader
      >
        <CreateResumeForm
          onSuccess={() => {
            setOpenCreateModal(false);
            fetchAllResumes(); // Refresh list after adding new resume
          }}
        />
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;
