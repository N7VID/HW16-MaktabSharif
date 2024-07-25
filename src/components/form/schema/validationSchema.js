import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("وارد کردن نام مخاطب الزامی می باشد.")
    .min(3, "نام حداقل دارای سه حرف باشد."),
  lastName: Yup.string()
    .required("وارد کردن نام خانوادگی الزامی می باشد.")
    .min(4, "نام خانوادگی حداقل دارای چهار حرف باشد."),

  phoneNumber: Yup.string()
    .required("وارد کردن شماره همراه الزامی می باشد.")
    .matches(
      /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
      "فرمت شماره همراه معتبر نمی باشد."
    )
    .max(14, "حداکثر چهارده رقم معتبر است.")
    .min(10, "حداقل ده رقم معتبر است."),
  email: Yup.string()
    .required("پر کردن این فیلد الزامی می باشد.")
    .email("فرمت ایمیل معتبر نمی باشد."),
  relative: Yup.string().required("نسبت خود با مخاطب را انتخاب کنید."),
});
