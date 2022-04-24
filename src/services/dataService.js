import axios from 'axios';
import moment from 'moment';

async function getDataFromBackend() {
    return await axios.get('https://swdapi.ddns.net:8090/data/ttntest')
}

function mappingNumberofRecordByMonth(records) {
    let mappedRecords = []
      for (let i = 0; i < 31; i++) {
        mappedRecords[i] = {
          dayString: `${i + 1} ${moment().year(2020).month(6).date(i + 1).format('dd')}`,
          recordAmount: 0,
        }
      }
      for (let i = 0; i < records.length; i++) {
        let momentDate = moment(records[i].timestamp)
        mappedRecords[momentDate.date() - 1].recordAmount += 1
      }
      return mappedRecords
}

export {
    getDataFromBackend,
    mappingNumberofRecordByMonth
}