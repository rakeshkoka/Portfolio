import styles from "./ContactStyles.module.css";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [emailSent, setEmailSent] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true); // Hide form and show "Sending..." immediately

        const serviceID = 'service_j7zgtmv';
        const templateID = 'template_biwttfi';
        const publicKey = 'Js7iLE1zVzP3ULNsG';

        emailjs.send(serviceID, templateID, formData, publicKey)
            .then(response => {

                console.log('Email sent successfully!', response);

                // Show the success message
                setEmailSent(true);

                //resetting form feilds
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });

                //hide form and display message

                setTimeout(() => {
                    setEmailSent(false);
                    setIsSubmitting(false);
                }, 3000);


            }).catch(err => {
                console.log('Failed to send email. Error:', err);
                setIsSubmitting(false);
            });
    };

    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>

            {isSubmitting ? (
                emailSent ? (
                    <p className={styles.successMessage}>Email sent successfully! Thank you for contacting us.</p>
                ) : (
                    <p className={styles.sendingMessage}>Sending your message...</p>
                )
            ) : (
                <form onSubmit={handleSubmit}>

                    <div className="formGroup">
                        <label htmlFor="name" hidden>Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onChange={handleChange}
                            value={formData.name}
                            required />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="email" hidden>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />
                    </div>

                    <div className="formGroup">
                        <label htmlFor="message" hidden>Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            onChange={handleChange}
                            value={formData.message}
                            required>
                        </textarea>
                    </div>

                    <input
                        type="submit"
                        className="hover btn"
                        value="Submit"
                    />

                </form>
            )}
        </section>
    )
}

export default Contact