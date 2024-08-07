import { Field } from "formik";

export default function FieldFormik({ enName, faName, errors }) {
  return (
    <div className="flex flex-col">
      <Field
        className={`rounded-md py-2 px-10 dark:bg-[#eee] ${
          errors ? "border-red-500 border" : ""
        }`}
        placeholder={faName}
        name={enName}
        id={enName}
      />
      <span className="text-red-500 dark:text-red-400 text-[12px] font-semibold pt-[6px]">
        {errors}
      </span>
    </div>
  );
}
