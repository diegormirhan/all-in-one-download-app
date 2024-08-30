import * as yup from "yup";

const basicSchema = yup.object().shape({
    link: yup.string().url("Please enter a valid link").required("Required")
})

export default basicSchema;