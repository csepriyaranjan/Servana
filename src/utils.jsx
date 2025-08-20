import { toast } from "react-toastify";
import { AiOutlineCheckCircle, AiOutlineWarning } from "react-icons/ai";

// Success Handler
export const handlerSuccess = (msg) => {
  toast.success(
    <div className="flex items-center gap-2">
      <AiOutlineCheckCircle />
      <span>{msg}</span>
    </div>,
    {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "#4CAF50",
        color: "#fff",
        fontWeight: "500",
        borderRadius: "12px",
        padding: "12px 16px",
        fontSize: "15px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
      },
    }
  );
};

// Error Handler
export const handlerError = (msg) => {
  toast.error(
    <div className="flex items-center gap-2">
      <AiOutlineWarning/>
      <span>{msg}</span>
    </div>,
    {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        background: "#F44336",
        color: "#fff",
        fontWeight: "500",
        borderRadius: "12px",
        padding: "12px 16px",
        fontSize: "15px",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
      },
    }
  );
};
