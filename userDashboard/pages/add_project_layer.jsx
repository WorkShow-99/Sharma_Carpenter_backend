


import { useState } from 'react';

import {Adding_image} from './adding_image';

import { useAuth } from '../../context/auth_context';

import MainProjectImage from "./MainProjectImage.jsx";

export const AddProjectLayer = ({ onLayer, setonLayer }) => {
    const { user } = useAuth();
    const [projectName, setProjectName] = useState('');
    const [description, setDescription] = useState('');
    const [files, setFiles] = useState([]);
    const [keywords, setKeywords] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [mainImage, setMainImage] = useState(null);

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        console.log("this is the user id", user._id);
        console.log(user);

        try {
            const formData = new FormData();
            formData.append('projectName', projectName);
            formData.append('description', description);
            formData.append('keywords', keywords);
            formData.append('userId', user._id);
            files.forEach((file) => {
                formData.append('images', file);
            });


            if (mainImage) {
                formData.append('mainImage', mainImage);
            }



            const response = await fetch('http://localhost:8080/api/files/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create project');
            }

            console.log(response);
            const data = await response.json();
            console.log('Project created:', data);
            
            setProjectName('');
            setDescription('');
            setFiles([]);
            setKeywords('');
            setonLayer(false);
        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div onClick={() => { setonLayer(false) }} className={`fixed top-0 left-0 inset-0 w-screen h-screen z-9999 flex items-center justify-center bg-[#606264d1] bg-opacity-50 ${onLayer == true ? "block" : "hidden"}`}>

<div
  onClick={(e) => e.stopPropagation()}
  className="
    relative
    bg-white
    rounded-3xl
    border
    w-[95%]
    sm:w-[80%]
    md:w-[75%]
    lg:w-[75%]
    xl:w-[55%]
    2xl:w-[55%]
    max-h-[92vh]
    overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100
    p-4
    sm:p-6
    shadow-2xl
  "
>            <button
                type="button"
                onClick={() => setonLayer(false)}
                className="absolute  sticky top-0    left-0 text-[#a00f0f7a]  hover:text-gray-800"
                aria-label="Close"
            >
                ✕
            </button>
            <h1 className="text-2xl font-bold mb-4">Add New Project</h1>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input 
                        type="text" 
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2" 
                        placeholder="Enter project name" 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2" 
                        placeholder="Enter project description"
                    ></textarea>
                </div>
                <MainProjectImage
  mainImage={mainImage}
  setMainImage={setMainImage}
/>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Images</label>
                    <Adding_image files={files} setFiles={setFiles} />
                </div>
                {/* <div>
                    <label className="block text-sm font-medium text-gray-700">Keywords</label>
                    <input 
                        type="text" 
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2" 
                    />
                </div> */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Keywords</label>
                    <input 
                        type="text" 
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2" 
                        placeholder="Enter keywords (comma separated)" 
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                >
                    {loading ? 'Creating...' : 'Create Project'}
                </button>
            </form>
            </div>
        </div>
    )
};

export default AddProjectLayer;




