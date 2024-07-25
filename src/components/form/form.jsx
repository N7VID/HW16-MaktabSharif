import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { validationSchema } from "./schema/validationSchema";
import { RootContext } from "../../context/RootContextProvider";

export default function RegisterForm() {
  const {
    initialValues,
    editMode,
    addNewContact,
    updatedContacts,
    setEditMode,
    setDefaultInitialValues,
  } = useContext(RootContext);

  return (
    <div className="w-[310px]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
        onSubmit={(values, { resetForm }) => {
          const { firstName, lastName, relative, phoneNumber, email } = values;

          const formValues = {
            firstName,
            lastName,
            relative,
            phoneNumber,
            email,
          };

          if (!editMode.status) {
            addNewContact({
              ...formValues,
              id: crypto.randomUUID(),
            });
            setDefaultInitialValues();
          } else {
            updatedContacts(editMode.editId, {
              ...formValues,
              id: editMode.editId,
            });
            setEditMode(() => ({
              editId: null,
              status: false,
            }));
            setDefaultInitialValues();
          }
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="flex flex-col justify-center items-center rounded-2xl shadow-xl shadow-slate-300 p-3 gap-4 bg-[#e5e5e5] cursor-default">
            <h1 className="text-center pt-4 pb-6 text-lg font-semibold">
              وب اپلیکیشن مدیریت مخاطبین
            </h1>
            <div className="flex flex-col">
              <Field
                className={`rounded-md py-2 px-10 ${
                  errors.firstName ? "border-red-500 border" : ""
                }`}
                placeholder="نام مخاطب"
                name="firstName"
                id="firstName"
              />
              <span className="text-red-500 text-[12px] font-semibold pt-[6px]">
                {errors.firstName}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                className={`rounded-md py-2 px-10 ${
                  errors.lastName ? "border-red-500 border" : ""
                }`}
                placeholder="نام خانوادگی"
                name="lastName"
                id="lastName"
              />
              <span className="text-red-500 text-[12px] font-semibold pt-[6px]">
                {errors.lastName}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                className={`rounded-md py-2 px-10 ${
                  errors.phoneNumber ? "border-red-500 border" : ""
                }`}
                placeholder="شماره تماس"
                name="phoneNumber"
                id="phoneNumber"
              />
              <span className="text-red-500 text-[12px] font-semibold pt-[6px]">
                {errors.phoneNumber}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                as="select"
                id="relative"
                name="relative"
                className={`rounded-md py-[5.5px] pl-[105px] pr-[35px] text-[#9d9db4] ${
                  errors.relative ? "border-red-500 border" : ""
                }`}
              >
                <option value="" disabled>
                  نسبت
                </option>
                <option value="اعضای خانواده">اعضای خانواده</option>
                <option value="دوست">دوست</option>
                <option value="همکار">همکار</option>
                <option value="فامیل">فامیل</option>
              </Field>
              <span className="text-red-500 text-[12px] font-semibold pt-[6px]">
                {errors.relative}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                className={`rounded-md py-2 px-10 ${
                  errors.email ? "border-red-500 border" : ""
                }`}
                placeholder="ایمیل"
                name="email"
                id="email"
              />
              <span className="text-red-500 text-[12px] font-semibold pt-[6px]">
                {errors.email}
              </span>
            </div>
            <button
              type="submit"
              className={`px-[75px]  py-2 text-white rounded-lg ${
                editMode.status ? "mainGradient mt-4" : "mainGradient m-4"
              } `}
            >
              {editMode.status ? "به روزرسانی" : "اضافه کردن"}
            </button>
            {editMode.status && (
              <button
                onClick={() => {
                  setEditMode(() => ({
                    editId: null,
                    status: false,
                  }));
                  setDefaultInitialValues();
                }}
                className={`px-[104px] mb-4 -mt-2 py-2 text-white rounded-lg secondaryGradient`}
              >
                لغو
              </button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
