import { google } from 'googleapis';

export async function getEvents() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      null,
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
      range: "calendar!A1:E",
      valueRenderOption: "FORMULA"
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        name: row[0] || null,
        datetime: row[1] || null,
        price: row[2] || null,
        description: row[3] || null
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};

export async function getPastEvents() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      null,
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
      range: "calendar-pastEvents!A1:E",
      valueRenderOption: "FORMULA"
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        name: row[0] || null,
        datetime: row[1] || null
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};

export async function getProjects() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
    const jwt = new google.auth.JWT(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      null,
      process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
      range: "projects!A1:E",
      valueRenderOption: "FORMULA"
    });

    const rows = response.data.values;

    if (rows.length) {
      return rows.map((row) => ({
        name: row[0] || null,
        description: row[1] || null,
        image: row[2] || null
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
};