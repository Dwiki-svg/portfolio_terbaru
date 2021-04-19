import styles from "./styles/contact.module.scss"
import * as Yup from "yup"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { useState } from "react"

const formSchema = Yup.object().shape({
    username: Yup.string()
        .required("name cannot be empty")
        .max(25, "maximum to 25 characters"),
    email: Yup.string()
        .required("email cannot be empty")
        .max(100, "maximum to 100 characters"),
    message: Yup.string().required("minimum to 5 characters").min(5, "minimum to 5 characters"),
})

function Contact() {
    const [form, setForm] = useState("")

    return (
        <article id="contact" className={styles.container}>
            <div className={styles.container__top}>
                <div className={styles.container__top__title}>
                    <h1>Contact</h1>
                </div>
            </div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    message: "",
                }}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    setForm(values)
                    console.log(form)
                }}
            >
                <Form className={styles.container__form}>
                    <Field
                        type="text"
                        name="username"
                        aria-label="name"
                        placeholder="Name"
                    />
                    <ErrorMessage
                        name="username"
                        component="span"
                        className={styles.container__form__messageError}
                    />

                    <Field
                        type="email"
                        name="email"
                        aria-label="email"
                        placeholder="Email"
                    />
                    <ErrorMessage
                        name="email"
                        component="span"
                        className={styles.container__form__messageError}
                    />
                    <Field
                        component="textarea"
                        cols="50"
                        rows="6"
                        name="message"
                        aria-label="message"
                        placeholder="Message"
                    />
                    <ErrorMessage
                        name="message"
                        component="span"
                        className={styles.container__form__messageError}
                    />
                    <div className={styles.container__form__btn}>
                        <button type="submit">Send Message</button>
                    </div>
                </Form>
            </Formik>
        </article>
    )
}

export default Contact
