import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function PrivacyPolicy() {
  useEffect(() => {
    function setPageTitle(pageName) {
      document.title = `${pageName}`;
    }
    setPageTitle('Privacy Policy');
  }, []);

  const [content, setContent] = useState('');

  const handleSave = () => {
    // Handle save logic here (e.g., send data to server or update local storage)
    console.log('Privacy policy content:', content);
    // Placeholder for saving the content
  };

  return (
    <>
      <div className='container m-3'>
        <h1 className="text-bold font-monospace text-center mt-4 mb-3">Privacy Policy Editor</h1>
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => setContent(editor.getData())}
        />
        <div className='text-center m-3'>
          <button onClick={handleSave} className='btn btn-secondary w-20'>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
