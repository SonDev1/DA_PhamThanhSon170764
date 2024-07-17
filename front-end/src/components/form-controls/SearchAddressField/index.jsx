import React from "react";
import { Field } from "formik";
import { SearchAddress } from "../../SearchAddress";

const SearchAddressField = ({ field, form, ...props }) => {
  return (
    <SearchAddress
      {...field}
      {...props}
      onChange={(value) => form.setFieldValue(field.name, value)}
      onBlur={() => form.setFieldTouched(field.name, true)}
    />
  );
};

export default SearchAddressField;
