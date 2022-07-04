import React from "react";

const EditTutorial = () => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="desc"
          placeholder="Enter your Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default EditTutorial;
