import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { resetPassword } = useContext(AuthContext);

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(email);
      setMessage("Password reset email sent. Please check your inbox.");
      setEmail("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <SectionTitle title="Reset Password"></SectionTitle>
      <form className="w-1/2 mx-auto" onSubmit={handleReset}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            type="email"
            placeholder="Enter your email for reset password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered input-success w-full"
          />
        </div>

        <button className="btn btn-primary w-full mt-8" type="submit">
          Reset Password
        </button>
      </form>
      {message && <p className="text-center text-red-500 my-2">{message}</p>}
    </div>
  );
};

export default ResetPassword;
