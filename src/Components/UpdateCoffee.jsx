import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Nav from "./Nav";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, quantity, supplier,details, taste, category, photo } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {
            name,
            quantity,
            supplier,
            taste,
            category,
            details,
            photo
        }

        console.log(updatedCoffee);

        //send data to the server
        fetch(`https://cafeserver.vercel.app/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
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
        Update Coffee : {name}
      </h1>
      <form onSubmit={handleUpdateCoffee}>
        {/* Row 1 */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <span>Quantity</span>
              <input
                type="text"
                name= "quantity"
                defaultValue={quantity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Row 2 */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        {/* Row 3 */}
        <div className="md:flex">
          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 m-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>

            {/* Row 4 photo url*/}
            <div>
          <div className="form-control w-full m-4">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <span>Photo URL</span>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
        

       
        <input type="submit" value="Update Coffee" className="btn btn-block bg-amber-800 text-white" />

      </form>
    </div>
    </>
  );
}
export default UpdateCoffee;
