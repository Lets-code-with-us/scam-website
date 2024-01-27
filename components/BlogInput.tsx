"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import { useState, useEffect } from "react";

const BlogInput = () => {
  const [image, setImage] = useState("");
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  


useEffect(()=>{
  const edit = editor?.getJSON()
  console.log(title,tag,edit,image)
},[title,tag,image])

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: `
    <h2>
      Hi there,
    </h2>
    <p>
      this is a basic <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
    </p>
    <blockquote>
      Wow, that’s amazing. Good work, boy! 👏
      <br />
      — Mom
    </blockquote>
  `,
  });

  return (
    <div className="flex flex-col items-center mt-20 justify-center">
       <div className="w-full md:w-1/3 mb-12  h-7">
    
      <input
        className="flex h-10 w-full bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none  disabled:opacity-50"
        type="text"
        placeholder="Enter your Title"
        id="name"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
      ></input>
    </div>
     
    <div className="w-full md:w-1/3 mb-12">
    <img src="https://images.unsplash.com/photo-1682685797088-283404e24b9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  alt=""  />
      <input
        className="flex h-10 w-full mt-3 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
        type="file"
        placeholder="Enter your name"
        id="name"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
    </div>
    <div className="w-full md:w-1/3 ">
      
      <input
        className="flex h-10 w-full  bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Enter your tags"
        id="name"
        value={tag} onChange={(e) => setTag(e.target.value)}
      ></input>
      
    </div>


      <div className="w-full p-12">

      <EditorContent editor={editor} />
      </div>
      
      <button>Post</button>
    </div>
  );
};

export default BlogInput;
