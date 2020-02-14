import fileUpload from 'express-fileupload';
// import formData from "express-form-data";

export default app => app.use(fileUpload());
// export default app => app.use(formData.stream());