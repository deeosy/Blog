import React, { useState } from 'react'

export default function PostBlog() {
  const [blogInput, setBlogInput] = useState({author:"", title: "", content:"", createdAt:""})

  const handleChange = (event) => {
    // console.log(event.target.name);
    const { name, value} = event.target;
    setBlogInput((previousValue)=>({... previousValue, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const time = new Date().toLocaleTimeString() 
    const date = new Date().toLocaleDateString()
    const createdAt = `${date} ${time}`;
    setBlogInput((previousTime) => ({...previousTime, createdAt })) 
    setBlogInput({author:"", title: "", content:"", createdAt:""})
  }
  // console.log(blogInput);

  
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 max-w-[300px] mx-auto ' >
        <input type="text" placeholder='Author' name="author" value={blogInput.author} onChange={handleChange} className='border outline-none' />
        <input type="text" placeholder='Title' name="title" value={blogInput.title} onChange={handleChange}  className='border outline-none' />
        <textarea  rows="4" cols="1" placeholder='Content' name="content" value={blogInput.content} onChange={handleChange}  className='border outline-none' >
        </textarea>
        <button className='border w-fit mx-auto px-4 py-1' >Submit</button>
      </form>
    </div>
  )
}
