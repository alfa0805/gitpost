import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Modals() {
    const [modal, setModal] = useState(false)
    const malumot = () => {
      setModal(!modal)
      }

  const url ="https://realauto.limsa.uz/api/brands"
  const [categories, setCategories] = useState([]);
  const imgUrl = "https://realauto.limsa.uz/api/uploads/images";
  const getcategory = () => {
    axios({
      url:`${url}`,
      method:"GET",
    }).then(res=>{
        setCategories(res.data.data)
    })
  };
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzFmY2NmNjUtZTIzOC00N2NmLWE3MWItYTUyNmJhZDcyYmEzIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTczOTU0NTE5MSwiZXhwIjoxNzcxMDgxMTkxfQ.DJr8aIXip5vVm3gHIp38MG9l9XKh4jL60rVQDbp-HeQ"
  const [name , setName] = useState("");
  const [image , setImage] = useState("");
  const post = () =>{
    const formData = new FormData();
    formData.append("title", name);
    formData.append("images",image)
    axios({
      url:`${url}`,
      method:"POST",
      headers:{
        'Authorization':`Bearer ${token}`,
        "Content-Type": "multipart/form-data",
    },
    data:formData,
    }).then((res)=>{
      console.log(res);
      toast.success("Muvaffaqiyatli qo'shildi")
      getcategory()
      malumot(false)
    }).catch((err)=>{
      console.log(err);
      toast.error("Xatolik yuz berdi")
    })
  }

  const deleteCategory = (id) => {
    axios({
      url:`${url}/${id}`,
      method:"DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      console.log("O‘chirildi:", res);
      toast.success("Muvaffaqiyatli o‘chirildi!")
      getcategory(); 
    })
    .catch((err) => {
      console.log("Xatolik:", err);
      toast.error("Xatolik yuz berdi")
    });
  }
  
  useEffect(()=>{
    getcategory();
  },[])
  return (
    <div >
      <div className="max-w-[1240px] mx-auto pt-5 pl-[150px] max-[500px]:pl-0 max-[500px]:pt-[90px]">
        <div className="flex items-start justify-between gap-[5px] flex-wrap py-3 max-[500px]:px-5">
          <h2 className="text-amber-50 text-3xl pb-5 font-bold hover:text-[#03e2ff]">Categories</h2>
          <button onClick={malumot} 
            className="text-xl text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]">
            malumot qo'shish
          </button>
        </div>
        {
            modal?
        <div className="w-[350px] mx-auto pb-5 max-[500px]:w-full max-[500px]:px-5">
         <form className="border-2 border-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-2">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              image
            </label>
            <input className="shadow appearance-none border border-white bg-none rounded-md w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="file" 
              placeholder="image"
              onChange={(e)=>setImage(e?.target?.files[0])}/>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              nameuz
            </label>
            <input className="shadow appearance-none border border-white bg-none rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username"
              onChange={(e)=>setName(e?.target?.value)}
              />
          </div>
          <div className="flex items-center justify-center">
            <button className="text-md text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]" 
              type="button"
              onClick={post}>
              Sign In
            </button>
          </div>
         </form>
        </div>:""
        }
        <div className="flex flex-wrap items-center justify-center gap-10">
        {
          categories.map((category)=>(
            <div className="w-[274px] h-full border-2 border-white rounded-md pb-3"
            key={category.id}>
                <div className="w-[270x] h-[250px] rounded-md">
                  <img className="w-full h-full object-cover rounded-md"
                      src={`${imgUrl}/${category.image_src}`} alt={category.title}
                    />
                </div>
                <h2 className="text-white text-center text-xl font-medium py-3 hover:text-[#03e2ff]">{category.title}</h2>
                <div 
                  className="flex items-center justify-between mx-auto rounded-xl px-5">
                  <button 
                    className="text-md text-white font-medium border border-white px-5 py-1  rounded-xl hover:text-[#03e2ff] hover:border-[#03e2ff]"
                    onClick={() => (category.id)}
                    >
                      Edit
                  </button>
                  <button 
                    className="w-[80px] h-[35px] bg-red-600 hover:bg-red-700 text-amber-50 text-md font-bold rounded-xl"
                    onClick={() => deleteCategory(category.id)}
                    >
                      Dalet
                  </button>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Modals