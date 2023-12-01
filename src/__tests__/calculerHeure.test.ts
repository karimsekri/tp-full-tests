import { describe, expect, test } from 'vitest'
import { calculerHeureString, calculerHeureInt } from '../calculerHeure'

describe('calculerHeure', () => {
    describe('calculerHeureInt', () => {
        test('calculerHeureInt (1, 1, 1)', () => {
            expect(calculerHeureInt(1, 1, 1)).toEqual(0) 
        });

        test('calculerHeureInt(1, 1, 2)', () => {
            expect(calculerHeureInt(1, 1, 2)).toEqual(5) //(1+2)-2+2 = 3
        });

        test('calculerHeureInt (1, 2, 2)', () => {
            expect(calculerHeureInt(1, 2, 2)).toEqual(6) 
        });

        test('calculerHeureInt (2, 2, 2)', () => {
            expect(calculerHeureInt(2, 2, 2)).toEqual(6)
        });

        test('calculerHeureInt (1, 2, 1)', () => {
            expect(calculerHeureInt(1, 2, 1)).toEqual(0) //(1+1)-2
        });


        test('calculerHeureInt (2, 1, 1)', () => {
            expect(calculerHeureInt(2, 1, 1)).toEqual(1.5) //((2+1)/2)
        });

        test('calculerHeureInt (2, 2, 1)', () => {
            expect(calculerHeureInt(2, 2, 1)).toEqual(1.5) 
        });
       
        test('calculerHeureInt (2, 1, 2)', () => {
            expect(calculerHeureInt(2, 1, 2)).toEqual(4) 
        });

    });

    describe('calculerHeureString', () => {
        test('calculerHeureString (0)', () => {
            expect(calculerHeureString(0)).toBe("mortin") 
        });

        test('calculerHeureString (4)', () => {
            expect(calculerHeureString(4)).toBe("soirning") 
        });

        test('calculerHeureString (5)', () => {
            expect(calculerHeureString(5)).toBe("nuight") 
        });

        test('calculerHeureString (6)', () => {
            expect(calculerHeureString(6)).toBe("nuight") 
        });

        test('calculerHeureString (1.5)', () => {
            expect(calculerHeureString(1.5)).toBe("aprenoon") 
        });
    });

});