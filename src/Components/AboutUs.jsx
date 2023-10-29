import img1 from '../assets/images/more/14.jpg'
import employee from '../assets/images/staff.jpg'
import Nav from './Nav';
const AboutUs = () => {
  return (
    <>
    <Nav></Nav>
    <div className="bg-gray-100">
      <header className="p-4 text-amber-800">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-center">About Us</h1>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                In our Cafe, we provide the best coffee in Sylhet. You will be surprised by the
              amazing taste of the coffee & gentle behavior of our staffs.  
              </p>
            </div>
            <div>
              <img
                src={img1}
                alt="Coffee Shop Interior"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-amber-700 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Team</h2>
              <p className="mb-4">
                Meet our dedicated team of professionals who are passionate
                about what they do and are committed to providing the best
                service to our customers.
              </p>
            </div>
            <div>
              <img
                src={employee}
                alt="Coffee Shop Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
