import { useDispatch } from "react-redux";
import * as quizzesClient from "./client";
import { deleteQuiz } from "./reducer";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function DeleteDialog({ quizId }: { quizId: string }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const handleDelete = async () => {
    console.log("Deleting quiz", quizId);
    await quizzesClient.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
    setShowModal(false);
  };

  return (
    <div className="d-flex ">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => setShowModal(true)}
      />
      <div
        className={`modal ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Delete Quiz
              </h1>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to remove this quiz?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <LessonControlButtons />
      {showModal && <div className="modal-backdrop fade show" />}
    </div>
  );
}
