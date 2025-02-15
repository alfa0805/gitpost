import axios from 'axios';
import React, { useEffect, useState } from 'react';

function cars() {
    const [modal, setModal] = useState(false)
    const menyu = () => {
      setModal(!modal)
      }
  const [categories, setCategories] = useState([]);
  const imgUrl = "https://realauto.limsa.uz/api/uploads/images"
  const getcategory = () => {
    axios({
      url:"https://realauto.limsa.uz/api/cars",
      method:"GET",
    }).then(res=>{
        console.log(res.data);
    })
  };
  // const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzFmY2NmNjUtZTIzOC00N2NmLWE3MWItYTUyNmJhZDcyYmEzIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTczOTU0NTE5MSwiZXhwIjoxNzcxMDgxMTkxfQ.DJr8aIXip5vVm3gHIp38MG9l9XKh4jL60rVQDbp-HeQ"
  // const [name , setName] = useState("");
  // const [image , setImage] = useState("");
  // const post = () =>{
  //   const formData = new FormData();
  //   formData.append("name_uz" , name);
  //   formData.append("images",image)
  //   axios({
  //     url:"https://realauto.limsa.uz/api/cars",
  //     method:"POST",
  //     headers:{
  //       'Authorization':`Bearer ${token}`,
  //       "Content-Type": "multipart/form-data",
  //   },
  //   data:formData,
  //   }).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=>{
  //     console.log(err);
      
  //   })
  // }
  
  useEffect(()=>{
    getcategory();
  },[])
  return (
    <div >
      <div className="max-w-[1240px] mx-auto pt-5 pl-[150px]">
        <div className="flex items-start justify-between">
          <h2 className="text-amber-50 text-3xl pb-5 font-bold hover:text-[#03e2ff]">Categories</h2>
          <button onClick={menyu} 
            className="text-xl text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]">
            malumot qo'shish
          </button>
        </div>
        {
            modal?
        <div className="w-[350px] mx-auto pb-5 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        image
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="password" 
        type="file" 
        placeholder="image"
        onChange={(e)=>setImage(e?.target?.files[0])}/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        id="username" 
        type="text" 
        placeholder="Username"
        onChange={(e)=>setName(e?.target?.value)}
        />
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        type="button"
        onClick={post}>
        Sign In
      </button>
    </div>
        </form>
        </div>:""
        }
        <div className="px-5 flex flex-wrap items-center justify-center gap-10">
        {
          categories.map((category)=>(
            <div className="w-[270px]"
            key={category.id}>
                <div className="w-[270px] h-[250px] ">
                  <img className="w-full h-full object-cover"
                      src={`${imgUrl}/${category.image_src}`} alt={category.id}
                    />
                </div>
                <h2 className="text-white text-center text-xl font-medium py-3 hover:text-[#03e2ff]">{category.id}</h2>
                <div className="w-[100px] h-[35px] bg-red-600 mx-auto rounded-xl">
                  <button className="w-full h-full text-amber-50 text-md font-bold">dalet</button>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default cars