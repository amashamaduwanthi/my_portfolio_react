import { useState } from "react";

interface FormData {
    fullName: string;
    email: string;
    mobile: string;
    subject: string;
    message: string;
}

interface Errors {
    fullName?: string;
    email?: string;
    mobile?: string;
    subject?: string;
    message?: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<Errors>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Please enter a valid email address.";
        if (!formData.mobile) newErrors.mobile = "Mobile Number is required.";
        if (!formData.subject) newErrors.subject = "Subject is required.";
        if (!formData.message) newErrors.message = "Message cannot be empty.";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            console.log(formData);
            setLoading(false);
            setFormData({
                fullName: "",
                email: "",
                mobile: "",
                subject: "",
                message: "",
            });
            alert("Your message has been sent!");
        }, 1500);
    };

    return (
        <section className="contact py-16 px-8 bg-gradient-to-r from-pink-200 via-white to-pink-300" id="contact">
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-8">
                Contact <span className="text-blue-600">Me</span>
            </h2>

            <form
                onSubmit={handleSubmit}
                className="max-w-4xl mx-auto bg-gradient-to-r from-pink-200 to-pink-300 p-10 rounded-lg shadow-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
                        )}
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    <div className="input-box">
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.mobile && (
                            <p className="text-red-500 text-sm mt-2">{errors.mobile}</p>
                        )}
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Email Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.subject && (
                            <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
          <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-2">{errors.message}</p>
                    )}
                </div>

                <div className="mt-6 flex justify-center">
                    <button
                        type="submit"
                        className={`btn bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-6 rounded-md ${loading ? "cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
