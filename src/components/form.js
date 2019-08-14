import React, { useCallback } from 'react';
import { useForm } from '../hooks/useForm';

const Form = () => {
    const [values, handleChange] = useForm({
        firstName: '',
        lastName: '',
        email: ''
    });

    const onSubmit = useCallback(() => {
        console.log('values', values);
    }, [values]);

    return (
        <div className="app-separator home-wrap">
            <form>
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={values.firstName}
                    id="fname"
                    name="firstName"
                    placeholder="Your name.."
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                    id="lname"
                    name="lastName"
                    placeholder="Your last name.."
                />

                <label htmlFor="lname">Email</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    id="email"
                    name="email"
                    placeholder="Your email.."
                />

                <input type="button" onClick={onSubmit} value="Submit" />
            </form>
        </div>
    );
};

export default Form;
