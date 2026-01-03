
export function useConvertValue(csv: string): string {

    const rows = csv.split('\n').filter(row=> row.trim() !== '');
    if(rows.length === 0) return '';

    const headers = rows[0].split(',').filter(head => head.trim() !== '');

    const ans = [];

    for(let i=1; i<rows.length; i++) {

        const value = rows[i].split(',').filter(val => val.trim() != '');
        const obj: {[key: string]: string} = {};

        headers.forEach((header, index) => {
            obj[header] = value[index] ?? '';
        })
        ans.push(obj);
    }
  return JSON.stringify(ans, null, 2);
}