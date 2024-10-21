import styles from "./ContactStyles.module.css";
import { useForm } from "@formspree/react";

function Contact() {

    const [state, handleSubmit] = useForm('xanynnzg');

    if (state.succeeded) {
        return <p>Thanks for your message!</p>;
    }

    return (
        <section id="contact" className={styles.container}>
            <h1 className="sectionTitle">Contact</h1>

            <form onSubmit={handleSubmit}>

                <div className="formGroup">
                    <label htmlFor="name" hidden>Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        required />
                </div>

                <div className="formGroup">
                    <label htmlFor="email" hidden>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    />
                </div>

                <div className="formGroup">
                    <label htmlFor="message" hidden>Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        required>
                    </textarea>
                </div>

                <input
                    type="submit"
                    className="hover btn"
                    value="Submit"
                    disabled={state.submitting}
                />

                {/* <button
                    type="submit"
                    className="hover btn"
                    disabled={state.submitting}
                >
                    Submit
                </button> */}

            </form>

        </section>
    )
}

export default Contact