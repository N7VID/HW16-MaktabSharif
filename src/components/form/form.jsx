import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { RootContext } from "../../context/RootContextProvider";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const contactsData = useContext(RootContext);

  let initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    Relative: "",
    email: "",
    relative: "",
  };

  let validationSchema = Yup.object({
    firstName: Yup.string()
      .required("پر کردن این فیلد الزامی می باشد.")
      .min(3, "نام حداقل دارای سه حرف باشد."),
    lastName: Yup.string()
      .required("پر کردن این فیلد الزامی می باشد.")
      .min(4, "نام خانوادگی حداقل دارای چهار حرف باشد."),

    phoneNumber: Yup.string()
      .required("پر کردن این فیلد الزامی می باشد.")
      .matches(
        /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
        "پیش شماره را به درستی وارد کنید."
      )
      .max(14, "حداکثر چهارده رقم معتبر است.")
      .min(10, "حداقل ده رقم معتبر است."),
    email: Yup.string()
      .required("پر کردن این فیلد الزامی می باشد.")
      .email("فرمت ایمیل معتبر نیست."),
    relative: Yup.string().required("نسبت خود با مخاطب را انتخاب کنید."),
  });

  function addNewContact(values) {
    const existingContacts = contactsData.contextState.contacts || [];
    const updatedContacts = [...existingContacts, values];

    contactsData.setContextState({
      ...contactsData.contextState,
      contacts: updatedContacts,
    });
    toast.success("مخاطب با موفقیت اضافه شد.", {
      position: "top-left",
    });
  }

  function updatedContacts(id, values) {
    let existingContacts = contactsData.contextState.contacts || [];
    let updatedContact = existingContacts.map((user) =>
      user.id === id ? (user = values) : user
    );
    contactsData.setContextState({
      ...contactsData.contextState,
      contacts: updatedContact,
    });
    toast.success("مخاطب با موفقیت به روزرسانی شد.", {
      position: "top-left",
    });
  }

  return (
    <div className="w-[310px]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          if (!contactsData.editMode.status) {
            addNewContact({
              id: crypto.randomUUID(),
              firstName: values.firstName,
              lastName: values.lastName,
              relative: values.relative,
              phoneNumber: values.phoneNumber,
              email: values.email,
            });
            resetForm();
          } else {
            updatedContacts(contactsData.editMode.editId, {
              id: contactsData.editMode.editId,
              firstName: values.firstName,
              lastName: values.lastName,
              relative: values.relative,
              phoneNumber: values.phoneNumber,
              email: values.email,
            });
            contactsData.setEditMode(() => ({
              editId: null,
              status: false,
            }));
            resetForm();
          }
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
                contactsData.editMode.status
                  ? "mainGradient mt-4"
                  : "mainGradient m-4"
              } `}
            >
              {contactsData.editMode.status ? "به روزرسانی" : "اضافه کردن"}
            </button>
            {contactsData.editMode.status && (
              <button
                onClick={() =>
                  contactsData.setEditMode(() => ({
                    editId: null,
                    status: false,
                  }))
                }
                className={`px-[104px] mb-4 -mt-2 py-2 text-white rounded-lg updateGradient`}
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
