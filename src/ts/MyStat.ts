//////////////////////////////////
// statistical functions
//////////////////////////////////

export default class MyStat {
    // logistic function
    static inv_logit(x :number): number {
        return 1 / (1 + Math.exp(-x))
    }

    static inv_logit_upper(x: number): number {
      return 1 / (1 + Math.exp(x))
    }

    // approximate phi function
    static phi_approx(x: number): number {
        return this.inv_logit(0.07056 * Math.pow(x, 3) + 1.5976 * x)
    }

    static phi_approx_upper(x: number): number {
        return this.inv_logit_upper(0.07056 * Math.pow(x, 3) + 1.5976 * x)
    }

    // Random generation according to standard normal distribution
    // Box-Muller transform
    // https://qiita.com/kyonsi/items/579a61edab661f27e3a5
    static random_norm(mu = 0, sd = 1): number {
        let x = Math.random();
        let y = Math.random();
        let z1 = Math.sqrt(-2 * Math.log(x)) * Math.cos(2 * Math.PI  * y);
        // let z2 = Math.sqrt(-2 * Math.log(x)) * Math.sin(2 * Math.PI  * y);
        return mu + z1 * sd;
    }
}

