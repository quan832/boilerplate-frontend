import React, { useState } from 'react';
import { Modal } from 'antd';
import { Formik } from 'formik';
import { DatePickerAntd, InputAntd } from 'stylesheet/Input/Input.styled';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import { FORMAT_DATE } from 'helper/constant';
import moment from 'moment';

export default function ModalAntd({ isOpen, onCancel }) {
  const handleSubmit = () => {
    console.log('submit');
  };

  const initialValue = {
    name: '',
    date: moment(),
    clinic: ''
  };
  const [initialValues, setValues] = React.useState(initialValue);

  let defaultDate = moment().format(FORMAT_DATE);
  const onSetDate = (value, index) => {
    setValues({ ...initialValues, date: value });
  };

  return (
    <Modal title="Basic Modal" visible={isOpen} onCancel={onCancel}>
      <Formik
        initialValues={{ name: '', date: moment(), clinic: '' }}
        onSubmit={async (values, { resetForm }) => {
          resetForm();
        }}
        //   validationSchema={Yup.object().shape({
        //       name: Yup.string(),
        //       date
        //   })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleReset
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <div className="mt-10 mb-30 search-filter-container flex-x align-center mx-auto justify-center">
                <div className="w-40 mr-20">
                  <p className="fw-bold mb-5">What are you looking for?</p>
                  <InputAntd
                    id="name"
                    name="name"
                    placeholder="Searching by name,..."
                    type="text"
                    value={values.name}
                    onChange={(e) => setValues({ ...initialValues, name: e.currentTarget.value })}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                  />
                </div>
                <div className="w-20 mr-20">
                  <p className="fw-bold mb-5">Date Searching</p>
                  <DatePickerAntd
                    id="date"
                    name="date"
                    type="date"
                    onChange={(date, dateString) => onSetDate(dateString)}
                    onBlur={handleBlur}
                    className={errors.date && touched.date ? 'text-input error' : 'text-input'}
                    format={FORMAT_DATE}
                    defaultValue={moment(defaultDate, FORMAT_DATE)}
                  />
                </div>
                <div className="w-20 mr-20">
                  <p className="fw-bold mb-5">Clinic Searching</p>
                  <InputAntd
                    id="clinic"
                    placeholder="Searching by clinic"
                    type="text"
                    value={values.name}
                    onChange={(e) => setValues({ ...initialValues, clinic: e.currentTarget.value })}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                  />
                </div>
                {/* <div className="submit-button mlr-10">
                <ExportDropdown />
              </div> */}
              </div>
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
}
