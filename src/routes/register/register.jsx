// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// function Register() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     setIsLoading(true);
//     setError("");

//     const username = formData.get("username");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     try {
//       await axios.post("http://localhost:8000/api/auth/register", {
//         username,
//         email,
//         password,
//       });
//       navigate("/login");
//     } catch (error) {
//       setError("Registration failed. Please try again.");
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Left side: Form */}
//       <div className="flex w-full md:w-1/2 justify-center items-center p-6 sm:p-10">
//         <form
//           onSubmit={handleSubmit}
//           className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
//         >
//           <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
//             Create an Account
//           </h1>
//           <div className="flex flex-col gap-4">
//             <input
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               type="text"
//               name="username"
//               placeholder="Username"
//               required
//             />
//             <input
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//             />
//             <input
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//               type="password"
//               name="password"
//               placeholder="Password"
//               required
//             />
//             <button
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition-all duration-300 disabled:opacity-50"
//               type="submit"
//               disabled={isLoading}
//             >
//               {isLoading ? "Registering..." : "Register"}
//             </button>

//             {error && (
//               <span className="text-red-500 text-sm text-center">{error}</span>
//             )}

//             <Link
//               className="text-blue-500 mt-2 text-center text-sm underline hover:text-blue-700"
//               to="/login"
//             >
//               Already have an account?
//             </Link>
//           </div>
//         </form>
//       </div>

//       {/* Right side: Image */}
//       <div className="md:w-1/2 w-full mt-6 md:mt-0">
//         <img
//           className="w-full h-64 md:h-full object-cover rounded-2xl"
//           src="/bg.png"
//           alt="Background"
//         />
//       </div>
//     </div>
//   );
// }

// export default Register;

// -----------------
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setIsLoading(true);
    setError("");

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      await axios.post("http://localhost:8000/api/auth/register", {
        username,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      setError("Registration failed. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pt-24 sm:pt-20 flex flex-col md:flex-row">
      {/* Left side: Form */}
      <div className="flex w-full md:w-1/2 justify-center items-start md:items-center p-6 sm:p-10">
        <form
          className="w-full max-w-md bg-white p-6 sm:p-8 rounded-2xl shadow-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
            Create an Account
          </h1>

          <div className="flex flex-col gap-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition-all duration-300 disabled:opacity-50"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Registering..." : "Register"}
            </button>

            {error && (
              <span className="text-red-500 text-sm text-center">{error}</span>
            )}

            <Link
              className="text-blue-500 mt-2 text-center text-sm underline hover:text-blue-700"
              to="/login"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/3 w-full mt-6 md:mt-0">
        {/* <img
          className="w-full h-64 sm:h-80 md:h-full object-cover rounded-2xl"
          src="/bg.png"
          alt="Background"
        /> */}

        <img
          src="/bg.png"
          alt="Modern house exterior"
          className="rounded-2xl w-full max-w-md md:max-w-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default Register;
