import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { RootContext } from "../../context/RootContextProvider";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const contactsData = useContext(RootContext);

  function addNewContact(values) {
    const existingContacts = contactsData.contextState.contacts || [];
    const updatedContacts = [...existingContacts, values];

    contactsData.setContextState({
      ...contactsData.contextState,
      contacts: updatedContacts,
    });
  }

  return (
    <div className="w-[310px]">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          Relative: "",
          email: "",
          relative: "",
        }}
        onSubmit={(values, { resetForm }) => {
          addNewContact({
            id: crypto.randomUUID(),
            firstName: values.firstName,
            lastName: values.lastName,
            relative: values.relative,
            phoneNumber: values.phoneNumber,
            email: values.email,
          });
          toast.success("مخاطب با موفقیت اضافه شد.", {
            position: "top-right",
          });
          resetForm();
        }}
        validationSchema={Yup.object({
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
        })}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form className="flex flex-col justify-center items-center rounded-2xl shadow-xl shadow-slate-300 p-3 gap-4 bg-[#e5e5e5]">
            <h1 className="text-center pt-4 pb-6 text-lg font-semibold">
              وب اپلیکیشن مدیریت مخاطبین
            </h1>
            <div className="flex flex-col">
              <Field
                className="rounded-md py-2 px-10"
                placeholder="نام مخاطب"
                name="firstName"
                id="firstName"
              />
              <span className="text-red-500 text-sm font-semibold pt-2">
                {errors.firstName}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                className="rounded-md py-2 px-10"
                placeholder="نام خانوادگی"
                name="lastName"
                id="lastName"
              />
              <span className="text-red-500 text-sm font-semibold pt-2">
                {errors.lastName}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                className="rounded-md py-2 px-10"
                placeholder="شماره تماس"
                name="phoneNumber"
                id="phoneNumber"
              />
              <span className="text-red-500 text-sm font-semibold pt-2">
                {errors.phoneNumber}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                as="select"
                id="relative"
                name="relative"
                className="rounded-md py-[5.5px] px-[70px] text-[#acacac]"
                placeholder="نسبت"
              >
                <option value="" disabled>
                  نسبت
                </option>
                <option value="اعضای خانواده">اعضای خانواده</option>
                <option value="دوست">دوست</option>
                <option value="همکار">همکار</option>
                <option value="فامیل">فامیل</option>
              </Field>
              <span className="text-red-500 text-sm font-semibold pt-2">
                {errors.relative}
              </span>
            </div>

            <div className="flex flex-col">
              <Field
                className="rounded-md py-2 px-10"
                placeholder="ایمیل"
                name="email"
                id="email"
              />
              <span className="text-red-500 text-sm font-semibold pt-2">
                {errors.email}
              </span>
            </div>
            <button
              type="submit"
              className="px-[80px] m-4 py-2 text-white rounded-lg mainGradient"
            >
              اضافه کردن
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
