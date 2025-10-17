import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		user_name: "",
		user_email: "",
		subject: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_SERVICE_KEY, // Replace with your EmailJS service ID
				import.meta.env.VITE_TEMPLATE_KEY, // Replace with your EmailJS template ID
				formData,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Replace with your EmailJS public key
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Message sent successfully");
					setLoading(false);
					setFormData({
						user_name: "",
						user_email: "",
						subject: "",
						message: "",
					});
				},
				(error) => {
					console.error(error.text);
					toast.error("Error: Message not sent");
					setLoading(false);
				}
			);
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<section className="pt-[80px]">
			<div className="section-container text-white">
				<h3 className="text-4xl font-semibold text-center mb-4 uppercase">
					Contact Me
				</h3>
				<div className="h-1 w-20 m-auto mt-3  bg-purple-600" />
				<form
					onSubmit={handleSubmit}
					className="max-w-xl mx-auto  p-6 rounded-lg space-y-5"
				>
					{/* Name */}
					<input
						type="text"
						name="user_name"
						placeholder="John_Doe"
						value={formData.user_name}
						onChange={handleChange}
						required
						className="w-full p-3 rounded bg-gray-700/70  text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
					/>

					{/* Email */}
					<input
						type="email"
						name="user_email"
						placeholder="example@gmail.com"
						value={formData.user_email}
						onChange={handleChange}
						required
						className="w-full p-3 rounded bg-gray-700/70 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
					/>

					{/* Subject */}
					<input
						type="text"
						name="subject"
						placeholder="Subject"
						value={formData.subject}
						onChange={handleChange}
						required
						className="w-full p-3 rounded bg-gray-700/70 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-600"
					/>

					{/* Message */}
					<textarea
						name="message"
						placeholder="Your Message"
						value={formData.message}
						onChange={handleChange}
						required
						className="w-full p-3 h-32 rounded bg-gray-700/70 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-purple-600"
					/>

					{/* Submit Button */}
					<button
						type="submit"
						className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded transition duration-200 cursor-pointer"
					>
						{loading ? (
							<ClipLoader
								color="#fff" // Tailwind purple-600
								loading={loading}
								size={30}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						) : (
							"Send Message"
						)}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
