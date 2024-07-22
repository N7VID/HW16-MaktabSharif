import { Field, Form, Formik } from "formik";
export default function RegisterForm() {
  return (
    <div className="mx-auto my-10 w-[310px]">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          Relative: "",
          email: "",
        }}
      >
        <Form className="flex flex-col justify-center items-center rounded-2xl shadow-xl shadow-slate-300 p-3 gap-6 bg-[#e5e5e5]">
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
            {/* <span className="text-red-600 font-semibold">Error</span> */}
          </div>

          <div className="flex flex-col">
            <Field
              className="rounded-md py-2 px-10"
              placeholder="نام خانوادگی"
              name="lastName"
              id="lastName"
            />
            {/* <span className="text-red-600 font-semibold">Error</span> */}
          </div>

          <div className="flex flex-col">
            <Field
              className="rounded-md py-2 px-10"
              placeholder="شماره تماس"
              name="phoneNumber"
              id="phoneNumber"
            />
            {/* <span className="text-red-600 font-semibold">Error</span> */}
          </div>
          <select
            className="rounded-md py-2 px-[70px] text-[#acacac]"
            placeholder="نسبت"
          >
            <option value="" selected>
              نسبت
            </option>
            <option value="اعضای خانواده">اعضای خانواده</option>
            <option value="دوست">دوست</option>
            <option value="همکار">همکار</option>
            <option value="فامیل">فامیل</option>
          </select>

          <div className="flex flex-col">
            <Field
              className="rounded-md py-2 px-10"
              placeholder="ایمیل"
              name="email"
              id="email"
            />
            {/* <span className="text-red-600 font-semibold">Error</span> */}
          </div>
          <button
            type="submit"
            className="px-[80px] m-4 py-2 text-white rounded-lg mainGradient"
          >
            اضافه کردن
          </button>
        </Form>
      </Formik>
    </div>
  );
}
