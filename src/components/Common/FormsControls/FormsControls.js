import { Field } from 'react-final-form'

import classes from "./FormsControls.module.css";

const FormControl = ({ input, meta: {touched, error}, children }) => {
   return <div className={classes.fieldContainer}>
        {children}
        {error && touched && <span className={classes.errorText}>{error}</span>}
    </div>
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
                <textarea {...input} {...restProps} className={meta.error && meta.touched ? classes.error : undefined}/>
            </FormControl>
}


export const Input = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}>
                <input {...input} {...restProps} className={meta.error && meta.touched ? classes.error : undefined}/>
            </FormControl>
}

export const createField = (name, component, type, placeholder, validate) => (
                                <Field
                                    name={name}
                                    component={component}
                                    type={type}
                                    placeholder={placeholder}
                                    validate={validate}
                                />
)

// (
//     <div className={classes.fieldContainer}>
//         <textarea {...input} {...props} className={meta.error && meta.touched ? classes.error : undefined}/>
//         {meta.error && meta.touched && <span className={classes.errorText}>{meta.error}</span>}
//     </div>
// )

// export const Input  = ({ input, meta, ...props }) => (
//     <div className={classes.fieldContainer}>
//         <input {...input} {...props} className={meta.error && meta.touched ? classes.error : undefined}/>
//         {meta.error && meta.touched && <span className={classes.errorText}>{meta.error}</span>}
//     </div>
// )