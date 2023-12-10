import axios from 'axios';
const inputBaseURL = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL : '';
const inputAPIKey = process.env.NEXT_PUBLIC_SHEET_API ? process.env.NEXT_PUBLIC_SHEET_API : '';
const inputSheetID = process.env.NEXT_PUBLIC_SHEET_ID ? process.env.NEXT_PUBLIC_SHEET_ID : '';

const api = axios.create(
  {
    baseURL: inputBaseURL
  }
);

export interface eventInnerProps {
  spreadsheetId: string,
  valueRanges: eventValueRangesProps[]
};

export interface eventValueRangesProps {
  range: string,
  majorDimension: string,
  values: string[]
};

interface IGetEventResponse {
  status: number;
  data: eventInnerProps;
};

function cleanID(inputID: string | undefined) {
  var idRange = '';
  if (inputID == null || inputID == undefined || inputID == '') {
    idRange = ('!A' + inputID + ':D' + inputID)
  }
  else {
    idRange = ('')
  }
};

export const getEvent = {
  get: (id?: string) =>
    api.get<IGetEventResponse>(`${inputBaseURL}${inputSheetID}/values:batchGet?ranges=calendar${cleanID(id)}&valueRenderOption=FORMULA&prettyPrint=true&key=${inputAPIKey}`)
};