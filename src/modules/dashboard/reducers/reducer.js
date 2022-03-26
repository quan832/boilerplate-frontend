import { FORMAT_DATE } from 'helper/constant';
import DashboardAction, {
  CLOSE_MODAL,
  DELETE_ROW_STAFF,
  EDIT_ROW_STAFF,
  ON_CHANGE_PAGE,
  SEARCH_FILTER,
  TOGGLE_MODAL,
  UPDATE_PROCESS
} from '../action/action';
import moment from 'moment'

const statusProcess = {
  wait: 'wait',
  process: 'process',
  finish: 'finish',
  error: 'error'
};

const initialState = {
  currentStep: 0,
  loading: false,
  upload: {
    data: []
  },
  modal: {
    isOpen: false,
    type: '',
    value: null
  },
  stepOne: {
    file: null,
    date: '',
    status: statusProcess.wait
  },
  stepTwo: {
    data: [],
    page: 1,
    perPage: 6,
    filterDate: '',
    name: '',
    clinic: '',
    status: statusProcess.wait,
    staffDelete: []
  },
  stepThree: {
    maxRange: 10,
    chart: []
  }
};

const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DashboardAction.GET_CHART_DATA.SUCCESS:
      const count = [...payload].map((item) => item.count)
      const max = Math.max(...count);
      return {
        ...state,
        stepThree: {
          ...state.stepThree,
          maxRange: max,
          chart: payload
        }
      }
    case DELETE_ROW_STAFF: {
      return {
        ...state,
        upload: {
          data: [...state.upload.data].filter((item) => item.id !== payload ? true : false)
        },
        stepTwo: {
          ...state.stepTwo,
          staffDelete: [...state.stepTwo.staffDelete, payload]
        }
      }
    }
    case EDIT_ROW_STAFF:
      const uploadData = [...state.upload.data]
      const dataDisplayed = [...state.stepTwo.data]
      const indexFindStaff = uploadData.findIndex((item) => item.id === payload.id)
      const indexInRow = dataDisplayed.findIndex((item) => item.id === payload.id)
      uploadData[indexFindStaff] = payload
      dataDisplayed[indexInRow] = payload
      return {
        ...state,
        upload: {
          ...state.upload,
          data: uploadData
        },
        stepTwo: {
          ...state.stepTwo,
          data: dataDisplayed
        }
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: false,
          type: '',
          value: null,
        }
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: !state.modal.isOpen,
          type: payload.type,
          value: payload.value
        }
      }
    case SEARCH_FILTER:
      const { date, name, clinic } = payload;
      let clone = [...state.stepTwo.data]
      clone = clone.filter((item) => {
        return item['timeStamp'] === date.replace(/\s+/g, ' ').trim() ? true : false
      })
      return {
        ...state,
        stepTwo: {
          ...state.stepTwo,
          data: clone,
          date: date,
          name: name,
          clinic: clinic,
        }
      }
    case DashboardAction.DOING_STEP_ONE.REQUEST:
      return {
        ...state,
        loading: true,
        stepOne: {
          ...state.stepOne,
          file: payload.file,
          date: payload.params.date,
          status: statusProcess.process,
        },
        stepTwo: {
          ...state.stepTwo,
          date: payload.params.date,
        }
      }
    case DashboardAction.DOING_STEP_ONE.SUCCESS:
      return {
        ...state,
        loading: false,
        stepOne: {
          ...state.stepOne,
          status: statusProcess.finish
        },
        stepTwo: {
          ...state.stepTwo,
          data: payload.result,
          total: payload.total,
          status: statusProcess.process,
        },
        upload: {
          data: payload.readyUploadExcel
        }
      }
    case DashboardAction.DOING_STEP_ONE.ERROR:
      return {
        ...state,
        loading: false,
        stepOne: {
          ...state.stepOne,
          status: statusProcess.error
        },
      }
    case UPDATE_PROCESS:
      return { ...state, currentStep: payload };
    case ON_CHANGE_PAGE:
      return {
        ...state,
        stepTwo: {
          ...state.stepTwo,
          page: payload,
        }
      };
    default:
      return state;
  }
};

export default dashboardReducer;
