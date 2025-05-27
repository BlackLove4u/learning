// frontend/components/BlogEditor.js
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function BlogEditor() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/blog/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });
            // Handle response
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="editor-container">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title"
            />
            <ReactQuill 
                value={content}
                onChange={setContent}
                modules={{
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        ['link', 'image'],
                        ['clean']
                    ],
                }}
            />
            <button onClick={handleSubmit}>Publish</button>
        </div>
    );
}
