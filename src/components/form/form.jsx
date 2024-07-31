import { Form, Formik } from "formik";
import { useContext, useState } from "react";
import { RootContext } from "../../context/RootContextProvider";
import FieldFormik from "../field/FieldFormik";
import FieldFormikSelect from "../field/FieldFormikSelect";
import { validationSchema } from "./schema/validationSchema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import usePostItem from "../../hooks/usePostItem";

export default function RegisterForm() {
  const { createContact } = usePostItem({
    url: "http://localhost:5000/contacts",
    queryKey: "contacts",
    successMessage: "مخاطب با موفقیت اضافه شد.",
  });

  function handleSubmitPostContact(value) {
    createContact(value);
  }

  // const { mutate: updateContacts } = useMutation({
  //   mutationFn: async (value) => {
  //     const { id, ...patchValues } = value;
  //     const res = await axios.patch(
  //       `http://localhost:5000/contacts/${id}`,
  //       patchValues
  //     );
  //     return res.data;
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("contacts");
  //     toast.success("مخاطب با موفقیت ویرایش شد.", {
  //       position: "top-left",
  //     });
  //   },
  //   onError: (error) => {
  //     toast.error(`Error: ${error.message}`, {
  //       position: "top-left",
  //       rtl: false,
  //     });
  //   },
  // });

  const { initialValues, editMode, setEditMode, setDefaultInitialValues } =
    useContext(RootContext);

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
            handleSubmitPostContact({
              ...formValues,
            });
          } else {
            // updateContacts({
            //   id: editMode.editId,
            //   ...formValues,
            // });
            setEditMode(() => ({
              editId: null,
              status: false,
            }));
          }
          setDefaultInitialValues();
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form className="flex flex-col justify-center items-center rounded-2xl shadow-xl shadow-slate-300 p-3 gap-4 bg-[#e5e5e5] cursor-default">
            <h1 className="text-center pt-4 pb-6 text-lg font-semibold">
              وب اپلیکیشن مدیریت مخاطبین
            </h1>
            <FieldFormik
              enName={"firstName"}
              faName={"نام مخاطب"}
              errors={errors.firstName}
            />
            <FieldFormik
              enName={"lastName"}
              faName={"نام خانوادگی"}
              errors={errors.lastName}
            />
            <FieldFormik
              enName={"phoneNumber"}
              faName={"شماره تماس"}
              errors={errors.phoneNumber}
            />

            <FieldFormikSelect
              enName={"relative"}
              faName={"نسبت"}
              errors={errors.relative}
              options={["اعضای خانواده", "دوست", "فامیل", "همکار"]}
            />

            <FieldFormik
              enName={"email"}
              faName={"ایمیل"}
              errors={errors.email}
            />

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
