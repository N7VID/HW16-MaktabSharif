import { Field } from "formik";

export default function FieldFormikSelect({ faName, enName, errors, options }) {
  return (
    <div className="flex flex-col">
      <Field
        as="select"
        id={enName}
        name={enName}
        className={`rounded-md py-[5.5px] pl-[105px] pr-[35px] text-[#9d9db4] ${
          errors ? "border-red-500 border" : ""
        }`}
      >
        <option value="" disabled>
          {faName}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <span className="text-red-500 text-[12px] font-semibold pt-[6px]">
        {errors}
      </span>
    </div>
  );
}
