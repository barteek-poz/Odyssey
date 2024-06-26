import { dateFormat } from "../helpers/dateFormat";

test('dateFormat changes date format', () => {
    expect(dateFormat(['12-02-2022', '13-02-2022'])).toBe('12/02/2022 - 13/02/2022')
})