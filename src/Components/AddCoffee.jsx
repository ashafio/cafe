import Swal from "sweetalert2";
import Nav from "./Nav";

const AddCoffee = () => {


    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {
            name,
            quantity,
            supplier,
            taste,
            category,
            details,
            photo
        }

        console.log(newCoffee);

        //send data to the server
        fetch('https://cafeserver.vercel.app/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
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
        Add Coffee
      </h1>
      <form onSubmit={handleAddCoffee}>
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
                placeholder="Coffee Name"
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
                name="quantity"
                placeholder="Coffee Quantity"
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
                placeholder="Supplier Name"
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
                placeholder="Taste"
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
                placeholder="Category"
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
                placeholder="Details"
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
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>

        </div>
        
        <input type="submit" value="Add Coffee" className="btn btn-block bg-amber-800 text-white" />

      </form>
    </div>
    </>
  );
}
export default AddCoffee;
