import Swal from "sweetalert2";
import Nav from "./Nav";

const ContactUs = () => {


    const handleFormSubmit = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const question = form.question.value;
        

        const Qsndata = {
            name,
            email,
            question,
        }

        // console.log(newCoffee);

        //send data to the server
        fetch('https://cafeserver.vercel.app/question',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(Qsndata)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Question Asked Successfully. We Will Contact you soon.',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


  return (
    <>
        <Nav></Nav>
        <div className="bg-[#F4F3F0] p-24">
      <h1 className="text-5xl font-serif text-center font-bold text-amber-800">
        Have a question? Fill out the form below.
      </h1>
      <form onSubmit={handleFormSubmit}>
        {/* Row 1 */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="youremail@domain.com"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Row 2 */}
        <div className="md:flex">
          <div className="form-control w-full m-4">
            <label className="label">
              <span className="label-text">Question</span>
            </label>
            <label className="input-group">
              <span>Question</span>
              <input
                type="text"
                name="question"
                placeholder="Write your question here."
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        
        <input type="submit" value="Submit" className="btn btn-block bg-amber-800 text-white" />

      </form>
    </div>
    </>
  );
}
export default ContactUs;
