/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Modal from "react-modal";
import { Elements } from "@stripe/react-stripe-js";
import { useGlobalContext } from "../GlobalContext/GlobalProvider";

import { IoIosCloseCircleOutline } from "react-icons/io";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
interface BuyModalProps {
  product: any;
  isOpen: boolean;
  closeModal: () => void;
  isEditModalOpen: boolean;
}

const BuyModal: React.FC<BuyModalProps> = ({ product, isOpen, closeModal }) => {
  const { user } = useGlobalContext();
  console.log({ stripePromise });
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      borderRadius: "25px",
      right: "auto",
      // bottom: 'auto',
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={isEditModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="text-right   rounded-full">
        <button
          className="btn mt-10 font-bold text-white rounded-full bg-[#FF6F61] text-2xl "
          onClick={closeModal}
        >
          <IoIosCloseCircleOutline />
        </button>
      </div>
      <div>
        <div className="h-full w-full">
          <p className="text-lg font-semibold">title</p>
          <p>price:</p>
          <p>Prize Money:</p>
        </div>
        <div>{/* somthing todo */}</div>
      </div>
      <hr />
      <div className="w-96 mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            buyInfo={{
              ...product,
              user: {
                id: user?._id,
                email: user?.email,
              },
            }}
          />
        </Elements>
      </div>
    </Modal>
  );
};

export default BuyModal;
