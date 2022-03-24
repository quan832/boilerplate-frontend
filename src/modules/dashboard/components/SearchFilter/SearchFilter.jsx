import { Formik } from 'formik';
import React from 'react';
import { ButtonStyled } from 'stylesheet/Button/Button.styled';
import './SearchFilter.scss';
import * as Yup from 'yup';
import { DatePickerAntd, InputAntd } from 'stylesheet/Input/Input.styled';
import { FORMAT_DATE } from 'helper/constant';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import DashboardAction from 'modules/dashboard/action/action';
import { getCurrentStep } from 'modules/dashboard/saga/dashboardSaga';
// import ExportDropdown from '../ExportDropdown/ExportDropdown';

export default function SearchFilter() {
  let defaultDate = moment().format(FORMAT_DATE);
  const initialValue = {
    name: '',
    date: moment(),
    clinic: '',
    page: 1,
    perPage: 6
  };
  const [initialValues, setValues] = React.useState(initialValue);
  const dispatch = useDispatch();
  const { file } = useSelector((state) => state.dashboard.stepOne);

  const currentStep = useSelector(getCurrentStep);
  const handleSubmit = (values) => {
    dispatch(DashboardAction.onChangePage(1));
    dispatch(DashboardAction.doingStepOne(file, values));
  };

  const onSetDate = (value, index) => {
    setValues({ ...initialValues, date: value });
  };

  return (
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
                  value={initialValues.name}
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
                  value={initialValues.clinic}
                  onChange={(e) => setValues({ ...initialValues, clinic: e.currentTarget.value })}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? 'text-input error' : 'text-input'}
                />
              </div>
              <div className="submit-button">
                <ButtonStyled
                  purple
                  small
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(initialValues);
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
