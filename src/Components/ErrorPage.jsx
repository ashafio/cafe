import { useRouteError } from "react-router-dom";
import errorImg from '../assets/images/404/404.gif'; 
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-6 text-amber-800 font-bold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <div className="flex align-middle mx-auto items-center justify-center">
      <img src={errorImg} alt=""/>
      </div>
    </div>
  );
}