import React from "react";

const Create = () => {
  return (
    <section className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Create Project
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new project and share your work with others.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm max-w-2xl">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title
            </label>
            <input
              type="text"
              placeholder="Example: Modern Wooden Kitchen"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black">
              <option>Carpentry</option>
              <option>Interior Design</option>
              <option>Electrical</option>
              <option>Painting</option>
              <option>Plumbing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows="5"
              placeholder="Write something about your project..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black resize-none"
            />
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
            <p className="text-gray-500">
              Upload project images here
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Create Project
          </button>
        </form>
      </div>
    </section>
  );
};

export default Create;