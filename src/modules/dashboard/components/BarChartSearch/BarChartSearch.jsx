import { Formik } from 'formik';
import React from 'react';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import { InputAntd } from 'stylesheet/Input/Input.styled';

import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import DashboardAction from 'modules/dashboard/action/action';
import './BarChartSearch.scss';
export default function BarChartSearch({ dataSearch }) {
  const initialValue = {
    clinic: ''
  };
  const [initialValues, setValues] = React.useState(initialValue);
  const dispatch = useDispatch();

  const handleSubmit = (dataSearch, values) => {
    dispatch(DashboardAction.getChartData(dataSearch, values));
  };

  return (
    <Formik
      initialValues={{ clinic: '' }}
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
          <form onSubmit={handleSubmit} style={{ paddingLeft: '12vh' }} className="w-100">
            <div className="mb-30 barChart-search-container flex-x align-center mx-auto justify-center">
              <div className="w-40 mr-20">
                <p className="fw-bold mb-5">Clinic Searching</p>
                <InputAntd
                  id="clinic"
                  placeholder="Searching by clinic"
                  type="text"
                  value={initialValues.clinic}
                  onChange={(e) => setValues({ ...initialValues, clinic: e.currentTarget.value })}
                  onBlur={handleBlur}
                  className={errors.clinic && touched.clinic ? 'text-input error' : 'text-input'}
                />
              </div>
              <div className="submit-button">
                <ButtonStyled
                  purple
                  small
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(dataSearch, initialValues);
                  }}>
                  Search
                </ButtonStyled>
              </div>
              {/* <div className="submit-button mlr-10">
                <ExportDropdown />
              </div> */}
            </div>
          </form>
        );
      }}
    </Formik>
  );
}
