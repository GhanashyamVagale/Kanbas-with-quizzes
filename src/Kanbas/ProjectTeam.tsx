import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap styles

export default function ProjectTeam() {
  const teamMembers = [
    { name: "Ghanashyam Vagale Srinivas", section: "Section 03" },
  ];

  return (
    <div className="container mt-5">
      <h1 className="fw-bold text-center mb-4">Project for CS5610</h1>

      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="fw-bold card-title">{member.name}</h5>
                <p className="card-text">{member.section}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <h4 className="text-center mb-3">Project Code Repositories</h4>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="me-5">
            <a
              href="https://github.com/GhanashyamVagale/Kanbas-with-quizzes"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Front-End React Repository
            </a>
          </div>
          <div>
            <a
              href="https://github.com/GhanashyamVagale/Kanbas-Backend-Server"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Back-End Node Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
