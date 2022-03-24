import React, { useState } from 'react';
import { Modal } from 'antd';
import { Formik } from 'formik';
import { DatePickerAntd, FormGroup, InputAntd } from 'stylesheet/Input/Input.styled';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import { CLINIC_OPTIONS, FORMAT_DATE, FORMAT_YEAR, GENDER_OPTIONS } from 'helper/constant';
import moment from 'moment';
import './ModalAntd.scss';
import SelectInput from 'components/SelectInput/SelectInput';

export default function ModalAntd({ isOpen, onCancel }) {
  const handleSubmit = () => {
    console.log('submit');
  };

  const initialValue = {
    name: '',
    date: moment(),
    clinic: '',
    gender: '',
    datePositive: moment().format(FORMAT_DATE)
  };
  const [initialValues, setValues] = React.useState(initialValue);

  let defaultDate = moment().format(FORMAT_DATE);
  const onSetDate = (value, index) => {
    setValues({ ...initialValues, date: value });
  };

  return (
    <Modal title="Basic Modal" visible={isOpen} onCancel={onCancel} width={800}>
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
            <form onSubmit={handleSubmit} className="form-modal">
              <div className="w-40 w-100 mb-14">
                <p className="fw-bold mb-2">Họ tên</p>
                <InputAntd
                  id="name"
                  name="name"
                  placeholder="Điền thông tin họ tên nhân viên nhiễm COVID"
                  type="text"
                  value={initialValues.name}
                  onChange={(e) => setValues({ ...initialValues, name: e.target.value })}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                />
              </div>
              <div className="flex-x align-center mb-14 w-100">
                <div className="w-50 pr-15">
                  <p className="fw-bold mb-5">Giới tính</p>
                  <SelectInput
                    id="gender"
                    placeholder="Chọn giới tính"
                    type="text"
                    value={initialValues.gender}
                    options={GENDER_OPTIONS}
                    onChange={(value, option) => setValues({ ...initialValues, gender: value })}
                    onBlur={handleBlur}
                    className={errors.gender && touched.gender ? 'text-input error' : 'text-input'}
                  />
                </div>
                <div className="w-50 ">
                  <p className="fw-bold mb-5">Năm sinh</p>
                  <DatePickerAntd
                    id="date"
                    name="date"
                    type="date"
                    picker="year"
                    placeholder="Chọn năm sinh"
                    onChange={(date, dateString) => onSetDate(dateString)}
                    onBlur={handleBlur}
                    className={errors.date && touched.date ? 'text-input error' : 'text-input'}
                    format={FORMAT_YEAR}
                    // defaultValue={moment(defaultDate, FORMAT_DATE)}
                  />
                </div>
              </div>
              <div className="w-100  mb-14">
                <p className="fw-bold mb-5">Khoa/ phòng</p>
                <SelectInput
                  id="clinic"
                  placeholder="Chọn khoa/ phòng"
                  type="text"
                  value={initialValues.clinic}
                  options={CLINIC_OPTIONS}
                  onChange={(value, option) => setValues({ ...initialValues, clinic: value })}
                  onBlur={handleBlur}
                  className={errors.clinic && touched.clinic ? 'text-input error' : 'text-input'}
                />
              </div>
              <div className="w-100  mb-14">
                <p className="fw-bold mb-5">Ngày XN dương tính </p>
                <InputAntd
                  id="datePositive"
                  placeholder="Ngày xác nhận dương tính"
                  type="text"
                  value={initialValues.datePositive}
                  // onChange={(e) => setValues({ ...initialValues, clinic: e.currentTarget.value })}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                  disabled={true}
                />
              </div>
              <div className="w-100  mb-14">
                <p className="fw-bold mb-5">Nguồn nghi nhiễm</p>
                <InputAntd
                  id="infectedFrom"
                  placeholder="Điền thông tin nguồn nghi nhiễm"
                  type="text"
                  value={initialValues.infectedFrom}
                  onChange={(e) => setValues({ ...initialValues, infectedFrom: e.target.value })}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                />
              </div>
              {/* <div className="submit-button mlr-10">
                <ExportDropdown />
              </div> */}
            </form>
          );
        }}
      </Formik>
    </Modal>
  );
}
