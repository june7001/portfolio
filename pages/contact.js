import { useState, useRef, Fragment } from "react";
import emailjs from "@emailjs/browser";
import { Dialog } from "@headlessui/react";

export default function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_sja8s4j",
        "template_r6samo3",
        formRef.current,
        // eslint-disable-next-line
        "omj_zzg_tFAEE04k9"
      );
      setSuccessMsg("I'll get back to you soon :)");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setErrorMsg("Something went wrong :(");
    }
    setLoading(false);
    setIsModalOpen(true);
  };

  return (
    <div className="pb-8sm:px-6 mx-auto mt-12 max-w-2xl px-4 lg:px-8">
      <div className="text-center">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl">
          Get in touch!
        </h1>
      </div>

      <Dialog
        as="div"
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="fixed inset-0 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="z-30 my-8 inline-block w-full max-w-md overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title className="text-xl font-medium leading-6">
              {successMsg ? "Thank you!" : "Oh no!"}
            </Dialog.Title>

            <div className="mt-2">
              <p className="font-medium">{successMsg || errorMsg}</p>
            </div>

            <div className="mt-4 flex flex-col">
              <button
                type="button"
                className="self-end rounded-full bg-black px-4 py-2 font-medium text-white hover:bg-indigo-200 hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-8 p-4"
      >
        {/* Form Fields */}
        <label className="flex flex-col">
          <span className="font-medium">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            required
            onChange={handleChange}
            className="mt-2 rounded-lg bg-slate-100 p-2 shadow-lg focus:outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            required
            onChange={handleChange}
            className="mt-2 rounded-lg bg-slate-100 p-2 shadow-lg focus:outline-none"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-medium">Message</span>
          <textarea
            name="message"
            value={form.message}
            required
            onChange={handleChange}
            className="mt-2 h-48 resize-none rounded-lg bg-slate-100 p-2 shadow-lg focus:outline-none"
          ></textarea>
        </label>
        <button
          type="submit"
          disabled={loading}
          className={` self-end rounded-full bg-black px-4 py-2 font-medium text-white hover:bg-white hover:text-black ${
            loading ? "opacity-50" : "opacity-100"
          }`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}
