"use strict";
class ConstVal {
}
// parameters of drugs
ConstVal.MU0 = [[75, 8], [67, 5], [43, 6], [30, 10]];
ConstVal.LOG_SIGMA0 = [[2.2, 0.4], [2.4, 0.4], [2.4, 0.4], [2.5, 0.5]];
ConstVal.ADR = 0.7;
ConstVal.MU0_adj = 0;
ConstVal.D_MU0 = [0, 4];
// image
ConstVal.path_to_fig = "./fig/fig_back.png";
ConstVal.CENTERS = [[218, 100], [289, 100], [360, 100],
    [218, 150], [289, 150], [360, 150]];
ConstVal.Rnormal = 20;
ConstVal.RnormalCenter = 3;
ConstVal.Rrespond = 18;
ConstVal.RrespondCenter = 2;
// threshold of probability not to respond
ConstVal.ProbThreshold = 0.05;
// name of local strage
ConstVal.storageNameSpeed = "SimLaSpeed";
ConstVal.storageNameLang = "SimLaLang";
