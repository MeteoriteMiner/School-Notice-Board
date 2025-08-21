import React from 'react';
import { TextInput, Select, FileInput, Button } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return <div className='p-3 max-w-3xl mx-auto min-h-screen'>
    <h1 className='text-center text-3xl my-7 font-semibold'>Post a notice</h1>
    <form className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
            <TextInput type='text' placeholder='Title' required id='title'
            className='flex-1'/>
            <Select>
                <option value="uncategorized">Select a category</option>
                <option value="exam">Exam</option>
                <option value="holiday">Holiday</option>
                <option value="advising">Advising</option>
                <option value="others">Others</option>
            </Select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4
        border-teal-500 border-dotted p-3'>
            <FileInput type='file' accept='image/*' />
            <Button type='button'color= 'cyan' outline>Upload image</Button>
        </div>
        <ReactQuill theme="snow" placeholder='Write something...' className='h-72 mb-12' required/>
        <Button type='submit' className="bg-gradient-to-r
             from-teal-200 to-lime-200 text-gray-900 hover:bg-gradient-to-l
              hover:from-teal-200 hover:to-purple-700 focus:ring-purple-700 dark:focus:ring-teal-700">
            Publish
        </Button>
    </form>
   </div>
}
