import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DropUpload from '../DropUpload/DropUpload';
export default function FormUpload({ id }) {
  return (
    <form id={id}>
      <div className="mx-auto w-50">
        <div className="mb-5 row d-flex mx-auto" style={{ marginTop: '10em' }}>
          <DropUpload />
        </div>
      </div>
    </form>
  );
}
