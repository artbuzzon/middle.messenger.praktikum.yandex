import {INPUT_TYPES} from './consts';

const REG_EXP = {
    [INPUT_TYPES.PASS]: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Minimum eight characters, at least one letter and one number
    // eslint-disable-next-line
    [INPUT_TYPES.EMAIL]: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    [INPUT_TYPES.TEXT]: /^(?=.{5,20}$).*/
};


class Valuyadator {

    static validate(value: string, type: string): boolean {
        return REG_EXP[type].test(value);
    }
}

export default Valuyadator;
