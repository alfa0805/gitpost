import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function Models() {
    const [modal, setModal] = useState(false)
    const openmodal = () => {
      setModal(!modal)
      }
  // malumot olish  GET
  const url ="https://realauto.limsa.uz/api/models"
  const [Models, setModels] = useState([])
  const getmodels = () => {
    axios({
      url:`${url}`,
      method:"GET",
    }).then(res=>{
        setModels(res?.data?.data)
    })
  };

  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzFmY2NmNjUtZTIzOC00N2NmLWE3MWItYTUyNmJhZDcyYmEzIiwidG9rZW5fdHlwZSI6ImFjY2VzcyIsImlhdCI6MTczOTU0NTE5MSwiZXhwIjoxNzcxMDgxMTkxfQ.DJr8aIXip5vVm3gHIp38MG9l9XKh4jL60rVQDbp-HeQ"

  
  // malumot qoshish  POST
  const [name , setName] = useState("");
  const [brandid , setBrandid] = useState(null)
  const [brends , setBrends] = useState([])
    const getBrends = () =>{  
    
    axios.get("https://realauto.limsa.uz/api/brands").then(res=>{
      setBrends(res?.data?.data)
    })
    
  }
  const postmodels = () =>{
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand_id" , brandid)
    axios({
      url:`${url}`,
      method:"POST",
      headers:{
        'Authorization':`Bearer ${token}`,
        "Content-Type": "multipart/form-data",
    },
    data:formData,
    })
    .then((res)=>{
      // console.log(res);
      toast.success("Muvaffaqiyatli qo'shildi")
      openmodal(false)
    }).catch((err)=>{
      console.log(err);
      toast.error("Xatolik yuz berdi")
    })
  }

  // malumot ochirish DELETE
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
      getmodels(); 
    })
    .catch((err) => {
      console.log("Xatolik:", err);
      toast.error("Xatolik yuz berdi")
    });
  }
  
  useEffect(()=>{
    getmodels();
    getBrends();
  },[])
  return (
    <div >
      <div className="max-w-[1240px] mx-auto pt-5 pl-[150px] max-[500px]:pl-0 max-[500px]:pt-[90px]">
        <div className="flex items-start justify-between gap-[5px] flex-wrap py-3 max-[500px]:px-5">
          <h2 className="text-amber-50 text-3xl pb-5 font-bold hover:text-[#03e2ff]">Models</h2>
          <button onClick={openmodal} 
            className="text-xl text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]">
              malumot qo'shish
          </button>
        </div>

        {/* malumot qoshish */}


        {
            modal?
        <div className="w-[350px] mx-auto pb-5 max-[500px]:w-full max-[500px]:px-5">
         <div className="border-2 border-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
        
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              nameuz
            </label>
            <input className="shadow appearance-none border border-white bg-none rounded-md w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username"
              onChange={(e)=>setName(e?.target?.value)}
                    value={setName}
              />
          </div>
          <div className="mb-4">
            <select name="" id="" className="text-white"
              onChange={(e)=>setBrandid(e?.target?.value)}>
              <option value="">select</option>
              {
                brends.map((item) =>{
                  <option value={item.id}>{item.title}</option>
                })
              }
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-md text-white font-medium border border-white px-3 py-1 rounded-md hover:text-[#03e2ff] hover:border-[#03e2ff]" 
              type="button"
              onClick={postmodels}>
              Sign In
            </button>
          </div>
         </div>
        </div>:""
        }

          {/* ----------models----------- */}

        <div className="flex flex-col items-center justify-center gap-10">
        {
          Models.map((models)=>(
            <div className="w-full h-full flex justify-between  border-2 border-white rounded-md pb-3"
            key={models.id}>
                <div className="w-[270x] h-[100px] rounded-md">
                  {/* <h2 className="">{models.setBrandid}</h2> */}
                  <h2 className="text-white text-center text-xl font-medium py-3 hover:text-[#03e2ff]">{models.name}</h2>
                </div>

                <div 
                  className="flex flex-col items-center justify-between mx-auto rounded-xl px-5">
                  <button 
                    className="text-md text-white font-medium border border-white px-5 py-1  rounded-xl hover:text-[#03e2ff] hover:border-[#03e2ff]"
                    // onClick={() => (models.id)}
                    >
                      Edit
                  </button>
                  <button 
                    className="w-[80px] h-[35px] bg-red-600 hover:bg-red-700 text-amber-50 text-md font-bold rounded-xl"
                    onClick={() => deleteCategory(models.id)}
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

export default Models