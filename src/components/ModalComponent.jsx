import { Modal } from "antd";
import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firestore";
import { useNavigate, useParams } from "react-router-dom";

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const currentTravel = doc(db, "travels", params.id);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
    try {
      await deleteDoc(currentTravel);
      navigate(`/`);
    } catch (err) {
      alert(err)
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center ">
      <button
        className="DELETE-TRAVEL-BTN w-44 text-red-500 text-center uppercase border border-red-500 p-1 px-2 rounded-lg duration-300 hover:bg-red-500 hover:text-white"
        onClick={showModal}>
        Delete this travel
      </button>
      <Modal
        title="Are you sure you want to delete this travel?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>
          This will delete all your travel data. You cannot undo this action.
        </p>
      </Modal>
    </div>
  );
};

export default ModalComponent;
