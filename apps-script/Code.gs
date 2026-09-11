/**
 * Hostly contact-form backend.
 *
 * Receives submissions from the tenant enquiry, rental-analysis, and
 * management-question forms on index.html, appends each one as a row in
 * this spreadsheet (one sheet per form, created automatically), and emails
 * a notification to NOTIFY_EMAIL. No server, no paid service — this script
 * IS the backend.
 *
 * ---------------------------------------------------------------------
 * SETUP (about 5 minutes)
 * ---------------------------------------------------------------------
 * 1. Create a new Google Sheet (sheets.new) — this becomes your
 *    submissions log. Give it a name, e.g. "Hostly submissions".
 * 2. In that Sheet: Extensions → Apps Script.
 * 3. Delete the placeholder "myFunction() {}" code and paste in this
 *    entire file.
 * 4. Change NOTIFY_EMAIL below to the address that should get notified.
 * 5. Click Deploy → New deployment.
 *      - Select type: Web app
 *      - Execute as: Me
 *      - Who has access: Anyone
 *    Click Deploy.
 * 6. Google will ask you to authorize the script (it's yours, so this is
 *    expected). If you see "Google hasn't verified this app", click
 *    Advanced → Go to <your project name> (unsafe) → Allow. This warning
 *    only appears because you haven't submitted the script for Google's
 *    public-app review — it's still only accessible to you and whoever
 *    you deploy it for.
 * 7. Copy the Web app URL shown after deploying (it ends in /exec).
 * 8. Open index.html, find HOSTLY_FORM_ENDPOINT near the top of the
 *    <script> block, and paste that URL in as its value.
 * 9. Re-deploy this site. Submit each form once to confirm a row lands
 *    in the Sheet and the notification email arrives.
 *
 * If you ever edit this file after deploying, use Deploy → Manage
 * deployments → edit (pencil icon) → New version, so the live /exec URL
 * picks up the change — saving the script alone does not redeploy it.
 * ---------------------------------------------------------------------
 */

var NOTIFY_EMAIL = 'hello@yourhostlydomain.com'; // <-- change this to your real inbox

// Which sheet each form's rows land in. Keys must match the `formType`
// value each form sends (set via data-form-type on the <form> in index.html).
var SHEET_NAMES = {
  tenant: 'Tenant enquiries',
  analysis: 'Rental analysis requests',
  question: 'Management questions'
};

var SUBJECTS = {
  tenant: 'New tenant enquiry — Hostly website',
  analysis: 'New rental analysis request — Hostly website',
  question: 'New management question — Hostly website'
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var formType = data.formType || 'unknown';
    var sheetName = SHEET_NAMES[formType] || 'Other submissions';

    var sheet = getOrCreateSheet(sheetName, data);
    appendRow(sheet, data);
    sendNotificationEmail(formType, data);

    return jsonResponse({ status: 'ok' });
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.message });
  }
}

// Lets you sanity-check a deployment by opening the /exec URL directly
// in a browser — you should see {"status":"ok","message":"..."}.
function doGet() {
  return jsonResponse({ status: 'ok', message: 'Hostly form endpoint is live.' });
}

function getOrCreateSheet(name, data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    var headers = ['Timestamp'].concat(
      Object.keys(data).filter(function (k) { return k !== 'formType'; })
    );
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function appendRow(sheet, data) {
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var row = headers.map(function (h) {
    if (h === 'Timestamp') return new Date();
    return data[h] !== undefined ? data[h] : '';
  });
  sheet.appendRow(row);
}

function sendNotificationEmail(formType, data) {
  var subject = SUBJECTS[formType] || 'New form submission — Hostly website';
  var lines = Object.keys(data)
    .filter(function (k) { return k !== 'formType'; })
    .map(function (k) { return k + ': ' + data[k]; });

  MailApp.sendEmail(NOTIFY_EMAIL, subject, lines.join('\n'));
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
