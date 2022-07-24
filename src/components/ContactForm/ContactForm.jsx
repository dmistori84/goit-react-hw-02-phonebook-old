// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Component } from 'react';
import styles from './ContactForm.module.css';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//     name: yup.string().required(),
// });

export class ContactForm extends Component { 
    state = {
        name: '',
        tel: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', tel: '' });
    };

    render() { 
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <label className={styles.formLabel}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label className={styles.formLabel}>
                    Tel
                    <input
                        type="text"
                        name="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.tel}
                        onChange={this.handleChange}
                    />
                </label> 
                <button type="submit" className={styles.btnForm}>Add contact</button>
            </form>
        )
    };
}

// export const ContactForm = ({data, onSub}) => {

//     const handleSubmit = (values, { resetForm }) => { 
//         console.log(values.name);
//         //resetForm();
//         return values.name;      
//     }

//     return (
//         <Formik
//             initialValues={data}
//             onSubmit={onSub}
//             validationSchema={schema}
//         >
//             <Form autoComplete='off'>
//                 <label htmlFor="name">
//                     Name
//                     <Field
//                         type="text"
//                         name="name"
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                     <ErrorMessage name="name" />
//                 </label>
//                 <button type="submit">Add Contact</button>
//             </Form>
//         </Formik>
//     )
// }

