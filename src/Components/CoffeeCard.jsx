import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UpdateCoffee from "./UpdateCoffee";

const CoffeeCard = ({ coffee,setCoffees,coffees }) => {
  const { _id, name, quantity, supplier, taste, category, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //delete operation here
        console.log("Delete Confirmed.");

        fetch(`https://cafeserver.vercel.app/coffee/${_id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", 
              "Your coffee has been deleted.", 
              "success");
            const remaining = coffees.filter(cof=>cof._id !== _id);
            setCoffees(remaining);
        }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl text-white">
      <figure>
        <img className="h-72 w-72" src={photo} alt={name} />
      </figure>
      <div className="bg-[#d89361] flex items-center w-full justify-between">
        <div className="text-center m-4">
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-actions justify-end mr-6">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn btn-active">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <Link to={`updateCoffee/${_id}`}><button className="btn"><FontAwesomeIcon icon={faPenToSquare} /></button></Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-400"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
