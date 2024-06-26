import { homepageTravels } from "../helpers/homepageTravels";

describe('number of travels depends on window width', () => {
   it('if window width equals more than 2350 there will be 4 travels on homepage', () => {
      expect(homepageTravels(2351)).toBe(4)
   })
   it('if window width equals less than 2350 but more than 1650 there will be 3 travels on homepage', () => {
      expect(homepageTravels(1700)).toBe(3)
   })
   it('if window width equals less than 1650 but more than 768 there will be 3 travels on homepage', () => {
      expect(homepageTravels(900)).toBe(2)
   })
   it('if window width equals less than 768 there will be 1 travel on homepage', () => {
      expect(homepageTravels(700)).toBe(1)
   })
})

