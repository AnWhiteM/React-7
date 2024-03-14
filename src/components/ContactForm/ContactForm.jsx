// ContactForm.js
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object().shape({
  text: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less than 50 characters'),
  phone: Yup.string()
    .required('Phone number is required')
    .min(3, 'Phone number must be at least 3 characters')
    .max(50, 'Phone number must be less than 50 characters'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      text: values.text,
      phone: values.phone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <div className={css.formBlock}>
      <h2>Add New Contact</h2>
      <Formik
        initialValues={{ text: '', phone: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className={css.form}>
            <label htmlFor="text">Name</label>
            <Field
              type="text"
              name="text"
              value={values.text}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <br />

            <label htmlFor="phone">Number</label>
            <Field
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <br />

            <button type="submit">Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
