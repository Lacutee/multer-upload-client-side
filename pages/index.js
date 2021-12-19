import { useState } from "react"

export default function Home() {

  const [finalData, setFinalData] = useState({});
  const uploadIMG = (e)=>{

    const image = e.target.files
    const formData = new FormData();
    console.log(image[0])

    formData.append('cover', image[0]);
    formData.append('title', "New Order");
    formData.append('description', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus \nquam eu malesuada consectetur. Lorem ipsum dolor sit amet, consectetur \nadipiscing elit. Aenean rhoncus quam eu malesuada consectetur.");
    formData.append('date', "2021-10-07");
    formData.append('started_at', "19:00:00");
    formData.append('finished_at', "21:30:00");
    formData.append('price', 10000);
    formData.append('speaker', "Lala");
    formData.append('speaker_photo', "https://thumbs.dreamstime.com/b/girl-avatar-cartoon-stock-vector-image-cute-beautiful-eyes-93364804.jpg");
    formData.append('speaker_profession', "Student Success");
    formData.append('speaker_company', "Glinst Academy");
    formData.append('status', "Completed");
    formData.append('idUser_create', 1);
    setFinalData(formData);
  }

  async function submitNewEvent(e){
    e.preventDefault();
    try {
      await fetch('http://be-server.ipe-glintsacademy.com:3000/api/v1/events/admin/', {
        method: 'POST',
        
        headers: {
          'Authorization' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0MCwiZW1haWwiOiJicnVub0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM5ODkxMTA5LCJleHAiOjE2Mzk5MzQzMDl9.VkmtuJDFOHNXPLv8OtJyjwnf1iFViVNTFmMt7Oy60hg",
          'refreshToken' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo0MCwiZW1haWwiOiJicnVub0BnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjM5ODkxMTA5LCJleHAiOjE2Mzk5Nzc1MDl9.SEUGoJsNUl5RCYdX0IRncS27uFH25oKJlF9zgCrjI74"
        },
        body: finalData
  
      }).then(()=>{console.log('berhasil')})
    } catch (error) {
      console.log(error)
    }
          
  }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
<div class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
	style={{"background-image": "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);"}}>
	<div class="absolute bg-black opacity-60 inset-0 z-0"></div>
	<div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
		<div class="text-center">
			<h2 class="mt-5 text-3xl font-bold text-gray-900">
				File Upload!
			</h2>
			<p class="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
		</div>
        <form class="mt-8 space-y-3" onSubmit={(e)=>{submitNewEvent(e)}}>
                    <div class="grid grid-cols-1 space-y-2">
                        <label class="text-sm font-bold text-gray-500 tracking-wide">Title</label>
                            <input class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="mail@gmail.com"/>
                    </div>
                    <div class="grid grid-cols-1 space-y-2">
                                    <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
                        <div class="flex items-center justify-center w-full">
                            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">

                                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image"/>
                                    </div>
                                    <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" class="text-blue-600 hover:underline">select a file</a> from your computer</p>
                                </div>
                                <input type="file" class="hidden" onChange={(e)=>{uploadIMG(e)}}/>
                            </label>
                        </div>
                    </div>
                            <p class="text-sm text-gray-300">
                                <span>File type: doc,pdf,types of images</span>
                            </p>
                    <div>
                        <button type="submit" class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300">
                        Upload
                    </button>
                    </div>
        </form>
	</div>
</div>

</div>
  )

}
