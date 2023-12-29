import * as ConstVal from "./ConstVal";
import { randMultiNorm } from "./RandMultiNorm";
import { random_norm } from "./MyStat";

export default class Parameter {
    private param;
    private storageName: string;

    constructor() {
        this.param = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
        this.storageName = "SimLaParam";

        // restore parameters if data is saved in localStorage
        const storage = this.getStorage();
        if (Object.keys(storage).length > 0) {
            this.param = storage.param;
        } else {
            this.setInitParameter();
        }
    }

    setInitParameter() {
        // individual difference
        const d = ConstVal.MU0_adj +
                  random_norm(ConstVal.D_MU0[0], ConstVal.D_MU0[1]);

        // values of saline are 0
        // set parameters for Pro, Lid, Mep, Bup
        //   with random generator following to multinormal distribution

        // get pre-calculated values
        const n_rand= randMultiNorm.length;
        const rand1 = randMultiNorm[Math.floor(Math.random() * n_rand) + 1];
        const rand2 = randMultiNorm[Math.floor(Math.random() * n_rand) + 1];

        const n = 6;
        for (let i = 1; i < n - 1; i++) {
            this.param[i][0] = ConstVal.MU0[i-1][0] + d +
                               ConstVal.MU0[i-1][1] * rand1[i];
            this.param[i][1] = Math.exp(
                ConstVal.LOG_SIGMA0[i-1][0] +
                ConstVal.LOG_SIGMA0[i-1][1] * rand2[i]
            );
        }
        // Lid + Adr
        this.param[n-1][0] = this.param[2][0]
        this.param[n-1][1] = this.param[2][1]
        this.param[n-1][2] = ConstVal.ADR

        this.setStorage();
    }

    get getParameter() {
        return this.param
    }

    //////////////////////////////////
    // localStrage
    //////////////////////////////////
    // save data to localStorage
    setStorage() {
        localStorage.setItem(this.storageName, JSON.stringify({
            param: this.param
        }));
    }

    // get data in localStorage
    getStorage() {
        const params = localStorage.getItem(this.storageName);
        return params ? JSON.parse(params) : {};
    }

    // delete data in localStorage
    clearStorage() {
        localStorage.removeItem(this.storageName);
    }
}

